import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../components/Footer";
import '../assets/css/style.css';
import { Link } from 'react-router-dom';



const Insights = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div>
<Helmet>
  {/* Basic Meta */}
  <meta charSet="UTF-8" />
  <title>Insights | Emeka Locksley</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Favicon */}
  <link rel="icon" href="/imgforabout/locksley-icon.png" type="image/png" />

  {/* Fonts & Icons */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  />

  {/* AOS Animation Styles */}
  <link
    href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css"
    rel="stylesheet"
  />

  {/* SEO Meta */}
  <meta
    name="description"
    content="Explore in-depth breakdowns and personal project insights shared by Emeka Locksley."
  />
  <meta
    name="keywords"
    content="Emeka Locksley, Transport Tech, Project Insights, Smart Logistics, Case Studies, Data, Personal Blog"
  />
  <meta name="author" content="Emeka Goodness Locksley" />

  {/* Open Graph (Facebook, LinkedIn, etc.) */}
  <meta property="og:title" content="Insights | Emeka Locksley" />
  <meta
    property="og:description"
    content="Explore in-depth breakdowns and personal project insights shared by Emeka Locksley."
  />
  <meta
    property="og:image"
    content="https://llillocksley.github.io/personal-website/imgforabout/blog-banner.jpg"
  />
  <meta
    property="og:url"
    content="https://llillocksley.github.io/personal-website/blog.html"
  />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Emeka Locksley Portfolio" />

  {/* Twitter Meta */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Insights | Emeka Locksley" />
  <meta
    name="twitter:description"
    content="Explore in-depth breakdowns and personal project insights shared by Emeka Locksley."
  />
  <meta
    name="twitter:image"
    content="https://llillocksley.github.io/personal-website/imgforabout/blog-banner.jpg"
  />
  <meta
    name="twitter:url"
    content="https://llillocksley.github.io/personal-website/blog.html"
  />
</Helmet>


      {/* Hero Banner */}
      <section
        className="project-hero"
        style={{
          backgroundImage: 'url("/imgforabout/blog-banner.jpg")',
        }}
        data-aos="fade-up"
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Tech Insights &amp; Ideas</h1>
            <p>
              Explore in-depth case breakdowns, transport tech commentary, and
              personal project insights.
            </p>
          </div>
        </div>
      </section>

      {/* Insights List */}
      <section className="insight-list" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Latest Insights</h2>
          <div className="insight-grid">
            <div className="insight-card">
              <img
                src="/imgforabout/Insight.jpg"
                alt="Data Strategy"
                loading="lazy"
                style={{ width: '100%', height: 'auto' }}
              />
              <div className="insight-content">
                <h3>How Transport Data Helps Fleet Decision-Making</h3>
                <p>
                  Learn how data visualization tools drive real-world logistics
                  efficiency and performance.
                </p>
                <Link to="/DataDrivenDecision" className="read-more-btn" >
                Read More
                </Link>
              </div>
            </div>

            <div className="insight-card">
              <img
                src="/imgforabout/Insight-decision-making.jpg"
                alt="Smart Transport Decision"
                loading="lazy"
                style={{ width: '100%', height: 'auto' }}
              />
              <div className="insight-content">
                <h3>Building a Culture of Data-Driven Decision Making</h3>
                <p>
                  Discover how logistics teams can apply analytics tools to reduce
                  waste, plan better, and achieve accountability.
                </p>
                <Link to="/DataDrivenDecision" className="read-more-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Insight */}
      <section className="featured-insight" data-aos="fade-up">
        <div className="container featured-grid">
          <div className="featured-image">
            <img
              src="/imgforabout/Modern-Transport-Data-Strategies.jpg"
              alt="Transport Insight Highlight"
              loading="lazy"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="featured-content">
            <h2 className="featured-title">
              Spotlight: Modern Transport Data Strategies
            </h2>
            <p className="featured-description">
              Discover how advanced data visualization and transport intelligence
              tools are transforming logistics operations across Africa. From
              reducing idle time to making predictive maintenance a reality —
              explore the power of data-first thinking.
            </p>
            <Link to="/TransportInsight" className="read-more-btn">
            Read Full Article
            </Link>
          </div>

          <div className="insight-card">
            <img
              src="/imgforabout/Smart-logistics-strategies.jpg"
              alt="Smart Logistics Strategy"
              loading="lazy"
              style={{ width: '100%', height: 'auto' }}
            />
            <div className="insight-content">
              <h3>Smart Logistics: From Data to Strategy</h3>
              <p>
                Explore how logistics teams leverage tech to solve supply chain
                bottlenecks through insight-driven methods.
              </p>
              <Link to="/SmartLogisticsfromDS" className="read-more-btn">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="insight-categories" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Explore By Topics</h2>
          <div className="category-tags">
            <button className="category-btn">Data &amp; Analytics</button>
            <button className="category-btn">Fleet Optimization</button>
            <button className="category-btn">Logistics</button>
            <button className="category-btn">Compliance</button>
            <button className="category-btn">Tech in Transport</button>
          </div>
        </div>
      </section>

      {/* Popular Reads */}
      <section className="popular-topics" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Popular Reads</h2>
          <div className="topics-grid">
            <div className="topic-card">
              <h3>Leveraging Transport Data for Business Efficiency</h3>
              <p>
                Learn how leading firms use transport KPIs to cut cost and improve
                service delivery.
              </p>
            </div>
            <div className="topic-card">
              <h3>Preventive vs Reactive Logistics</h3>
              <p>
                Which planning model is best for last-mile delivery? Discover
                evidence-backed answers.
              </p>
            </div>
            <div className="topic-card">
              <h3>Real-Time Visibility in Nigeria's Supply Chain</h3>
              <p>
                A local look at how transport digitization is gaining momentum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Block */}
      <section className="quote-block" data-aos="zoom-in">
        <div className="container">
          <blockquote>
            “When data speaks, transport becomes predictable — and predictable
            systems build powerful businesses.”
          </blockquote>
          <p className="quote-author">— Emeka Locksley</p>
        </div>
      </section>

      {/* Industry Trends */}
      <section className="industry-trends" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Trends in the Industry</h2>
          <ul className="trend-list">
            <li>📈 Predictive Analytics becoming key to maintenance strategies</li>
            <li>🚛 Growth of Transport-as-a-Service (TaaS) platforms</li>
            <li>📊 Visual storytelling now central in reports and planning</li>
            <li>🔐 Increased emphasis on secure transport data storage</li>
          </ul>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="mini-highlights" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Quick Insight Picks</h2>
          <div className="highlight-grid">
            <div className="highlight-box">
              <h4>Transport KPIs to Watch</h4>
              <p>Know which metrics define a healthy logistics operation.</p>
            </div>
            <div className="highlight-box">
              <h4>Smart Scheduling Tools</h4>
              <p>Tools that optimize routing and reduce idle time.</p>
            </div>
            <div className="highlight-box">
              <h4>Digital Compliance Logs</h4>
              <p>Track violations, documents, and deadlines seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-invite" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">
            Get Transport Insights Straight to Your Inbox
          </h2>
          <p className="section-description">
            Subscribe to learn more about how data is transforming logistics across
            Africa.
          </p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Insights;
