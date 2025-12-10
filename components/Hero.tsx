import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-24 pb-12 md:pt-32 md:pb-20 lg:pt-40 lg:pb-32 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      
      {/* Content Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Top Tag - Urgency */}
        <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs md:text-sm font-bold mb-6 md:mb-8 animate-fade-in-up uppercase tracking-wider">
          🔥 Black November Antecipada 🔥
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight mb-6 leading-tight md:leading-[1.1] drop-shadow-2xl max-w-5xl mx-auto">
          Fature 5 dígitos criando e vendendo <br className="hidden lg:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-500 to-emerald-400 block mt-2 md:mt-0">
            Robôs de IA em 30 minutos
          </span>
        </h1>

        {/* Subhead */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed font-light px-2">
          Aprenda a criar robôs com Inteligência Artificial do zero, <b className="text-white font-semibold">sem saber programar</b>, com ferramentas gratuitas. Conecte no WhatsApp, Instagram e fature pelo menos <b className="text-brand-300">R$ 500 com cada um!</b>
        </p>

        {/* VSL Monitor Frame */}
        <div className="relative w-full max-w-4xl mx-auto mb-8 md:mb-12 group px-2 sm:px-0">
          {/* Glow Effect behind Monitor */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          
          {/* Monitor Structure */}
          <div className="relative bg-dark-900 rounded-xl border border-white/10 shadow-2xl overflow-hidden aspect-video">
            {/* Screen Header (Fake Browser) */}
            <div className="h-6 md:h-8 bg-dark-800 border-b border-white/5 flex items-center px-2 md:px-4 gap-1.5 md:gap-2">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/80"></div>
              <div className="ml-2 md:ml-4 px-2 md:px-3 py-0.5 bg-dark-900 rounded-md text-[8px] md:text-[10px] text-gray-500 font-mono flex-1 text-center truncate">
                vsl_secreto_robo_ia_10x.mp4
              </div>
            </div>

            {/* Video Iframe - YouTube */}
            <div className="w-full h-full relative bg-black">
                <iframe 
                    className="w-full h-full absolute inset-0"
                    src="https://www.youtube.com/embed/h8CkrLupOqQ" 
                    title="VSL Robô IA 10x" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                ></iframe>
            </div>
          </div>
          
          {/* Monitor Stand */}
          <div className="mx-auto w-1/3 h-2 md:h-4 bg-gradient-to-b from-dark-800 to-dark-900 rounded-b-xl opacity-80"></div>
          <div className="mx-auto w-1/4 h-4 md:h-8 bg-gradient-to-b from-dark-800 to-transparent opacity-50 blur-xl"></div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-4 animate-fade-in-up delay-200 w-full px-4">
          <Button 
            size="lg" 
            className="w-full sm:w-auto text-base md:text-lg px-8 md:px-12 py-4 md:py-6 rounded-full shadow-[0_0_30px_rgba(20,184,166,0.3)] hover:shadow-[0_0_50px_rgba(20,184,166,0.5)] border-t border-white/20 whitespace-normal text-center h-auto"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}
          >
            <span className="flex items-center justify-center gap-2">
              QUERO FATURAR 5 DÍGITOS AGORA
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
            </span>
          </Button>
          <p className="text-xs md:text-sm text-gray-500 flex items-center gap-2">
            <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
            Oferta por tempo limitado
          </p>
        </div>

      </div>
    </section>
  );
};
