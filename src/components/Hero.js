import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Hero.css'; // Optional CSS for custom styling

const Hero = () => {

  return (
    <section className="hero-section bg-dark text-white d-flex align-items-center" id="hero">
      <div className="container py-5">
        <div className="row align-items-center text-center text-lg-start">
          
          {/* Left: Text */}
          <div className="col-lg-7" data-aos="fade-right">
            <h1 className="display-4 fw-bold mb-3">
              Hi, I'm <span className="text-primary">Vinoth</span> 👋
            </h1>
            <h3 className="mb-3">React Native & Full-Stack Developer</h3>
            <p className="lead mb-4">
              I craft seamless mobile and web experiences using React Native, React.js, and Node.js. With 3+ years of hands-on experience, I build clean, scalable, and user-focused applications.
            </p>
            <ul className="list-unstyled text-start">
              <li>✅ Cross-platform mobile apps with rich features</li>
              <li>✅ Stripe, Maps, QR & Notification integrations</li>
              <li>✅ Clean UI, reusable components, & performance optimization</li>
            </ul>
            <div className="mt-4">
              <a href="#projects" className="btn btn-primary btn-lg me-3">Explore Projects</a>
              <a href="#contact" className="btn btn-outline-light btn-lg">Let's Connect</a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="col-lg-5 mt-5 mt-lg-0 text-center" data-aos="fade-left">
            <img
              src="https://avatars.githubusercontent.com/u/9919?v=4" // replace with your own avatar or illustration
              alt="Vinoth - React Developer"
              className="img-fluid rounded-circle hero-img shadow"
              style={{ width: '300px', height: '300px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
