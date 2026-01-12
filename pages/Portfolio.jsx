import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/css/style.css";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Fleet Tracker",
      category: ["analytics", "management"],
      image: "/imgforabout/Fleet-tracker-overvview.jpg",
      description:
        "Real-time fleet management solution built for transport visibility and analytics.",
      stats: [
        { label: "Role", value: "Full Stack Dev" },
        { label: "Tools", value: "HTML, CSS, AOS" },
        { label: "Duration", value: "3 weeks" },
      ],
      link: "/fleetTracker",
    },
    {
      id: 2,
      title: "Case Organizer",
      category: ["management", "analytics"],
      image: "/imgforabout/Case-organizer.jpg",
      description:
        "A system that streamlines transport case management for accountability and compliance.",
      stats: [
        { label: "Role", value: "Dev Research" },
        { label: "Tools", value: "HTML, CSS, JS" },
        { label: "Duration", value: "2 weeks" },
      ],
      link: "/caseOrganizer",
    },
    {
      id: 3,
      title: "Data Visualizer",
      category: ["analytics", "visualization"],
      image: "/imgforabout/data-visualizer.jpg",
      description:
        "A tool that simplifies transport data into clear, actionable visuals for smarter decision-making.",
      stats: [
        { label: "Platform", value: "Web-based" },
        { label: "Role", value: "Data Presentation" },
        { label: "Tools", value: "HTML, CSS, Chart.js" },
      ],
      link: "/DataVisualizer",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <>
      {/* ===== SEO and Meta Tags ===== */}
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio | Emeka Locksley</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Helmet>

      {/* ===== Navbar ===== */}
      <Navbar />

      {/* ===== Project Filter Section ===== */}
      <section
        className="project-filter"
        data-aos="zoom-in-up"
        style={{ marginTop: "100px" }} // fixes overlap with navbar
      >
        <div className="container">
          <h2 className="section-title">Filter by Category</h2>
          <div className="filter-tags">
            {["all", "management", "analytics", "visualization"].map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${
                  activeFilter === cat ? "active" : ""
                }`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Portfolio Grid ===== */}
      <section className="portfolio" data-aos="zoom-in">
        <div className="container">
          <h1 className="section-title">My Project Portfolio</h1>
          <p className="section-description">
            Explore the key projects I’ve worked on — each crafted with
            functionality, strategy, and professional impact in mind.
          </p>

          <div className="portfolio-grid">
            {filteredProjects.map((proj) => (
              <div
                className={`portfolio-card ${proj.category.join(" ")}`}
                key={proj.id}
                data-aos="fade-up"
              >
                <img src={proj.image} alt={proj.title} loading="lazy" />
                <div className="card-content">
                  <h3>{proj.title}</h3>
                  <p>{proj.description}</p>
                  <div className="project-stats">
                    {proj.stats.map((s, i) => (
                      <div key={i}>
                        <strong>{s.label}:</strong> {s.value}
                      </div>
                    ))}
                  </div>
                  <Link to={proj.link} className="card-btn">
                    View Project
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Tools & Technologies ===== */}
      <section className="tools-tech" data-aos="fade-right">
        <div className="container">
          <h2 className="section-title">Tools & Technologies</h2>
          <p className="section-description">
            Here are the technologies I rely on to build efficient and visually
            consistent projects.
          </p>
          <div className="tools-grid">
            {[
              { icon: "fab fa-html5", text: "HTML5" },
              { icon: "fab fa-css3-alt", text: "CSS3"},
              { icon: "fab fa-js-square", text: "JavaScript" },
              { icon: "fas fa-chart-bar", text: "Chart.js" },
              { icon: "fas fa-database", text: "Data Logic" },
              { icon: "fas fa-code", text: "AOS Animations" },
            ].map((tool, i) => (
              <div
                className="tool"
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <i className={tool.icon} style={{ marginRight: 8 }}></i>
                {tool.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Featured Work ===== */}
      <section className="featured-project alt" data-aos="zoom-in-up">
        <div className="container featured-box">
          <div className="featured-text">
            <h2>Featured Work: Fleet Tracker</h2>
            <p>
              Fleet Tracker is a real-time vehicle monitoring and operations
              system designed for logistics efficiency, safety, and improved
              fleet visibility.
            </p>
            <a href="/fleetTracker" className="featured-btn">
              View Full Project
            </a>
          </div>
          <div className="featured-image">
            <img
              src="/imgforabout/Fleet-tracker-overvview.jpg"
              alt="Fleet Tracker Project"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ===== Client Feedback Strip ===== */}
      <section className="client-feedback-strip" data-aos="fade-left">
        <div className="container feedback-content">
          <div className="quote-icon">
            <i className="fas fa-quote-left"></i>
          </div>
          <blockquote>
            “Working with Emeka Locksley was smooth, insightful, and highly
            impactful. His transport-focused tools simplified operations for us
            beyond expectations.”
          </blockquote>
          <p className="client-name">
            — Head of Logistics, Efficient Moves Ltd.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Portfolio;
