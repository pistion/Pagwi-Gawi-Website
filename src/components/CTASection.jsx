import Button from './Button';

export default function CTASection({ title, text, buttonText, buttonTo = '/contact', className = '' }) {
  return (
    <section className={`pg-container ${className}`} style={{ padding: '40px 32px 88px' }}>
      <div className="pg-cta">
        <h2 className="pg-cta__title">{title}</h2>
        {text && <p className="pg-cta__text">{text}</p>}
        <Button variant="dark" to={buttonTo}>
          {buttonText}
        </Button>
      </div>
    </section>
  );
}
