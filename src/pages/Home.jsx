import "../App.css";
import misgsHome from "../assets/projects/misgs-home.png";
import misgsLoginPage from "../assets/projects/misgs-login-page.png";
import misgsOutreachDashboard from "../assets/projects/misgs-outreach-dashboard.png";
import misgsOutreachMap from "../assets/projects/misgs-outreach-map.png";
// import misgOutreach from "./assets/projects/misgs-outreach.png";
// import misgsPenjadualanKelas from "./assets/projects/misgs-penjadualan-kelas.png";
// import misgsProfilMuallaf from "./assets/projects/misgs-profil-muallaf.png";
// import misgSenaraiKelas from "./assets/projects/misgs-senarai-kelas.png";
import hijabiStudent from "../assets/images/hijabi-student.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function Home() {
  const dataSkills = [
    "Python",
    "Machine Learning",
    "Data Analysis",
    "Power BI",
    "Cloudera",
  ];

  const developmentSkills = [
    "Flutter",
    "React",
    "Web Programming",
    "Application Programming",
  ];

  const tools = ["MySQL", "Supabase", "GitHub"];

  // Smooth scrolling for GitHub Pages
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const updateVisitorCount = async () => {
      const { data, error } = await supabase.rpc("increment_portfolio_visits");

      if (error) {
        console.error("Visitor count error:", error);
        return;
      }

      setVisitorCount(data);
    };

    updateVisitorCount();
  }, []);

  const formattedDate = currentTime.toLocaleDateString("en-MY", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const formattedTime = currentTime.toLocaleTimeString("en-MY", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const [visitorCount, setVisitorCount] = useState(null);

  return (
    <div className="app">
      <nav className="navbar">
        <button
          type="button"
          className="logo logo-button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          SHUHADA.
        </button>

        <div className="nav-links">
          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="nav-link-button"
          >
            About
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("skills")}
            className="nav-link-button"
          >
            Skills
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("projects")}
            className="nav-link-button"
          >
            Projects
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="nav-link-button"
          >
            Contact
          </button>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">COMPUTER SCIENCE STUDENT</p>

            <h1>
              Hi, I'm <span>Shuhada Shamsuri.</span>
            </h1>

            <h2>I turn data and ideas into practical digital solutions.</h2>

            <p className="hero-description">
              I'm a Bachelor of Computer Science student interested in Data
              Science, Data Analytics, Machine Learning, Software Development,
              and mobile application development.
            </p>

            <div className="hero-buttons">
              <button
                type="button"
                className="primary-btn"
                onClick={() => scrollToSection("projects")}
              >
                Explore My Work →
              </button>

              <a
                href={`${import.meta.env.BASE_URL}resume-shuhada-shamsuri.pdf`}
                className="secondary-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>

              <button
                type="button"
                className="secondary-btn"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-shape">
              <div className="hero-visual-text">
                Learn.
                <br />
                Build.
                <br />
                Improve.
                <small>
                  DATA • SOFTWARE
                  <br />
                  MACHINE LEARNING
                </small>
              </div>

              <img
                src={hijabiStudent}
                alt="Muslimah computer science student holding a laptop"
                className="hero-person"
              />
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-label">
            <span>01</span>
            <p>ABOUT</p>
          </div>

          <div className="about-content">
            <h2>
              I enjoy learning how technology can be used to solve real-world
              problems.
            </h2>

            <div className="about-text">
              <p>
                I'm currently pursuing a Bachelor of Computer Science and
                developing my skills across data, machine learning, web
                development, and mobile application development.
              </p>

              <p>
                My interests are especially focused on Data Science, Data
                Analytics, Software Development, and Flutter development. I
                enjoy building projects where I can apply what I learn rather
                than only studying concepts theoretically.
              </p>

              <p>
                I'm currently seeking internship opportunities where I can gain
                industry experience, strengthen my technical skills, and learn
                from experienced teams.
              </p>
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-label">
            <span>02</span>
            <p>SKILLS</p>
          </div>

          <div className="skills-header">
            <h2>Technologies and areas I'm working with.</h2>
            <p>
              My current skill set covers data analysis, machine learning,
              software development, and application development.
            </p>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <p className="skill-number">01</p>
              <h3>Data & Analytics</h3>

              <div className="skill-list">
                {dataSkills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-card">
              <p className="skill-number">02</p>
              <h3>Development</h3>

              <div className="skill-list">
                {developmentSkills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-card">
              <p className="skill-number">03</p>
              <h3>Database & Tools</h3>

              <div className="skill-list">
                {tools.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-label">
            <span>03</span>
            <p>PROJECTS</p>
          </div>

          <div className="projects-header">
            <h2>Selected projects I've built and developed.</h2>
            <p>
              These projects represent my experience across software
              development, mobile application development, data analysis, and
              machine learning.
            </p>
          </div>

          <div className="projects-list">
            <article className="project-card featured-project">
              <div className="project-meta">
                <span>01</span>
                <span>FEATURED PROJECT</span>
              </div>

              <div className="project-content">
                <div className="project-info">
                  <p className="project-category">
                    Machine Learning • Data • Web Development
                  </p>

                  <h3>
                    MISGS — Muallaf Integrated Support and Guidance System
                  </h3>

                  <p className="project-description">
                    A digital system developed to support the management,
                    welfare, education, and outreach activities related to
                    Muallaf.
                  </p>

                  <p className="project-description">
                    The system integrates K-Means Clustering to analyse
                    geographical data and identify potential strategic outreach
                    locations.
                  </p>

                  <div className="project-tags">
                    <span>Python</span>
                    <span>K-Means</span>
                    <span>Machine Learning</span>
                    <span>MySQL</span>
                    <span>Data Visualization</span>
                  </div>

                  <Link to="/projects/misgs" className="project-link">
                    View Case Study →
                  </Link>
                </div>

                <div className="project-visual">
                  <img
                    src={misgsHome}
                    alt="MISGS system homepage"
                    className="project-image"
                  />
                  <img
                    src={misgsLoginPage}
                    alt="MISGS system login"
                    className="project-image"
                  />
                  <img
                    src={misgsOutreachDashboard}
                    alt="MISGS outreach dashboard"
                    className="project-image"
                  />
                  <img
                    src={misgsOutreachMap}
                    alt="MISGS outreach map"
                    className="project-image"
                  />
                </div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-meta">
                <span>02</span>
                <span>MOBILE APPLICATION</span>
              </div>

              <div className="project-content">
                <div className="project-info">
                  <p className="project-category">
                    Flutter • Supabase • Mobile Development
                  </p>

                  <h3>Student Gigs Application</h3>

                  <p className="project-description">
                    A mobile application designed to connect students with
                    flexible gig and part-time job opportunities.
                  </p>

                  <p className="project-description">
                    The application includes authentication, gig listings, user
                    profiles, database integration, and location-based
                    functionality.
                  </p>

                  <div className="project-tags">
                    <span>Flutter</span>
                    <span>Dart</span>
                    <span>Supabase</span>
                    <span>PostgreSQL</span>
                    <span>GitHub</span>
                  </div>

                  <Link to="/projects/student-gigs" className="project-link">
                    View Case Study →
                  </Link>
                </div>

                <div className="project-visual">
                  <div className="project-placeholder">
                    <p>STUDENT GIGS</p>
                    <span>App Screenshot</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="services-section">
          <div className="section-label">
            <span>04</span>
            <p>SERVICES</p>
          </div>

          <div className="services-header">
            <h2>Ways I can help.</h2>
            <p>
              I'm open to selected freelance, student, and small-scale projects
              that match my current skills and areas of learning.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <span>01</span>
              <h3>Data Analysis</h3>
              <p>
                Basic data cleaning, exploratory analysis, data visualization,
                and dashboard development using tools such as Python and Power
                BI.
              </p>
            </div>

            <div className="service-card">
              <span>02</span>
              <h3>Web Development</h3>
              <p>
                Development of simple, responsive websites for individuals,
                students, small businesses, and project-based needs.
              </p>
            </div>

            <div className="service-card">
              <span>03</span>
              <h3>Mobile Applications</h3>
              <p>
                Development and prototyping of Flutter-based mobile applications
                with backend integration using Supabase.
              </p>
            </div>

            <div className="service-card">
              <span>04</span>
              <h3>Database & System Development</h3>
              <p>
                Basic database design, MySQL integration, CRUD functionality,
                and development of small digital management systems.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-label">
            <span>05</span>
            <p>CONTACT</p>
          </div>

          <div className="contact-content">
            <div>
              <p className="contact-eyebrow">OPEN TO OPPORTUNITIES</p>

              <h2>Have an internship opportunity or a project in mind?</h2>
            </div>

            <div className="contact-right">
              <p>
                I'm currently open to internship opportunities in Data Science,
                Data Analytics, Software Development, and Flutter development,
                as well as selected freelance projects and collaborations.
              </p>

              <div className="contact-links">
                <a href="mailto:shuhadashamsuri99@gmail.com">
                  Email Me <span>↗</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/siti-nur-shuhada-055b5841b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn <span>↗</span>
                </a>

                <a
                  href="https://github.com/YawGad"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio-stats">
          <div className="portfolio-stat">
            <span>LOCAL DATE & TIME</span>

            <p>
              {formattedDate}
              <br />
              {formattedTime}
            </p>
          </div>

          <div className="portfolio-stat">
            <span>PORTFOLIO VISITS</span>

            <p>
              {visitorCount !== null
                ? visitorCount.toLocaleString()
                : "Loading..."}
            </p>
          </div>
        </section>

        <footer className="footer">
          <p>© 2026 Shuhada Shamsuri</p>

          <button
            type="button"
            className="footer-top-button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to top ↑
          </button>
        </footer>
      </main>
    </div>
  );
}

export default Home;
