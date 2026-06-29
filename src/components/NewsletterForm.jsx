import { useState } from 'react';
import Button from './Button';

export default function NewsletterForm({
  inline = false,
  compact = false,
  centered = false,
  buttonVariant = 'primary',
  buttonText = 'Sign up',
  note,
}) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 4000);
  };

  const formClass = centered
    ? 'pg-newsletter-cta__form'
    : inline
      ? 'pg-form__inline'
      : 'pg-form__inline';

  return (
    <div>
      <form className={formClass} onSubmit={handleSubmit} noValidate>
        <label htmlFor={compact ? 'newsletter-email-compact' : 'newsletter-email'} className="visually-hidden">
          Email address
        </label>
        <input
          id={compact ? 'newsletter-email-compact' : 'newsletter-email'}
          type="email"
          className={`pg-form__input ${inline || centered ? 'pg-form__input--pill' : ''}`}
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email address for newsletter"
          required
        />
        <Button type="submit" variant={buttonVariant} size={compact ? 'sm' : 'default'}>
          {buttonText}
        </Button>
      </form>
      {note && <p className="pg-form__note">{note}</p>}
      {submitted && (
        <p className="pg-form__success" role="status">
          Thanks! You're registered for updates.
        </p>
      )}
    </div>
  );
}