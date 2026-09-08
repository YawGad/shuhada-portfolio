import { Link } from "react-router-dom";

function ProjectCaseStudy({
  number,
  title,
  subtitle,
  description,
  role,
  technologies = [],
  snapshot = [],
  problem = [],
  solution = [],
  process = [],
  features = [],
  images = [],
  lessons = [],
  github,
}) {
  return (
    <div className="case-study">
      {/* =========================
          NAVIGATION
      ========================== */}
      <header className="case-study-nav">
        <Link to="/" className="case-logo">
          SHUHADA.
        </Link>

        <Link to="/#projects" className="back-link">
          ← Back to Portfolio
        </Link>
      </header>

      <main>
        {/* =========================
            PROJECT HERO
        ========================== */}
        <section className="case-hero">
          <div className="case-hero-top">
            <p className="case-number">{number}</p>
            <p className="case-category">{subtitle}</p>
          </div>

          <h1>{title}</h1>

          <p className="case-intro">{description}</p>

          {/* Role + Technologies */}
          <div className="case-meta-grid">
            <div className="case-meta-item">
              <span>ROLE</span>
              <p>{role}</p>
            </div>

            <div className="case-meta-item">
              <span>TECHNOLOGIES</span>

              <div className="case-tags">
                {technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </div>

          {/* =========================
              PROJECT SNAPSHOT
          ========================== */}
          {snapshot.length > 0 && (
            <div className="snapshot-grid">
              {snapshot.map((item) => (
                <div
                  className="snapshot-item"
                  key={`${item.label}-${item.value}`}
                >
                  <span>{item.label}</span>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* =========================
            PROJECT COVER
        ========================== */}
        {images.length > 0 && (
          <section className="case-cover">
            <div className="browser-frame case-cover-frame">
              <div className="browser-bar">
                <span></span>
                <span></span>
                <span></span>

                <div className="browser-address">MISGS</div>
              </div>

              <img
                src={images[0].src}
                alt={images[0].title || `${title} project overview`}
              />
            </div>

            {(images[0].title || images[0].description) && (
              <div className="case-cover-caption">
                <div>
                  <span>FEATURED SCREEN</span>
                  <h3>{images[0].title}</h3>
                </div>

                <p>{images[0].description}</p>
              </div>
            )}
          </section>
        )}

        {/* =========================
            01 — PROBLEM
        ========================== */}
        <section className="case-section case-two-column">
          <div>
            <p className="case-section-label">01 — PROBLEM</p>

            <h2>What problem was I trying to solve?</h2>
          </div>

          <div className="case-body">
            {problem.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* =========================
            02 — SOLUTION
        ========================== */}
        <section className="case-section case-two-column">
          <div>
            <p className="case-section-label">02 — SOLUTION</p>

            <h2>How I approached the problem.</h2>
          </div>

          <div className="case-body">
            {solution.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* =========================
            03 — TECHNICAL APPROACH
        ========================== */}
        {process.length > 0 && (
          <section className="case-section">
            <div className="case-section-heading">
              <p className="case-section-label">03 — TECHNICAL APPROACH</p>

              <h2>From problem to working system.</h2>

              <p className="case-section-description">
                A simplified overview of the process used to design, develop,
                analyse, and integrate the different parts of the project.
              </p>
            </div>

            <div className="process-grid">
              {process.map((step, index) => (
                <article
                  className="process-step"
                  key={`${step.number}-${step.title}`}
                >
                  <span className="process-number">
                    {step.number || String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* =========================
            04 — KEY FEATURES
        ========================== */}
        {features.length > 0 && (
          <section className="case-section">
            <div className="case-section-heading">
              <p className="case-section-label">04 — KEY FEATURES</p>

              <h2>What the system provides.</h2>
            </div>

            <div className="feature-grid">
              {features.map((feature, index) => (
                <article className="case-feature" key={feature.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* =========================
            05 — PRODUCT WALKTHROUGH
        ========================== */}
        {images.length > 1 && (
          <section className="case-section">
            <div className="case-gallery-header">
              <div>
                <p className="case-section-label">05 — PRODUCT WALKTHROUGH</p>

                <h2>Inside the system.</h2>
              </div>

              <p>
                Selected screens showing how the system supports administration,
                outreach analysis, education, welfare, and Muallaf management.
              </p>
            </div>

            <div className="case-gallery">
              {images.slice(1).map((image, index) => (
                <figure
                  className={`case-shot ${
                    index % 3 === 0 ? "case-shot-large" : ""
                  }`}
                  key={`${image.title}-${index}`}
                >
                  {/* Browser-style screenshot */}
                  <div className="browser-frame">
                    <div className="browser-bar">
                      <span></span>
                      <span></span>
                      <span></span>

                      <div className="browser-address">MISGS</div>
                    </div>

                    <img
                      src={image.src}
                      alt={image.title || `${title} screenshot ${index + 1}`}
                    />
                  </div>

                  {/* Screenshot Caption */}
                  <figcaption>
                    <span className="shot-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3>{image.title}</h3>

                      <p>{image.description}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* =========================
            06 — WHAT I LEARNED
        ========================== */}
        {lessons.length > 0 && (
          <section className="case-section case-two-column">
            <div>
              <p className="case-section-label">06 — WHAT I LEARNED</p>

              <h2>Lessons from building the project.</h2>
            </div>

            <div className="case-body">
              {lessons.map((lesson, index) => (
                <p key={index}>{lesson}</p>
              ))}

              {/* GitHub / Private Repository */}
              <div className="case-source">
                {github ? (
                  <a
                    className="case-button"
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View GitHub Repository ↗
                  </a>
                ) : (
                  <div className="private-repo">
                    <span className="private-repo-label">
                      PRIVATE REPOSITORY
                    </span>

                    <p>
                      Source code is kept private and can be discussed during an
                      interview or technical review.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* =========================
            NEXT PROJECT / CTA
        ========================== */}
        <section className="case-next">
          <div className="case-next-inner">
            <div className="case-next-content">
              <p className="case-next-label">NEXT PROJECT</p>

              <p className="case-next-number">PROJECT 02</p>

              <h2>Student Gigs Application</h2>

              <p className="case-next-description">
                A Flutter mobile application designed to connect students with
                flexible gig and part-time work opportunities.
              </p>
            </div>

            <Link to="/projects/student-gigs" className="case-next-link">
              <span>View Case Study</span>
              <span className="case-next-arrow">↗</span>
            </Link>
          </div>
        </section>
      </main>

      {/* =========================
          FOOTER
      ========================== */}
      <footer className="case-footer">
        <p>© 2026 Shuhada Shamsuri</p>

        <Link to="/">Return Home ↑</Link>
      </footer>
    </div>
  );
}

export default ProjectCaseStudy;
