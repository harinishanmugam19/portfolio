import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import profileImg from '../images/profile.jpeg'

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="about-section py-5 text-white bg-dark">
      <div className="container" data-aos="fade-up">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold">About Me</h2>
            <p className="lead">
              I'm Harini, a passionate and performance-driven Digital Marketing Professional with over 1 year of experience creating impactful campaigns, optimizing SEO strategies, and building brand awareness across platforms.
            </p>
            <p>
              With hands-on experience managing e-commerce platforms like Amazon, Flipkart, and Meesho, I specialize in social media marketing, content creation, keyword analysis, and Google Ads. I’m eager to join innovative teams where I can contribute to business growth through modern digital strategies.
            </p>
            <ul className="list-unstyled mt-3">
              <li>✅ SEO & SEM campaign execution</li>
              <li>✅ Marketplace onboarding and product optimization</li>
              <li>✅ Google Ads, Mailchimp, Canva & Analytics expert</li>
              <li>✅ Strong communicator with creative branding skills</li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={profileImg}
              alt="Harini Y.S."
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
