import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import Footer from "../components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/css/style.css';
import '../assets/css/demo.css';


const RequestDemo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="demo-page">
      {/* ✅ Meta Tags */}
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Request a Demo | Emeka Locksley</title>
        <meta
          name="description"
          content="Request a personalized demo of Emeka Locksley's transport optimization tools — Fleet Tracker, Case Organizer, Data Visualizer, and more."
        />
        <meta
          name="keywords"
          content="Transport Demo, Fleet Tracker, Case Organizer, Logistics Solutions, Emeka Locksley"
        />
        <meta name="author" content="Emeka Goodness Locksley" />
      </Helmet>

      {/* ✅ Header */}
      <header className="demo-header" data-aos="fade-down">
        <h1>Request a Demo</h1>
        <p>
          Get a personalized walkthrough of my transport optimization tools —
          tailored for your business needs.
        </p>
        <Link to="/transport-optimization-dashboard" className="btn-secondary">
        ← Transport-Optimization
        </Link>
      </header>





      {/* ✅ Form Section */}
      <main className="demo-content container">
        <section className="demo-form" data-aos="fade-up">
          <h2>Book Your Demo</h2>
          <p>
            Fill in the details below and I’ll get back to you with a demo
            schedule that fits your availability.
          </p>

          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your full name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company / Organization</label>
              <input type="text" id="company" placeholder="e.g., Lucrene transport (Pty) Ltd" />
            </div>

            <div className="form-group">
              <label htmlFor="project">Select Project</label>
              <select id="project" required>
                <option value="">-- Choose a project --</option>
                <option value="fleet-tracker">Fleet Tracker</option>
                <option value="case-organizer">Case Organizer</option>
                <option value="data-visualizer">Data Visualizer</option>
                <option value="smart-logistics">Smart Logistics</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="date">Preferred Date</label>
              <input type="date" id="date" />
            </div>

            <button type="submit" className="btn-demo">
              Submit Request
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RequestDemo;
