import { Link } from 'react-router-dom';
import { brand } from '../data/siteData';

export default function Logo({ size = 'default', light = false }) {
  const imgSize = size === 'small' ? 38 : 48;

  return (
    <Link to="/" className="pg-logo" aria-label={`${brand.name} home`}>
      <img
        src="/images/icon.jpg"
        alt={brand.name}
        width={imgSize}
        height={imgSize}
        style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
      />
      <span className="pg-logo__text">
        <span className="pg-logo__name" style={light ? { color: 'var(--pg-cream)' } : undefined}>
          {brand.name}
        </span>
        <span className="pg-logo__tagline">{brand.tagline}</span>
      </span>
    </Link>
  );
}