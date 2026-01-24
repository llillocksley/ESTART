import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from "../components/Footer";
import '../assets/css/style.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link } from "react-router-dom";


const Contact = () => {
  const [dark, setDark] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusColor, setStatusColor] = useState('');

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', dark);
  }, [dark]);

  const handleToggle = () => setDark((d) => !d);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Since you're using mailto: the "submission" is just the default browser behavior.
    // Show a simple optimistic feedback.
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      setStatusMessage('Please fill in all required fields.');
      setStatusColor('red');
      return;
    }

    setStatusMessage('Preparing email...'); // user sees something
    setStatusColor('#007bff');

    // Trigger mailto fallback
    const subject = encodeURIComponent(`New message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:emekalocksley@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div>
     <Helmet>
  {/* Basic Meta */}
  <meta charSet="UTF-8" />
  <title>Contact | Emeka Locksley</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Favicon */}
  <link rel="icon" href="/imgforabout/locksley-icon.png" type="image/png" />

  {/* Font Awesome */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  />

  {/* SEO */}
  <meta
    name="description"
    content="Explore Emeka Locksley's professional portfolio — projects, transport solutions, and data-driven tools."
  />
  <meta
    name="keywords"
    content="Emeka Locksley, Transport Tech, Fleet Management, Data Visualizer, Case Organizer, Portfolio"
  />
  <meta name="author" content="Emeka Goodness Locksley" />

  {/* Open Graph */}
  <meta property="og:title" content="Contact | Emeka Locksley" />
  <meta
    property="og:description"
    content="Explore transport-focused tools and intelligent project solutions crafted by Emeka Locksley."
  />
  <meta
    property="og:image"
    content="https://llillocksley.github.io/personal-website/imgforabout/contact-banner.jpg"
  />
  <meta
    property="og:url"
    content="https://llillocksley.github.io/personal-website/contact"
  />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Emeka Locksley Portfolio" />

  {/* Twitter Meta */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Contact | Emeka Locksley" />
  <meta
    name="twitter:description"
    content="Get in touch with Emeka Locksley for collaborations, projects, or inquiries."
  />
  <meta
    name="twitter:image"
    content="https://llillocksley.github.io/personal-website/imgforabout/contact-banner.jpg"
  />
</Helmet>



      {/* Dark Mode Toggle */}
      <div style={{ textAlign: 'center', margin: '1rem 0' }}>
        <button className="toggle-btn" onClick={handleToggle}>
          {dark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      {/* Contact Section */}
      <section className="contact-section" data-aos="fade-up">
        <div className="contact-container">
          <div className="contact-header">
            <h2 className="section-title">Get in Touch</h2>
            <p className="contact-description">
              Have a project, collaboration, or just want to say hi?
              <br />
              I’d love to hear from you.
            </p>
          </div>
          <div className="contact-grid">
            {/* Contact Form */}
            <form
              className="contact-form"
              action="mailto:emekalocksley@gmail.com"
              method="GET"
              encType="text/plain"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Your Message"
                  defaultValue={''}
                />
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
              {statusMessage && (
                <p style={{ color: statusColor, marginTop: '0.5rem' }}>{statusMessage}</p>
              )}
            </form>

            {/* Quick Contact Info */}
            <div className="quick-contact">
              <h3>Quick Contact</h3>
              <p>
                <i className="fas fa-envelope" />{' '}
                <a href="mailto:emekalocksley@gmail.com">emekalocksley@gmail.com</a>
              </p>
              <p>
                <i className="fab fa-github" />{' '}
                <a
                  href="https://github.com/llillocksley"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/llillocksley
                </a>
              </p>
              <p>
                <i className="fab fa-whatsapp" />{' '}
                <a href="https://wa.me/+2348139222806" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Collaborate Section */}
      <section className="collaboration-section" data-aos="fade-up">
        <div className="collaboration-container">
          <h2 className="collaboration-title">Let’s Collaborate</h2>
          <p className="collaboration-text">
            Whether it’s a one-time gig, long-term partnership, or just an exciting idea —
            I’m always open to meaningful collaboration. Reach out, and let’s build something
            impactful together.
          </p>
          <a
            href="mailto:emekalocksley@gmail.com"
            className="cta-btn"
            aria-label="Start a conversation via contact page"
          >
            Start a Conversation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
