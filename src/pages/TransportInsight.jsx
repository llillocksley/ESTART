import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../components/Footer";
import '../assets/css/style.css';
import { Link } from "react-router-dom";


const TransportInsight = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div>
<Helmet>
  <meta charSet="UTF-8" />
  <title>Transport Insight | Emeka Locksley</title>
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
    content="Explore how transport strategies are evolving with tech, data and real-time logistics."
  />
  <meta
    name="keywords"
    content="Emeka Locksley, Transport Tech, Logistics, Smart Mobility, Data-Driven Transport"
  />
  <meta name="author" content="Emeka Goodness Locksley" />

  {/* Open Graph */}
  <meta property="og:title" content="Transport Insight | Emeka Locksley" />
  <meta
    property="og:description"
    content="Explore how transport strategies are evolving with tech, data and real-time logistics."
  />
  <meta
    property="og:image"
    content="https://llillocksley.github.io/personal-website/imgforabout/Transport-banner.jpg"
  />
  <meta
    property="og:url"
    content="https://llillocksley.github.io/personal-website/transport-insight.html"
  />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Emeka Locksley Portfolio" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Transport Insight | Emeka Locksley" />
  <meta
    name="twitter:description"
    content="Explore how transport strategies are evolving with tech, data and real-time logistics."
  />
  <meta
    name="twitter:image"
    content="https://llillocksley.github.io/personal-website/imgforabout/Transport-banner.jpg"
  />
  <meta
    name="twitter:url"
    content="https://llillocksley.github.io/personal-website/transport-insight.html"
  />
</Helmet>


      {/* Hero Banner */}
      <section
        className="transport-hero"
        style={{
          backgroundImage: 'url("/imgforabout/transport-insight-banner.jpg")',
        }}
        data-aos="fade-up"
      >
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <h1>Transport Insight</h1>
              <p>
                In-depth breakdowns of mobility strategies, logistics innovations,
                and the future of smart transportation systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="transport-intro" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Overview</h2>
          <p>
            Transport Insight offers detailed perspectives on how technology, data,
            and design thinking are reshaping the transport industry. From cost
            tracking to fleet automation, discover how forward-thinking strategies
            bring results.
          </p>
        </div>
      </section>

      {/* Smarter Transport Thinking */}
      <section className="smart-thinking" data-aos="fade-up">
        <div className="container">
          <div className="smart-grid">
            <div className="smart-text">
              <h2>Smarter Transport Thinking</h2>
              <p>
                Staying ahead in logistics means rethinking how we gather,
                visualize, and respond to transport data. From operational delays to
                driver analytics, smarter tools lead to smarter decisions.
              </p>
              <ul>
                <li>
                  <i className="fas fa-check-circle" /> Predict issues before they
                  occur
                </li>
                <li>
                  <i className="fas fa-check-circle" /> Align transport goals with
                  data evidence
                </li>
                <li>
                  <i className="fas fa-check-circle" /> Reduce cost through early
                  insights
                </li>
              </ul>
            </div>
            <div className="smart-image">
              <img
                src="/imgforabout/smart-logistics.jpg"
                alt="Smarter Transport"
                style={{ width: '100%', height: 'auto' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Transport Trends */}
      <section className="transport-trends" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Transport Trends to Watch</h2>
          <p className="section-description">
            Explore emerging patterns redefining transport systems across cities,
            highways, and corporate logistics networks.
          </p>
          <div className="trends-grid">
            <div className="trend-card">
              <h3>1. Real-Time Fleet Visibility</h3>
              <p>
                Using IoT devices and dashboards, companies now track fleet activity
                in real-time for better delivery performance and incident response.
              </p>
            </div>
            <div className="trend-card">
              <h3>2. Predictive Maintenance</h3>
              <p>
                Data from sensors help forecast vehicle failures, reduce downtime,
                and prolong asset lifespan through proactive interventions.
              </p>
            </div>
            <div className="trend-card">
              <h3>3. Driver Behavior Analytics</h3>
              <p>
                New tools are helping managers monitor acceleration, braking, and
                route adherence—improving safety and reducing liability.
              </p>
            </div>
            <div className="trend-card">
              <h3>4. Cost Control Automation</h3>
              <p>
                Automated cost tracking systems detect fuel leakage, optimize usage,
                and reduce paperwork across long-haul transport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data-Backed Decision */}
      <section className="data-backed" data-aos="fade-up">
        <div className="container data-grid">
          <div className="data-text">
            <h2>Making Smarter Decisions With Data</h2>
            <p>
              From fuel management to driver accountability, businesses leveraging
              structured data are seeing measurable gains in efficiency,
              transparency, and cost reduction.
            </p>
            <ul>
              <li>
                <i className="fas fa-check-circle" /> Fuel usage insights &amp;
                wastage detection
              </li>
              <li>
                <i className="fas fa-check-circle" /> Route and delivery performance
                audits
              </li>
              <li>
                <i className="fas fa-check-circle" /> Data-led asset management
              </li>
            </ul>
          </div>
          <div className="data-image">
            <img
              src="/imgforabout/Data-driven.jpg"
              alt="Data-backed Transport Decisions"
              loading="lazy"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* Logistics Innovation */}
      <section className="logistics-innovation" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Innovations Shaping Logistics</h2>
          <div className="innovation-cards">
            <div className="innovation-card">
              <h3>Urban Micro-Mobility</h3>
              <p>
                Electric scooters and bikes are changing last-mile delivery and
                reducing urban congestion.
              </p>
            </div>
            <div className="innovation-card">
              <h3>Telematics Integration</h3>
              <p>
                Combining GPS, diagnostics, and behavior tracking into one system
                enables real-time insights.
              </p>
            </div>
            <div className="innovation-card">
              <h3>Blockchain in Logistics</h3>
              <p>
                Smart contracts improve transparency in delivery chains and reduce
                fraud in freight operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Smart Mobility Trends */}
      <section className="smart-trends" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Global Trends in Smart Mobility</h2>
          <p className="section-description">
            Transport systems across the world are evolving. These trends reveal how
            data, sustainability, and automation are shaping the future.
          </p>
          <div className="trend-grid">
            <div className="trend-card">
              <h3>AI-Powered Traffic Systems</h3>
              <p>
                Artificial intelligence is helping cities reduce congestion through
                predictive traffic control and smart signal timing.
              </p>
            </div>
            <div className="trend-card">
              <h3>Electric Fleets</h3>
              <p>
                Businesses are transitioning to electric vehicles to cut emissions and
                lower operational costs.
              </p>
            </div>
            <div className="trend-card">
              <h3>Mobility-as-a-Service (MaaS)</h3>
              <p>
                Integrated apps combine public transport, ride-hailing, and
                micro-mobility into seamless user journeys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" data-aos="fade-up">
        <div className="container cta-flex">
          <div className="cta-text">
            <h2>Ready to Explore Smarter Transport Solutions?</h2>
            <p>
              Let’s start a conversation on how technology can move your operations
              forward.
            </p>
          </div>
<div className="cta-action">
  <Link to="/contact" className="cta-btn">
    Get In Touch
  </Link>
</div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TransportInsight;
