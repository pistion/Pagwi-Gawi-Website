import ParticleCanvas from './ParticleCanvas';

export default function PageHero({ id, eyebrow, title, subtitle, compact = false }) {
  return (
    <section
      className={`pg-page-hero${compact ? ' pg-page-hero--compact' : ''}`}
      aria-labelledby={id}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <ParticleCanvas />
      <div className="pg-page-hero__inner" style={{ position: 'relative', zIndex: 1 }}>
        <span className="pg-eyebrow">{eyebrow}</span>
        <h1 id={id} className="pg-page-hero__title">{title}</h1>
        {subtitle && <p className="pg-page-hero__subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
