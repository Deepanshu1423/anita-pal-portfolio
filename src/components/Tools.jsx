import { portfolio } from "@/data/portfolio";

const toolGroups = [
  {
    title: "HRIS & Attendance",
    tools: ["Keka HR", "Razorpay", "Orange HRM", "UBI Attendance", "ESSL"],
  },
  {
    title: "Recruitment Platforms",
    tools: ["LinkedIn", "Naukri", "TimesJobs", "Shine.com"],
  },
  {
    title: "Productivity",
    tools: ["MS Excel", "MS Word", "Google Workspace"],
  },
];

export default function Tools() {
  return (
    <section className="section tools-premium-section">
      <div className="container">
        <div className="tools-header">
          <span className="badge">Tools & Platforms</span>

          <h2>
            HR systems and platforms used for{" "}
            <span className="gradient-text">faster, cleaner operations.</span>
          </h2>
        </div>

        <div className="tools-group-grid">
          {toolGroups.map((group, index) => (
            <div key={group.title} className="tools-group-card soft-card">
              <div className="tools-group-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{group.title}</h3>

              <div className="tools-chip-wrap">
                {group.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tools-all soft-card">
          <p>Complete Tool Stack</p>

          <div>
            {portfolio.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}