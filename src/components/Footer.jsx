import Link from "next/link";
import { portfolio } from "@/data/portfolio";

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.4 8h4.2v14H.4V8zm7.1 0h4v1.9h.1c.6-1.1 2-2.3 4.1-2.3 4.4 0 5.2 2.9 5.2 6.7V22h-4.2v-6.8c0-1.6 0-3.7-2.3-3.7s-2.6 1.8-2.6 3.6V22H7.5V8z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.6a2 2 0 0 1-.45 2.11L9 10.67a16 16 0 0 0 4.33 4.33l1.24-1.24a2 2 0 0 1 2.11-.45c.83.3 1.7.51 2.6.63A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path d="M12 19V5" />
      <path d="m5 12 7-7 7 7" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="container">
        <div className="portfolio-footer-inner">
          <Link href="/" className="portfolio-footer-brand">
            <span className="portfolio-footer-logo">AP</span>

            <div>
              <h3>{portfolio.name}</h3>
              <p>{portfolio.role}</p>
            </div>
          </Link>

          <p className="portfolio-footer-copy">
            © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
          </p>

          <div className="portfolio-footer-actions">
            <a
              href={`mailto:${portfolio.email}`}
              className="portfolio-social-link"
              aria-label="Email"
            >
              <MailIcon />
            </a>

            <a
              href={`tel:${portfolio.phone}`}
              className="portfolio-social-link"
              aria-label="Phone"
            >
              <PhoneIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/anita-p-ba145b126"
              target="_blank"
              rel="noreferrer"
              className="portfolio-social-link"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>

            <a href="#" className="portfolio-scroll-top" aria-label="Back to top">
              <ArrowUpIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}