import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../components/Footer";
import '../assets/css/style.css';
import { Link } from "react-router-dom";


const FleetTracker = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 800, once: true });

    // Lightbox logic
    const lightboxLinks = Array.from(document.querySelectorAll('.lightbox'));
    const overlay = document.getElementById('lightboxOverlay');
    const overlayImage = document.getElementById('lightboxImage');

    const onLinkClick = (e) => {
      e.preventDefault();
      if (overlay && overlayImage) {
        overlayImage.src = e.currentTarget.href;
        overlay.style.display = 'flex';
      }
    };

    lightboxLinks.forEach((link) => link.addEventListener('click', onLinkClick));

    const onOverlayClick = () => {
      if (overlay && overlayImage) {
        overlay.style.display = 'none';
        overlayImage.src = '';
      }
    };
    overlay?.addEventListener('click', onOverlayClick);

    return () => {
      lightboxLinks.forEach((link) => link.removeEventListener('click', onLinkClick));
      overlay?.removeEventListener('click', onOverlayClick);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const status = document.getElementById('formStatus');

    // Basic validation
    const name = form.name?.value.trim();
    const email = form._replyto?.value.trim();
    const message = form.message?.value.trim();

    if (!name || !email || !message) {
      if (status) {
        status.textContent = 'Please fill in all required fields.';
        status.style.color = 'red';
      }
      return;
    }

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        if (status) {
          status.textContent = 'Thank you! Your message has been sent.';
          status.style.color = '#007bff';
        }
        form.reset();
      } else {
        const resData = await response.json();
        if (status) {
          if (resData.errors) {
            status.textContent = resData.errors.map((err) => err.message).join(', ');
          } else {
            status.textContent = 'Oops! There was a problem sending your message.';
          }
          status.style.color = 'red';
        }
      }
    } catch {
      if (status) {
        status.textContent = 'Oops! There was a problem sending your message.';
        status.style.color = 'red';
      }
    }
  };

  return (
    <div>
      <Helmet>
  <meta charSet="UTF-8" />
  <title>Fleet Tracker | Emeka Locksley</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  
  {/* Favicon */}
  <link rel="icon" href="/imgforabout/locksley-icon.png" type="image/png" />

  {/* Font Awesome CDN */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    integrity="sha512-pO5WkXbPlkOan69CMrN3jK9jR3DhDJWXYM5j9HJKlo3UYqOY0JKc7goPNuPqz7fnPK4FFU3F1JCkOzDsyQGfvw=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />

  {/* AOS Animation CSS */}
  <link
    href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css"
    rel="stylesheet"
  />

  {/* SEO Meta Tags */}
  <meta
    name="description"
    content="Real-time fleet management system built by Emeka Locksley to improve logistics visibility, monitor vehicles, and enhance transport control through data and analytics."
  />
  <meta
    name="keywords"
    content="Emeka Locksley, Fleet Tracker, Transport Tech, Vehicle Monitoring, Fleet Visibility, Logistics, Data-Driven Transport, Smart Mobility"
  />
  <meta name="author" content="Emeka Goodness Locksley" />

  {/* Open Graph (Facebook & LinkedIn) */}
  <meta property="og:title" content="Fleet Tracker | Emeka Locksley" />
  <meta
    property="og:description"
    content="Real-time fleet management for logistics visibility and control."
  />
  <meta
    property="og:image"
    content="https://llillocksley.github.io/personal-website/imgforabout/Fleet-bg.jpg"
  />
  <meta
    property="og:url"
    content="https://llillocksley.github.io/personal-website/fleet-tracker.html"
  />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Emeka Locksley Portfolio" />

  {/* Twitter Card Meta */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Fleet Tracker | Emeka Locksley" />
  <meta
    name="twitter:description"
    content="Real-time fleet management for logistics visibility and control."
  />
  <meta
    name="twitter:image"
    content="https://llillocksley.github.io/personal-website/imgforabout/Fleet-bg.jpg"
  />
  <meta
    name="twitter:url"
    content="https://llillocksley.github.io/personal-website/fleet-tracker.html"
  />
</Helmet>


      {/* Hero Section */}
      <section
        className="project-hero"
        style={{ backgroundImage: 'url("/imgforabout/fleet-bg.jpg")' }}
        data-aos="fade-up"
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Fleet Tracker</h1>
            <p>
              A real-time fleet management solution built for operational excellence
              and visibility.
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="project-overview section" data-aos="fade-up">
        <div className="container">
          <h2>Project Overview</h2>
          <p>
            Fleet Tracker is a comprehensive vehicle monitoring system developed to
            help logistics and transport companies gain full control of their
            operations. From real-time GPS tracking to maintenance alerts and trip
            analytics, the solution ensures better efficiency, transparency, and
            performance across fleets of all sizes.
          </p>
        </div>
      </section>

      <section className="project-overview container" data-aos="fade-right">
        <div className="overview-text">
          <h2>About Fleet Tracker</h2>
          <p>
            Fleet Tracker is a cutting-edge solution designed to optimize fleet
            management, improve vehicle tracking accuracy, reduce operational costs,
            and increase efficiency through real-time data analytics.
          </p>
          <p>
            Our platform provides insightful dashboards, alerts, and reporting to help
            logistics companies make smarter decisions faster.
          </p>
        </div>
        <div className="overview-image">
          <img
            src="/imgforabout/FleettrackerOverview.jpg"
            alt="Fleet Tracker Overview"
            loading="lazy"
          />

        </div>
      </section>

      {/* Key Features */}
      <section className="key-features section" data-aos="fade-up">
        <div className="container">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-box">
              <i className="fas fa-map-marker-alt" />
              <h3>Real-Time GPS Tracking</h3>
              <p>
                Monitor fleet movements live on a dynamic map interface for improved
                visibility and route planning.
              </p>
            </div>
            <div className="feature-box">
              <i className="fas fa-tools" />
              <h3>Maintenance Alerts</h3>
              <p>
                Receive timely reminders for vehicle servicing and diagnostics,
                reducing downtime and costs.
              </p>
            </div>
            <div className="feature-box">
              <i className="fas fa-chart-line" />
              <h3>Trip Analytics</h3>
              <p>
                Access detailed reports on fuel usage, driver behavior, and delivery
                timelines.
              </p>
            </div>
            <div className="feature-box">
              <i className="fas fa-lock" />
              <h3>Secure Access</h3>
              <p>
                Role-based dashboards and login system to ensure secure access for
                fleet managers and admins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="technologies-used section" data-aos="fade-up">
        <div className="container">
          <h2>Technologies Used</h2>
          <p className="tech-intro">
            This solution was built with modern and reliable technologies to ensure
            performance, scalability, and maintainability.
          </p>
          <div className="tech-grid">
            <div className="tech-card">
              <img src="/icons/HTML5.webp" alt="HTML5" />
              <p>HTML5</p>
            </div>
            <div className="tech-card">
              <img src="/icons/CSS3.webp" alt="CSS3" />
              <p>CSS3</p>
            </div>
            <div className="tech-card">
              <img src="/icons/JavaScript.webp" alt="JavaScript" />
              <p>JavaScript</p>
            </div>
            <div className="tech-card">
              <img src="/icons/GitHub.webp" alt="GitHub" />
              <p>GitHub</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Project Impact</h2>
          <p className="section-description">
            Fleet Tracker was developed to enhance operational efficiency and ensure
            real-time logistics monitoring for transport and logistics companies.
            Here's how it's making a difference:
          </p>
          <div className="impact-grid">
            <div className="impact-card">
              <h3>⏱️ 68% Faster Deliveries</h3>
              <p>
                Real-time vehicle tracking helps dispatch managers optimize delivery
                routes and avoid traffic delays.
              </p>
            </div>
            <div className="impact-card">
              <h3>💰 25% Cost Reduction</h3>
              <p>
                Minimized fuel wastage and idle time thanks to automated route planning
                and driver behavior insights.
              </p>
            </div>
            <div className="impact-card">
              <h3>📈 3x Operational Visibility</h3>
              <p>
                Managers can now view all fleet activities on a single dashboard with
                status alerts and reports.
              </p>
            </div>
            <div className="impact-card">
              <h3>🔐 Data-Driven Decisions</h3>
              <p>
                Accurate data collection from trip history helps make better decisions
                on maintenance and logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo */}
      <section className="demo-preview" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Live Demo Preview</h2>
          <p className="section-description">
            Experience the real-time capabilities of Fleet Tracker through our
            interactive live demo. Designed for logistics managers, dispatch teams,
            and businesses that rely on efficient transport systems.
          </p>
          <div className="preview-image">
            <img
              src="/imgforabout/Fleet-Track live.jpg"
              loading="lazy"
              alt="Fleet Tracker UI Preview"
            />
          </div>
          <a
            href="https://your-demo-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="demo-btn"
          >
            Launch Demo
          </a>
        </div>
      </section>

      {/* Screenshot Gallery */}
      <section className="screenshot-gallery" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">UI Screenshots</h2>
          <p className="section-description">
            Here are key UI highlights from the Fleet Tracker dashboard and analytics
            views:
          </p>
          <div className="gallery-grid">
            <a href="/imgforabout/dashboard-view.png" className="lightbox">
              <img
                src="/imgforabout/dashboard-view.png"
                alt="Dashboard Screenshot"
                loading="lazy"
              />
            </a>
            <a
              href="/imgforabout/Driver-Behaviour-analysis.png"
              className="lightbox"
            >
              <img
                src="/imgforabout/Driver-Behaviour-analysis.png"
                alt="Driver Analytics Screenshot"
                loading="lazy"
              />

            </a>
            <a href="/imgforabout/Vehicle-report.png" className="lightbox">
              <img
                src="/imgforabout/Vehicle-report.png"
                alt="Vehicle Performance Screenshot"
                loading="lazy"
              />
              
            </a>
          </div>
        </div>
      </section>

      {/* Vehicle Analysis */}
      <section className="vehicle-analysis" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Vehicle Analysis</h2>
          <p className="section-description">
            Gain data-driven insights into your fleet's performance, fuel usage, and
            driver behavior. Improve efficiency, reduce costs, and make informed
            decisions with real-time analytics.
          </p>
          <div className="analysis-grid">
            <div className="analysis-card">
              <i className="fas fa-tachometer-alt" />
              <h3>Speed Trends</h3>
              <p>
                Track average and peak speeds, over-speeding events, and safe driving
                scores.
              </p>
            </div>
            <div className="analysis-card">
              <i className="fas fa-gas-pump" />
              <h3>Fuel Consumption</h3>
              <p>
                Monitor fuel usage per trip, detect wastage patterns, and optimize
                routes.
              </p>
            </div>
            <div className="analysis-card">
              <i className="fas fa-car-crash" />
              <h3>Driver Behavior</h3>
              <p>
                Analyze harsh braking, rapid acceleration, and idle time to assess risk
                and train drivers.
              </p>
            </div>
            <div className="analysis-card">
              <i className="fas fa-tools" />
              <h3>Maintenance Alerts</h3>
              <p>
                Receive proactive alerts on engine diagnostics, servicing schedules,
                and fault detection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Driver Analysis */}
      <section className="driver-analysis" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">
            Driver Performance &amp; Behavior Analysis
          </h2>
          <p className="section-description">
            Gain actionable insights into driver habits, safety scores, and on-road
            behavior. Fleet Tracker helps you monitor risky driving, fuel consumption,
            idle time, and route efficiency for optimal fleet performance.
          </p>
          <div className="analysis-grid">
            <div className="analysis-card">
              <i className="fas fa-tachometer-alt" />
              <h3>Speed Monitoring</h3>
              <p>Track over-speeding incidents and ensure adherence to road limits.</p>
            </div>
            <div className="analysis-card">
              <i className="fas fa-gas-pump" />
              <h3>Fuel Efficiency</h3>
              <p>
                Detect unnecessary idling, harsh braking, and fuel-wasting behaviors.
              </p>
            </div>
            <div className="analysis-card">
              <i className="fas fa-route" />
              <h3>Route Optimization</h3>
              <p>
                Analyze trip patterns and reroute for faster, cost-effective
                deliveries.
              </p>
            </div>
            <div className="analysis-card">
              <i className="fas fa-user-shield" />
              <h3>Driver Scoring</h3>
              <p>
                Get driver safety scores based on behavior trends and compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section className="maintenance-section" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Maintenance &amp; Health Diagnostics</h2>
          <p className="section-description">
            Fleet Tracker ensures all vehicles stay roadworthy with smart diagnostics
            and service alerts. Reduce downtime, avoid costly repairs, and increase
            fleet lifespan through proactive maintenance scheduling.
          </p>
          <div className="maintenance-grid">
            <div className="maintenance-card">
              <i className="fas fa-tools" />
              <h3>Service Reminders</h3>
              <p>
                Automated alerts for oil changes, tire rotations, and routine
                servicing.
              </p>
            </div>
            <div className="maintenance-card">
              <i className="fas fa-car-crash" />
              <h3>Fault Detection</h3>
              <p>Get notified when fault codes are triggered or vehicle systems act up.</p>
            </div>
            <div className="maintenance-card">
              <i className="fas fa-thermometer-half" />
              <h3>Health Monitoring</h3>
              <p>
                Monitor engine temperature, battery status, fluid levels, and more.
              </p>
            </div>
            <div className="maintenance-card">
              <i className="fas fa-calendar-check" />
              <h3>Service Logs</h3>
              <p>Keep digital records of past maintenance and inspection history.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome & CTA */}
      <section className="project-outcome-section">
        <div className="container">
          <h2 className="section-title">Project Outcomes &amp; Benefits</h2>
          <div className="outcome-content">
            <p>
              The Fleet Tracker project resulted in a measurable improvement in
              logistics coordination and vehicle oversight. By integrating real-time
              GPS, intelligent dispatching, and route optimization, users experienced
              up to <strong>30% reduction in fuel usage</strong> and a{' '}
              <strong>40% improvement in delivery efficiency</strong>.
            </p>
            <ul className="outcome-list">
              <li>
                <i className="fas fa-check-circle" /> Enhanced fleet visibility with
                real-time location tracking
              </li>
              <li>
                <i className="fas fa-check-circle" /> Reduced delivery delays and
                driver idle time
              </li>
              <li>
                <i className="fas fa-check-circle" /> Lowered operational costs
                through route optimization
              </li>
              <li>
                <i className="fas fa-check-circle" /> Centralized communication and
                dispatch system
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="project-cta container" data-aos="fade-up">
        <h2>Ready to transform your fleet management?</h2>
        <p>Contact me to discuss how Fleet Tracker can help your business thrive.</p>
        <a
          href="/RequestDemo"
          className="cta-btn"
          aria-label="Start a conversation via contact page"
        >
          Start a Conversation
        </a>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section container" data-aos="fade-up">
        <h2>Contact Me About Fleet Tracker</h2>
        <p>
          If you have questions or want to discuss a project, please fill out the
          form below.
        </p>
        <form
          id="fleetContactForm"
          action="https://formspree.io/f/xwpblykr"
          method="POST"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">
              Full Name <span>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email Address <span>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="_replyto"
              required
              placeholder="Your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">
              Message <span>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Write your message here..."
              defaultValue={''}
            />
          </div>
          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </form>
        <div id="formStatus" role="alert" aria-live="polite" />
      </section>

      {/* Lightbox Overlay */}
      <div
        id="lightboxOverlay"
        style={{
          display: 'none',
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.8)',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
        }}
      >
        <img
          id="lightboxImage"
          alt="Full Preview"
          style={{ maxWidth: '90%', maxHeight: '90%', borderRadius: '10px' }}
        />
      </div>

      <Footer />
    </div>
  );
};

export default FleetTracker;
