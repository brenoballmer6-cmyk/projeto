import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { ProblemSolution } from './components/ProblemSolution';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Bonuses } from './components/Bonuses';
import { Testimonials } from './components/Testimonials';
import { AboutAuthor } from './components/AboutAuthor';
import { Certificate } from './components/Certificate';
import { Curriculum } from './components/Curriculum';
import { InteractiveBackground } from './components/InteractiveBackground';

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans selection:bg-brand-500/30 selection:text-brand-200 relative">
      <InteractiveBackground />
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <ProblemSolution />
          <BentoGrid />
          <Curriculum />
          <Bonuses />
          <Certificate />
          <Testimonials />
          <AboutAuthor />
          <Pricing />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
