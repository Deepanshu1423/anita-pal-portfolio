import { portfolio } from "@/data/portfolio";

const aboutHighlights = [
  {
    title: "People-Centric HR",
    text: "Strong experience in employee relations, grievance handling, engagement and creating a supportive workplace culture.",
  },
  {
    title: "Operational Excellence",
    text: "Hands-on expertise in payroll, attendance, HR documentation, statutory compliance, records and employee lifecycle management.",
  },
  {
    title: "Talent Strategy",
    text: "Skilled in recruitment, sourcing, onboarding, induction and improving the hiring process through structured coordination.",
  },
  {
    title: "HR Digitization",
    text: "Experienced in using HRIS and workplace tools like Keka HR, Razorpay, Orange HRM, UBI Attendance and ESSL.",
  },
];

const aboutStats = [
  { value: "7.5+", label: "Years of HR Experience" },
  { value: "4", label: "Organizations Worked With" },
  { value: "10+", label: "HR Tools & Platforms" },
  { value: "360°", label: "Employee Lifecycle Exposure" },
];

export default function About() {
  return (
    <section id="about" className="section about-premium-section">
      <div className="container">
        <div className="about-premium-grid">
          <div className="about-main-card soft-card">
            <span className="badge">About Anita</span>

            <h2 className="mt-6 max-w-4xl text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              Human Resource Professional focused on people, process and workplace growth.
            </h2>

            <p
              className="mt-6 text-base leading-8 sm:text-lg"
              style={{ color: "var(--muted)" }}
            >
              {portfolio.summary}
            </p>

            <p
              className="mt-5 text-base leading-8 sm:text-lg"
              style={{ color: "var(--muted)" }}
            >
              Anita brings a balanced HR approach where employee experience,
              operational accuracy and business needs work together. Her work
              includes talent acquisition, onboarding, payroll operations,
              attendance management, statutory compliance, HRIS implementation,
              employee documentation and grievance redressal.
            </p>

            <p
              className="mt-5 text-base leading-8 sm:text-lg"
              style={{ color: "var(--muted)" }}
            >
              With experience across wellness, real estate, engineering and HR
              consulting environments, she understands how to manage people
              operations in practical, fast-moving business settings while
              maintaining professionalism, empathy and process discipline.
            </p>

            <div className="about-tags">
              <span>Employee Lifecycle</span>
              <span>Payroll</span>
              <span>Compliance</span>
              <span>Recruitment</span>
              <span>HRIS</span>
              <span>Employee Relations</span>
            </div>
          </div>

          <div className="about-side-card soft-card">
            <p className="about-side-label">Professional Focus</p>

            <h3>Building organized, employee-friendly HR systems.</h3>

            <p>
              Anita’s HR style combines structured operations with a human-first
              approach — making processes smoother for the organization while
              keeping employees supported and informed.
            </p>

            <div className="about-focus-list">
              <div>
                <strong>01</strong>
                <span>Improve HR process accuracy</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Support employees with empathy</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Strengthen hiring and onboarding</span>
              </div>

              <div>
                <strong>04</strong>
                <span>Maintain payroll and compliance discipline</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-stats-grid">
          {aboutStats.map((item) => (
            <div key={item.label} className="about-stat-card soft-card">
              <h3 className="gradient-text">{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>

        <div className="about-highlights-grid">
          {aboutHighlights.map((item, index) => (
            <div key={item.title} className="about-highlight-card soft-card">
              <div className="about-highlight-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}