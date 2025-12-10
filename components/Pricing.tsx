import React from 'react';
import { Button } from './ui/Button';
import { Check, AlertTriangle, X } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-brand-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-yellow-500 mb-4 animate-pulse">
                <AlertTriangle className="w-5 h-5" />
                <span className="font-bold uppercase tracking-wider">Oferta Especial e Irresistível</span>
            </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Escolha agora a melhor opção
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Acesso Básico ou <b>Super Oferta com 7 Bônus Exclusivos</b> Somente HOJE!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          
          {/* Super Offer Card - Highlighted */}
          <div className="order-1 md:order-1 relative bg-gradient-to-b from-brand-500 to-purple-600 p-[2px] rounded-3xl shadow-[0_0_50px_rgba(20,184,166,0.3)] transform hover:scale-[1.02] transition-transform duration-300 z-10 flex flex-col">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-dark-900 font-extrabold px-6 py-2 rounded-full text-sm shadow-xl whitespace-nowrap z-20 flex items-center gap-2">
              <span>⭐ OPÇÃO MAIS ESCOLHIDA</span>
            </div>
            
            <div className="bg-dark-900 rounded-[22px] h-full p-8 flex flex-col relative overflow-hidden flex-1">
                <div className="absolute top-0 left-0 w-full h-40 bg-brand-500/10 blur-3xl"></div>
                
                <h3 className="text-3xl font-bold text-white text-center mb-1 mt-2">SUPER OFERTA</h3>
                <p className="text-brand-400 text-center font-bold text-sm mb-6 uppercase tracking-wider">Com 7 Bônus Inclusos</p>
                
                <div className="text-center mb-8 p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-gray-500 line-through text-sm">De R$ 642</p>
                    <div className="flex justify-center items-baseline gap-1">
                        <span className="text-sm text-gray-400">por apenas</span>
                        <span className="text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-white">37</span>
                        <span className="text-xl font-bold text-white">,00</span>
                    </div>
                    <p className="text-green-400 text-xs mt-2 font-bold uppercase tracking-wide">Pagamento único • Acesso Vitalício</p>
                </div>

                <div className="space-y-4 mb-8 text-sm flex-1">
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                            <Check className="w-4 h-4 text-green-500" />
                        </div>
                        <span className="text-white font-medium text-base">Curso Online ROBÔ IA 10X</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                            <Check className="w-4 h-4 text-green-500" />
                        </div>
                        <span className="text-white text-base">Acesso Vitalício</span>
                    </div>
                    <div className="flex items-center gap-3 bg-brand-500/10 p-2 rounded-lg -mx-2">
                        <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0">
                            <Check className="w-4 h-4 text-brand-400" />
                        </div>
                        <span className="text-white font-bold text-base">16 Robôs IA e Prompts</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                            <Check className="w-4 h-4 text-green-500" />
                        </div>
                        <span className="text-white">Mentoria Semanal ao Vivo</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                            <Check className="w-4 h-4 text-green-500" />
                        </div>
                        <span className="text-white">Template TypeBot + IA Avançado</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                            <Check className="w-4 h-4 text-green-500" />
                        </div>
                        <span className="text-white">Servidor para Testes e Protótipos</span>
                    </div>
                </div>

                <Button variant="primary" fullWidth size="lg" className="mt-auto shadow-orange-500/20 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 border-none text-white font-bold text-xl py-6 animate-pulse-slow">
                    QUERO A SUPER OFERTA!
                </Button>
            </div>
          </div>

          {/* Basic Offer Card - Enhanced Visuals */}
          <div className="order-2 md:order-2 bg-dark-800 rounded-3xl p-8 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:border-blue-500/40 transition-all duration-300 flex flex-col h-full relative">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full"></div>
             
             <h3 className="text-xl font-bold text-blue-100 text-center mb-6">ACESSO BÁSICO</h3>
             
             <div className="text-center mb-8">
                <p className="text-gray-500 line-through text-sm">De R$ 197</p>
                <div className="flex justify-center items-baseline gap-1">
                    <span className="text-sm text-gray-400">por apenas</span>
                    <span className="text-5xl font-bold text-blue-400">R$ 9</span>
                </div>
                <p className="text-blue-300/70 text-xs mt-2 font-medium">Acesso por 1 ano</p>
             </div>

             <div className="space-y-4 mb-8 text-sm text-gray-300 flex-1">
                <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-blue-50">Curso ROBÔ IA 10X</span>
                </div>
                <div className="flex items-center gap-3 opacity-60">
                    <X className="w-4 h-4 text-red-400" />
                    <span className="line-through decoration-red-400/30">Sem Bônus Extras</span>
                </div>
                <div className="flex items-center gap-3 opacity-60">
                    <X className="w-4 h-4 text-red-400" />
                    <span className="line-through decoration-red-400/30">Sem Mentoria</span>
                </div>
                 <div className="flex items-center gap-3 opacity-60">
                    <X className="w-4 h-4 text-red-400" />
                    <span className="line-through decoration-red-400/30">Sem Servidor</span>
                </div>
             </div>

             {/* Colored Button for Basic Plan */}
             <Button variant="secondary" fullWidth className="mt-auto bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:border-blue-400/50">
                Quero Acesso Básico
             </Button>
          </div>

        </div>
        
        {/* Guarantee Seal */}
        <div className="mt-16 flex flex-col items-center justify-center text-center">
            <div className="w-28 h-28 relative group cursor-pointer">
                {/* Gold Seal Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 rounded-full shadow-lg flex items-center justify-center animate-spin-slow-reverse">
                     <div className="w-[96%] h-[96%] border-2 border-dashed border-yellow-200 rounded-full"></div>
                </div>
                <div className="absolute inset-1 bg-dark-900 rounded-full flex flex-col items-center justify-center z-10">
                    <span className="text-yellow-500 font-bold text-3xl leading-none">7</span>
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest mt-1">Dias de</span>
                    <span className="text-yellow-500 font-bold text-sm uppercase">Garantia</span>
                </div>
            </div>
            <p className="text-gray-400 text-sm max-w-md mt-6">
                O risco é zero. Se não estiver satisfeito em 7 dias, devolvemos 100% do seu investimento.
            </p>
        </div>

      </div>
    </section>
  );
};