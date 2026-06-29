function ImageIcon() {
  return (
    <svg
      className="pg-image-placeholder__icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" stroke="none" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );
}

const ratioClasses = {
  '4/5': 'pg-image-placeholder--ratio-4-5',
  '5/6': 'pg-image-placeholder--ratio-5-6',
  '4/3': 'pg-image-placeholder--ratio-4-3',
  '1/1': 'pg-image-placeholder--ratio-1-1',
  '16/10': 'pg-image-placeholder--ratio-16-10',
};

const shapeClasses = {
  rounded: 'pg-image-placeholder--rounded',
  'rounded-lg': 'pg-image-placeholder--rounded-lg',
  circle: 'pg-image-placeholder--circle',
};

const sizeClasses = {
  circle: 'pg-image-placeholder--fixed-circle',
  'circle-lg': 'pg-image-placeholder--fixed-circle-lg',
};

export default function ImagePlaceholder({
  src,
  alt,
  label,
  ratio,
  shape = 'rounded',
  size,
  contain = false,
  className = '',
}) {
  const classes = [
    src ? 'pg-image' : 'pg-image-placeholder',
    ratio ? ratioClasses[ratio] : '',
    shapeClasses[shape] || '',
    size ? sizeClasses[size] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (src) {
    return (
      <div className={classes}>
        <img
          src={src}
          alt={alt || label || ''}
          className="pg-image__img"
          style={contain ? { objectFit: 'contain', background: '#fff' } : undefined}
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div
      className={classes}
      role="img"
      aria-label={label || 'Image placeholder'}
    >
      <ImageIcon />
      {label && <span className="pg-image-placeholder__label">{label}</span>}
    </div>
  );
}