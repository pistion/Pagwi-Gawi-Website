import ImagePlaceholder from '../components/ImagePlaceholder';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';
import { aboutValues, aboutStory, teamMembers } from '../data/siteData';
import { images } from '../data/images';

export default function About() {
  return (
    <>
      <PageHero
        id="about-page-hero-heading"
        eyebrow="Who we are"
        title="About Pagwi Gawi"
        subtitle="A community-first events and services organisation built across sport, faith and music."
      />

      <section className="pg-about-hero-3col" aria-labelledby="about-hero-heading">
        <div className="pg-about-hero-3col__text" style={{ animation: 'pgFade 0.7s ease both' }}>
          <span className="pg-eyebrow">About us</span>
          <h1 id="about-hero-heading" className="pg-about-hero__title">
            Built on community, run with purpose.
          </h1>
          <p className="pg-about-hero__text">
            Pagwi Gawi Events and Services exists to bring people together — across sport,
            faith and music — with professional delivery and a genuine heart for the community.
          </p>
        </div>

        <div className="pg-about-hero-3col__image">
          <ImagePlaceholder
            src={images.aboutFounder}
            alt="Brian Singut Jr — Founder & Director"
            label="Founder photo"
            ratio="4/5"
            shape="rounded-lg"
          />
        </div>

        <div />
      </section>

      <section className="pg-section pg-section--sand pg-section--compact" aria-label="Mission, promise and values">
        <div className="pg-container">
          <div className="pg-grid-3">
            {aboutValues.map((card) => (
              <div key={card.title} className="pg-card--info">
                <div className="pg-card__title pg-card__title--lg">{card.title}</div>
                <p className="pg-card__text pg-card__text--md">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pg-story" aria-labelledby="story-heading">
        <ImagePlaceholder
          src={images.aboutStory}
          alt="Community members gathered together outdoors"
          label="A photo that tells your story"
          ratio="1/1"
          shape="rounded-lg"
        />
        <div>
          <span className="pg-eyebrow">Our story</span>
          <h2 id="story-heading" className="pg-story__title">
            Where we started
          </h2>
          {aboutStory.map((paragraph, index) => (
            <p key={index} className="pg-story__text">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="pg-section pg-section--dark" aria-labelledby="team-heading">
        <div className="pg-container">
          <div style={{ textAlign: 'center' }}>
            <span className="pg-eyebrow">Our team</span>
            <h2 id="team-heading" className="pg-heading" style={{ fontSize: '38px', marginTop: '12px', color: 'var(--pg-cream)' }}>
              The people behind the events
            </h2>
          </div>
          <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px' }}>
            {teamMembers.map((member) => (
              <div key={member.role} className="pg-team-card" style={{ maxWidth: '200px', width: '100%' }}>
                <ImagePlaceholder
                  src={member.image}
                  alt={`${member.role} portrait`}
                  label="Team photo"
                  shape="circle"
                  size="circle-lg"
                />
                <div className="pg-team-card__name" style={{ color: 'var(--pg-cream)', textAlign: 'center', marginTop: '16px' }}>
                  {member.name}
                </div>
                <div className="pg-team-card__role" style={{ textAlign: 'center' }}>{member.role}</div>
              </div>
            ))}
            <blockquote className="pg-about-quote pg-about-quote--dark" style={{ maxWidth: '560px', textAlign: 'center' }}>
              <div className="pg-about-quote__mark">"</div>
              <p className="pg-about-quote__text">
                Every event we produce is a chance to strengthen the people and the community behind it.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's build something together"
        text="Register for updates or reach out about your next event."
        buttonText="Get in touch"
        buttonTo="/contact"
      />
    </>
  );
}