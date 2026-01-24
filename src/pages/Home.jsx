import { Helmet } from 'react-helmet-async';
import React, { useEffect, useState } from 'react';
import Footer from "../components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/css/style.css';

import { Link } from "react-router-dom";



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    // Counter animation
    const counters = Array.from(document.querySelectorAll<HTMLElement>('.counter'));

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = Number(counter.getAttribute('data-target') || 0);
        const count = Number(counter.innerText);
        const increment = Math.ceil(target / 100);

        if (count < target) {
          counter.innerText = String(Math.min(count + increment, target));
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = String(target);
        }
      };

      const observer = new IntersectionObserver(
        (entries, obs) => {
          if (entries[0].isIntersecting) {
            updateCount();
            obs.unobserve(counter);
          }
        },
        { threshold: 0.6 }
      );

      observer.observe(counter);
    });
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <div>
<Helmet>
  <meta charSet="UTF-8" />
  <title>Emeka Locksley | Creative Portfolio & Web Projects</title>
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

  {/* Open Graph Meta Tags (for Facebook, LinkedIn, etc.) */}
  <meta property="og:title" content="Emeka Locksley | Portfolio" />
  <meta
    property="og:description"
    content="Explore transport-focused tools and intelligent project solutions crafted by Emeka Locksley."
  />
  <meta property="og:image" content="/imgforabout/forHTML.jpg" />
  <meta property="og:url" content="https://llillocksley.github.io/personal-website" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Emeka Locksley Portfolio" />

  {/* Twitter Card Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Emeka Locksley | Transport Projects" />
  <meta
    name="twitter:description"
    content="Fleet Tracker, Case Organizer, and other transport tools by Emeka Locksley."
  />
  <meta name="twitter:image" content="/imgforabout/forHTML.jpg" />

  {/* Favicon */}
  <link rel="icon" href="/imgforabout/locksley-icon.png" type="image/png" />

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

  {/* Optional local stylesheet if needed */}
  <link rel="stylesheet" href="/assets/css/style.css" />
</Helmet>


      {/* Dark mode toggle */}
      <button
        className="toggle-btn"
        onClick={() => setDarkMode((prev) => !prev)}
        aria-label="Toggle dark mode"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

{/* HERO SECTION */}
<section className="hero-section" id="home">
  <div className="hero-overlay">
    <div className="hero-content" data-aos="fade-up">
      <h1>Building Digital Experiences that Matter</h1>
      <p>Transforming ideas into powerful solutions for businesses and people</p>
      <div className="hero-buttons">
        <Link to="/projects" className="btn-primary">
          Explore Projects
        </Link>
        <Link to="/contact" className="btn-secondary">
          Let's Collaborate
        </Link>
      </div>
    </div>
  </div>
</section>


      {/* WHAT I DO SECTION */}
      <section className="what-i-do" data-aos="fade-up">
        <div className="container">
          <h2>What I Do</h2>
          <div className="services">
            <div className="service-card">
              <h3>Web Development</h3>
              <p>
                I design and build fast, accessible, and responsive websites with clean,
                modern interfaces and smooth interactions.
              </p>
            </div>
            <div className="service-card">
              <h3>Transport &amp; Systems Insight</h3>
              <p>
                Bridging transport management with smart digital tools to enhance
                operations, logistics, and industry impact.
              </p>
            </div>
            <div className="service-card">
              <h3>CPA Marketing &amp; Strategy</h3>
              <p>
                Applying smart digital strategies to generate leads, reduce costs, and
                increase returns in affiliate and CPA marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS & VALUES SECTION */}
      <section className="stats-section" id="stats">
        <div className="container" data-aos="fade-up">
          <div className="stats-grid">
            <div className="stat-item">
              <h2 className="counter" data-target={12}>
                12
              </h2>
              <p>Completed Projects</p>
            </div>
            <div className="stat-item">
              <h2 className="counter" data-target={6}>
                6
              </h2>
              <p>Satisfied Clients</p>
            </div>
            <div className="stat-item">
              <h2 className="counter" data-target={3}>
                3
              </h2>
              <p>Years of Experience</p>
            </div>
            <div className="stat-item">
              <h2 className="counter" data-target={2}>
                2
              </h2>
              <p>Awards &amp; Recognitions</p>
            </div>
          </div>
          <div className="core-values">
            <h3>Core Values</h3>
            <ul>
              <li>Excellence in Delivery</li>
              <li>Client-Centered Innovation</li>
              <li>Integrity &amp; Professionalism</li>
              <li>Continuous Improvement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="skills-highlight" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <i className="fab fa-html5 skill-icon" style={{ color: '#e34c26' }} />
              <h3>HTML</h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: '95%' }} />
              </div>
            </div>
            <div className="skill-card">
              <i className="fab fa-css3-alt skill-icon" style={{ color: '#2965f1' }} />
              <h3>CSS</h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: '90%' }} />
              </div>
            </div>
            <div className="skill-card">
              <i className="fab fa-js-square skill-icon" style={{ color: '#f7df1e' }} />
              <h3>JavaScript</h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: '75%' }} />
              </div>
            </div>
            <div className="skill-card">
              <i className="fas fa-chart-line skill-icon" style={{ color: '#00bfa6' }} />
              <h3>CPA Marketing</h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: '85%' }} />
              </div>
            </div>
            <div className="skill-card">
              <i className="fas fa-truck skill-icon" style={{ color: '#ff7043' }} />
              <h3>Transport Systems</h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: '80%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS CTA */}
      <section className="highlight-insight">
        <div className="container">
          <h2>Want Transport Tech Insights?</h2>
          <p>Explore how data, strategy, and systems shape logistics.</p>
          <Link to="/insights" className="cta-btn">
            Read Insights
          </Link>
        </div>
      </section>

      {/* PROFESSIONAL TIMELINE */}
      <section className="timeline-section" data-aos="fade-up">
        <div className="container">
          <h2>Professional Timeline</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>2025 – Present</h3>
                <p>
                  Expanding my web development and software portfolio with real-world
                  projects, focusing on professional branding and design systems.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>2024 – 2025</h3>
                <p>
                  Dove into CPA marketing strategies and began contributing to digital
                  transport optimization initiatives in Nigeria.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>2022 – 2024</h3>
                <p>
                  Studied Transport Management and built foundational understanding of
                  logistics, systems, and optimization tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className="testimonials-section py-16 px-6 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800"
        data-aos="fade-up"
      >
        <div className="container max-w-5xl mx-auto text-center">
          <h2 className="section-title text-4xl font-extrabold mb-12 text-gray-900 dark:text-white">
            What People Say
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            <blockquote className="testimonial-card bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl transform transition hover:scale-[1.03] hover:shadow-3xl">
              <p className="testimonial-text text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                “Emeka built my website with clean code, fast loading speed, and great
                responsiveness. Highly impressed!”
              </p>
              <footer className="text-right">
                <cite className="font-semibold text-blue-700 dark:text-blue-400 block text-lg">
                  Chinedu I.
                </cite>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Digital Marketer
                </span>
              </footer>
            </blockquote>
            <blockquote className="testimonial-card bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl transform transition hover:scale-[1.03] hover:shadow-3xl">
              <p className="testimonial-text text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                “Working with Emeka Locksley on CPA funnel pages was smooth. He blends
                design with real strategy.”
              </p>
              <footer className="text-right">
                <cite className="font-semibold text-blue-700 dark:text-blue-400 block text-lg">
                  Grace O.
                </cite>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  CPA Affiliate Coach
                </span>
              </footer>
            </blockquote>
            <blockquote className="testimonial-card bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl transform transition hover:scale-[1.03] hover:shadow-3xl">
              <p className="testimonial-text text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                “Working with Emeka was a game-changer. His smart approach to transport
                cost analysis saved us valuable time and money.”
              </p>
              <footer className="text-right">
                <cite className="font-semibold text-blue-700 dark:text-blue-400 block text-lg">
                  Chioma Uzo
                </cite>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Transport Consultant
                </span>
              </footer>
            </blockquote>
            <blockquote className="testimonial-card bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl transform transition hover:scale-[1.03] hover:shadow-3xl">
              <p className="testimonial-text text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                “Highly innovative and reliable. Emeka's attention to detail helped
                streamline our digital workflow dramatically.”
              </p>
              <footer className="text-right">
                <cite className="font-semibold text-blue-700 dark:text-blue-400 block text-lg">
                  Ibrahim Musa
                </cite>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Web Application Manager
                </span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        className="cta-section bg-gradient-to-r from-blue-700 to-indigo-600 text-white py-20 px-8 text-center"
        data-aos="zoom-in"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Let’s Build Something Great Together
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto drop-shadow-sm">
            Whether it’s crafting a powerful website or optimizing digital transport,
            I’m ready to bring your ideas to life with passion and precision.
          </p>
          <Link
            to="/contact"
            className="cta-btn"
            aria-label="Start a conversation via contact page">
            Start a Conversation
          </Link>

        </div>
      </section>

      {/* FEATURED WORK */}
      <section
        id="featured-work"
        className="featured-work-section"
        data-aos="fade-up"
      >
        <div className="container">
          <h2 className="section-title">Featured Work</h2>
          <div className="featured-work-grid">
            <article className="featured-work-card">
              <img
                src="/imgforabout/Transport.JPG"
                alt="Transport Optimization Dashboard Screenshot"
                loading="lazy"
                className="project-image"
                style={{ width: '100%', height: 'auto' }}
              />
              <div className="featured-work-content">
                <h3>Transport Optimization Dashboard</h3>
                <p>
                  A custom-built dashboard that visualizes transport performance,
                  route analysis, and cost efficiency for logistics companies.
                </p>
                <div className="project-links">
                  <Link to="/transport-optimization-dashboard"
                   className="btn-primary">
                  View Dashboard
                  </Link>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-secondary"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
            <article className="featured-work-card">
              <img
                src="/imgforabout/Dashboard.jpg"
                alt="CPA Landing Funnel Screenshot"
                loading="lazy"
                className="project-image"
                style={{ width: '100%', height: 'auto' }}
              />
              <div className="featured-work-content">
                <h3>CPA Landing Funnel</h3>
                <p>
                  High-converting CPA landing page designed for affiliate campaigns.
                  Optimized for speed, clarity, and results.
                </p>
                <div className="project-links">
                  <Link to="/CPAlandingfunnel"
                   className="btn-primary">
                  Live Demo
                  </Link>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-secondary"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              </article>
            </div>
          </div>
        </section>

        <Footer />
    </div>
  );
}
