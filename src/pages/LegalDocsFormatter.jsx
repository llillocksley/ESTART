import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../components/Footer";
import '../assets/css/style.css';
import { Link } from "react-router-dom";


export default function LegalDocsFormatter() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div>
<Helmet>
  {/* Page Settings */}
  <meta charSet="UTF-8" />
  <title>Legal Docs Formatter | Emeka Locksley</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* Fav Icon & Fonts */}
  <link rel="icon" href="/imgforabout/locksley-icon.png" type="image/png" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    integrity="sha512-papNM3/pjQkDoy2jKLZsM4A0N5BJFfRnXkG6UOBFDCqS+MZLwSdo0iRvFMRHY9i9KyMQa/0ZBfY4WcGZh6FdLg=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  {/* AOS Animation CSS (Optional if used) */}
  <link
    href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css"
    rel="stylesheet"
  />

  {/* SEO Meta Tags */}
  <meta
    name="description"
    content="Smart formatting and structuring of legal documentation with speed, precision, and standardization."
  />
  <meta
    name="keywords"
    content="Legal Docs, Formatter, Legal Tech, Automation, Contracts, Templates, Law, Documentation"
  />
  <meta name="author" content="Emeka Goodness Locksley" />

  {/* Open Graph (Facebook, LinkedIn, etc.) */}
  <meta property="og:title" content="Legal Docs Formatter | Emeka Locksley" />
  <meta
    property="og:description"
    content="Smart formatting and structuring of legal documentation with speed, precision, and standardization."
  />
  <meta
    property="og:image"
    content="https://llillocksley.github.io/personal-website/imgforabout/legal-docs-banner.jpg"
  />
  <meta
    property="og:url"
    content="https://llillocksley.github.io/personal-website/legal-docs-formatter.html"
  />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Emeka Locksley Portfolio" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Legal Docs Formatter | Emeka Locksley"
  />
  <meta
    name="twitter:description"
    content="Smart formatting and structuring of legal documentation with speed, precision, and standardization."
  />
  <meta
    name="twitter:image"
    content="https://llillocksley.github.io/personal-website/imgforabout/legal-docs-banner.jpg"
  />
  <meta
    name="twitter:url"
    content="https://llillocksley.github.io/personal-website/legal-docs-formatter.html"
  />
</Helmet>



<header className="site-header">
  <div className="container nav-container">
    <div className="brand">
      <Link to="/">Emeka Goodness Locksley</Link>
    </div>
  </div>
</header>


      {/* Hero Banner */}
      <section
        className="hero-banner legal-docs-hero"
        style={{ backgroundImage: 'url("/imgforabout/legal-docs-banner.jpg")' }}
        data-aos="fade-up"
      >
        <div className="overlay">
          <div className="container">
            <div className="hero-text">
              <h1>Legal Docs Formatter</h1>
              <p>
                Automate legal document formatting, structure, and alignment — saving
                hours of manual editing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="legal-overview" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Overview</h2>
          <p className="section-description">
            The Legal Docs Formatter is built to simplify the tedious process of
            aligning and structuring legal documents. Designed for legal professionals,
            paralegals, and document teams, it automates formatting rules, alignment
            standards, and professional templates — reducing human error and saving
            valuable time.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="formatter-features" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <div className="feature-grid">
            <div className="feature-box">
              <i className="fas fa-file-alt" />
              <h3>Automatic Alignment</h3>
              <p>
                Ensure all headings, sub-headings, and body texts follow legal formatting
                protocols effortlessly.
              </p>
            </div>
            <div className="feature-box">
              <i className="fas fa-indent" />
              <h3>Indentation Control</h3>
              <p>
                Apply standard indentations for clauses, numbered lists, and legal citations
                with one click.
              </p>
            </div>
            <div className="feature-box">
              <i className="fas fa-font" />
              <h3>Font &amp; Style Normalization</h3>
              <p>
                Correct inconsistent fonts and paragraph styles to fit legal document expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Designed for Precision */}
      <section className="formatter-overview" data-aos="zoom-in">
        <div className="container formatter-grid">
          <div className="formatter-text">
            <h2>Designed for Legal Precision</h2>
            <p>
              The Legal Docs Formatter is a tool created specifically for transport companies and
              logistics teams that regularly handle sensitive contracts, NDAs, compliance reports,
              and regulatory paperwork. Poor formatting can lead to legal risks, misinterpretations,
              and delays.
            </p>
            <ul className="formatter-points">
              <li><i className="fas fa-check-circle" /> Auto-format freight contracts, NDAs, SLAs, and MoUs</li>
              <li><i className="fas fa-check-circle" /> Ensure legal alignment across vendors and carriers</li>
              <li><i className="fas fa-check-circle" /> Reduce review time by over 40% with clean templates</li>
            </ul>
          </div>
          <div className="formatter-image">
            <img
              src="/imgforabout/Transport-contract.jpg"
              alt="Formatted Legal Docs"
              loading="lazy"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="legal-challenges" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Common Formatting Challenges in Legal Documents</h2>
          <div className="challenges-grid">
            <div className="challenge-box">
              <h3>Inconsistent Line Spacing</h3>
              <p>
                Legal documents often require strict line spacing and paragraph styles. Manual
                formatting wastes time and can introduce errors.
              </p>
            </div>
            <div className="challenge-box">
              <h3>Unaligned Numbering &amp; Bullets</h3>
              <p>
                Misaligned clause numbers, bullets, and sub-bullets disrupt legal clarity and flow.
                This tool standardizes them perfectly.
              </p>
            </div>
            <div className="challenge-box">
              <h3>Improper Font Usage</h3>
              <p>
                Legal drafts sometimes include inconsistent font types and sizes — breaking professional
                expectations. Formatter fixes this automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="workflow-section" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="workflow-steps">
            <div className="workflow-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Upload Your Document</h3>
                <p>
                  Start by uploading your raw legal document in DOCX or PDF format — no special
                  formatting required.
                </p>
              </div>
            </div>
            <div className="workflow-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Select Formatting Rules</h3>
                <p>
                  Choose predefined templates or apply custom rules for spacing, font size,
                  paragraph alignment, and headers.
                </p>
              </div>
            </div>
            <div className="workflow-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Preview &amp; Customize</h3>
                <p>
                  Preview the auto-formatted result and make light adjustments before finalizing
                  your document layout.
                </p>
              </div>
            </div>
            <div className="workflow-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Export &amp; Share</h3>
                <p>
                  Download the final document in PDF or DOCX, ready for court submissions,
                  corporate use, or archives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Suggestions */}
      <section className="ai-suggestions" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Smart AI Suggestions</h2>
          <p className="section-description">
            In addition to formatting, the Legal Docs Formatter offers helpful AI nudges — helping users improve clarity,
            avoid passive voice, and align structure with legal tone.
          </p>
          <div className="ai-grid">
            <div className="ai-card">
              <h3>Clause Clarity Detection</h3>
              <p>Highlights long or vague legal clauses and suggests clearer alternatives.</p>
            </div>
            <div className="ai-card">
              <h3>Structure Strength Checker</h3>
              <p>Analyzes the sequence of arguments and offers layout adjustments.</p>
            </div>
            <div className="ai-card">
              <h3>Passive Voice Alerts</h3>
              <p>Flags overly passive sentences and proposes assertive legal phrasing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="comparison-section" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Before vs After Formatting</h2>
          <div className="comparison-grid">
            <div className="comparison-box before">
              <h3>Before</h3>
              <ul>
                <li><i className="fas fa-times-circle" /> Irregular paragraph spacing</li>
                <li><i className="fas fa-times-circle" /> Unnumbered or misaligned clauses</li>
                <li><i className="fas fa-times-circle" /> Mixed fonts and inconsistent styling</li>
              </ul>
            </div>
            <div className="comparison-box after">
              <h3>After</h3>
              <ul>
                <li><i className="fas fa-check-circle" /> Consistent paragraph structure</li>
                <li><i className="fas fa-check-circle" /> Aligned legal numbering</li>
                <li><i className="fas fa-check-circle" /> Unified legal font and layout</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section" data-aos="fade-up">
        <div className="container benefits-grid">
          <div className="benefits-text">
            <h2 className="section-title">Why Automate Legal Documents?</h2>
            <p>
              Manual formatting is time-consuming and error-prone. Automation introduces accuracy,
              consistency, and speed into the process of preparing legal documents for clients, teams,
              and filing systems.
            </p>
            <ul>
              <li><i className="fas fa-check-circle" /> Consistent formatting across large volumes</li>
              <li><i className="fas fa-check-circle" /> Eliminate copy-paste mistakes</li>
              <li><i className="fas fa-check-circle" /> Saves legal teams hours every week</li>
              <li><i className="fas fa-check-circle" /> Integrates with digital filing systems</li>
            </ul>
          </div>
          <div className="benefits-image">
            <img
              src="/imgforabout/Legal-transport.jpg"
              alt="Legal Benefits"
              loading="lazy"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="use-cases" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Use Case Scenarios</h2>
          <div className="use-cases-grid">
            <div className="use-case-card">
              <h3>Law Firms</h3>
              <p>
                Automate routine templates like affidavits, motions, and contracts —
                reducing turnaround time for legal teams.
              </p>
            </div>
            <div className="use-case-card">
              <h3>Corporate Legal Teams</h3>
              <p>
                Ensure branding and formatting consistency in NDAs, policy drafts, and HR
                documents across departments.
              </p>
            </div>
            <div className="use-case-card">
              <h3>Government Filing</h3>
              <p>
                Prepare regulatory filings and structured forms that meet official document
                layout requirements quickly.
              </p>
            </div>
            <div className="use-case-card">
              <h3>Freelance Legal Writers</h3>
              <p>
                Create professionally structured documents for clients without spending hours tweaking margins or font styles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formatter Capabilities */}
      <section className="formatter-solutions" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">What the Formatter Handles</h2>
          <div className="solutions-grid">
            <div className="solution-item">
              <i className="fas fa-file-word" />
              <h3>Auto-Formatting</h3>
              <p>Applies predefined heading styles, font weights, and margin spacing automatically.</p>
            </div>
            <div className="solution-item">
              <i className="fas fa-indent" />
              <h3>Alignment Rules</h3>
              <p>Ensures paragraph indentation and text justification are consistent across documents.</p>
            </div>
            <div className="solution-item">
              <i className="fas fa-gavel" />
              <h3>Legal Clause Highlights</h3>
              <p>Highlights legal clauses or keywords for quick access and review.</p>
            </div>
          </div>
        </div>
      </section>

      {/* User Benefits */}
      <section className="user-benefits" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Why Use Legal Docs Formatter?</h2>
          <ul className="benefits-list">
            <li><i className="fas fa-check-circle" /> Reduces time spent formatting by up to 70%</li>
            <li><i className="fas fa-check-circle" /> Delivers documents that meet legal standards</li>
            <li><i className="fas fa-check-circle" /> Minimizes human error in legal submissions</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" data-aos="fade-up">
        <div className="container cta-grid">
          <div className="cta-text">
            <h2>Ready to Standardize Your Legal Documents?</h2>
            <p>
              Experience faster editing, improved compliance, and client-ready formats in just minutes.
            </p>

<div className="cta-buttons">
  <Link to="/contact" className="cta-btn">
    Talk to Me
  </Link>
  <a
    href="/docs/Legal-doc-formater.pdf"
    className="cta-btn alt-btn"
    download
  >
    Download Sample PDF
  </a>
</div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
