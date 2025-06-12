import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Projects.css';

const projectData = [
  {
    title: 'FirstCry Campaign',
    description: 'Executed a digital strategy involving SEO audits, A/B tested Google Ads, targeted email campaigns, and ORM initiatives to enhance brand visibility and drive traffic.',
    tools: ['Google Ads', 'Google Analytics', 'Mailchimp', 'SEMrush']
  },
  {
    title: 'Naturals Salon Marketing Plan',
    description: 'Built buyer personas, planned a 1-month content calendar, ran 2 Facebook and Google Ads campaigns, and executed a complete branding and influencer plan.',
    tools: ['Facebook Ads', 'Google Ads', 'Canva', 'Instagram']
  },
  {
    title: 'AgriTech E-commerce Onboarding',
    description: 'Optimized product listings, integrated e-commerce platforms, and tracked real-time performance for herbal/agri products across Amazon, Flipkart, and Meesho.',
    tools: ['Amazon Seller Central', 'Flipkart Seller Hub', 'Excel', 'Google Search Console']
  }
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="projects" className="projects-section py-5 bg-light">
      <div className="container" data-aos="fade-up">
        <h2 className="fw-bold text-center mb-5 text-white">Projects</h2>
        <div className="row">
          {projectData.map((project, index) => (
            <div className="col-md-4 mb-4" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="mt-auto">
                    <h6 className="text-muted">Tools Used:</h6>
                    <ul className="list-inline">
                      {project.tools.map((tool, idx) => (
                        <li className="list-inline-item badge bg-secondary me-1" key={idx}>{tool}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;