import { Link } from 'react-router-dom';
import Button from '../components/Button';
import AnimatedButton from '../components/AnimatedButton';
import ImagePlaceholder from '../components/ImagePlaceholder';
import SectionHeading from '../components/SectionHeading';
import DailyQuoteSlider from '../components/DailyQuoteSlider';
import {
  brand,
  stats,
  servicesPreview,
  workProjects,
  teamMembers,
  newsArticles,
} from '../data/siteData';
import { images } from '../data/images';

export default function Home() {
  const recentWork = workProjects.slice(0, 3);
  const latestNews = newsArticles.slice(0, 3);

  return (
    <>
      <section className="pg-hero-cover" aria-labelledby="hero-heading">
        <img
          src={images.hero}
          alt="Golden landscape — Pagwi Gawi Events and Services"
          className="pg-hero-cover__bg"
        />
        <div className="pg-hero-cover__overlay" />
        <div className="pg-hero-cover__content">
          <span className="pg-eyebrow pg-eyebrow--line">{brand.taglineShort}</span>
          <h1 id="hero-heading" className="pg-hero-cover__title">
            Bringing communities together through events that matter.
          </h1>
          <p className="pg-hero-cover__text">
            Pagwi Gawi Events and Services plans, produces and powers gatherings across sport,
            faith and music — built to grow your community and your reach.
          </p>
          <div className="pg-hero-cover__actions">
            <AnimatedButton to="/contact">Register for Updates</AnimatedButton>
            <Button variant="outline" to="/services">
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      <section className="pg-section pg-section--dark" aria-labelledby="services-preview-heading">
<div className="pg-container">
          <span className="pg-eyebrow" style={{ color: '#c9a87a' }}>What we do</span>
          <SectionHeading
            title="Five services, one standard."
            aside="Whatever the occasion, we handle the logistics, the people and the experience end to end."
            dark
          />
          <div className="pg-services-grid">
            {servicesPreview.map((service) =>
              service.featured ? (
                <div key={service.number} className="pg-service-card pg-service-card--featured">
                  <div>
                    <h3 className="pg-service-card__title">{service.title}</h3>
                    <p className="pg-service-card__text">{service.description}</p>
                  </div>
                  <Button variant="dark" size="sm" to="/contact">
                    Partner with us
                  </Button>
                </div>
              ) : (
                <div key={service.number} className="pg-service-card">
                  <h3 className="pg-service-card__title">{service.title}</h3>
                  <p className="pg-service-card__text">{service.description}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="pg-section" aria-labelledby="work-preview-heading">
        <div className="pg-container">
          <SectionHeading
            eyebrow="Portfolio"
            title="Our services"
            subtitle="A selection of events we've produced. Drop in your own photos to make it yours."
            align="center"
          />
          <div className="pg-grid-3" style={{ marginTop: '48px' }}>
            {recentWork.map((project) => (
              <article key={project.title} className="pg-work-card">
                <ImagePlaceholder
                  src={project.image}
                  alt={project.title}
                  label={project.imageLabel}
                  ratio="1/1"
                  shape="rounded"
                />
                <h3 className="pg-work-card__title">{project.title}</h3>
                <div className="pg-work-card__category">{project.category}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pg-section pg-section--sand" aria-labelledby="about-preview-heading">
        <div className="pg-container pg-split pg-split--about" style={{ padding: 0 }}>
          <div className="pg-about-icon-card">
            <div className="pg-about-icon-card__img-wrap">
              <img src="/images/icon.jpg" alt="Pagwi Gawi logo" className="pg-about-icon-card__img" />
            </div>
            <div className="pg-about-icon-card__body">
              <div className="pg-about-icon-card__line" />
              <p className="pg-about-icon-card__tagline">Sports · Church · Music</p>
              <p className="pg-about-icon-card__sub">Bringing communities together since day one.</p>
            </div>
          </div>
          <div>
            <h2 className="pg-about-label">About us</h2>
            <h2 id="about-preview-heading" className="pg-heading" style={{ fontSize: '40px', marginTop: '12px' }}>
              Built on community, run with purpose.
            </h2>
            <p className="pg-body" style={{ marginTop: '20px', fontSize: '16px', lineHeight: 1.7 }}>
              Pagwi Gawi Events and Services exists to bring people together. We work across sport,
              faith and music to create experiences that strengthen the communities we serve —
              combining professional delivery with a genuine heart for the people in the room.
            </p>
            <div className="pg-grid-2" style={{ marginTop: '30px' }}>
              <div className="pg-card--cream">
                <div className="pg-card__title">Our mission</div>
                <p className="pg-card__text">
                  To build brand awareness for the causes and communities we partner with.
                </p>
              </div>
              <div className="pg-card--cream">
                <div className="pg-card__title">Our promise</div>
                <p className="pg-card__text">
                  Professional, reliable delivery — every event, every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pg-section pg-section--dark" aria-labelledby="why-partner-heading">
<div className="pg-container">
          <SectionHeading
            eyebrow="Why partner with us"
            title="Built to make your event matter."
            aside="We don't just manage events — we invest in the communities behind them."
            dark
          />
          <div className="pg-services-grid" style={{ marginTop: '44px' }}>
            <div className="pg-service-card pg-service-card--featured">
              <div>
                <h3 className="pg-service-card__title">Proven track record</h3>
                <p className="pg-service-card__text">Over 120 events delivered across sport, faith and music — each one executed to the same professional standard.</p>
              </div>
            </div>
            <div className="pg-service-card">
              <h3 className="pg-service-card__title">End-to-end delivery</h3>
              <p className="pg-service-card__text">From planning and logistics to on-the-day production, we handle it all so you can focus on your people.</p>
            </div>
            <div className="pg-service-card">
              <h3 className="pg-service-card__title">Community first</h3>
              <p className="pg-service-card__text">Everything we do is designed to strengthen the community you serve — not just fill a programme.</p>
            </div>
            <div className="pg-service-card">
              <h3 className="pg-service-card__title">Cross-sector expertise</h3>
              <p className="pg-service-card__text">Sports tournaments, church conventions, music festivals — our experience spans every type of gathering.</p>
            </div>
            <div className="pg-service-card">
              <h3 className="pg-service-card__title">Reliable partnerships</h3>
              <p className="pg-service-card__text">Partners come back because we do what we say. Clear communication, no hidden costs, a team that shows up ready.</p>
            </div>
            <div className="pg-service-card">
              <h3 className="pg-service-card__title">Scalable for any size</h3>
              <p className="pg-service-card__text">Local fixture or large-scale festival — our process scales to fit your vision and your budget.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pg-section" aria-labelledby="quotes-heading">
        <div className="pg-container">
          <SectionHeading
            eyebrow="Daily Quote"
            title="Words that move communities."
            align="center"
          />
          <DailyQuoteSlider />
        </div>
      </section>

      <section className="pg-section pg-section--dark" aria-labelledby="team-preview-heading">
<div className="pg-container">
          <SectionHeading
            eyebrow="Founder"
            title="The person behind the events"
            align="center"
            dark
          />
          <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '36px' }}>
            {teamMembers.map((member) => (
              <div key={member.role} className="pg-team-card" style={{ maxWidth: '200px' }}>
                <ImagePlaceholder
                  src={member.image}
                  alt={`${member.role} portrait`}
                  label="Founder photo"
                  shape="circle"
                  size="circle"
                />
                <div className="pg-team-card__name" style={{ textAlign: 'center', marginTop: '16px' }}>{member.name}</div>
                <div className="pg-team-card__role" style={{ textAlign: 'center' }}>{member.role}</div>
              </div>
            ))}
            <figure className="pg-founder-quote">
              <blockquote className="pg-founder-quote__text">
                "We don't just organise events — we build moments that people carry with them long after the day is done. Every community deserves to feel seen, celebrated and connected."
              </blockquote>
              <figcaption className="pg-founder-quote__attr">— Brian Singut Jr, Founder &amp; Director</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="pg-section" aria-labelledby="news-preview-heading">
        <div className="pg-container">
          <div className="pg-section-heading pg-section-heading--row">
            <div>
              <span className="pg-eyebrow">Blog & News</span>
              <h2 id="news-preview-heading" className="pg-section-heading__title">
                Latest updates
              </h2>
            </div>
            <Link to="/news" className="pg-link">
              View all &rarr;
            </Link>
          </div>
          <div className="pg-grid-3" style={{ marginTop: '44px' }}>
            {latestNews.map((article) => (
              <article key={article.title}>
                <ImagePlaceholder
                  src={article.image}
                  alt={article.title}
                  label="Article image"
                  ratio="16/10"
                  shape="rounded"
                />
                <div className="pg-category" style={{ marginTop: '16px' }}>
                  {article.category}
                </div>
                <h3 className="pg-article-card__title">{article.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pg-section pg-section--dark" aria-labelledby="contact-preview-heading">
<div className="pg-container" style={{ textAlign: 'center', maxWidth: '680px' }}>
          <span className="pg-eyebrow">Stay connected</span>
          <h2 id="contact-preview-heading" className="pg-section-heading__title" style={{ color: 'var(--pg-cream)', marginTop: '12px' }}>
            Have an event in mind? Let's talk.
          </h2>
          <p className="pg-body" style={{ marginTop: '18px', color: 'var(--pg-footer-text)' }}>
            Whether you're planning a sports fixture, church convention or music event — we'd love to hear from you. Reach out and let's make it happen.
          </p>
          <div style={{ marginTop: '36px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" to="/contact">
              Send us a message
            </Button>
            <Button variant="outline" to="/services" style={{ color: '#fff', borderColor: 'var(--pg-gold)' }}>
              Explore services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}