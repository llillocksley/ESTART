import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../components/Footer";
import '../assets/css/style.css';
import '../assets/css/Projects.css';
import { Link } from "react-router-dom";


const projectData = [
  {
    id: 'responsive-portfolio',
    title: 'Responsive Portfolio',
    category: 'web',
    description: 'A sleek portfolio site built using HTML, CSS & JavaScript.',
    image: '/public/imgforabout/Espace.jpeg',
    href: '/Portfolio',   // ✅ React route instead of portfolio.html
    icon: null,
  },
  {
    id: 'fleet-tracker',
    title: 'Fleet Tracker',
    category: 'transport',
    description: 'A dashboard for monitoring transport and delivery operations.',
    image: '/public/imgforabout/FFleet-tracker.jpg',
    href: '/fleetTracker',   // ✅ React route
    icon: null,
  },
  {
    id: 'case-organizer',
    title: 'Case Organizer',
    category: 'legal',
    description: 'Helps legal teams manage and categorize documents efficiently.',
    image: '/public/imgforabout/case-organizer.jpg',
    href: '/caseOrganizer',   // ✅ React route
    icon: null,
  },
  {
    id: 'data-visualizer',
    title: 'Data Visualizer',
    category: 'data',
    description: 'Turns raw data into interactive and easy-to-read charts.',
    image: '/public/imgforabout/data-visualizer.jpg',
    href: '/DataVisualizer',   // ✅ React route
    icon: null,
  },
  {
    id: 'personal-website',
    title: 'Personal Website',
    category: 'web',
    description: 'This portfolio showcases my growth as a web developer.',
    image: '/imgforabout/personal-website.jpg',
    href: 'https://llillocksley.github.io/personal-website/', // ✅ external stays the same
    icon: '🌐',
  },
  {
    id: 'transport-cost-tracker',
    title: 'Transport Cost Tracker',
    category: 'transport',
    description: 'A planned app for tracking and analyzing transportation expenses.',
    image: '/imgforabout/Trackker.jpg',
    href: '/TransportCostTracker',   // ✅ React route
    icon: '🚚',
  },
  {
    id: 'legal-docs-formatter',
    title: 'Legal Docs Formatter',
    category: 'legal',
    description: 'Concept project to help organize and style legal documentation.',
    image: '/imgforabout/Legal1.jpg',
    href: '/LegalDocsFormatter',   // ✅ React route
    icon: '⚖️',
  },
  {
    id: 'data-driven-decision',
    title: 'Data-Driven Decision Making',
    category: 'data',
    description:
      'I leverage data analytics to help businesses make smarter decisions in transport and legal operations.',
    image: '/imgforabout/Data.jpg',
    href: '/DataDrivenDecision',   // ✅ React route
    icon: '📈',
  },
];


const categoryLabels = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web Apps' },
  { key: 'transport', label: 'Transport' },
  { key: 'legal', label: 'Legal' },
  { key: 'data', label: 'Data' },
];

export default function Projects() {
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return projectData;
    return projectData.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div>
<Helmet>
  <meta charSet="UTF-8" />
  <title>Projects | Emeka Locksley</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#ffffff" />
  <meta name="robots" content="index, follow" />

  {/* Favicon & Fonts */}
  <link rel="icon" href="/imgforabout/locksley-icon.png" type="image/png" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  />
  {/* AOS CSS */}
  <link
    href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css"
    rel="stylesheet"
  />

  {/* SEO Meta */}
  <meta
    name="description"
    content="Explore Emeka Locksley's professional portfolio — projects, transport solutions, and data-driven tools."
  />
  <meta
    name="keywords"
    content="Emeka Locksley, Transport Tech, Fleet Management, Data Visualizer, Case Organizer, Portfolio"
  />
  <meta name="author" content="Emeka Goodness Locksley" />

  {/* Open Graph */}
  <meta property="og:title" content="Projects | Emeka Locksley" />
  <meta
    property="og:description"
    content="Browse featured work in transport systems, visualization tools, and case automation."
  />
  <meta
    property="og:image"
    content="https://llillocksley.github.io/personal-website/imgforabout/project-banner.jpg"
  />
  <meta
    property="og:url"
    content="https://llillocksley.github.io/personal-website/projects.html"
  />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Emeka Locksley Portfolio" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Projects | Emeka Locksley" />
  <meta
    name="twitter:description"
    content="Browse featured work in transport systems, visualization tools, and case automation."
  />
  <meta
    name="twitter:image"
    content="https://llillocksley.github.io/personal-website/imgforabout/project-banner.jpg"
  />
  <meta
    name="twitter:url"
    content="https://llillocksley.github.io/personal-website/projects.html"
  />
</Helmet>


      {/* Dark mode toggle */}
      <div style={{ textAlign: 'center', margin: '1rem 0' }}>
        <button
          className="toggle-btn"
          onClick={() => setDarkMode((d) => !d)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      {/* Hero Banner */}
      <section className="hero-banner" data-aos="fade-up">
        <h1>My Projects</h1>
        <p>
          Explore a showcase of practical solutions and creative implementations
          crafted to solve real-world problems.
        </p>
      </section>

      {/* Projects Hero */}
      <header className="projects-hero">
        <div className="overlay">
          <h1 data-aos="fade-down">My Work &amp; Projects</h1>
          <p data-aos="fade-up">
            Solutions, Innovation, and Impact — A showcase of my hands-on experience
            and ideas
          </p>
        </div>
      </header>

      {/* Stats */}
      <section className="project-stats" data-aos="fade-up">
        <div className="stats-grid">
          <div className="stat-box">
            <i className="fas fa-laptop-code" />
            <h3>6+</h3>
            <p>Completed Projects</p>
          </div>
          <div className="stat-box">
            <i className="fas fa-cogs" />
            <h3>8</h3>
            <p>Tools &amp; Technologies</p>
          </div>
          <div className="stat-box">
            <i className="fas fa-briefcase" />
            <h3>3</h3>
            <p>Ongoing Projects</p>
          </div>
          <div className="stat-box">
            <i className="fas fa-handshake" />
            <h3>3+</h3>
            <p>Collaborations</p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="project-filter container" data-aos="fade-up">
        <h2 className="section-heading">Explore by Category</h2>
        <div className="filter-tags">
          {categoryLabels.map((c) => (
            <button
              key={c.key}
              className={`tag ${filter === c.key ? 'active' : ''}`}
              onClick={() => setFilter(c.key)}
              data-filter={c.key}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

{/* Project Grid - First 4 */}
<div className="container">
  <div className="project-grid" data-aos="fade-up">
    {filteredProjects.slice(0, 4).map((proj) => (
      <div
        key={proj.id}
        className="project"
        data-category={proj.category}
        data-aos="fade-up"
      >
        <img
          src={proj.image}
          alt={`${proj.title} screenshot`}
          loading="lazy"
        />

        <h3>
          {proj.icon && <span style={{ marginRight: 6 }}>{proj.icon}</span>}
          {proj.title}
        </h3>
        <p>{proj.description}</p>

        {/* If it's an internal page (React route) */}
        {proj.internal ? (
          <Link to={proj.href} className="btn">
            View Demo
          </Link>
        ) : (
          <a
            href={proj.href}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Demo
          </a>
        )}
      </div>
    ))}
  </div>
</div>

{/* Insight Link */}
<div
  className="insight-link"
  style={{ textAlign: "center", margin: "3rem 0" }}
>
  <p>Curious about the thinking behind the tools?</p>
  <Link to="/insights" className="read-more-btn">
    Visit Insights Page
  </Link>
</div>

{/* Featured Work */}
<section className="featured-work" data-aos="zoom-in-up">
  <h2>Featured Work</h2>
  <div className="featured-card">
    <img
      src="/imgforabout/Smart-Transport-Cost-Analyzer.jpg"
      alt="Featured Project Screenshot"
      loading="lazy"
      style={{ width: "100%", height: "auto" }}
    />
    <div className="featured-content">
      <h3>Smart Transport Cost Analyzer</h3>
      <p>
        A full-stack web app that analyzes transportation expenses using smart
        dashboards, historical data, and predictive cost modeling.
      </p>
      <p>
        <strong>Tech Stack:</strong> HTML, CSS, JavaScript, Chart.js, Firebase
      </p>
      <div className="featured-links">
        {/* Internal link (React page) */}
        <Link to="/SmartCostAnalyzer" className="btn">
          <i className="fas fa-external-link-alt" /> Live Demo
        </Link>

        {/* External link (GitHub or similar) */}
        <a
          href="https://github.com/your-repo"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" /> Source Code
        </a>
      </div>
    </div>
  </div>
</section>

{/* Project Grid - Remaining 4 */}
<div className="container">
  <div className="project-grid" data-aos="fade-up">
    {filteredProjects.slice(4).map((proj) => (
      <div
        key={proj.id}
        className="project"
        data-category={proj.category}
        data-aos="fade-up"
      >
        <img
          src={proj.image}
          alt={`${proj.title} screenshot`}
          loading="lazy"
        />
        <h3>
          {proj.icon && <span style={{ marginRight: 6 }}>{proj.icon}</span>}
          {proj.title}
        </h3>
        <p>{proj.description}</p>

        {proj.internal ? (
          <Link to={proj.href} className="btn">
            View Demo
          </Link>
        ) : (
          <a
            href={proj.href}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Demo
          </a>
        )}
      </div>
    ))}
  </div>
</div>


      <Footer />
    </div>
  );
}
