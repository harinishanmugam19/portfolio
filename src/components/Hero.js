import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Hero.css';
import profileImg from '../images/profile.jpeg'

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="hero-section d-flex align-items-center text-white bg-hero-gradient min-vh-100" id="hero">
      <div className="container text-center" data-aos="fade-up">
        <img
          src={profileImg}
          alt="Harini Y.S."
          className="img-fluid rounded-circle shadow-lg mb-4"
          style={{ width: '150px', height: '150px', objectFit: 'cover', border: '4px solid #fff' }}
        />
        <h1 className="display-3 fw-bold mb-3">Hi, I’m Harini Y.S.</h1>
        <h3 className="fw-normal mb-4">
          <span className="text-highlight">Digital Marketer</span> & <span className="text-highlight">SEO Specialist</span>
        </h3>
        <p className="lead mb-3">
          I craft strategic digital campaigns, optimize online visibility, and turn clicks into customers.
        </p>
        <p className="lead mb-4">
          With expertise in Google Ads, content creation, and data analytics, I help brands grow smarter and faster.
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a href="#projects" className="btn btn-warning btn-lg px-4">View Projects</a>
          <a
            href="https://www.linkedin.com/in/harini-y-s-digitalmarketer"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light btn-lg px-4"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
