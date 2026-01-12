import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../components/Footer";
import '../assets/css/style.css';
import { Link } from "react-router-dom";


// counter animation helper
const animateCounter = (el, target) => {
  let current = 0;
  const duration = 1200; // total ms
  const stepTime = Math.max(Math.floor(duration / target), 20);
  const increment = 1;

  const updater = () => {
    current += increment;
    if (current > target) current = target;
    el.innerText = current;
    if (current < target) {
      setTimeout(updater, stepTime);
    }
  };
  updater();
};

const metrics = [
  { label: 'Cases Resolved', target: 1200 },
  { label: '% On-Time Resolution', target: 98 },
  { label: 'Fleets Managed', target: 40 },
  { label: '% Data Accuracy', target: 100 },
];

const CaseOrganizer = () => {
  const countersRef = useRef([]);

  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 800, once: true });

    // Intersection observer to trigger counters when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (
            entry.isIntersecting &&
            el.dataset.target &&
            el.innerText === '0'
          ) {
            const target = parseInt(el.dataset.target, 10);
            animateCounter(el, target);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    countersRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const setCounterRef = (el, index) => {
    countersRef.current[index] = el;
    if (el) {
      el.innerText = '0'; // initial value
    }
  };

  return (
    <div>
      <Helmet>
        <title>Case Organizer | Emeka Locksley</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href="/imgforabout/locksley-icon.png"
          type="image/png"
        />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />

        {/* AOS */}
        <link
          href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css"
          rel="stylesheet"
        />

        {/* SEO */}
        <meta
          name="description"
          content="Streamlined case tracking system for compliance and accountability."
        />
        <meta
          name="keywords"
          content="Case Organizer, transport case management, compliance tracking"
        />
        <meta name="author" content="Emeka Goodness Locksley" />

        {/* Open Graph */}
        <meta property="og:title" content="Case Organizer | Emeka Locksley" />
        <meta
          property="og:description"
          content="Streamlined case tracking system for compliance and accountability."
        />
        <meta
          property="og:image"
          content="https://llillocksley.github.io/personal-website/imgforabout/case-organizer.jpg"
        />
        <meta
          property="og:url"
          content="https://llillocksley.github.io/personal-website/case-organizer.html"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Emeka Locksley Portfolio" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Case Organizer | Emeka Locksley" />
        <meta
          name="twitter:description"
          content="Streamlined case tracking system for compliance and accountability."
        />
        <meta
          name="twitter:image"
          content="https://llillocksley.github.io/personal-website/imgforabout/case-organizer.jpg"
        />
        <meta
          name="twitter:url"
          content="https://llillocksley.github.io/personal-website/case-organizer.html"
        />
      </Helmet>


      {/* Hero */}
      <section
        className="project-hero"
        style={{ backgroundImage: 'url("/imgforabout/casee-organizer.jpg")' }}
        data-aos="fade-up"
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Case Organizer</h1>
            <p>
              A powerful system to manage, organize, and retrieve client case files
              with ease and accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="project-overview" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Overview</h2>
          <p className="section-description">
            Case Organizer is a streamlined case management tool built to simplify
            how organizations handle and access client files, legal records,
            documentation, and workflow. Designed with flexibility and accuracy in
            mind, this solution enhances productivity by centralizing all critical
            data into a secure and structured platform.
          </p>
          <p>
            Whether for legal firms, NGOs, or internal company operations, Case
            Organizer ensures that essential case data is easily searchable, tracked,
            and securely stored — reducing clutter, delays, and manual dependency.
          </p>
        </div>
      </section>

      {/* Two-column intro */}
      <section className="project-overview-two-column" data-aos="fade-up">
        <div className="container overview-flex">
          <div className="overview-intro">
            <h2>Case Organizer</h2>
            <p className="short-highlight">
              A robust platform to manage, organize, and retrieve case files with
              clarity and control.
            </p>
          </div>
          <div className="overview-details">
            <p>
              Case Organizer is a centralized case management solution tailored for
              institutions and professionals that handle sensitive data across
              multiple projects. It reduces paperwork bottlenecks by digitizing case
              records and enabling seamless file tracking, user role assignment, and
              collaboration.
            </p>
            <p>
              The platform promotes secure access control and allows teams to work more
              efficiently by keeping case histories organized and easily retrievable.
              Ideal for legal firms, HR departments, compliance officers, and NGOs.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="project-capabilities" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Core Capabilities</h2>
          <p className="section-description">
            Designed for efficiency and control, Case Organizer equips your team with
            essential tools to handle client documentation and workflows with precision.
          </p>
          <div className="capabilities-grid">
            <div className="capability-box">
              <i className="fas fa-folder-open" />
              <h3>Centralized Case Storage</h3>
              <p>
                All case files and supporting documents stored in one secure and
                structured location, accessible anytime.
              </p>
            </div>
            <div className="capability-box">
              <i className="fas fa-users-cog" />
              <h3>Team Collaboration</h3>
              <p>
                Assign roles, monitor progress, and ensure everyone works from the same
                organized system—real-time and trackable.
              </p>
            </div>
            <div className="capability-box">
              <i className="fas fa-shield-alt" />
              <h3>Data Privacy &amp; Control</h3>
              <p>
                Built-in access control, user permissions, and encryption to protect
                sensitive case data from unauthorized access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="metrics-section" data-aos="zoom-out">
        <div className="container">
          <h2 className="section-title">Impact in Numbers</h2>
          <p className="section-description">
            The Case Organizer has streamlined complex transport workflows and boosted
            performance across key areas.
          </p>
          <div className="metrics-grid">
            {metrics.map((m, idx) => (
              <div className="metric-box" key={m.label}>
                <h3
                  className="counter"
                  data-target={m.target}
                  ref={(el) => setCounterRef(el, idx)}
                >
                  0
                </h3>
                <p>{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseOrganizer;
