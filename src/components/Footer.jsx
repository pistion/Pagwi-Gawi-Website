import { Link } from 'react-router-dom';
import Logo from './Logo';
import { brand } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="pg-footer">
      <div className="pg-footer__grid">
        <div>
          <Logo size="small" light />
          <p className="pg-footer__summary">{brand.summary}</p>
        </div>
        <div>
          <div className="pg-footer__heading">Explore</div>
          <div className="pg-footer__links">
            <Link to="/services" className="pg-footer__link">
              Services
            </Link>
            <Link to="/work" className="pg-footer__link">
              Work
            </Link>
            <Link to="/about" className="pg-footer__link">
              About
            </Link>
          </div>
        </div>
        <div>
          <div className="pg-footer__heading">Company</div>
          <div className="pg-footer__links">
            <Link to="/news" className="pg-footer__link">
              Blog & News
            </Link>
            <Link to="/about" className="pg-footer__link">
              Team
            </Link>
            <Link to="/contact" className="pg-footer__link">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <div className="pg-footer__heading">Get in touch</div>
          <div className="pg-footer__links">
            <span className="pg-footer__contact-item">
              <a href={`mailto:${brand.email}`} className="pg-footer__link">
                {brand.email}
              </a>
            </span>
            <span className="pg-footer__contact-item">{brand.phone}</span>
          </div>
        </div>
      </div>
      <div className="pg-footer__bottom">
        <span>&copy; 2026 Pagwi Gawi Events and Services. All rights reserved.</span>
        <span>{brand.taglineShort}</span>
      </div>
    </footer>
  );
}