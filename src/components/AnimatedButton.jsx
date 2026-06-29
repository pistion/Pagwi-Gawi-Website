import { Link } from 'react-router-dom';

export default function AnimatedButton({ to, href, children, style = {} }) {
  const Tag = to ? Link : 'a';
  const linkProps = to ? { to } : { href: href || '#' };

  return (
    <Tag {...linkProps} className="pg-anim-btn" style={style}>
      <div className="pg-anim-btn__line" />
      <div className="pg-anim-btn__line" />
      <span className="pg-anim-btn__text">{children}</span>
      <div className="pg-anim-btn__drow1" />
      <div className="pg-anim-btn__drow2" />
    </Tag>
  );
}
