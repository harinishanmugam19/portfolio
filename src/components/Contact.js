import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css'; // Optional for extra styling

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="contact-section py-5 text-white" id="contact">
      <div className="container" data-aos="fade-up">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h2 className="fw-bold mb-4">Let's Connect</h2>
            <p className="lead mb-4">
              Interested in working together or have a question? I'm always open to new opportunities and collaborations.
              Drop me a message or connect via my social profiles.
            </p>

            <div className="mb-4">
              <h5>Email me</h5>
              <a href="mailto:vinothanand1998@gmail.com" className="text-warning fw-bold">
                vinothanand1998@gmail.com
              </a>
              <p className="mb-0">📍 Chengalpattu, India</p>
              <p>📞 +91 90871 51269</p>
            </div>

            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a
                href="https://github.com/vinothanand" // replace with your GitHub
                className="btn btn-outline-light btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github me-2"></i> GitHub
              </a>

              <a
                href="https://linkedin.com/in/vinoth-m-reactdeveloper"
                className="btn btn-primary btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin me-2"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
