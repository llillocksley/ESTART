import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../components/Footer";
import '../assets/css/style.css';
import "../assets/css/CPAlandingfunnel.css";
import { Link } from "react-router-dom";

/*
  CPA Landing Funnel — Single-file React component

  What this file contains:
  - A clean, accessible landing page layout (Hero, Benefits, Social Proof, FAQ, Footer)
  - Lead capture form with client-side validation and simulated submission
  - Tiny A/B variant switch (A/B test headline & CTA) for quick local testing
  - Conversion event hooks (dataLayer & fbq placeholders) and integration notes
  - Lightweight CSS included in the component (no Tailwind; no external deps)

  Integration checklist (what you'll want to wire up next):
  1. Replace the simulated submission with your email provider (Mailchimp/ConvertKit/ActiveCampaign) or a serverless endpoint.
  2. Add server-side validation + store to CRM. Example: POST /api/subscribe with JSON name/email.
  3. Add your analytics scripts (Google Tag Manager, Facebook Pixel) to the site root. The component will push a dataLayer event on success.
  4. Replace the lead-magnet auto-download with your real asset (PDF/eBook/Checklist URL or send via email on the server).

  Usage:
    import CPALandingFunnel from './CPA-Landing-Funnel.jsx';
    <CPALandingFunnel brandName="Your Brand" />

*/

export default function CPALandingFunnel({ brandName = "Your Brand" }) {
  const [variant, setVariant] = useState("A"); // quick local split test
  const [form, setForm] = useState({ name: "", email: "" });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [message, setMessage] = useState("");
  const [showThanks, setShowThanks] = useState(false);

  const validateEmail = (email) => {
    // Simple, robust email check (not perfect but fine client-side)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (!validateEmail(form.email)) {
      setMessage("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      // -------------------------------
      // Replace this block with your real API call
      // Example (serverless):
      // await fetch('/api/subscribe', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(form) })
      // -------------------------------

      await new Promise((r) => setTimeout(r, 900)); // simulate network latency

      // Analytics / conversion signals (placeholders; include real scripts in app root)
      if (typeof window !== "undefined") {
        if (window.dataLayer) {
          window.dataLayer.push({ event: "lead", email: form.email, variant });
        }
        if (typeof window.fbq === "function") {
          try {
            window.fbq("track", "Lead");
          } catch (err) {
            // noop
          }
        }
      }

      // Auto-download a simple lead-magnet (replace with real file or server-side deliver)
      const blob = new Blob([
        `Thanks for signing up to ${brandName}!\n\nThis is a placeholder CPA Checklist. Replace this download with your real PDF or send the asset via email.`,
      ], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "CPA-Checklist.txt";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);

      setStatus("success");
      setShowThanks(true);
      setForm({ name: "", email: "" });
    } catch (err) {
      console.error(err);
      setMessage("Submission failed — please try again later.");
      setStatus("error");
    }
  };

  useEffect(() => {
  AOS.init({
    duration:1000,
    once: true,
  })
},[]);

  const toggleVariant = () => setVariant((v) => (v === "A" ? "B" : "A"));

  // Text variations for a quick A/B test
  const copy = {
    A: {
      headline: "Grow your CPA leads — fast",
      sub: "High-converting funnel templates and checklists used by top affiliates.",
      cta: "Get the free checklist",
    },
    B: {
      headline: "Turn cold traffic into paying customers",
      sub: "Step-by-step CPA funnel blueprint + proven swipe copy.",
      cta: "Send me the blueprint",
    },
  }[variant];

  return (
    <div className="cpf-root">
      <style>{`
        .cpf-root { font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color:#0b1220; }
        .cpf-header { display:flex; justify-content:space-between; align-items:center; padding:18px 28px; }
        .cpf-logo { font-weight:700; letter-spacing:0.4px; }
        .cpf-nav a{ margin-left:14px; text-decoration:none; color:inherit; font-size:14px }

        .cpf-hero { display:flex; gap:40px; padding:36px 28px; align-items:center; justify-content:space-between; max-width:1100px; margin:0 auto; }
        .cpf-hero-left { flex:1; }
        .cpf-hero h1 { font-size:2rem; margin:0 0 12px; line-height:1.05; }
        .cpf-hero p.lead { margin:0 0 18px; color:#334155; }

        .cpf-form { background: #ffffff; border: 1px solid #e6e9ee; padding:18px; border-radius:10px; max-width:420px; box-shadow: 0 6px 18px rgba(13,23,37,0.06); }
        .cpf-form label{ display:block; font-size:12px; margin-bottom:6px; color:#475569 }
        .cpf-input{ width:100%; padding:10px 12px; border-radius:8px; border:1px solid #d1d5db; margin-bottom:10px; font-size:14px }
        .cpf-btn{ display:inline-block; width:100%; padding:11px; border-radius:8px; background:#0b63ff; color:white; border:none; cursor:pointer; font-weight:600 }
        .cpf-status{ margin-top:8px; font-size:13px }

        .cpf-hero-right { flex:0 0 420px; display:flex; align-items:center; justify-content:center }
        .cpf-graphic { width:320px; height:220px; border-radius:12px; background:linear-gradient(135deg,#e6f0ff,#f2f9ff); display:flex; align-items:center; justify-content:center; color:#08316f; font-weight:600; }

        .cpf-proofs { max-width:1100px; margin:18px auto; padding:0 28px; display:flex; gap:18px; align-items:center; justify-content:space-between }
        .cpf-badges img{ height:28px; opacity:0.85 }

        .cpf-sections { max-width:1100px; margin:18px auto; padding:0 28px; display:grid; grid-template-columns:repeat(3,1fr); gap:18px }
        .cpf-card { background:white; border-radius:10px; padding:18px; border:1px solid #e6e9ee }

        .cpf-faq { max-width:1100px; margin:28px auto; padding:0 28px }
        .cpf-footer { padding:28px; color:#64748b; font-size:14px; text-align:center }

        .cpf-sticky-cta { display:none; position:fixed; left:12px; right:12px; bottom:12px; z-index:60 }

        @media (max-width:900px){
          .cpf-hero { flex-direction:column; gap:18px }
          .cpf-hero-right { flex-basis:auto }
          .cpf-sections{ grid-template-columns:1fr }
          .cpf-sticky-cta { display:block }
        }
      `}</style>



      <header className="cpf-header">
        <div className="cpf-logo">{brandName}</div>
        <nav className="cpf-nav" aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#faq">FAQ</a>
        </nav>
      </header>

      <main>
        <section className="cpf-hero" id="hero">
          <div className="cpf-hero-left">
            <h1>{copy.headline}</h1>
            <p className="lead">{copy.sub} — proven templates, creatives, and conversion checklists to scale campaigns.</p>

            <div className="cpf-form" aria-live="polite">
              <form onSubmit={handleSubmit} aria-label="Lead capture form">
                <label htmlFor="name">Full name</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="cpf-input"
                  placeholder="Jane Doe"
                />

                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="cpf-input"
                  placeholder="you@company.com"
                  required
                />

                <button
                  type="submit"
                  className="cpf-btn"
                  aria-disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending..." : copy.cta}
                </button>

                <div className="cpf-status" role="status">
                  {status === "error" && <div style={{ color: "#dc2626" }}>{message}</div>}
                  {status === "success" && <div style={{ color: "#16a34a" }}>You're in — check your inbox!</div>}
                </div>
              </form>

              <div style={{ marginTop: 12, fontSize: 12, color: "#475569" }}>
                By signing up you agree to receive marketing emails. You can unsubscribe anytime.
              </div>
            </div>

            <div style={{ marginTop: 14, display: "flex", gap: 8, alignItems: "center" }}>
              <button onClick={toggleVariant} style={{ background: "transparent", border: "none", cursor: "pointer", fontSize: 13, color: "#0b63ff" }}>
                Toggle Variant (A/B): {variant}
              </button>

              <div style={{ marginLeft: 8, fontSize: 13, color: "#64748b" }}>
                Quick test: Headlines & CTA
              </div>
            </div>
          </div>

          <div className="cpf-hero-right">
            <div className="cpf-graphic" aria-hidden>
              Funnel Preview
            </div>
          </div>
        </section>

        <section className="cpf-proofs" aria-hidden>
          <div className="cpf-badges">
            {/* Replace with real partner logos */}
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='28'%3E%3Crect width='120' height='28' fill='%23eef2ff' rx='4'/%3E%3Ctext x='12' y='18' font-family='Arial' font-size='12' fill='%23063a87'%3ETrusted by 1000+%3C/text%3E%3C/svg%3E" alt="trusted" />
          </div>

          <div style={{ opacity: 0.85, fontSize: 13, color: "#475569" }}>
            Real results: average 8–14% lead capture rate when funnel is matched to the right traffic.
          </div>

          <div style={{ textAlign: "right", fontSize: 13 }}>
            <a href="#features">See features →</a>
          </div>
        </section>

        <section className="cpf-sections" id="features">
          <div className="cpf-card">
            <h3>Ready-made templates</h3>
            <p style={{ color: "#475569" }}>High-converting funnel templates for native, social, and display traffic.</p>
          </div>
          <div className="cpf-card">
            <h3>Swipe copy & creatives</h3>
            <p style={{ color: "#475569" }}>Use tested headlines, pre-written ad text and creative briefs to speed up testing.</p>
          </div>
          <div className="cpf-card">
            <h3>Analytics & tracking</h3>
            <p style={{ color: "#475569" }}>Simple conversion hooks and GTM-ready events so you can measure CPA precisely.</p>
          </div>
        </section>

        <section style={{ maxWidth: 1100, margin: "28px auto", padding: "0 28px" }} id="testimonials">
          <h2>What people are saying</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12, marginTop: 12 }}>
            <blockquote style={{ padding: 12, borderLeft: "3px solid #e6eefc" }}>
              "This funnel cut our cost per lead by 38% — the checklist alone saved us weeks of testing." — M. A.
            </blockquote>
            <blockquote style={{ padding: 12, borderLeft: "3px solid #e6eefc" }}>
              "Clear steps, clear results — highly recommended for affiliates starting out." — S. K.
            </blockquote>
          </div>
        </section>

        <section className="cpf-faq" id="faq">
          <h2>FAQ</h2>
          <details style={{ marginTop: 12 }}>
            <summary>Is there a money-back guarantee?</summary>
            <div style={{ marginTop: 8, color: "#475569" }}>
              No monetary transactions here — this is a free lead magnet. If you buy any paid course, check the provider's refund policy.
            </div>
          </details>

          <details style={{ marginTop: 12 }}>
            <summary>How do I integrate with Mailchimp?</summary>
            <div style={{ marginTop: 8, color: "#475569" }}>
              Use a server-side endpoint to accept form submissions and forward them to Mailchimp's API, or use Mailchimp's form action URL. Server-side is preferred for security.
            </div>
          </details>
        </section>

        {/* ========== FEATURES / BENEFITS SECTION ========== */}
<section className="cpf-features" id="features">
  <div className="container">
    <h2 className="section-title">Why This Funnel Works</h2>
    <p className="section-subtitle">
      Clear structure, proven copy, and built-in analytics — everything you need
      to launch profitable CPA campaigns faster.
    </p>

    <div className="features-grid">
      <div className="feature-card">
        <div className="feature-icon">💡</div>
        <h3>Conversion-Optimized Design</h3>
        <p>
          Every page is structured for higher opt-in rates, fewer drop-offs, and
          maximum engagement.
        </p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">⚙️</div>
        <h3>Integrated Tracking</h3>
        <p>
          Pre-configured analytics and event tracking make measuring ROI
          effortless and accurate.
        </p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">🚀</div>
        <h3>Fast & Easy Setup</h3>
        <p>
          Import, customize, and launch your funnel in minutes — no coding
          required.
        </p>
      </div>
    </div>
  </div>
</section>

{/* ====== Features Section ====== */}
<section className="features-section">
  <div className="container">
    <h2 className="section-title">Why Choose Our Offer</h2>
    <p className="section-subtitle">
      Unlock exclusive benefits designed to maximize your conversions.
    </p>

    <div className="features-grid">
      <div className="feature-box">
        <img src="/public/icons/conversion.png" alt="Conversion" />
        <h3>High Conversion Rates</h3>
        <p>Our funnel is optimized to deliver maximum conversions for every click.</p>
      </div>

      <div className="feature-box">
        <img src="/public/icons/secure.png" alt="Security" />
        <h3>Secure and Reliable</h3>
        <p>Every transaction is protected, ensuring user trust and long-term growth.</p>
      </div>

      <div className="feature-box">
        <img src="/public/icons/analytics.png" alt="Analytics" />
        <h3>Detailed Analytics</h3>
        <p>Gain full insights into your leads, clicks, and conversions in real time.</p>
      </div>
    </div>
  </div>
</section>

{/* ====== How It Works Section ====== */}
<section className="howitworks-section">
  <div className="container">
    <h2 className="section-title">How It Works</h2>
    <p className="section-subtitle">
      A simple, transparent process that turns visitors into conversions.
    </p>

    <div className="steps-grid">
      <div className="step-box">
        <div className="step-number">1</div>
        <h3>Sign Up Instantly</h3>
        <p>Enter your details and access your account right away — no waiting time.</p>
      </div>

      <div className="step-box">
        <div className="step-number">2</div>
        <h3>Choose Your Offer</h3>
        <p>Browse through our list of top-performing CPA offers to promote.</p>
      </div>

      <div className="step-box">
        <div className="step-number">3</div>
        <h3>Drive Conversions</h3>
        <p>Start sharing your link and track your conversions in real-time.</p>
      </div>
    </div>
  </div>
</section>

{/* ====== Quick Stats Section ====== */}
<section className="stats-section">
  <div className="container">
    <h2 className="section-title">Our Performance in Numbers</h2>
    <p className="section-subtitle">
      Proven track record of helping partners and affiliates scale faster.
    </p>

    <div className="stats-grid">
      <div className="stat-box">
        <h3>10K+</h3>
        <p>Leads Generated</p>
      </div>

      <div className="stat-box">
        <h3>$500K+</h3>
        <p>Commission Earned</p>
      </div>

      <div className="stat-box">
        <h3>5M+</h3>
        <p>Ad Impressions</p>
      </div>

      <div className="stat-box">
        <h3>98%</h3>
        <p>Client Satisfaction</p>
      </div>
    </div>
  </div>
</section>

{/* ====== Strategy / Educational Section ====== */}
<section className="strategy-section">
  <div className="container strategy-grid">
    <div className="strategy-image">
      <img
        src="/public/imgforabout/Strategy.jpg"
        alt="CPA strategy illustration"
      />
    </div>

    <div className="strategy-content">
      <h2 className="section-title">Smart Strategy for Maximum Conversions</h2>
      <p className="section-subtitle">
        Our system blends data-driven targeting, automation, and real-time analytics to maximize every click and conversion.
      </p>

      <ul className="strategy-list">
        <li>
          <i className="fas fa-chart-line"></i>
          AI-powered campaign optimization.
        </li>
        <li>
          <i className="fas fa-bullseye"></i>
          Laser-focused targeting to reach high-value leads.
        </li>
        <li>
          <i className="fas fa-sync"></i>
          Automated performance tracking and retargeting.
        </li>
        <li>
          <i className="fas fa-rocket"></i>
          Scalable system built for affiliate success.
        </li>
      </ul>
    </div>
  </div>
</section>

{/* ====== Global Reach Section ====== */}
<section className="globalreach-section">
  <div className="container">
    <h2 className="section-title">Trusted by Brands Worldwide</h2>
    <p className="section-subtitle">
      We collaborate with leading networks and marketing agencies across the globe to deliver real CPA growth.
    </p>

    <div className="logos-grid">
      <img src="/public/imgforabout/Russia.jpeg" alt="Partner 1" />
      <img src="/public/imgforabout/USA.webp" alt="Partner 2" />
      <img src="/public/imgforabout/Maam.jpg" alt="Partner 3" />
      <img src="/public/imgforabout/Grace.jpg" alt="Partner 4" />
      <img src="/public/imgforabout/Italy.jpg" alt="Partner 5" />
    </div>

    <div className="world-map">
      <img src="/public/imgforabout/Global-map.jpg" alt="Global presence map" />
    </div>
  </div>
</section>


{/* ====== Why Choose Us Section ====== */}
<section className="whychooseus-section">
  <div className="container why-grid">
    <div className="why-content">
      <h2 className="section-title">Why Choose Us</h2>
      <p className="section-subtitle">
        We combine data, experience, and technology to help affiliates and marketers achieve sustainable performance growth.
      </p>

      <div className="why-features">
        <div className="why-item">
          <i className="fas fa-cogs"></i>
          <div>
            <h4>Advanced Tracking</h4>
            <p>Track clicks, conversions, and earnings with precise real-time analytics.</p>
          </div>
        </div>

        <div className="why-item">
          <i className="fas fa-users"></i>
          <div>
            <h4>Dedicated Support</h4>
            <p>24/7 access to our affiliate managers for guidance and optimization tips.</p>
          </div>
        </div>

        <div className="why-item">
          <i className="fas fa-lock"></i>
          <div>
            <h4>Transparent Payments</h4>
            <p>Weekly and monthly payouts with full transaction history visibility.</p>
          </div>
        </div>

        <div className="why-item">
          <i className="fas fa-lightbulb"></i>
          <div>
            <h4>Performance Insights</h4>
            <p>Data-driven recommendations to refine your traffic and boost ROI.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="why-image">
      <img src="/public/imgforabout/chooseus.jpg" alt="Why choose us illustration" />
    </div>
  </div>
</section>

{/* ====== Affiliate Success Stories Section ====== */}
<section className="success-section">
  <div className="container">
    <h2 className="section-title">Affiliate Success Stories</h2>
    <p className="section-subtitle">
      Discover how our partners scaled their earnings and achieved real growth with our CPA system.
    </p>

    <div className="success-grid">
      <div className="success-card">
        <img src="/public/imgforabout/Grace.jpg" alt="Affiliate 1" />
        <div className="success-content">
          <h4>Grace Nimi Afolabi</h4>
          <p className="role">Affiliate Marketer, USA</p>
          <p className="story">
            “In just three months, I tripled my conversions using their optimization tools. The real-time data and support are unmatched.”
          </p>
          <span className="result">+220% ROI</span>
        </div>
      </div>

      <div className="success-card">
        <img src="/public/imgforabout/Maam.jpg" alt="Affiliate 2" />
        <div className="success-content">
          <h4>Esther Sley</h4>
          <p className="role">Performance Marketer, Nigeria</p>
          <p className="story">
            “The tracking dashboard and insights helped me target the right audience. I now generate consistent commissions weekly.”
          </p>
          <span className="result">+150% Conversion Rate</span>
        </div>
      </div>

      <div className="success-card">
        <img src="/public/imgforabout/Mimi.jpg" alt="Affiliate 3" />
        <div className="success-content">
          <h4>Miracle Mercy Sley</h4>
          <p className="role">Affiliate Partner, Nigeria</p>
          <p className="story">
            “This platform simplified my workflow. Payments are always on time, and my affiliate growth has been steady ever since.”
          </p>
          <span className="result">+300% Monthly Growth</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="performance-analytics">
  <div className="analytics-container">
    <div className="analytics-text">
      <h2>Performance Analytics That Drive Results</h2>
      <p>
        Gain real-time insights into your affiliate performance. Track every click,
        conversion, and campaign ROI from one powerful dashboard.
      </p>

      <ul className="analytics-features">
        <li>✔ Real-time Conversion Tracking</li>
        <li>✔ Click-through and Lead Metrics</li>
        <li>✔ Smart ROI Optimization Tools</li>
        <li>✔ AI-Powered Insights</li>
      </ul>

      <button className="analytics-btn">View Demo Dashboard</button>
    </div>

    <div className="analytics-image">
      <img src="/public/imgforabout/Dashboard-insights.jpg" alt="Analytics Dashboard" />
    </div>
  </div>
</section>

<section className="monetization-models">
  <div className="models-container">
    <div className="models-header">
      <h2>Flexible Commission Models for Every Partner</h2>
      <p>
        Choose from transparent, performance-based payout structures that fit
        your goals. Earn more as you scale — no hidden fees, just results.
      </p>
    </div>

    <div className="models-grid">
      <div className="model-card">
        <h3>Starter Tier</h3>
        <p className="model-earning">$10 - $50 per lead</p>
        <ul>
          <li>Perfect for new affiliates</li>
          <li>Weekly payouts</li>
          <li>Access to limited campaigns</li>
        </ul>
        <button>Join Starter</button>
      </div>

      <div className="model-card featured">
        <h3>Pro Tier</h3>
        <p className="model-earning">$60 - $200 per lead</p>
        <ul>
          <li>Priority campaign access</li>
          <li>Dedicated support</li>
          <li>Monthly bonuses for volume</li>
        </ul>
        <button>Upgrade to Pro</button>
      </div>

      <div className="model-card">
        <h3>Elite Tier</h3>
        <p className="model-earning">$250+ per lead</p>
        <ul>
          <li>Exclusive high-ticket offers</li>
          <li>Private affiliate manager</li>
          <li>Custom campaign requests</li>
        </ul>
        <button>Apply for Elite</button>
      </div>
    </div>
  </div>
</section>

<section className="security-compliance">
  <div className="security-container">
    <div className="security-text">
      <h2>Security & Compliance You Can Trust</h2>
      <p>
        We take data protection seriously. From encrypted transactions to GDPR compliance,
        every part of our affiliate ecosystem is built for transparency, reliability, 
        and peace of mind.
      </p>

      <div className="security-features">
        <div className="feature">
          <img src="/public/icons/lock.png" alt="Data Encryption" />
          <h4>Data Encryption</h4>
          <p>All user data is protected using 256-bit SSL encryption.</p>
        </div>
        <div className="feature">
          <img src="/public/icons/secure.png" alt="Compliance" />
          <h4>Regulatory Compliance</h4>
          <p>We comply with GDPR and global affiliate marketing standards.</p>
        </div>
        <div className="feature">
          <img src="/public/icons/secure-server.png" alt="Secure Servers" />
          <h4>Secure Servers</h4>
          <p>Hosted on trusted cloud infrastructure for maximum uptime.</p>
        </div>
      </div>
    </div>

    <div className="security-image">
      <img src="/public/imgforabout/security-dashboard.jpg" alt="Security Illustration" />
    </div>
  </div>
</section>

<section className="faq-section">
  <div className="faq-container">
    <h2>Frequently Asked Questions</h2>
    <p className="faq-intro">
      Got questions? We’ve answered the most common ones affiliates ask before joining.
    </p>

    <div className="faq-grid">
      <div className="faq-item">
        <h4>How do I start earning from your CPA offers?</h4>
        <p>
          Simply sign up, choose a campaign that fits your niche, and start driving
          traffic. You’ll get paid for every qualified lead or action.
        </p>
      </div>

      <div className="faq-item">
        <h4>When are payments processed?</h4>
        <p>
          Payments are processed weekly or monthly, depending on your tier and
          preferred payment method.
        </p>
      </div>

      <div className="faq-item">
        <h4>Do you accept international affiliates?</h4>
        <p>
          Yes! Our global affiliate network welcomes partners from over 80 countries.
        </p>
      </div>

      <div className="faq-item">
        <h4>What marketing tools are available?</h4>
        <p>
          You’ll have access to professional creatives, tracking dashboards,
          and real-time campaign analytics.
        </p>
      </div>

      <div className="faq-item">
        <h4>Is there a minimum payout threshold?</h4>
        <p>
          Yes, the minimum payout is $50 for most payment methods — easy to reach even for new affiliates.
        </p>
      </div>
    </div>
  </div>
</section>



      </main>


      <Footer />


      {/* Mobile sticky CTA — replace with a more advanced sticky when integrating */}
      <div className="cpf-sticky-cta">
        <div style={{ display: "flex", gap: 8 }}>
          <input aria-label="email for sticky" placeholder="you@company.com" style={{ flex: 1, padding: 10, borderRadius: 8, border: "1px solid #e2e8f0" }} />
          <button className="cpf-btn" style={{ minWidth: 120 }}>Get checklist</button>
        </div>
      </div>

      {/* Thank-you modal (very basic) */}
      {showThanks && (
        <div role="dialog" aria-modal="true" style={{ position: "fixed", inset: 0, display: "grid", placeItems: "center", background: "rgba(2,6,23,0.6)", zIndex: 80 }}>
          <div style={{ width: 420, background: "white", padding: 20, borderRadius: 12 }}>
            <h3>Thanks — check your inbox!</h3>
            <p style={{ color: "#475569" }}>We just sent the checklist and a few quick tips. If you don't see it, check your spam folder.</p>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 12 }}>
              <button onClick={() => setShowThanks(false)} style={{ padding: 8, borderRadius: 8, border: "1px solid #e6e9ee" }}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
