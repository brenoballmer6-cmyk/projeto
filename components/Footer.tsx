import React from 'react';
import { Bot, Instagram, Youtube, Facebook, Lock, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex items-center gap-2">
            <div className="bg-brand-500/20 p-2 rounded-lg">
              <Bot className="w-5 h-5 text-brand-400" />
            </div>
            <span className="text-lg font-bold text-white">Robô IA 10x</span>
          </div>

          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} ZX Marketing. Todos os direitos reservados.
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-500 transition-all duration-300">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-500 transition-all duration-300">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-500 transition-all duration-300">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-10 border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <a href="#" className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-brand-500/30 transition-all duration-300">
            <div className="p-1 rounded-full bg-white/5 group-hover:bg-brand-500/20 transition-colors">
                <Lock className="w-3.5 h-3.5 text-gray-400 group-hover:text-brand-400 transition-colors" />
            </div>
            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
              Termos de Uso
            </span>
          </a>
          
          <a href="#" className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-brand-500/30 transition-all duration-300">
            <div className="p-1 rounded-full bg-white/5 group-hover:bg-brand-500/20 transition-colors">
                <ShieldCheck className="w-3.5 h-3.5 text-gray-400 group-hover:text-brand-400 transition-colors" />
            </div>
            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
              Política de Privacidade
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};