import { portfolio } from "@/data/portfolio";

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

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1" />
      <path d="M3 7h18v12H3z" />
      <path d="M3 12h18" />
    </svg>
  );
}

const contactItems = [
  {
    label: "Email",
    value: portfolio.email,
    href: `mailto:${portfolio.email}`,
    icon: <MailIcon />,
  },
  {
    label: "Phone",
    value: portfolio.phone,
    href: `tel:${portfolio.phone}`,
    icon: <PhoneIcon />,
  },
  {
    label: "Location",
    value: portfolio.location,
    href: null,
    icon: <LocationIcon />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact-premium-section">
      <div className="container">
        <div className="contact-premium-card soft-card">
          <div className="contact-left">
            <span className="badge">Contact</span>

            <h2>
              Let’s connect for{" "}
              <span className="gradient-text">
                HR leadership & people operations.
              </span>
            </h2>

            <p>
              Available for HR operations, recruitment, payroll, compliance,
              employee lifecycle management and people-focused HR opportunities.
            </p>

            <div className="contact-actions">
              <a href={`mailto:${portfolio.email}`} className="btn-primary">
                Email Anita
              </a>

              <a href={`tel:${portfolio.phone}`} className="btn-secondary">
                Call Now
              </a>

              <a
                href="/anita-pal-resume.pdf"
                download
                className="btn-secondary"
              >
                Download Resume
              </a>
            </div>

            <div className="contact-availability">
              <span className="contact-availability-icon">
                <BriefcaseIcon />
              </span>

              <div>
                <h3>Open to HR opportunities</h3>
                <p>
                  Suitable for roles in HR operations, employee relations,
                  recruitment coordination, payroll and compliance management.
                </p>
              </div>
            </div>
          </div>

          <div className="contact-right">
            {contactItems.map((item) => {
              const content = (
                <div className="contact-info-card premium-contact-info-card">
                  <span className="contact-info-icon">{item.icon}</span>

                  <div>
                    <p className="contact-info-label">{item.label}</p>
                    <p className="contact-info-value">{item.value}</p>
                  </div>
                </div>
              );

              return item.href ? (
                <a key={item.label} href={item.href}>
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}

            <div className="contact-mini-profile">
              <div className="contact-mini-avatar">AP</div>

              <div>
                <h3>{portfolio.name}</h3>
                <p>{portfolio.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}