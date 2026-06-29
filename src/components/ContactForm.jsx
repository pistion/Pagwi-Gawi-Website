import { useState } from 'react';
import Button from './Button';
import { serviceOptions } from '../data/siteData';

export default function ContactForm({
  variant = 'card',
  showFullName = false,
  showPhone = false,
  title = 'Send us a message',
}) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      firstName: '',
      lastName: '',
      fullName: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const formClass =
    variant === 'white' ? 'pg-form pg-form--white' : 'pg-form pg-form--card';

  return (
    <form className={formClass} onSubmit={handleSubmit} noValidate>
      <h3 className={`pg-form__title ${variant === 'white' ? 'pg-form__title--lg' : ''}`}>
        {title}
      </h3>

      {submitted && (
        <p className="pg-form__success" role="status">
          Message sent! We'll be in touch soon.
        </p>
      )}

      {showFullName ? (
        <div className="pg-form__field">
          <label htmlFor="fullName" className="pg-form__label">
            Full name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            className="pg-form__input"
            placeholder="Full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
      ) : (
        <div className="pg-form__row">
          <div className="pg-form__field">
            <label htmlFor="firstName" className="pg-form__label">
              First name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className="pg-form__input"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="pg-form__field">
            <label htmlFor="lastName" className="pg-form__label">
              Last name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="pg-form__input"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      )}

      <div className="pg-form__field">
        <label htmlFor="email" className="pg-form__label">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="pg-form__input"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      {showPhone && (
        <div className="pg-form__field">
          <label htmlFor="phone" className="pg-form__label">
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="pg-form__input"
            placeholder="Phone (optional)"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      )}

      <div className="pg-form__field">
        <label htmlFor="service" className="pg-form__label">
          Service
        </label>
        <select
          id="service"
          name="service"
          className="pg-form__select"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">What can we help with?</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="pg-form__field">
        <label htmlFor="message" className="pg-form__label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="pg-form__textarea"
          placeholder="Tell us about your event"
          rows={showPhone ? 5 : 4}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <Button
        type="submit"
        variant={variant === 'white' ? 'primary' : 'dark'}
        size="full"
      >
        Send message
      </Button>
    </form>
  );
}