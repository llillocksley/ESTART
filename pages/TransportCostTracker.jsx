import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../components/Footer";
import '../assets/css/style.css';
import { Link } from "react-router-dom";


const TransportCostTracker = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 800, once: true });

    // Counter animation
    const counters = Array.from(document.querySelectorAll('.counter'));
    const runCounters = () => {
      counters.forEach((counter) => {
        const target = +counter.getAttribute('data-target');
        const updateCount = () => {
          const current = +counter.innerText.replace(/\D/g, '') || 0;
          const increment = Math.ceil(target / 100);
          if (current < target) {
            counter.innerText = `${Math.min(current + increment, target)}`;
            setTimeout(updateCount, 25);
          } else {
            counter.innerText = `${target}`;
          }
        };
        updateCount();
      });
    };

    runCounters();

    // Back-to-top logic
    const backToTop = document.querySelector('.back-to-top');
    const onScroll = () => {
      if (!backToTop) return;
      if (window.scrollY > 300) {
        backToTop.style.display = 'block';
      } else {
        backToTop.style.display = 'none';
      }
    };
    window.addEventListener('scroll', onScroll);
    // cleanup
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div>
<Helmet>
  <meta charSet="UTF-8" />
  <title>Transport Cost Tracker | Emeka Locksley</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* Favicon */}
  <link rel="icon" href="/imgforabout/locksley-icon.png" type="image/png" />

  {/* Fonts & Icons */}
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
    content="Track, manage and optimize your transport budget with real-time visual tools."
  />
  <meta
    name="keywords"
    content="Transport Budgeting, Cost Tracking, Emeka Locksley, Logistics Tools, Fleet Cost Management"
  />
  <meta name="author" content="Emeka Goodness Locksley" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Transport Cost Tracker | Emeka Locksley"
  />
  <meta
    property="og:description"
    content="Track, manage and optimize your transport budget with real-time visual tools."
  />
  <meta
    property="og:image"
    content="https://llillocksley.github.io/personal-website/imgforabout/cost-tracker.jpg"
  />
  <meta
    property="og:url"
    content="https://llillocksley.github.io/personal-website/transport-cost-tracker.html"
  />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Emeka Locksley Portfolio" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Transport Cost Tracker | Emeka Locksley" />
  <meta
    name="twitter:description"
    content="Track, manage and optimize your transport budget with real-time visual tools."
  />
  <meta
    name="twitter:image"
    content="https://llillocksley.github.io/personal-website/imgforabout/cost-tracker.jpg"
  />
  <meta
    name="twitter:url"
    content="https://llillocksley.github.io/personal-website/transport-cost-tracker.html"
  />
</Helmet>


      {/* Hero Section */}
      <section
        className="project-hero"
        style={{
          backgroundImage: 'url("/imgforabout/cost-tracker.jpg")',
        }}
        data-aos="fade-up"
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Transport Cost Tracker</h1>
            <p>
              Track and optimize transport expenses using intelligent cost
              visualization tools.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="project-overview" data-aos="fade-up">
        <div className="container overview-grid">
          <div className="overview-text">
            <h2>Project Overview</h2>
            <p>
              The Transport Cost Tracker enables businesses to monitor and
              manage vehicle-related expenses — from fuel to repairs and route
              efficiency — all on one smart dashboard.
            </p>
          </div>
          <div className="overview-points">
            <ul>
              <li>
                <i className="fas fa-gas-pump" /> Fuel and route efficiency
                tracking
              </li>
              <li>
                <i className="fas fa-tools" /> Maintenance cost visualization
              </li>
              <li>
                <i className="fas fa-receipt" /> Expense reports and budget
                tools
              </li>
              <li>
                <i className="fas fa-chart-line" /> Real-time analytics and
                alerts
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Use Case Scenarios */}
      <section className="use-cases" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Use Case Scenarios</h2>
          <div className="use-case-grid">
            <div className="use-case-card">
              <h3>Fleet Budget Management</h3>
              <p>
                Monitor transport budgets across multiple vehicles and
                departments.
              </p>
            </div>
            <div className="use-case-card">
              <h3>Fuel Cost Optimization</h3>
              <p>
                Track fuel usage, detect wastage, and reduce overconsumption
                costs.
              </p>
            </div>
            <div className="use-case-card">
              <h3>Route Performance Insight</h3>
              <p>
                Compare route expenses and identify the most efficient delivery
                paths.
              </p>
            </div>
            <div className="use-case-card">
              <h3>Maintenance Planning</h3>
              <p>
                Forecast repair schedules and balance cost with uptime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section" data-aos="fade-up">
        <div className="container stats-grid">
          <div className="stat-item">
            <h3>
              <span className="counter" data-target={1200}>
                0
              </span>
              +
            </h3>
            <p>Cost Logs Tracked</p>
          </div>
          <div className="stat-item">
            <h3>
              <span className="counter" data-target={98}>
                0
              </span>
              %
            </h3>
            <p>Tracking Accuracy</p>
          </div>
          <div className="stat-item">
            <h3>
              <span className="counter" data-target={250}>
                0
              </span>
            </h3>
            <p>Fleet Profiles Managed</p>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="cost-features" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Key Functional Features</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <i className="fas fa-gas-pump" />
              <h3>Fuel Spend Analysis</h3>
              <p>
                Track fuel usage and identify inefficiencies to improve fuel
                economy.
              </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-road" />
              <h3>Route Cost Mapping</h3>
              <p>
                Compare the cost of different delivery routes using historical
                and real-time data.
              </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-wrench" />
              <h3>Maintenance Cost Tracker</h3>
              <p>
                Record repairs and scheduled services to avoid unexpected
                breakdowns.
              </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-chart-line" />
              <h3>Monthly Spend Reports</h3>
              <p>
                Generate clear summaries and visual charts for team or executive
                use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="cost-gallery" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Cost Tracking Dashboards</h2>
          <p className="section-description">
            Get a visual overview of how transport costs are analyzed — from fuel
            consumption to route efficiency.
          </p>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img
                src="/imgforabout/Fuel-Analysis-Dashboard.jpg"
                alt="Fuel Analysis Dashboard"
                loading="lazy"
                style={{ width: '100%', height: 'auto' }}
              />
              <p>Fuel Consumption Overview</p>
            </div>
            <div className="gallery-item">
              <img
                src="/imgforabout/Route-Cost-Comparison.jpg"
                alt="Route Cost Comparison"
                loading="lazy"
                style={{ width: '100%', height: 'auto' }}
              />
              <p>Route Cost Comparison Chart</p>
            </div>
            <div className="gallery-item">
              <img
                src="/imgforabout/Maintenance-Spend-Report.jpg"
                alt="Maintenance Spend Report"
                loading="lazy"
                style={{ width: '100%', height: 'auto' }}
              />
              <p>Maintenance Cost Breakdown</p>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Report */}
      <section className="report-download" data-aos="fade-up">
        <div className="container report-container">
          <div className="report-text">
            <h2>Download Sample Report</h2>
            <p>
              Explore a professionally structured transport cost report to see how
              insights are captured and presented.
            </p>
            <a 
            href="/docs/sample-cost-report.pdf"
            className="download-btn"
            download
            >
              <i className="fas fa-file-download" /> Download PDF
            </a>
          </div>
          <div className="report-image">
            <img
              src="/imgforabout/Maintenance-Report.jpg"
              alt="Sample Report Preview"
              loading="lazy"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* Summary & CTA */}
      <section className="final-summary" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Smarter Cost Management Starts Here</h2>
          <p className="summary-text">
            The Transport Cost Tracker empowers teams to understand cost drivers,
            reduce waste, and improve accountability with reliable data-driven
            insights. Whether you manage five vehicles or five hundred, this tool
            adapts to your operations and drives efficiency.
          </p>
          <a href="/Contact" className="cta-btn">
            Start a Conversation
          </a>
        </div>
      </section>

      <Footer />

      {/* Back to top control (you can place an element somewhere in layout) */}
      <div className="back-to-top" style={{ display: 'none', position: 'fixed', bottom: 30, right: 30, cursor: 'pointer' }}>
        ↑
      </div>
    </div>
  );
};

export default TransportCostTracker;
