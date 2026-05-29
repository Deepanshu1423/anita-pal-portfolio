import { portfolio } from "@/data/portfolio";

const expertiseDetails = [
  {
    title: "Talent Acquisition",
    category: "Hiring Strategy",
    text: "End-to-end recruitment support including sourcing, screening, candidate coordination and hiring funnel improvement.",
    points: ["Naukri & LinkedIn sourcing", "Candidate coordination", "Hiring funnel support"],
  },
  {
    title: "Employee Lifecycle",
    category: "People Operations",
    text: "Managing employee journey from onboarding to documentation, engagement, records, performance support and exit formalities.",
    points: ["Onboarding", "Documentation", "Exit process"],
  },
  {
    title: "Payroll Management",
    category: "HR Operations",
    text: "Monthly payroll coordination, salary sheet preparation and payroll accuracy support with structured HR data handling.",
    points: ["Salary sheets", "Payroll accuracy", "Monthly processing"],
  },
  {
    title: "Attendance Analytics",
    category: "Workforce Insights",
    text: "Attendance tracking, leave monitoring and workforce data analysis using attendance and HRIS platforms.",
    points: ["AMS/LMS tracking", "Leave records", "Attendance reports"],
  },
  {
    title: "Statutory Compliance",
    category: "Compliance",
    text: "Maintaining EPF, ESIC and compliance-related HR records with audit-ready documentation discipline.",
    points: ["EPF", "ESIC", "Audit-ready records"],
  },
  {
    title: "Employee Engagement",
    category: "Culture",
    text: "Supporting a positive workplace culture through employee communication, support and engagement initiatives.",
    points: ["Internal communication", "Employee support", "Workplace culture"],
  },
  {
    title: "Grievance Handling",
    category: "Employee Relations",
    text: "Resolving employee concerns with empathy, professionalism and structured communication.",
    points: ["Conflict resolution", "Employee relations", "Grievance support"],
  },
  {
    title: "Performance Management",
    category: "PMS",
    text: "Supporting PMS processes and helping align employee performance conversations with organizational goals.",
    points: ["PMS coordination", "Performance process", "Goal alignment"],
  },
  {
    title: "HR Digitization",
    category: "HRIS",
    text: "Using HR technology to improve accuracy, reduce manual work and create smoother HR operations.",
    points: ["Keka HR", "Razorpay", "Orange HRM"],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="section expertise-premium-section">
      <div className="container">
        <div className="expertise-hero soft-card">
          <div>
            <span className="badge">Core Expertise</span>

            <h2>
              HR expertise across{" "}
              <span className="gradient-text">people, process & technology.</span>
            </h2>

            <p>
              Anita brings a balanced HR skill set across recruitment, employee
              lifecycle, payroll, compliance, HRIS tools, documentation and
              employee relations.
            </p>
          </div>

          <div className="expertise-score-card">
            <h3>7.5+</h3>
            <p>Years of Human Resource Experience</p>
          </div>
        </div>

        <div className="expertise-grid">
          {expertiseDetails.map((item, index) => (
            <article key={item.title} className="expertise-card soft-card">
              <div className="expertise-card-top">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item.category}</p>
              </div>

              <h3>{item.title}</h3>

              <p className="expertise-card-text">{item.text}</p>

              <div className="expertise-point-list">
                {item.points.map((point) => (
                  <span key={point}>{point}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="expertise-bottom-strip soft-card">
          <div>
            <h3>Practical HR strength</h3>
            <p>
              A profile designed around both people care and operational accuracy.
            </p>
          </div>

          <div className="expertise-strip-items">
            <span>Payroll</span>
            <span>Compliance</span>
            <span>Recruitment</span>
            <span>HRIS</span>
          </div>
        </div>
      </div>
    </section>
  );
}