import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from "../components/Footer";
import '../assets/css/style.css';
import '../assets/css/Aboutt.css';
import { Link } from "react-router-dom";


// ✅ Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const About = () => {
  useEffect(() => {
    // Initialize AOS if loaded via CDN
    if (window.AOS) {
      window.AOS.init({ once: true, duration: 700 });
    }

    // Dark mode toggle handler (delegated to button)
    const toggleBtn = document.getElementById('darkToggle');
    const handleToggle = () => {
      document.body.classList.toggle('dark-mode');
    };
    toggleBtn?.addEventListener('click', handleToggle);

    return () => {
      toggleBtn?.removeEventListener('click', handleToggle);
    };
  }, []);

  return (
    <div>
      <Helmet>
        <title>About - Emeka Locksley</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* External Styles */}
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />
        <link rel="icon" href="/imgforabout/locksley-icon.png" type="image/png" />

        {/* SEO Meta */}
        <meta name="description" content="Explore Emeka Locksley's professional portfolio — projects, transport solutions, and data-driven tools." />
        <meta name="keywords" content="Emeka Locksley, Transport Tech, Fleet Management, Data Visualizer, Case Organizer, Portfolio" />
        <meta name="author" content="Emeka Goodness Locksley" />

        {/* Open Graph */}
        <meta property="og:title" content="Emeka Locksley | Portfolio" />
        <meta property="og:description" content="Explore transport-focused tools and intelligent project solutions crafted by Emeka Locksley." />
        <meta property="og:image" content="https://llillocksley.github.io/personal-website/imgforabout/it-pic.jpg" />
        <meta property="og:url" content="https://llillocksley.github.io/personal-website/about.html" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Emeka Locksley Portfolio" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Me | Emeka Locksley" />
        <meta name="twitter:description" content="Transport-focused developer passionate about analytics, UI, and smart solutions." />
        <meta name="twitter:image" content="https://llillocksley.github.io/personal-website/imgforabout/it-pic.jpg" />
        <meta name="twitter:url" content="https://llillocksley.github.io/personal-website/about.html" />

        {/* Scripts (AOS only, Swiper handled via import) */}
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" defer></script>
      </Helmet>



      {/* Hero / Intro */}
      <section
        className="about-hero corporate-intro"
        data-aos="fade-up"
      >
        <div className="about-hero-inner">
          <div className="about-image-box">
            <img
              src="/public/imgforabout/EMEKA.jpg"
              alt="Emeka Locksley"
              className="about-image"
              loading="lazy"
              style={{ width: '70%', height: 'auto' }}
            />
          </div>
          <div className="about-text-box">
            <h1 className="main-heading">Meet Emeka Locksley</h1>
            <h3 className="sub-heading">Innovation | Integrity | Impact</h3>
            <p>
              I am a passionate and forward-thinking web developer driven by the
              desire to create meaningful digital experiences. With a strong
              foundation in design, functionality, and user experience, I transform
              ideas into functional web solutions that inspire growth, drive
              engagement, and solve real-world challenges.
            </p>
            <p>
              My work is grounded in curiosity, continuous learning, and a vision to
              deliver impactful technology, especially in sectors like transport,
              data, and digital strategy.
            </p>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="what-i-do" data-aos="fade-up">
        <h2>What I Do</h2>
        <div className="skills-grid">
          <div className="skill-card" data-aos="flip-up">
            <i className="fas fa-code" />
            <h3>Frontend Development</h3>
            <p>
              I create responsive, user-friendly websites using HTML, CSS, and
              JavaScript to bring designs to life.
            </p>
          </div>
          <div className="skill-card" data-aos="flip-up" data-aos-delay={100}>
            <i className="fas fa-lightbulb" />
            <h3>Creative Problem Solving</h3>
            <p>
              I enjoy solving challenges with code and continuously seek smarter
              solutions in my workflow.
            </p>
          </div>
          <div className="skill-card" data-aos="flip-up" data-aos-delay={200}>
            <i className="fas fa-chart-line" />
            <h3>Learning &amp; Growth</h3>
            <p>
              I’m committed to continuous learning, exploring new tools and improving
              my craft every day.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission" data-aos="fade-up">
        <div className="vision-box">
          <h2>Vision</h2>
          <p>
            To become a leading force in technology-driven innovation, delivering
            solutions that transform industries and improve lives — starting with
            transport, data intelligence, and responsive digital design.
          </p>
        </div>
        <div className="mission-box">
          <h2>Mission</h2>
          <p>
            To build impactful digital tools and experiences that are accessible,
            efficient, and rooted in problem-solving. I aim to collaborate, grow
            continuously, and apply modern design and engineering principles to
            drive meaningful change.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values" data-aos="fade-up">
        <h2>Core Values</h2>
        <div className="cv-grid">
          <div className="cv-card">
            <div className="cv-inner">
              <div className="cv-front">
                <i className="fas fa-lightbulb" />
                <h3>Innovation</h3>
              </div>
              <div className="cv-back">
                <p>
                  We embrace forward-thinking ideas and cutting-edge solutions to
                  drive continuous growth and create lasting value. Our commitment to
                  innovation ensures we stay ahead in a rapidly evolving world.
                </p>
              </div>
            </div>
          </div>
          <div className="cv-card">
            <div className="cv-inner">
              <div className="cv-front">
                <i className="fas fa-handshake" />
                <h3>Integrity</h3>
              </div>
              <div className="cv-back">
                <p>
                  Honesty, transparency, and ethical conduct guide every decision we
                  make. We build trust through accountability and respect in all our
                  relationships and business practices.
                </p>
              </div>
            </div>
          </div>
          <div className="cv-card">
            <div className="cv-inner">
              <div className="cv-front">
                <i className="fas fa-award" />
                <h3>Excellence</h3>
              </div>
              <div className="cv-back">
                <p>
                  We pursue the highest standards in everything we do, delivering
                  superior quality and exceptional results. Excellence is our
                  hallmark, reflected in our dedication and professionalism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="about-intro" data-aos="fade-up">
        <div className="intro-content">
          <h2>Who I Am</h2>
          <p>
            I’m Emeka Locksley, a driven and solution-focused web developer with a
            passion for transforming ideas into practical, user-friendly digital
            experiences. My mission is to contribute to industries through
            technology, professionalism, and continuous improvement.
          </p>
          <p>
            With a growing portfolio and collaborative experience, I believe in
            creating long-term value and driving results through modern design and
            code.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="skills-highlight" data-aos="fade-up">
        <h2>Skills</h2>
        <ul>
          <li>HTML5, CSS3, JavaScript</li>
          <li>Responsive Web Design</li>
          <li>Git &amp; GitHub</li>
          <li>Modern UI/UX Principles</li>
          <li>Dark Mode Integration</li>
          <li>Clean Semantic Code</li>
        </ul>
      </section>


      {/* ===== Timeline Section ===== */}
<section className="timeline-section">
  <div className="container">
    <h2 className="section-title" data-aos="fade-up">
      Our Journey
    </h2>
    <div className="timeline">
      <div className="timeline-item" data-aos="fade-up">
        <div className="timeline-date">2019</div>
        <div className="timeline-content">
          <h3>Founded the Company</h3>
          <p>
            Established with a clear vision to transform the transport and logistics 
            industry through innovation, efficiency, and trust.
          </p>
        </div>
      </div>

      <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
        <div className="timeline-date">2021</div>
        <div className="timeline-content">
          <h3>Expanded Operations</h3>
          <p>
            Successfully launched multiple transport solutions across regions, 
            focusing on reliability and customer satisfaction.
          </p>
        </div>
      </div>

      <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
        <div className="timeline-date">2023</div>
        <div className="timeline-content">
          <h3>Digital Transformation</h3>
          <p>
            Introduced smart logistics platforms to empower data-driven decisions 
            and improve fleet management efficiency.
          </p>
        </div>
      </div>

      <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
        <div className="timeline-date">2025</div>
        <div className="timeline-content">
          <h3>Looking Ahead</h3>
          <p>
            Our mission continues—pioneering modern transport systems that set new 
            standards of excellence across Africa.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* === Testimonials Section === */}
<section className="testimonials">
  <div className="container">
    <h2 className="section-title">What Clients Say</h2>
    <p className="section-subtitle">
      Trusted by businesses and partners in the transport and logistics sector.
    </p>

    <div className="testimonial-grid">
      <div className="testimonial-card">
        <p className="testimonial-text">
          “Working with this team has been a game changer. Their innovative
          transport solutions improved our efficiency and reduced costs.”
        </p>
        <div className="testimonial-author">
          
          <div>
            <h4>John Adewale</h4>
            <span>CEO, Metro Logistics</span>
          </div>
        </div>
      </div>

      <div className="testimonial-card">
        <p className="testimonial-text">
          “They bring professionalism and deep industry knowledge. We rely on
          their strategies for our fleet management operations.”
        </p>
        <div className="testimonial-author">
          
          <div>
            <h4>Chioma Okeke</h4>
            <span>Operations Head, Swift Transport</span>
          </div>
        </div>
      </div>

      <div className="testimonial-card">
        <p className="testimonial-text">
          “Outstanding service delivery and commitment to excellence. Highly
          recommended for long-term business growth.”
        </p>
        <div className="testimonial-author">
          
          <div>
            <h4>Emmanuel Bassey</h4>
            <span>Managing Partner, CargoLink</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Call To Action */}
      <section className="cta-section" data-aos="zoom-in">
        <h2>Let’s Build the Future Together</h2>
        <p>
          Partner with me to create innovative transport and digital solutions. 
          Explore my <Link to="/projects">projects</Link> or{" "}
          <Link to="/contact">get in touch</Link>.
        </p>
        <Link to="/contact" className="cta-btn">Contact Me</Link>
      </section>

      <Footer />
    </div>
  );
};

export default About;