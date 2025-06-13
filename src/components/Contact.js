import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="contact" className="contact-section py-5 text-white bg-dark">
      <div className="container text-center" data-aos="fade-up">
        <h2 className="fw-bold mb-4">Let’s Connect</h2>
        <p className="lead mb-4">
          Have a project or looking to collaborate? I'd love to hear from you. Feel free to reach out via email or LinkedIn.
        </p>
        <div className="mb-4">
          <h5>Email Me</h5>
          <a href="mailto:harinishanmugam19@gmail.com" className="text-warning fw-bold">
            harinishanmugam19@gmail.com
          </a>
          <p className="mb-0">📍 Chengalpattu, Tamil Nadu, India</p>
          <p>📞 +91 9159490880</p>
        </div>
        <div className="d-flex justify-content-center gap-3 flex-wrap mb-4">
          <a
            href="https://github.com/harini-digital"
            className="btn btn-outline-light btn-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github me-2"></i> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/harini-y-s-digitalmarketer"
            className="btn btn-primary btn-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin me-2"></i> LinkedIn
          </a>
        </div>
        <a
          href='/DIGITAL_MARKETER_HARINI.pdf'
          download
          className="btn btn-dark btn-lg"
        >
          📄 Download My Resume
        </a>
      </div>
    </section>
  );
};

export default Contact;