import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 bg-dark-800 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* The Old Way */}
          <div className="space-y-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <h3 className="text-2xl font-bold text-gray-400 mb-6 border-b border-gray-700 pb-4">O jeito antigo (Manual)</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                <span className="text-gray-400">Perde clientes por demorar a responder</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                <span className="text-gray-400">Cansado de copiar e colar mensagens o dia todo</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                <span className="text-gray-400">Esquece de cobrar boletos e perde dinheiro</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                <span className="text-gray-400">Atendimento limitado ao horário comercial</span>
              </li>
            </ul>
          </div>

          {/* The New Way */}
          <div className="bg-gradient-to-br from-brand-900/20 to-dark-900 p-8 rounded-3xl border border-brand-500/20 shadow-2xl shadow-brand-500/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 blur-3xl"></div>
            
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-brand-500/20 pb-4 flex items-center gap-2">
              <span className="text-brand-400">Com Robô IA 10x</span>
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-400 shrink-0" />
                <span className="text-white">Resposta imediata em <b className="text-brand-200">3 segundos</b></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-400 shrink-0" />
                <span className="text-white">Automação 100% configurada, você só monitora</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-400 shrink-0" />
                <span className="text-white">Recuperação automática de pagamentos pendentes</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-400 shrink-0" />
                <span className="text-white">Vendas acontecendo <b className="text-brand-200">enquanto você dorme</b></span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};