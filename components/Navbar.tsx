import React, { useState } from 'react';
import { Menu, X, Bot } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-20 border-b border-brand-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => scrollToSection('hero')}>
            <div className="bg-brand-500/10 p-2 rounded-lg border border-brand-500/20 group-hover:bg-brand-500/20 transition-all">
              <Bot className="w-6 h-6 text-brand-400" />
            </div>
            <span className="text-xl font-display font-bold text-white tracking-tight">
              Robô IA <span className="text-brand-400">10x</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('modules')} className="text-sm font-medium text-gray-400 hover:text-brand-300 transition-colors">Robôs Inclusos</button>
            <button onClick={() => scrollToSection('bonuses')} className="text-sm font-medium text-gray-400 hover:text-brand-300 transition-colors">Bônus</button>
            <button onClick={() => scrollToSection('author')} className="text-sm font-medium text-gray-400 hover:text-brand-300 transition-colors">Mentor</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-sm font-medium text-gray-400 hover:text-brand-300 transition-colors">Resultados</button>
            <Button variant="primary" size="sm" onClick={() => scrollToSection('pricing')} className="shadow-lg shadow-brand-500/20 animate-pulse-slow">
              Quero Faturar 5 Dígitos
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-dark-900/95 backdrop-blur-xl border-b border-gray-800 p-4 flex flex-col space-y-4 shadow-2xl">
          <button onClick={() => scrollToSection('modules')} className="text-left text-gray-300 hover:text-white py-2">Robôs Inclusos</button>
          <button onClick={() => scrollToSection('bonuses')} className="text-left text-gray-300 hover:text-white py-2">Bônus</button>
          <button onClick={() => scrollToSection('author')} className="text-left text-gray-300 hover:text-white py-2">Mentor</button>
          <button onClick={() => scrollToSection('testimonials')} className="text-left text-gray-300 hover:text-white py-2">Resultados</button>
          <Button variant="primary" fullWidth onClick={() => scrollToSection('pricing')}>
            Quero Faturar 5 Dígitos
          </Button>
        </div>
      )}
    </nav>
  );
};