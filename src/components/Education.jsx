import { portfolio } from "@/data/portfolio";

export default function Education() {
  return (
    <section className="section education-premium-section">
      <div className="container">
        <div className="education-header">
          <span className="badge">Education</span>

          <h2>
            Academic foundation supporting{" "}
            <span className="gradient-text">professional HR growth.</span>
          </h2>

          <p>
            Anita’s academic background provides a strong business and management
            foundation for people operations, HR coordination and organizational
            process handling.
          </p>
        </div>

        <div className="education-grid">
          {portfolio.education.map((edu, index) => (
            <div key={edu.degree} className="education-card soft-card">
              <div className="education-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div>
                <h3>{edu.degree}</h3>
                <p>{edu.institute}</p>
                <span>{edu.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}