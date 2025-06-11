import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="about-section text-white d-flex align-items-center" id="about">
      <div className="container" data-aos="fade-up">
        <div className="row align-items-center">
          
          {/* Text Section */}
          <div className="col-lg-7 mb-4 mb-lg-0" data-aos="fade-right">
            <h2 className="fw-bold display-5">A Bit About Me</h2>
            <p className="lead mt-3">
              I’m <strong>Vinoth</strong>, a React Native & React.js developer with <strong>3+ years</strong> of experience crafting full-stack mobile and web applications.
            </p>
            <p>
              From integrating Stripe payments to building real-time dashboards and scalable architectures — I’m passionate about building apps that solve real-world problems while delivering top-notch user experiences.
            </p>
            <ul className="list-unstyled mt-3">
              <li>✅ Expert in React Native, Zustand, Redux</li>
              <li>✅ Cross-platform mobile development (Android + iOS)</li>
              <li>✅ Backend support with Node.js & MongoDB</li>
              <li>✅ Strong eye for UI/UX & performance optimization</li>
            </ul>
            <div className="mt-4">
              <a href="#projects" className="btn btn-outline-light btn-lg">Explore My Work</a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="col-lg-5 text-center" data-aos="fade-left">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Vinoth"
              className="img-fluid rounded-circle shadow-lg"
              style={{ maxWidth: '280px', border: '5px solid white' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
