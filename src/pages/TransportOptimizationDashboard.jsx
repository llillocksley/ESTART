import { Helmet } from "react-helmet-async";
import React, { useEffect } from "react";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/style.css";
import "../assets/css/Transport-dashboard.css";
import { Link } from "react-router-dom";


const TransportOptimizationDashboard = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="dashboard-page">
<Helmet>
        <meta charSet="UTF-8" />
        <title>Contact | Emeka Locksley Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* SEO Meta Tags */}
        <meta
          name="description"
          content="Get in touch with Emeka Locksley for portfolio collaborations, transport management solutions, and project inquiries."
        />
        <meta
          name="keywords"
          content="Contact Emeka Locksley, Portfolio, Transport Tech, Fleet Management, Data Visualizer, Case Organizer"
        />
        <meta name="author" content="Emeka Goodness Locksley" />

        {/* Open Graph Meta Tags (for Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="Contact | Emeka Locksley Portfolio" />
        <meta
          property="og:description"
          content="Reach out to Emeka Locksley for professional inquiries, collaborations, and portfolio discussions."
        />
        <meta property="og:image" content="/imgforabout/forHTML.jpg" />
        <meta
          property="og:url"
          content="https://llillocksley.github.io/personal-website/contact"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Emeka Locksley Portfolio" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact | Emeka Locksley Portfolio"
        />
        <meta
          name="twitter:description"
          content="Get in touch with Emeka Locksley for portfolio, transport management, and project collaborations."
        />
        <meta name="twitter:image" content="/imgforabout/forHTML.jpg" />

        {/* Favicon */}
        <link
          rel="icon"
          href="/imgforabout/locksley-icon.png"
          type="image/png"
        />

        {/* External CSS / Fonts */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css"
        />
        <link
          rel="preload"
          as="style"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />

        {/* Optional local stylesheet */}
        <link rel="stylesheet" href="/assets/css/style.css" />
      </Helmet>


{/* ✅ Header */}
<header className="dashboard-header" data-aos="fade-down">
  <div className="dashboard-hero-overlay">
    <div className="dashboard-hero-content">
      <h1>Transport Optimization Dashboard</h1>
      <p>
        Empowering businesses to reduce costs, maximize efficiency, and
        gain real-time visibility into their logistics operations.
      </p>
      <Link to="/RequestDemo" className="btn-primary">
        Request a Demo
      </Link>
    </div>
  </div>
</header>

{/* ✅ Main Content */}
<main className="dashboard-content">
  {/* Step 1: Intro */}
  <section className="dashboard-intro container" data-aos="fade-up">
    <h2>Overview</h2>
    <p>
      The Transport Optimization Dashboard combines data-driven insights
      with modern visualization tools to help companies make informed
      decisions. Whether it’s tracking fleet movement, monitoring
      operational KPIs, or predicting cost drivers, this dashboard
      equips businesses with the tools they need to stay ahead.
    </p>
    <p>
      Designed for logistics, energy, and service-based companies, this
      solution enhances transparency, improves planning, and ensures
      resources are fully utilized. With integrated performance metrics
      and predictive analytics, the dashboard becomes a key enabler of
      sustainable growth.
    </p>
  </section>

  {/* ✅ Key Features Section */}
<section className="dashboard-features" data-aos="fade-up">
  <div className="container">
    <h2>Key Features</h2>
    <p className="section-intro">
      The Transport Optimization Dashboard provides a wide range of tools
      that deliver clarity, efficiency, and control across your logistics
      operations.
    </p>

    <div className="features-grid">
      <div className="feature-card">
        <i className="fas fa-truck-loading"></i>
        <h3>Fleet Monitoring</h3>
        <p>
          Real-time tracking of fleet movements to improve visibility and
          reduce delays.
        </p>
      </div>

      <div className="feature-card">
        <i className="fas fa-route"></i>
        <h3>Route Optimization</h3>
        <p>
          Intelligent algorithms suggest the most cost-effective and
          time-saving routes.
        </p>
      </div>

      <div className="feature-card">
        <i className="fas fa-chart-line"></i>
        <h3>Cost Analysis</h3>
        <p>
          Break down fuel usage, tolls, and maintenance to identify key
          cost drivers.
        </p>
      </div>

      <div className="feature-card">
        <i className="fas fa-shield-alt"></i>
        <h3>Compliance & Safety</h3>
        <p>
          Track driver behavior, ensure safety compliance, and reduce
          risks on the road.
        </p>
      </div>
    </div>
  </div>
</section>

{/* ✅ Impact / Stats Section */}
<section className="dashboard-stats" data-aos="fade-up">
  <div className="container stats-grid">
    <div className="stat-card">
      <h3>50+</h3>
      <p>Fleets Optimized</p>
    </div>
    <div className="stat-card">
      <h3>20%</h3>
      <p>Cost Reduction</p>
    </div>
    <div className="stat-card">
      <h3>99.9%</h3>
      <p>On-time Delivery</p>
    </div>
    <div className="stat-card">
      <h3>10+</h3>
      <p>Partner Companies</p>
    </div>
  </div>
</section>

{/* ✅ Use Case Scenarios Section */}
<section className="dashboard-usecases" data-aos="fade-up">
  <div className="container">
    <h2 className="section-title">Use Case Scenarios</h2>
    <div className="usecase-grid">
      <div className="usecase-card">
        <i className="fas fa-truck"></i>
        <h3>Fleet Management</h3>
        <p>
          Monitor fleet utilization, track vehicle health, and reduce downtime
          with predictive insights.
        </p>
      </div>

      <div className="usecase-card">
        <i className="fas fa-route"></i>
        <h3>Route Optimization</h3>
        <p>
          Identify the fastest, most cost-effective delivery routes to save fuel
          and time.
        </p>
      </div>

      <div className="usecase-card">
        <i className="fas fa-chart-line"></i>
        <h3>Performance Monitoring</h3>
        <p>
          Track KPIs like delivery time, fuel efficiency, and driver performance
          in real-time.
        </p>
      </div>

      <div className="usecase-card">
        <i className="fas fa-warehouse"></i>
        <h3>Logistics Planning</h3>
        <p>
          Improve warehouse-to-delivery coordination and ensure timely dispatch
          of goods.
        </p>
      </div>
    </div>
  </div>
</section>

{/* ✅ Client Impact / Benefits Section */}
<section className="dashboard-benefits" data-aos="fade-up">
  <div className="container">
    <h2 className="section-title">Business Benefits</h2>
    <div className="benefits-grid">
      <div className="benefit-card">
        <i className="fas fa-gas-pump"></i>
        <h3>Reduced Fuel Costs</h3>
        <p>
          Smart route planning and driver efficiency insights help reduce
          fuel consumption and operating costs.
        </p>
      </div>

      <div className="benefit-card">
        <i className="fas fa-clock"></i>
        <h3>Improved Delivery Time</h3>
        <p>
          Deliver goods faster and more reliably with real-time tracking and
          automated alerts.
        </p>
      </div>

      <div className="benefit-card">
        <i className="fas fa-shield-alt"></i>
        <h3>Increased Safety</h3>
        <p>
          Proactive vehicle maintenance and driver monitoring reduce
          accidents and breakdowns.
        </p>
      </div>

      <div className="benefit-card">
        <i className="fas fa-handshake"></i>
        <h3>Customer Satisfaction</h3>
        <p>
          Reliable deliveries improve customer trust, loyalty, and overall
          business reputation.
        </p>
      </div>
    </div>
  </div>
</section>

{/* ✅ Contact / CTA Section */}
<section className="dashboard-contact" data-aos="fade-up">
  <div className="container contact-container">
    <h2>Let’s Optimize Your Transport Operations</h2>
    <p>
      Ready to take control of your logistics and improve efficiency? 
      Get in touch with us today to request a demo or speak with one of our consultants.
    </p>
    <div className="contact-actions">
      <Link to="/contact" className="btn-primary">
        Get in Touch
      </Link>
      <a href="emekagoodnesslocksley.com" className="btn-secondary">
        Email Us
      </a>
    </div>
  </div>
</section>


</main>


    
      <Footer />
    </div>
  );
};

export default TransportOptimizationDashboard;
