import React from 'react';
import { Target, Users, Award } from 'lucide-react';

export const AboutAuthor: React.FC = () => {
  return (
    <section id="author" className="py-24 bg-gradient-to-b from-dark-900 to-brand-900/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -inset-4 bg-brand-500/20 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
              alt="Rafael Castro" 
              className="relative rounded-2xl shadow-2xl border border-white/10 w-full max-w-md mx-auto md:mx-0 object-cover aspect-[3/4]"
            />
            {/* Float Card */}
            <div className="absolute bottom-8 right-8 bg-dark-800/90 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl max-w-xs animate-bounce-slow">
                <p className="text-brand-400 font-bold text-lg">R$ 1.000.000+</p>
                <p className="text-gray-400 text-xs">Vendas no Digital</p>
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              Sobre o Mentor <br />
              <span className="text-brand-500">Rafael Castro</span>
            </h2>
            <h3 className="text-xl text-gray-300 font-medium">
              E a ZX LAB - A maior escola de IA em língua Portuguesa do Mundo!
            </h3>
            
            <p className="text-gray-400 leading-relaxed">
              Especialista em Inteligência Artificial com mais de uma década no Digital. Rafael tem a missão pessoal de ajudar as pessoas que precisam de oportunidade de trabalho e que serão demitidas ou substituídas caso não aprendam a utilizar a IA.
            </p>
            
            <p className="text-gray-400 leading-relaxed">
              Sua meta é fazer você faturar com múltiplos 5 dígitos com sua agência de IA e Marketing Digital, mesmo começando do absoluto zero.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                    <Users className="w-6 h-6 text-brand-400 mb-2" />
                    <span className="text-2xl font-bold text-white block">7.000+</span>
                    <span className="text-xs text-gray-500">Alunos Formados</span>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                    <Award className="w-6 h-6 text-brand-400 mb-2" />
                    <span className="text-2xl font-bold text-white block">Top 1%</span>
                    <span className="text-xs text-gray-500">Mercado Latino</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};