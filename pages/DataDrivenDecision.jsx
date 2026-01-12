import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../components/Footer";
import '../assets/css/style.css';
import { Link } from "react-router-dom";


const DataDrivenDecision = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div>
      <Helmet>
  <meta charSet="UTF-8" />
  <title>Data-Driven Decision Making | Emeka Locksley</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="author" content="Emeka Goodness Locksley" />

  {/* Favicon */}
  <link rel="icon" href="/imgforabout/locksley-icon.png" type="image/png" />

  {/* External Fonts / Icons */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  />

  {/* SEO Meta Tags */}
  <meta
    name="description"
    content="Harness transport data for strategy, reporting, and efficiency."
  />
  <meta
    name="keywords"
    content="Emeka Locksley, Data-Driven Decision Making, Logistics Analytics, Transport Strategy"
  />

  {/* Open Graph (Facebook, LinkedIn, etc.) */}
  <meta
    property="og:title"
    content="Data-Driven Decision Making | Emeka Locksley"
  />
  <meta
    property="og:description"
    content="Harness transport data for strategy, reporting, and efficiency."
  />
  <meta
    property="og:image"
    content="https://llillocksley.github.io/personal-website/imgforabout/Data-dashboard.jpg"
  />
  <meta
    property="og:url"
    content="https://llillocksley.github.io/personal-website/data-driven-decision.html"
  />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Emeka Locksley Portfolio" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Data-Driven Decision Making | Emeka Locksley"
  />
  <meta
    name="twitter:description"
    content="Harness transport data for strategy, reporting, and efficiency."
  />
  <meta
    name="twitter:image"
    content="https://llillocksley.github.io/personal-website/imgforabout/Data-dashboard.jpg"
  />
  <meta
    name="twitter:url"
    content="https://llillocksley.github.io/personal-website/data-driven-decision.html"
  />
</Helmet>


      {/* Hero Section */}
      <section
        className="project-hero"
        style={{
          backgroundImage: 'url("/imgforabout/Data-Driven-Decision.jpg")',
        }}
        data-aos="fade-up"
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Data-Driven Decision Making</h1>
            <p>
              Empowering smarter transport operations through visual analytics and
              strategic data interpretation.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="project-overview" data-aos="fade-left">
        <div className="container overview-grid">
          <div className="overview-text">
            <h2>Overview</h2>
            <p>
              The Data-Driven Decision Making tool empowers logistics and transport
              leaders to transform raw data into actionable strategies. By leveraging
              analytics, this system improves how decisions are made across fleet
              operations, compliance, performance, and cost-efficiency.
            </p>
          </div>
          <div className="overview-points">
            <ul>
              <li>
                <i className="fas fa-chart-line" /> Real-time operational intelligence
              </li>
              <li>
                <i className="fas fa-cogs" /> Smart automation of recurring tasks
              </li>
              <li>
                <i className="fas fa-users" /> Team collaboration powered by shared
                data
              </li>
              <li>
                <i className="fas fa-eye" /> Visibility into performance bottlenecks
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Strategic Value */}
      <section className="strategic-value" data-aos="fade-right">
        <div className="container">
          <h2 className="section-title">Strategic Value</h2>
          <p className="section-description">
            The Data-Driven Decision Making tool empowers transport leaders and
            operations teams to act based on facts, not guesswork. Here’s how it
            makes a difference:
          </p>
          <div className="value-grid">
            <div className="value-card">
              <h3>1. Smarter Operations</h3>
              <p>
                Transforms data into meaningful actions that optimize fuel use, route
                efficiency, and fleet readiness.
              </p>
            </div>
            <div className="value-card">
              <h3>2. Evidence-Based Planning</h3>
              <p>
                Enables long-term strategic planning based on trends, metrics, and
                real-world fleet behavior.
              </p>
            </div>
            <div className="value-card">
              <h3>3. Cost &amp; Resource Control</h3>
              <p>
                Helps reduce operational waste by identifying underperforming routes,
                vehicles, or habits.
              </p>
            </div>
            <div className="value-card">
              <h3>4. Instant Visibility</h3>
              <p>
                Centralizes KPIs and analytics in one interface — accessible to
                leadership and operational teams alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="industry-application" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Industry Applications</h2>
          <p className="section-description">
            Practical ways transportation industries apply data-driven strategies for
            better outcomes.
          </p>
          <div className="industry-cards">
            <div className="industry-card">
              <div className="icon-box">
                <i className="fas fa-truck-moving" />
              </div>
              <div className="text-box">
                <h3>Logistics &amp; Delivery</h3>
                <p>
                  Use delivery data to reduce delays, optimize routes, and improve
                  turnaround times across the board.
                </p>
              </div>
            </div>
            <div className="industry-card">
              <div className="icon-box">
                <i className="fas fa-bus" />
              </div>
              <div className="text-box">
                <h3>Public Transport</h3>
                <p>
                  Analyze congestion and service patterns to improve fleet utilization
                  and customer satisfaction.
                </p>
              </div>
            </div>
            <div className="industry-card">
              <div className="icon-box">
                <i className="fas fa-tools" />
              </div>
              <div className="text-box">
                <h3>Fleet Maintenance</h3>
                <p>
                  Track usage data and breakdown history to shift from reactive to
                  predictive maintenance.
                </p>
              </div>
            </div>
            <div className="industry-card">
              <div className="icon-box">
                <i className="fas fa-shield-alt" />
              </div>
              <div className="text-box">
                <h3>Compliance &amp; Safety</h3>
                <p>
                  Monitor behavior trends to prevent violations and ensure safety
                  standards are upheld.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Insights Gallery */}
      <section className="insights-gallery" data-aos="zoom-in-up">
        <div className="container">
          <h2 className="section-title">Visual Insights</h2>
          <p className="section-description">
            Below are selected snapshots of real-time dashboards, analytics tools,
            and data displays used in transport decision-making.
          </p>
          <div className="insight-grid">
            <div className="insight-item">
              <img
                src="/imgforabout/insight-dashboard.jpg"
                alt="Dashboard Overview"
                loading="lazy"
              />
              <h3>Dashboard Overview</h3>
            </div>
            <div className="insight-item">
              <img
                src="/imgforabout/Trend-analysis.jpg"
                alt="Trend Analysis Graph"
                loading="lazy"
                style={{ width: '100%', height: 'auto' }}
              />
              <h3>Trend &amp; Pattern Analysis</h3>
            </div>
            <div className="insight-item">
              <img
                src="/imgforabout/vehicle-performance.jpg"
                alt="Vehicle Performance Data"
                loading="lazy"
              />
              <h3>Vehicle Performance</h3>
            </div>
            <div className="insight-item">
              <img
                src="/imgforabout/incident-visual.jpg"
                alt="Incident Monitoring Chart"
                loading="lazy"
              />
              <h3>Incident Monitoring</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Insights Gallery (alternate) */}
      <section className="visual-gallery" data-aos="zoom-in">
        <div className="container">
          <h2 className="section-title">Visual Insights Gallery</h2>
          <p className="section-description">
            Explore sample visualizations that showcase how transport data is
            transformed into meaningful dashboards and reports.
          </p>
          <div className="gallery-grid">
            <div className="gallery-card">
              <img
                src="/imgforabout/Monthly.jpg"
                alt="Data Summary Chart"
                loading="lazy"
              />
              <h4>Monthly Operational Summary</h4>
            </div>
            <div className="gallery-card">
              <img
                src="/imgforabout/fuel-efficiency-trend.jpg"
                alt="Fuel Efficiency Trends"
                loading="lazy"
              />
              <h4>Fuel Efficiency &amp; Route Heatmaps</h4>
            </div>
            <div className="gallery-card">
              <img
                src="/imgforabout/Performance-tracking.jpg"
                alt="Driver Performance Analytics"
                loading="lazy"
              />
              <h4>Driver Performance Metrics</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Comparative Advantage */}
      <section className="advantage-section" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Why This Solution Stands Out</h2>
          <p className="section-description">
            Built to deliver clarity, speed, and precision — this data-driven platform
            offers unique value in transport and logistics operations.
          </p>
          <div className="advantage-grid">
            <div className="advantage-card">
              <i className="fas fa-eye" />
              <h4>Clarity Through Visuals</h4>
              <p>
                Replace spreadsheets and guesswork with clean, easy-to-understand visual
                summaries that reveal key trends at a glance.
              </p>
            </div>
            <div className="advantage-card">
              <i className="fas fa-tachometer-alt" />
              <h4>Real-Time Analysis</h4>
              <p>
                Make quicker decisions with data that's updated in real-time — allowing
                for prompt responses to challenges as they arise.
              </p>
            </div>
            <div className="advantage-card">
              <i className="fas fa-shield-alt" />
              <h4>Informed Compliance</h4>
              <p>
                Stay ahead of regulatory issues by using automated alerts and compliance
                dashboards tailored to transport regulations.
              </p>
            </div>
            <div className="advantage-card">
              <i className="fas fa-cogs" />
              <h4>Customizable Workflow</h4>
              <p>
                Adapt the tool to your organization’s specific needs with scalable
                dashboards and flexible reporting formats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Insight */}
      <section className="expert-insight" data-aos="fade-left">
        <div className="container">
          <h2 className="section-title">Expert Insight</h2>
          <p className="section-description">
            Industry leaders recognize the power of real-time analytics and predictive
            data in reshaping modern transport operations. Here’s what they’re saying:
          </p>
          <div className="insight-cards">
            <div className="insight-card">
              <i className="fas fa-user-tie" />
              <h3>Logistics Strategy Expert</h3>
              <p>
                “Data-driven systems are redefining transport efficiency — enabling
                companies to shift from reactive firefighting to proactive planning.”
              </p>
            </div>
            <div className="insight-card">
              <i className="fas fa-chart-line" />
              <h3>Transport Analyst</h3>
              <p>
                “The visual clarity offered by dashboards like this allows operations
                teams to pinpoint performance gaps at a glance.”
              </p>
            </div>
            <div className="insight-card">
              <i className="fas fa-bullseye" />
              <h3>Compliance Manager</h3>
              <p>
                “Maintaining transport regulation standards has never been easier —
                visual insights reduce oversight risks significantly.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="tech-stack-section" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Technology Stack</h2>
          <p className="section-description">
            Built with reliable, scalable, and flexible tools that make data
            visualization seamless and responsive.
          </p>
          <div className="tech-stack-grid">
            <div className="stack-item">
              <i className="fab fa-html5" />
              <h4>HTML5</h4>
              <p>Structured semantic markup for performance and accessibility.</p>
            </div>
            <div className="stack-item">
              <i className="fab fa-css3-alt" />
              <h4>CSS3</h4>
              <p>Responsive and modern layouts styled to fit corporate use.</p>
            </div>
            <div className="stack-item">
              <i className="fas fa-database" />
              <h4>JSON/CSV</h4>
              <p>Flexible formats for structured data integration and parsing.</p>
            </div>
            <div className="stack-item">
              <i className="fas fa-chart-line" />
              <h4>Chart.js</h4>
              <p>Powerful library for rendering charts, graphs, and visual indicators.</p>
            </div>
            <div className="stack-item">
              <i className="fas fa-sync" />
              <h4>Live Data Sync</h4>
              <p>For fetching and displaying real-time metrics and trends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="before-after" data-aos="fade-left">
        <div className="container">
          <h2 className="section-title">Before &amp; After Implementation</h2>
          <p className="section-description">
            Compare operations before and after the use of Data Visualizer.
          </p>
          <div className="comparison-grid">
            <div className="comparison-card before">
              <h3>Before</h3>
              <ul>
                <li>Manual spreadsheet reports</li>
                <li>Data inconsistencies &amp; delays</li>
                <li>Low visibility on driver performance</li>
                <li>Reactive decision-making</li>
              </ul>
            </div>
            <div className="comparison-card after">
              <h3>After</h3>
              <ul>
                <li>Automated visual dashboards</li>
                <li>Real-time data integration</li>
                <li>Detailed driver behavior analytics</li>
                <li>Data-driven planning &amp; reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="faqs-section" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3 className="faq-question">
                What types of data does the Data Visualizer support?
              </h3>
              <p className="faq-answer">
                It supports CSV, Excel, and real-time transport APIs for data input.
                You can also manually upload datasets related to fleet performance,
                route logs, and driver metrics.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">
                Is any technical experience required to use it?
              </h3>
              <p className="faq-answer">
                No, the dashboard is built for non-technical managers too. It's
                user-friendly and doesn’t require prior analytics experience.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Can I export charts and reports?</h3>
              <p className="faq-answer">
                Yes. The platform allows you to export visual reports in PDF or image
                formats for use in presentations or executive meetings.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Can it work offline?</h3>
              <p className="faq-answer">
                The tool is designed for real-time web use. However, once data is
                loaded, basic offline access is available in the browser cache.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Report */}
      <section className="download-report" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Need a Sample Report?</h2>
          <p className="section-description">
            Download a sample analytics report generated with the Data Visualizer to
            see how insights are structured.
          </p>
<a
  href="/docs/Data-Driven-Decision.pdf"
  className="download-btn"
  download
>
  📄 Download PDF Report
</a>

        </div>
      </section>

      {/* Final Summary */}
      <section className="final-summary-section" data-aos="fade-zoom-in">
        <div className="container">
          <div className="summary-box">
            <h2>In Summary</h2>
            <p>
              The Data-Driven Decision Making platform is not just a dashboard — it's a
              strategic advantage. By transforming raw numbers into clear insights, it
              empowers transport and logistics teams to operate with foresight,
              accountability, and agility. In today’s fast-paced logistics environment,
              visibility and responsiveness are critical. This solution delivers both.
            </p>
            <p>
              From real-time visual reports to predictive planning and incident
              tracking, every component is designed to simplify complexity and drive
              operational excellence.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataDrivenDecision;
