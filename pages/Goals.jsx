import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import '../assets/css/style.css';
import { Link } from "react-router-dom";

const Goals = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>My Goals | Emeka Locksley</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/imgforabout/locksley-icon.png" type="image/png" />
        <link rel="stylesheet" href="/src/assets/css/style.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Explore Emeka Locksley's professional portfolio — projects, transport solutions, and data-driven tools."
        />
        <meta
          name="keywords"
          content="Emeka Locksley, Transport Tech, Fleet Management, Data Visualizer, Case Organizer, Portfolio"
        />
        <meta name="author" content="Emeka Goodness Locksley" />
        <meta property="og:title" content="My Goals | Emeka Locksley" />
        <meta
          property="og:description"
          content="Focused growth in frontend development, transport solutions, and data integration."
        />
        <meta
          property="og:image"
          content="https://llillocksley.github.io/personal-website/imgforabout/goals-banner.jpg"
        />
        <meta
          property="og:url"
          content="https://llillocksley.github.io/personal-website/goals.html"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Emeka Locksley Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Goals | Emeka Locksley" />
        <meta
          name="twitter:description"
          content="Focused growth in frontend development, transport solutions, and data integration."
        />
        <meta
          name="twitter:image"
          content="https://llillocksley.github.io/personal-website/imgforabout/goals-banner.jpg"
        />
        <meta
          name="twitter:url"
          content="https://llillocksley.github.io/personal-website/goals.html"
        />
      </Helmet>

      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Header - added paddingTop to avoid overlap with navbar */}
      <header className="site-header" data-aos="fade-down" style={{ paddingTop: "100px" }}>
        <div className="container">
          <h1 className="header-title">🎯 My Core Goals</h1>
          <p className="header-subtitle">
            Focused Vision. Daily Action. A roadmap toward impact, innovation, and growth.
          </p>
          <button
            className="dark-mode-toggle"
            onClick={() => setDarkMode((d) => !d)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </header>



      {/* Main Goals Section */}
      <main className="main-content">
        <section className="strategic-goals" data-aos="fade-up">
          <div className="container">
            <h2 className="section-title">📌 Strategic Growth Goals</h2>
            <p className="section-description">
              These core targets represent my technical, business, and branding
              objectives — measured, actionable, and tailored for long-term impact in
              the transport-tech space.
            </p>
            <div className="goal-grid">
              {/* Tech Development */}
              <div className="goal-item">
                <h3>
                  <i className="fas fa-code" /> Technical Advancement
                </h3>
                <p>
                  Advance in HTML, CSS, and JavaScript. Deliver consistent project builds
                  and improve GitHub visibility.
                </p>
                <div className="goal-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: '40%' }}
                    >
                      40%
                    </div>
                  </div>
                </div>
              </div>
              {/* Transport Innovation */}
              <div className="goal-item">
                <h3>
                  <i className="fas fa-truck-fast" /> Transport Innovation
                </h3>
                <p>
                  Design scalable tools for cost-saving and fleet intelligence tailored to
                  the Nigerian market.
                </p>
                <div className="goal-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: '40%' }}
                    >
                      40%
                    </div>
                  </div>
                </div>
              </div>
              {/* Branding */}
              <div className="goal-item">
                <h3>
                  <i className="fas fa-user-tie" /> Personal Brand
                </h3>
                <p>
                  Build a powerful online presence through LinkedIn, portfolio updates,
                  and cross-platform visibility.
                </p>
                <div className="goal-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: '40%' }}
                    >
                      40%
                    </div>
                  </div>
                </div>
              </div>
              {/* Product Launch */}
              <div className="goal-item">
                <h3>
                  <i className="fas fa-rocket" /> Product Launch
                </h3>
                <p>Launch and scale a real software product before the end of the year.</p>
                <div className="goal-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: '40%' }}
                    >
                      40%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones Achieved */}
        <section className="milestones-achieved" data-aos="fade-up">
          <div className="container">
            <h2 className="section-title">📅 Milestones Achieved</h2>
            <p className="section-description">
              A timeline of key professional accomplishments that highlight technical
              growth and industry alignment.
            </p>
            <div className="milestone-timeline">
              <div className="milestone-box completed">
                <h3>🚀 Personal Website Launch</h3>
                <p>
                  Deployed and hosted full portfolio on GitHub Pages.{' '}
                  <br />
                  <span className="milestone-date">May 2025</span>
                </p>
              </div>
              <div className="milestone-box completed">
                <h3>✅ CPA Funnel Projects</h3>
                <p>
                  Designed 2 successful cost-per-action marketing projects.{' '}
                  <br />
                  <span className="milestone-date">April 2025</span>
                </p>
              </div>
              <div className="milestone-box completed">
                <h3>🧠 Transport Dashboard Upgrade</h3>
                <p>
                  Integrated smart analytics into fleet and logistics systems.{' '}
                  <br />
                  <span className="milestone-date">March 2025</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Focused Areas */}
        <section className="focused-areas" data-aos="fade-up">
          <div className="container">
            <h2 className="section-title">🎯 Focused Areas This Quarter</h2>
            <p className="section-description">
              Each focus reflects areas where measurable progress is being made. This
              aligns with Emeka's ongoing technical learning, industry networking, and
              digital delivery.
            </p>
            <div className="focused-grid">
              <div className="focus-card js-focus">
                <h3>⚙️ JavaScript Mastery</h3>
                <p>
                  Daily hands-on practice, 50+ challenges, and building dynamic UI
                  components.
                </p>
              </div>
              <div className="focus-card product-focus">
                <h3>📦 MVP Product Launch</h3>
                <p>
                  Refining and launching the first logistics tech solution for transport
                  data insights.
                </p>
              </div>
              <div className="focus-card branding-focus">
                <h3>📱 Online Branding</h3>
                <p>
                  Consistent visibility on LinkedIn, X, and developer forums with real
                  value posts.
                </p>
              </div>
              <div className="focus-card outreach-focus">
                <h3>🤝 Outreach &amp; Mentorship</h3>
                <p>
                  Connect with 3 industry mentors per quarter and grow collaborations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* KPI & Progress Tracker */}
        <section className="kpi-progress" data-aos="fade-up">
          <div className="container">
            <h2 className="section-title">📊 Key Progress Indicators</h2>
            <p className="section-description">
              These benchmarks reflect practical progress toward technical growth,
              product delivery, and professional positioning.
            </p>
            <div className="kpi-grid">
              <div className="kpi-box completed">
                <h3>✅ Launched Portfolio Website</h3>
                <p>
                  Built and deployed a fully responsive site with live hosting and
                  contact features.
                </p>
              </div>
              <div className="kpi-box in-progress">
                <h3>⏳ MVP Transport App (40%)</h3>
                <p>Backend logic built, frontend integration in progress.</p>
              </div>
              <div className="kpi-box in-progress">
                <h3>📁 Open Source Projects (30%)</h3>
                <p>Started publishing reusable tools and mini apps on GitHub.</p>
              </div>
              <div className="kpi-box upcoming">
                <h3>🔜 Logistics Dashboard V1</h3>
                <p>
                  Includes tracking, cost visualization, and delivery reports.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Commitment */}
        <section className="vision-commitment" data-aos="fade-up">
          <div className="container">
            <h2 className="section-title">🧭 Vision &amp; Commitment</h2>
            <p className="section-description">
              My professional path is driven by a commitment to <strong>innovation</strong>,{' '}
              <strong>reliability</strong>, and <strong>long-term impact</strong> in
              transport technology and data-driven tools.
            </p>
            <div className="vision-grid">
              {/* Card 1 */}
              <div className="vision-card">
                <div className="vision-card-inner">
                  <div className="vision-card-front">
                    <i className="fas fa-lightbulb" />
                    <h3>Innovative Thinking</h3>
                  </div>
                  <div className="vision-card-back">
                    <p>
                      Designing transport solutions with creativity, user experience, and
                      future needs in mind.
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="vision-card">
                <div className="vision-card-inner">
                  <div className="vision-card-front">
                    <i className="fas fa-handshake" />
                    <h3>Strategic Partnerships</h3>
                  </div>
                  <div className="vision-card-back">
                    <p>
                      Connecting with industry leaders and mentors to scale smarter
                      logistics tools.
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="vision-card">
                <div className="vision-card-inner">
                  <div className="vision-card-front">
                    <i className="fas fa-flag-checkered" />
                    <h3>Execution Over Ideas</h3>
                  </div>
                  <div className="vision-card-back">
                    <p>
                      Turning concepts into deployable software, MVPs, and measurable
                      outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <main className="goals-page">
      {/* Quarterly Focus */}
      <section className="quarterly-focus" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">📌 Q3 Focus Strategy</h2>
          <p className="section-description">
            A sharp, realistic breakdown of top priorities guiding my work this quarter. Every goal is aligned with long-term growth and industry needs.
          </p>
          <div className="focus-grid">
            <div className="focus-card">
              <h3>🚀 Product Deployment</h3>
              <p>Launch at least 1 new public transport product with performance tracking and real-time reporting built in.</p>
            </div>
            <div className="focus-card">
              <h3>📊 Data-Driven Reporting</h3>
              <p>Improve reporting dashboards for projects like the Cost Analyzer and Fleet Tracker — powered by real data and insights.</p>
            </div>
            <div className="focus-card">
              <h3>🔗 Network Expansion</h3>
              <p>Connect with 3–5 professionals in logistics, tech, and oil & gas — share knowledge and learn from their experience.</p>
            </div>
            <div className="focus-card">
              <h3>🧪 Tool Testing & Feedback</h3>
              <p>Get early feedback on features from real users and iterate to improve UX and clarity before full rollout.</p>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Metrics */}
      <section className="kpi-metrics" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">📈 Key Milestones & Metrics</h2>
          <p className="section-description">
            Progress tracked through specific, measurable KPIs — aligning development, deployment, and engagement goals.
          </p>
          <div className="metrics-grid">
            <div className="metric-card">
              <i className="fas fa-code"></i>
              <h3>20+ Components Built</h3>
              <p>Modular UI and logic blocks for reusability across transport systems.</p>
            </div>
            <div className="metric-card">
              <i className="fas fa-rocket"></i>
              <h3>3 Product Launches</h3>
              <p>Launched Fleet Tracker, Data Visualizer, and Case Organizer publicly.</p>
            </div>
            <div className="metric-card">
              <i className="fas fa-chart-line"></i>
              <h3>80% Goal Engagement</h3>
              <p>Goals tracked and updated weekly — with improved consistency in Q3.</p>
            </div>
            <div className="metric-card">
              <i className="fas fa-people-arrows"></i>
              <h3>+5 Strategic Contacts</h3>
              <p>Engaged with professionals across transport, oil & gas, and data science.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="tools-tech" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">🛠️ Tools & Technologies Used</h2>
          <p className="section-description">
            Here are some of the technologies I leverage across transport cost analysis, dashboard systems, and frontend deployments.
          </p>
          <div className="tech-grid">
            <div className="tech-item">
              <img src="/icons/HTML5.webp" alt="HTML5" loading="lazy" />
              <span>HTML5</span>
            </div>
            <div className="tech-item">
              <img src="/icons/CSS3.webp" alt="CSS3" loading="lazy" />
              <span>CSS3</span>
            </div>
            <div className="tech-item">
              <img src="/icons/JavaScript.webp" alt="JavaScript" loading="lazy" />
              <span>JavaScript</span>
            </div>
            <div className="tech-item">
              <img src="/icons/aos-logo.jpg" alt="AOS" loading="lazy" />
              <span>AOS Animation</span>
            </div>
            <div className="tech-item">
              <img src="/icons/GitHub.webp" alt="GitHub" loading="lazy" />
              <span>GitHub Pages</span>
            </div>
            <div className="tech-item">
              <img src="/icons/chart.js.png" alt="Chart.js" loading="lazy" />
              <span>Chart.js</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quarterly Roadmap */}
      <section className="quarterly-roadmap" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">🗓 Quarterly Roadmap (Q1–Q4)</h2>
          <p className="section-description">
            A clear breakdown of key focus areas and accomplishments across each quarter. Strategic, trackable, and targeted toward professional growth.
          </p>
          <div className="roadmap-grid">
            <div className="quarter-card">
              <h3>Q1: Foundation</h3>
              <ul>
                <li>✅ Build personal website</li>
                <li>✅ Complete 1 transport case study</li>
                <li>📘 30+ hours of JavaScript practice</li>
              </ul>
            </div>
            <div className="quarter-card">
              <h3>Q2: Expansion</h3>
              <ul>
                <li>📊 Launch 2 new transport tools</li>
                <li>📚 Finish Git & GitHub mastery</li>
                <li>🧠 Join 2+ tech communities</li>
              </ul>
            </div>
            <div className="quarter-card">
              <h3>Q3: Visibility</h3>
              <ul>
                <li>💼 Publish detailed case studies</li>
                <li>🎤 Share learnings via social posts</li>
                <li>🔍 Optimize projects for SEO</li>
              </ul>
            </div>
            <div className="quarter-card">
              <h3>Q4: Launch & Scale</h3>
              <ul>
                <li>🚀 Release MVP of Transport App</li>
                <li>📢 Launch marketing campaign</li>
                <li>🎯 Analyze full-year performance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Habits Tracker */}
      <section className="habits-tracker" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Habits Tracker</h2>
          <p className="section-description">
            A disciplined routine builds the foundation for mastery. These are the habits I track daily.
          </p>
          <div className="habit-grid">
            <div className="habit-card">
              <img src="/icons/code-icon.png" alt="Coding" />
              <h3>Coding Practice</h3>
              <p>Daily code sessions to stay sharp and consistent.</p>
            </div>
            <div className="habit-card">
              <img src="/icons/book-icon.png" alt="Learning" />
              <h3>Read/Study</h3>
              <p>20+ minutes daily focused on tech and strategy books.</p>
            </div>
            <div className="habit-card">
              <img src="/icons/notebook-icon.png" alt="Planning" />
              <h3>Morning Planning</h3>
              <p>Prioritize tasks with clear targets every morning.</p>
            </div>
            <div className="habit-card">
              <img src="/icons/youtube-icon.png" alt="Learning Videos" />
              <h3>Watch Tutorials</h3>
              <p>Absorb visual concepts via technical channels.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  

<Footer />
      </main>
    </div>
  );
};

export default Goals;
