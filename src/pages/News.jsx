import ImagePlaceholder from '../components/ImagePlaceholder';
import NewsletterForm from '../components/NewsletterForm';
import PageHero from '../components/PageHero';
import { newsArticles } from '../data/siteData';

const newsItems = newsArticles.slice(0, 3);
const blogItems = newsArticles.slice(3);

export default function News() {
  return (
    <>
      <PageHero
        id="news-hero-heading"
        eyebrow="News & Blog"
        title="Latest Updates"
        subtitle="News, stories and announcements from across our communities."
      />

      {/* ── NEWS ── */}
      <section className="pg-container" style={{ padding: '64px 32px 48px' }} aria-labelledby="news-heading">
        <h2 id="news-heading" className="pg-section-label">News</h2>
        <div className="pg-grid-3" style={{ marginTop: '32px' }}>
          {newsItems.map((article) => (
            <article key={article.title} className="pg-news-card">
              <div className="pg-news-card__img-wrap">
                <ImagePlaceholder
                  src={article.image}
                  alt={article.title}
                  label="Article image"
                  ratio="16/10"
                  shape="rounded"
                />
                <div className="pg-news-card__overlay">
                  <time className="pg-news-card__stamp">
                    <span className="pg-news-card__date">{article.date}</span>
                    <span className="pg-news-card__time">{article.time}</span>
                  </time>
                  <a href="#" className="pg-news-card__read">Read more →</a>
                </div>
              </div>
              <div className="pg-category" style={{ marginTop: '14px' }}>
                {article.category}
              </div>
              <h3 className="pg-article-card__title">{article.title}</h3>
              <p className="pg-article-card__summary">{article.summary}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── BLOGS ── */}
      <section className="pg-container" style={{ padding: '0 32px 80px' }} aria-labelledby="blog-heading">
        <h2 id="blog-heading" className="pg-section-label">Blog</h2>
        <ul className="pg-blog-list" style={{ marginTop: '24px' }}>
          {blogItems.map((article, index) => (
            <li key={article.title} className="pg-blog-list__item">
              <span className="pg-blog-list__num">{String(index + 1).padStart(2, '0')}</span>
              <span className="pg-blog-list__category">{article.category}</span>
              <div className="pg-blog-list__body">
                <h3 className="pg-blog-list__title">{article.title}</h3>
                <p className="pg-blog-list__snippet">{article.snippet}</p>
              </div>
              <time className="pg-blog-list__date" dateTime={article.date}>
                <span>{article.date}</span>
                <span>{article.time}</span>
              </time>
              <a href="#" className="pg-blog-list__arrow" aria-label={`Read ${article.title}`}>→</a>
            </li>
          ))}
        </ul>
      </section>

      <section className="pg-section pg-section--sand pg-section--compact" aria-labelledby="newsletter-heading">
        <div className="pg-container pg-newsletter-cta">
          <span className="pg-eyebrow">Stay connected</span>
          <h2 id="newsletter-heading" className="pg-newsletter-cta__title">
            Register for more updates
          </h2>
          <p className="pg-newsletter-cta__text">
            Get new posts and event announcements straight to your inbox.
          </p>
          <NewsletterForm centered />
        </div>
      </section>
    </>
  );
}
