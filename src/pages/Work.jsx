import ImagePlaceholder from '../components/ImagePlaceholder';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';
import { workProjects } from '../data/siteData';

export default function Work() {
  return (
    <>
      <PageHero
        id="work-hero-heading"
        eyebrow="Portfolio"
        title="Our Work"
        subtitle="A selection of events we've produced across our communities. Drop in your own photos to make this gallery yours."
      />

      <section className="pg-container" style={{ padding: '64px 32px 88px' }} aria-label="Portfolio gallery">
        <div className="pg-grid-3">
          {workProjects.map((project) => (
            <article key={project.title} className="pg-work-card">
              <ImagePlaceholder
                src={project.image}
                alt={project.title}
                label={project.imageLabel}
                ratio="1/1"
                shape="rounded"
                contain={project.image.includes('Praise') || project.image.includes('Community') || project.image.includes('Youth') || project.image.includes('Summer') || project.image.includes('Annual') || project.image.includes('Regional')}
              />
              <h2 className="pg-work-card__title">{project.title}</h2>
              <div className="pg-work-card__category">{project.category}</div>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        title="Want to be our next success story?"
        text="Let's plan something memorable together."
        buttonText="Start a project"
        buttonTo="/contact"
      />
    </>
  );
}
