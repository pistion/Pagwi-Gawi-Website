export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  aside,
  dark = false,
}) {
  const wrapperClass = [
    'pg-section-heading',
    align === 'center' ? 'pg-section-heading--center' : '',
    aside ? 'pg-section-heading--row' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClass}>
      <div>
        {eyebrow && (
          <span className={`pg-eyebrow ${dark ? '' : ''}`}>{eyebrow}</span>
        )}
        {title && <h2 className="pg-section-heading__title">{title}</h2>}
        {subtitle && align === 'center' && (
          <p className="pg-section-heading__subtitle">{subtitle}</p>
        )}
      </div>
      {aside && <p className="pg-section-heading__aside">{aside}</p>}
    </div>
  );
}