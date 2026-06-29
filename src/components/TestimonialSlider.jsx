import { useState, useEffect, useCallback } from 'react';
import { testimonials } from '../data/siteData';

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const active = testimonials[activeIndex];

  return (
    <div className="pg-testimonial">
      <div className="pg-testimonial__quote-mark" aria-hidden="true">
        &ldquo;
      </div>
      <blockquote>
        <p className="pg-testimonial__text" key={activeIndex}>
          {active.quote}
        </p>
        <footer>
          <cite className="pg-testimonial__name">{active.name}</cite>
          <div className="pg-testimonial__role">{active.role}</div>
        </footer>
      </blockquote>
      <div className="pg-testimonial__dots" role="tablist" aria-label="Testimonial navigation">
        {testimonials.map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Show testimonial ${index + 1} of ${testimonials.length}`}
            className={`pg-testimonial__dot ${index === activeIndex ? 'pg-testimonial__dot--active' : ''}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
}