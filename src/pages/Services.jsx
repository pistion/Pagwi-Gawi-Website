import ImagePlaceholder from '../components/ImagePlaceholder';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import { servicesDetailed } from '../data/siteData';

export default function Services() {
  return (
    <>
      <PageHero
        id="services-hero-heading"
        eyebrow="What we do"
        title="Our Services"
        subtitle="Five core services across sport, faith and music — each delivered end to end with the same professional standard."
      />

      <section className="pg-container" style={{ padding: '80px 32px 40px' }} aria-label="Service details">
        <div className="pg-services-list">
          {servicesDetailed.map((service) => (
            <article
              key={service.number}
              className={`pg-service-row ${service.imageFirst ? 'pg-service-row--image-left' : 'pg-service-row--image-right'}`}
            >
              {service.imageFirst && (
                <div className="pg-service-row__image">
                  <ImagePlaceholder
                    src={service.image}
                    alt={service.title}
                    label={service.imageLabel}
                    ratio="4/3"
                    shape="rounded"
                  />
                </div>
              )}
              <div>
                <h2 className="pg-service-row__title">{service.title}</h2>
                <p className="pg-service-row__text">{service.description}</p>
                {service.deliverables.length > 0 && (
                  <ul className="pg-service-row__checklist" aria-label={`${service.title} deliverables`}>
                    {service.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                <div style={{ marginTop: '28px' }}>
                  <Button variant="primary" to="/contact">
                    Get in touch
                  </Button>
                </div>
              </div>
              {!service.imageFirst && (
                <div className="pg-service-row__image">
                  <ImagePlaceholder
                    src={service.image}
                    alt={service.title}
                    label={service.imageLabel}
                    ratio="4/3"
                    shape="rounded"
                  />
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="pg-services-banner" aria-hidden="true">
        <img
          src="/images/services-banner.jpg"
          alt="Pagwi Gawi — Events and Services"
          className="pg-services-banner__img"
        />
        <div className="pg-services-banner__overlay" />
      </section>

      <CTASection
        title="Have an event in mind?"
        text="Tell us what you're planning and we'll show you how we can help."
        buttonText="Get in touch"
        buttonTo="/contact"
      />
    </>
  );
}