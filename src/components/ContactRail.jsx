import { useEffect, useRef, useCallback } from 'react';

const IDLE_MS = 3 * 60 * 1000;

export default function ContactRail() {
  const railRef = useRef(null);
  const timerRef = useRef(null);
  const collapsedRef = useRef(false);

  const collapse = useCallback(() => {
    if (collapsedRef.current) return;
    collapsedRef.current = true;
    railRef.current?.classList.add('contact-rail--collapsed');
  }, []);

  const expand = useCallback(() => {
    if (!collapsedRef.current) return;
    collapsedRef.current = false;
    railRef.current?.classList.remove('contact-rail--collapsed');
    resetTimer();
  }, []);

  const resetTimer = useCallback(() => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(collapse, IDLE_MS);
  }, [collapse]);

  useEffect(() => {
    const events = ['mousemove', 'keydown', 'pointerdown', 'scroll', 'touchstart'];
    const onActivity = () => {
      if (collapsedRef.current) return;
      resetTimer();
    };
    events.forEach((e) => window.addEventListener(e, onActivity, { passive: true }));
    resetTimer();
    return () => {
      events.forEach((e) => window.removeEventListener(e, onActivity));
      clearTimeout(timerRef.current);
    };
  }, [resetTimer]);

  return (
    <aside className="contact-rail" ref={railRef} aria-label="Contact links">
      <a
        className="contact-rail__link"
        href="mailto:hello@pagwigawi.com"
        aria-label="Email us"
        style={{ '--i': 0 }}
      >
        <i className="fa-solid fa-envelope" aria-hidden="true" />
      </a>
      <a
        className="contact-rail__link"
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        style={{ '--i': 1 }}
      >
        <i className="fa-brands fa-facebook-f" aria-hidden="true" />
      </a>
      <a
        className="contact-rail__link"
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        style={{ '--i': 2 }}
      >
        <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
      </a>
      <button
        className="contact-rail__toggle"
        aria-label="Show contact links"
        onClick={expand}
      >
        ›
      </button>
    </aside>
  );
}
