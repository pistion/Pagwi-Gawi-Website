import { Link } from 'react-router-dom';

const variants = {
  primary: 'pg-btn pg-btn--primary',
  dark: 'pg-btn pg-btn--dark',
  outline: 'pg-btn pg-btn--outline',
};

const sizes = {
  default: '',
  sm: 'pg-btn--sm',
  full: 'pg-btn--full',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'default',
  to,
  href,
  type = 'button',
  className = '',
  onClick,
  ...props
}) {
  const classes = `${variants[variant]} ${sizes[size]} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}