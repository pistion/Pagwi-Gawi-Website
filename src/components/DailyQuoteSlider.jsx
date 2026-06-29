import { useState, useEffect, useCallback } from 'react';
import { dailyQuotes } from '../data/siteData';

export default function DailyQuoteSlider() {
  const todayIndex = new Date().getDay() % dailyQuotes.length;
  const [activeIndex, setActiveIndex] = useState(todayIndex);

  const goTo = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % dailyQuotes.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const active = dailyQuotes[activeIndex];

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
        </footer>
      </blockquote>
      <div className="pg-testimonial__dots" role="tablist" aria-label="Quote navigation">
        {dailyQuotes.map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Show quote ${index + 1} of ${dailyQuotes.length}`}
            className={`pg-testimonial__dot ${index === activeIndex ? 'pg-testimonial__dot--active' : ''}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
