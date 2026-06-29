import { useEffect, useRef } from 'react';

const NODE_COUNT = 38;
const MAX_DIST   = 280;
const SPEED      = 0.12;

// Light source: upper-right at 45°
const LIGHT_X = 0.82;
const LIGHT_Y = 0.04;

function rand(min, max) { return Math.random() * (max - min) + min; }
function lerp(a, b, t)  { return a + (b - a) * t; }

export default function ParticleCanvas({ className }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let raf;
    let nodes = [];

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x:  rand(0, canvas.width),
        y:  rand(0, canvas.height),
        vx: rand(-SPEED, SPEED),
        vy: rand(-SPEED, SPEED),
        r:  rand(1.2, 2.4),
      }));
    };

    const lightIntensity = (x, y) => {
      const lx = canvas.width  * LIGHT_X;
      const ly = canvas.height * LIGHT_Y;
      const maxD = Math.sqrt(canvas.width ** 2 + canvas.height ** 2);
      const dist = Math.sqrt((x - lx) ** 2 + (y - ly) ** 2);
      return Math.max(0.07, 1 - dist / (maxD * 0.78));
    };

    // dim amber → bright cream-gold based on light intensity
    const rgb = (t) => {
      const r = Math.round(lerp(120, 255, t));
      const g = Math.round(lerp(55,  210, t));
      const b = Math.round(lerp(5,   70,  t));
      return `${r},${g},${b}`;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ── soft angled light beam from upper-right ──
      const lx = canvas.width  * LIGHT_X;
      const ly = canvas.height * LIGHT_Y;
      const beamR = Math.hypot(canvas.width, canvas.height) * 0.7;
      const beam = ctx.createRadialGradient(lx, ly, 0, lx, ly, beamR);
      beam.addColorStop(0,   'rgba(255,195,40,0.09)');
      beam.addColorStop(0.35,'rgba(200,130,15,0.04)');
      beam.addColorStop(1,   'rgba(0,0,0,0)');
      ctx.fillStyle = beam;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > canvas.width)  a.vx *= -1;
        if (a.y < 0 || a.y > canvas.height) a.vy *= -1;

        const ia  = lightIntensity(a.x, a.y);
        const rgbA = rgb(ia);

        // ── draw lines ──
        for (let j = i + 1; j < nodes.length; j++) {
          const b    = nodes[j];
          const dx   = a.x - b.x;
          const dy   = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const ib      = lightIntensity(b.x, b.y);
            const rgbB    = rgb(ib);
            const prox    = 1 - dist / MAX_DIST;
            const alphaA  = prox * ia  * 0.65;
            const alphaB  = prox * ib  * 0.65;

            // gradient line: bright end near light, dim end away
            const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            grad.addColorStop(0, `rgba(${rgbA},${alphaA.toFixed(2)})`);
            grad.addColorStop(1, `rgba(${rgbB},${alphaB.toFixed(2)})`);

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = grad;
            ctx.lineWidth   = prox * Math.max(ia, ib) * 1.3;
            ctx.stroke();
          }
        }

        // ── node: halo on bright side, crisp dot always ──
        if (ia > 0.45) {
          const halo = ctx.createRadialGradient(a.x, a.y, 0, a.x, a.y, a.r * 5);
          halo.addColorStop(0, `rgba(${rgbA},${(ia * 0.45).toFixed(2)})`);
          halo.addColorStop(1, `rgba(${rgbA},0)`);
          ctx.beginPath();
          ctx.arc(a.x, a.y, a.r * 5, 0, Math.PI * 2);
          ctx.fillStyle = halo;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgbA},${(0.45 + ia * 0.55).toFixed(2)})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    const ro = new ResizeObserver(() => { resize(); init(); });
    ro.observe(canvas);
    resize();
    init();
    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: 0.72,
      }}
    />
  );
}
