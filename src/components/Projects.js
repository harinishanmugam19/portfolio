import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Projects.css';

const projects = [
  {
    title: 'Parkroll',
    description: 'A mobile app for car parking reservations with daily, monthly, and yearly plans. Integrated with Google Maps and Stripe for seamless user experience.',
    tech: ['React Native', 'Zustand', 'Google Maps', 'Stripe'],
    role: 'Junior Developer'
  },
  {
    title: 'Shuttle',
    description: 'A tracking solution for hotel bus drivers to locate and pick up clients efficiently, synced with the Parkroll system.',
    tech: ['React Native', 'Zustand'],
    role: 'Junior Developer'
  },
  {
    title: 'Switchpe',
    description: 'A secure loan management platform for retailers & distributors. Features KYC verification, eNACH, and automated loan workflows.',
    tech: ['React Native', 'Payment Gateway', 'Zustand'],
    role: 'Mobile App Developer'
  },
  {
    title: 'Night Audit',
    description: 'A hotel revenue dashboard app that visualizes reports and helps management track performance with charts and real-time data.',
    tech: ['React Native', 'Chart Libraries', 'APIs'],
    role: 'Mobile App Developer'
  },
  {
    title: 'WorkTne',
    description: 'A timesheet and attendance app for employees with intuitive clock-in/out and real-time tracking features.',
    tech: ['React Native', 'Zustand'],
    role: 'Mobile App Developer'
  },
  {
    title: 'iCount',
    description: 'A task scheduling tool that notifies users with deadlines and reminders. Integrated with third-party notification services.',
    tech: ['React Native', 'Zustand', 'Notifications'],
    role: 'React Native Developer'
  }
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="projects-section py-5" id="projects">
      <div className="container text-center" data-aos="fade-up">
        <h2 className="fw-bold mb-5 text-white">Featured Projects</h2>
        <div className="row justify-content-center">
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="card h-100 shadow project-card">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="mt-auto">
                    <div className="mb-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="badge bg-secondary me-1">{tech}</span>
                      ))}
                    </div>
                    <small className="text-muted">Role: {project.role}</small>
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
