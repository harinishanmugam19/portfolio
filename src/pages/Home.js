import React, { Suspense, lazy, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = lazy(() => import('../components/Hero'));
const About = lazy(() => import('../components/About'));
const Projects = lazy(() => import('../components/Projects'));
const Contact = lazy(() => import('../components/Contact'));

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000,});
  }, []);

  return (
    <Suspense fallback={<div className="text-center pt-5 pt-md-5">Loading section...</div>}>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Suspense>
  );
};

export default Home;
