import NewsletterForm from '../components/NewsletterForm';
import ContactForm from '../components/ContactForm';
import PageHero from '../components/PageHero';
import { brand } from '../data/siteData';

export default function Contact() {
  return (
    <>
      <PageHero
        id="contact-hero-heading"
        eyebrow="Get in touch"
        title="Contact Us"
        subtitle="Planning an event, or want to register for updates? We'd love to hear from you."
        compact
      />

      <section className="pg-container pg-split pg-split--start" style={{ padding: '72px 32px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 className="pg-heading" style={{ fontSize: '30px', marginBottom: '8px' }}>
            Let's talk
          </h2>
          <p className="pg-body" style={{ marginBottom: '28px' }}>
            Reach us directly, or use the form and we'll get back to you within two business days.
          </p>
          <div className="pg-contact-info">
            <div className="pg-contact-info__item">
              <span className="pg-contact-info__icon" aria-hidden="true">
                @
              </span>
              <div>
                <div className="pg-contact-info__label">Email</div>
                <a href={`mailto:${brand.email}`} className="pg-contact-info__value">
                  {brand.email}
                </a>
              </div>
            </div>
            <div className="pg-contact-info__item">
              <span className="pg-contact-info__icon" aria-hidden="true">
                ☎
              </span>
              <div>
                <div className="pg-contact-info__label">Phone</div>
                <div className="pg-contact-info__value">{brand.phone}</div>
              </div>
            </div>
            <div className="pg-contact-info__item">
              <span className="pg-contact-info__icon" aria-hidden="true">
                ⌖
              </span>
              <div>
                <div className="pg-contact-info__label">Location</div>
                <div className="pg-contact-info__value">{brand.location}</div>
              </div>
            </div>
          </div>
          <div className="pg-newsletter-box" style={{ marginTop: '28px' }}>
            <div className="pg-newsletter-box__title">Register for updates</div>
            <p className="pg-newsletter-box__text">
              Newsletter signup — no spam, just the moments that matter.
            </p>
            <NewsletterForm compact buttonVariant="dark" buttonText="Sign up" />
          </div>
        </div>
        <ContactForm variant="white" showPhone />
      </section>
    </>
  );
}