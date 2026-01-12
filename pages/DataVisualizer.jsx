import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../components/Footer";
import '../assets/css/style.css';
import { Link } from "react-router-dom";


const DataVisualizer = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div>
<Helmet>
  {/* Charset and Title */}
  <meta charSet="UTF-8" />
  <title>Data Visualizer | Emeka Locksley</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* SEO Meta Tags */}
  <meta
    name="description"
    content="Explore Emeka Locksley's professional portfolio — projects, transport solutions, and data-driven tools."
  />
  <meta
    name="keywords"
    content="Emeka Locksley, Transport Tech, Fleet Management, Data Visualizer, Case Organizer, Portfolio"
  />
  <meta name="author" content="Emeka Goodness Locksley" />

  {/* Open Graph Meta */}
  <meta property="og:title" content="Data Visualizer | Emeka Locksley" />
  <meta
    property="og:description"
    content="Turn raw transport data into charts, trends, and decisions."
  />
  <meta
    property="og:image"
    content="https://llillocksley.github.io/personal-website/imgforabout/Data-Visualizer.jpg"
  />
  <meta
    property="og:url"
    content="https://llillocksley.github.io/personal-website/data-visualizer.html"
  />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Emeka Locksley Portfolio" />

  {/* Twitter Meta */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Data Visualizer | Emeka Locksley" />
  <meta
    name="twitter:description"
    content="Turn raw transport data into charts, trends, and decisions."
  />
  <meta
    name="twitter:image"
    content="https://llillocksley.github.io/personal-website/imgforabout/Data-Visualizer.jpg"
  />
  <meta
    name="twitter:url"
    content="https://llillocksley.github.io/personal-website/data-visualizer.html"
  />

  {/* Favicon */}
  <link rel="icon" href="/imgforabout/locksley-icon.png" type="image/png" />

  {/* AOS Animation Styles */}
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css"
  />

  {/* Font Awesome (preloaded for performance) */}
  <link
    rel="preload"
    as="style"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    onLoad="this.onload=null;this.rel='stylesheet'"
  />
  <noscript>
    &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" /&gt;
  </noscript>
</Helmet>


      {/* Hero Section */}
      <section
        className="project-hero"
        style={{ backgroundImage: 'url("/imgforabout/data-visualizer-banner.jpg")' }}
        data-aos="fade-up"
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Data Visualizer</h1>
            <p>
              Transform raw transport data into actionable insights with clean, powerful visuals.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="project-overview" data-aos="fade-left">
        <div className="container overview-grid">
          <div className="overview-text">
            <h2>Overview</h2>
            <p>
              The Data Visualizer is a specialized analytics tool designed to convert complex transport-related data
              into easy-to-understand visual dashboards. It supports transport analysts and managers in making
              data-driven decisions that drive performance and accountability.
            </p>
          </div>
          <div className="overview-points">
            <ul>
              <li><i className="fas fa-chart-bar" /> Intuitive charts, graphs, and tables</li>
              <li><i className="fas fa-database" /> Real-time data integration</li>
              <li><i className="fas fa-lightbulb" /> Visual insights for operational planning</li>
              <li><i className="fas fa-bolt" /> Quick anomaly detection and trend mapping</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Use Case Scenarios */}
      <section className="use-cases" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Use Case Scenarios</h2>
          <p className="section-description">
            Below are real-world ways the Data Visualizer empowers decision-making in the transport and logistics space.
          </p>
          <div className="use-case-grid">
            <div className="use-case-card">
              <h3>1. Delivery Route Optimization</h3>
              <p>
                Analyze historical delivery data to identify efficient routes, reduce fuel consumption,
                and improve turnaround time.
              </p>
            </div>
            <div className="use-case-card">
              <h3>2. Compliance &amp; Incident Monitoring</h3>
              <p>
                Visualize trends in incidents or violations, helping teams address recurring issues and remain
                compliant with transport regulations.
              </p>
            </div>
            <div className="use-case-card">
              <h3>3. Maintenance Planning</h3>
              <p>
                Track vehicle usage and breakdown reports to plan predictive maintenance, reducing unplanned downtime
                and cost.
              </p>
            </div>
            <div className="use-case-card">
              <h3>4. Driver Behavior Insights</h3>
              <p>
                Use visual metrics to monitor speeding, harsh braking, and idle time — promoting safety and accountability.
              </p>
            </div>
            <div className="use-case-card">
              <h3>5. Management Reports</h3>
              <p>
                Export visual summaries for high-level presentations and operational meetings, making data easily
                digestible across departments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="key-features" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <p className="section-description">
            The Data Visualizer comes packed with advanced capabilities tailored to transport data analysis.
          </p>
          <div className="features-grid">
            <div className="feature-card" data-aos="zoom-in" data-aos-delay={100}>
              <h3>Interactive Dashboards</h3>
              <p>Customizable views with charts and graphs to explore data dynamically.</p>
            </div>
            <div className="feature-card" data-aos="zoom-in" data-aos-delay={200}>
              <h3>Real-time Data Updates</h3>
              <p>Sync live transport data for up-to-the-minute insights.</p>
            </div>
            <div className="feature-card" data-aos="zoom-in" data-aos-delay={300}>
              <h3>Multiple Data Sources</h3>
              <p>Integrates with various databases and APIs for comprehensive analysis.</p>
            </div>
            <div className="feature-card" data-aos="zoom-in" data-aos-delay={400}>
              <h3>Export &amp; Reporting Tools</h3>
              <p>Generate professional reports in PDF, Excel, and image formats for sharing and meetings.</p>
            </div>
            <div className="feature-card" data-aos="zoom-in" data-aos-delay={500}>
              <h3>Mobile Friendly</h3>
              <p>Responsive layouts ensure clear data visualization on any device.</p>
            </div>
          </div>
        </div>
      </section>

      {/* UI Gallery */}
      <section className="ui-gallery" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">User Interface Gallery</h2>
          <p className="section-description">
            Explore the intuitive and powerful dashboards designed to give transport analysts clear insights at a glance.
          </p>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img
                src="/imgforabout/Daashboard.jpg"
                alt="Data Visualizer Dashboard 1"
                loading="lazy"
                style={{ width: '100%', height: 'auto' }}
              />
              <p className="caption">Overview Dashboard</p>
            </div>
            <div className="gallery-item">
              <img
                src="/imgforabout/Dashbooard.jpg"
                alt="Data Visualizer Dashboard 2"
                loading="lazy"
                style={{ width: '100%', height: 'auto' }}
              />
              <p className="caption">Route Analysis Panel</p>
            </div>
            <div className="gallery-item">
              <img
                src="/imgforabout/Dashhboard.jpg"
                alt="Data Visualizer Dashboard 3"
                loading="lazy"
                style={{ width: '100%', height: 'auto' }}
              />
              <p className="caption">Incident Monitoring</p>
            </div>
            <div className="gallery-item">
              <img
                src="/imgforabout/Data-dashboard.jpg"
                alt="Data Visualizer Dashboard 4"
                loading="lazy"
                style={{ width: '100%', height: 'auto' }}
              />
              <p className="caption">Driver Behavior Insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="project-summary" data-aos="fade-up-right">
        <div className="container">
          <h2 className="section-title">Project Summary</h2>
          <p className="section-description">
            The Data Visualizer project bridges the gap between transport data and real-world decisions.
            Built with clarity and performance in mind, it simplifies complex logistics metrics into a visual format
            that stakeholders can act on.
          </p>
          <div className="summary-highlights">
            <div className="summary-item">
              <i className="fas fa-check-circle" />
              <p>Improved visibility into transport trends and operational patterns.</p>
            </div>
            <div className="summary-item">
              <i className="fas fa-cogs" />
              <p>Optimized route planning and incident tracking through visual cues.</p>
            </div>
            <div className="summary-item">
              <i className="fas fa-clipboard-list" />
              <p>Generated executive-ready reports for stakeholder presentations.</p>
            </div>
            <div className="summary-item">
              <i className="fas fa-layer-group" />
              <p>Seamlessly integrated with existing data sources and fleet systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="project-cta container" data-aos="fade-up">
        <h2>Ready to harness your transport data?</h2>
        <p>
          Contact me to explore how Data Visualizer can elevate your decision-making processes.
        </p>
        <Link
        to="/contact"
        className="cta-btn"
        aria-label="Start a conversation via contact page"
        >
          Start a Conversation
        </Link>
      </section>

      {/* Video Demo */}
      <section className="video-demo" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Watch the Demo</h2>
          <p className="section-description">
            Explore how Data Visualizer works in a short walkthrough video.
          </p>
          <div className="video-wrapper">
            <iframe
              width="100%"
              height={400}
              src="https://www.youtube.com/embed/H88kJ6RCdTI"
              frameBorder={0}
              allowFullScreen
              title="Data Visualizer Demo"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataVisualizer;
