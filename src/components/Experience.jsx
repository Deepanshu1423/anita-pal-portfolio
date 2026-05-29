import { portfolio } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section experience-premium-section">
      <div className="container">
        <div className="experience-header">
          <span className="badge">Experience</span>

          <h2>
            Professional journey in{" "}
            <span className="gradient-text">Human Resources.</span>
          </h2>

          <p>
            A progressive HR career across wellness, real estate, engineering
            and HR consulting environments, with strong exposure to employee
            lifecycle, payroll, compliance, recruitment and HR operations.
          </p>
        </div>

        <div className="experience-layout">
          <div className="experience-timeline">
            {portfolio.experience.map((job, index) => (
              <div key={job.company} className="experience-item">
                <div className="experience-dot">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="experience-card soft-card">
                  <div className="experience-card-top">
                    <div>
                      <h3>{job.role}</h3>
                      <p className="company-name">{job.company}</p>
                    </div>

                    <span className="experience-duration">{job.duration}</span>
                  </div>

                  <ul>
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <aside className="experience-side soft-card">
            <p className="experience-side-label">Career Strength</p>

            <h3>End-to-end HR operations with a people-first approach.</h3>

            <div className="experience-strength-list">
              <div>
                <span>01</span>
                <p>Talent acquisition and onboarding coordination</p>
              </div>

              <div>
                <span>02</span>
                <p>Payroll, attendance and statutory compliance</p>
              </div>

              <div>
                <span>03</span>
                <p>Employee relations and grievance redressal</p>
              </div>

              <div>
                <span>04</span>
                <p>HRIS implementation and documentation control</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}