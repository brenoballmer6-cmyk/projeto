import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    question: "Preciso deixar o computador ligado?",
    answer: "Não! Nossa tecnologia é baseada em nuvem. Uma vez configurado, o robô funciona 24 horas por dia nos nossos servidores, mesmo com seu celular desligado."
  },
  {
    question: "Existe risco de bloqueio do número?",
    answer: "O risco é minimizado drasticamente. Utilizamos simulação de digitação humana, intervalos variáveis e aquecimento de chip para garantir a segurança da sua conta."
  },
  {
    question: "Serve para qualquer nicho?",
    answer: "Sim. O Robô IA 10x é totalmente personalizável. Você cria os fluxos de conversa de acordo com o seu produto ou serviço, seja físico, digital ou delivery."
  },
  {
    question: "Tem garantia?",
    answer: "Absolutamente. Oferecemos 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu investimento."
  },
  {
    question: "Preciso saber programar?",
    answer: "Zero! O método foi desenhado para iniciantes. Utilizamos ferramentas 'No-Code' (sem código) onde você apenas arrasta e solta blocos para criar a inteligência."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -left-20 top-20 w-64 h-64 bg-brand-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
            <span className="text-brand-400 font-bold tracking-wider uppercase text-sm">Tira Dúvidas</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-2">
            Perguntas <span className="text-brand-500">Frequentes</span>
            </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                openIndex === index 
                  ? 'bg-brand-900/10 border-brand-500/50 shadow-[0_0_15px_rgba(20,184,166,0.1)]' 
                  : 'bg-dark-800/50 border-white/5 hover:border-white/10 hover:bg-dark-800'
              }`}
            >
              <button 
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-semibold text-lg transition-colors ${
                    openIndex === index ? 'text-brand-300' : 'text-white group-hover:text-gray-200'
                }`}>
                    {item.question}
                </span>
                <div className={`p-2 rounded-full transition-all duration-300 ${
                    openIndex === index 
                        ? 'bg-brand-500 text-white rotate-0' 
                        : 'bg-white/5 text-gray-400 group-hover:bg-white/10 group-hover:text-white'
                }`}>
                    {openIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 animate-fade-in">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-500/20 to-transparent mb-4"></div>
                  <p className="text-gray-400 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};