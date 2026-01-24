import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../components/Footer";
import '../assets/css/style.css';
import { Link } from "react-router-dom";


const SmartCostAnalyzer = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div>
<Helmet>
  <meta charSet="UTF-8" />
  <title>Smart Transport Cost Analyzer | Emeka Locksley</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />

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
    content="Smart Transport Cost Analyzer by Emeka Locksley — optimize fleet spending, forecast routes, and reduce avoidable transport waste."
  />
  <meta
    name="keywords"
    content="Smart Transport Cost, Emeka Locksley, Fleet Analytics, Route Cost, Transport Analyzer, Vehicle Budget Tool"
  />
  <meta name="author" content="Emeka Goodness Locksley" />

  {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
  <meta
    property="og:title"
    content="Smart Transport Cost Analyzer | Emeka Locksley"
  />
  <meta
    property="og:description"
    content="Explore how this tool helps transport managers track, analyze, and predict vehicle-related expenses intelligently."
  />
  <meta
    property="og:image"
    content="https://llillocksley.github.io/personal-website/imgforabout/smart-analyzer-banner.jpg"
  />
  <meta
    property="og:url"
    content="https://llillocksley.github.io/personal-website/smart-cost-analyzer.html"
  />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Emeka Locksley Portfolio" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Smart Transport Cost Analyzer | Emeka Locksley"
  />
  <meta
    name="twitter:description"
    content="Optimize and forecast your transport budget with data insights from Emeka Locksley's intelligent analyzer."
  />
  <meta
    name="twitter:image"
    content="https://llillocksley.github.io/personal-website/imgforabout/smart-analyzer-banner.jpg"
  />
  <meta
    name="twitter:url"
    content="https://llillocksley.github.io/personal-website/smart-cost-analyzer.html"
  />
</Helmet>


      {/* Hero */}
      <section
        className="project-hero"
        style={{
          backgroundImage: 'url("/imgforabout/smart-analyzer-banner.jpg")',
        }}
        data-aos="fade-up"
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Smart Transport Cost Analyzer</h1>
            <p>
              Analyze, predict, and reduce transport expenses using intelligent
              insights.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="project-overview" data-aos="fade-up">
        <div className="container overview-grid">
          <div className="overview-text">
            <h2>What Is This Tool About?</h2>
            <p>
              The Smart Transport Cost Analyzer helps logistics teams and fleet
              operators visualize where money is spent, what’s being wasted, and how
              to make better decisions. From historical expense patterns to real-time
              optimization suggestions, this analyzer offers a complete view into
              transport cost management.
            </p>
          </div>
          <div className="overview-points">
            <ul>
              <li>
                <i className="fas fa-bullseye" /> Focused cost breakdown by category
              </li>
              <li>
                <i className="fas fa-brain" /> Predictive analytics for smarter
                planning
              </li>
              <li>
                <i className="fas fa-route" /> Route cost intelligence with
                suggestions
              </li>
              <li>
                <i className="fas fa-gauge-high" /> Real-time tracking support
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="cost-features" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Key Functional Features</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <i className="fas fa-chart-pie" />
              <h3>Predictive Cost Modeling</h3>
              <p>
                Use machine-learned patterns to predict future costs and prevent
                overruns.
              </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-road" />
              <h3>Smart Route Optimization</h3>
              <p>
                Get suggestions on routes that minimize toll, fuel, and time
                expenses.
              </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-gas-pump" />
              <h3>Fuel Burn Analytics</h3>
              <p>
                Track fuel trends over time and detect unusual consumption behavior.
              </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-calendar-check" />
              <h3>Maintenance Forecast</h3>
              <p>
                Plan and budget for recurring vehicle costs based on actual usage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="cost-gallery" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Intelligent Dashboards</h2>
          <p className="section-description">
            Preview how the system analyzes trends, categorizes spend, and recommends
            smarter moves.
          </p>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img
                src="/imgforabout/Fuel-cost-pattern.jpg"
                alt="Fuel Pattern Dashboard"
                loading="lazy"
                style={{ width: '100%', height: 'auto' }}
              />
              <p>Fuel Cost Pattern Analysis</p>
            </div>
            <div className="gallery-item">
              <img
                src="/imgforabout/Route-Cost-Optimization.jpg"
                alt="Route Saver Visual"
                loading="lazy"
                style={{ width: '100%', height: 'auto' }}
              />
              <p>Route Cost Optimization Map</p>
            </div>
            <div className="gallery-item">
              <img
                src="/imgforabout/Predictive-Cost-Chart.jpg"
                alt="Predictive Cost Chart"
                loading="lazy"
                style={{ width: '100%', height: 'auto' }}
              />
              <p>Future Cost Modeling</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why it Matters */}
      <section className="why-this-tool" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Why This Tool Matters</h2>
          <p className="summary-text">
            Research shows over <strong>22% of transport budgets</strong> are lost to
            avoidable overspending. This analyzer helps eliminate waste and improve
            decision-making by offering visual cost insight, alerts, and smart
            suggestions tailored to each fleet.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="tool-capabilities" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">What This Tool Can Do</h2>
          <div className="capability-grid">
            <div className="capability-card">
              <i className="fas fa-gas-pump" />
              <h3>Fuel Cost Prediction</h3>
              <p>
                Forecast future fuel expenses based on usage trends and seasonal
                patterns.
              </p>
            </div>
            <div className="capability-card">
              <i className="fas fa-tools" />
              <h3>Maintenance Alerts</h3>
              <p>
                Stay updated on upcoming service schedules and avoid costly
                breakdowns.
              </p>
            </div>
            <div className="capability-card">
              <i className="fas fa-money-bill-wave" />
              <h3>Toll &amp; Fee Tracking</h3>
              <p>
                Track all toll expenses and unexpected route charges in real time.
              </p>
            </div>
            <div className="capability-card">
              <i className="fas fa-calculator" />
              <h3>Budget Summary Generator</h3>
              <p>
                Generate comprehensive summaries for team reviews and financial
                audits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="before-after" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Before vs. After Using the Analyzer</h2>
          <p className="section-description">
            See how transport cost tracking improves — from disconnected spreadsheets
            to organized, intelligent dashboards.
          </p>
          <div className="comparison-grid">
            <div className="comparison-card">
              <h3>Before</h3>
              <img
                src="/imgforabout/Manual-spreadsheet.jpg"
                alt="Manual Spreadsheet Example"
                loading="lazy"
                style={{ width: '100%', height: 'auto' }}
              />
              <p className="label">
                Manual data entry, hard-to-read, error-prone.
              </p>
            </div>
            <div className="comparison-card">
              <h3>After</h3>
              <img
                src="/imgforabout/Dashboard-insights.jpg"
                alt="Analyzer Dashboard View"
                loading="lazy"
                style={{ width: '100%', height: 'auto' }}
              />
              <p className="label">
                Smart dashboard, visual trends, cost alerts in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Tech */}
      <section className="testimonials-tech" data-aos="fade-up">
        <div className="container dual-section">
          {/* Testimonials */}
          <div className="testimonial-box">
            <h2 className="section-title">What Users Are Saying</h2>
            <div className="testimonial-item">
              <p className="testimonial-quote">
                “We used to manage cost on spreadsheets — now everything’s visible,
                fast, and mistake-free.”
              </p>
              <p className="testimonial-author">
                — Grace Okoro, Logistics Manager
              </p>
            </div>
            <div className="testimonial-item">
              <p className="testimonial-quote">
                “Fuel spend dropped by 18% in 2 months. The analyzer pays for
                itself.”
              </p>
              <p className="testimonial-author">
                — Chuka Maduka, Fleet Coordinator
              </p>
            </div>
          </div>
          {/* Technologies Used */}
          <div className="tech-box">
            <h2 className="section-title">Technologies Used</h2>
            <div className="tech-icons">
              <div className="tech-item">
                <i className="fab fa-react" /> <span>React JS</span>
              </div>
              <div className="tech-item">
                <i className="fas fa-chart-pie" /> <span>Chart.js</span>
              </div>
              <div className="tech-item">
                <i className="fas fa-server" /> <span>Node.js</span>
              </div>
              <div className="tech-item">
                <i className="fas fa-database" /> <span>MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-summary" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">
            Transform How You Manage Transport Costs
          </h2>
          <p className="summary-text">
            Whether you manage a growing delivery fleet or oversee logistics for a
            national network, the Smart Transport Cost Analyzer adapts to your goals.
            Access smarter tracking, predictive charts, and clean reports — all built
            for real impact.
          </p>
<Link to="/contact" className="cta-btn">
  Request Access or Demo
</Link>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SmartCostAnalyzer;
