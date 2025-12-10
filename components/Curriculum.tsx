import React from 'react';
import { Play, Terminal, MessageSquare, Shield, DollarSign, Mail, Smartphone, FileText, Settings, Database, Share2, PlusCircle, UserCheck } from 'lucide-react';

const modules = [
  { title: "Apresentação do Curso e Mentor Rafael Castro", icon: UserCheck, color: "text-blue-400" },
  { title: "Criando o Prompt do Robô IA", icon: Terminal, color: "text-purple-400" },
  { title: "Criando seu Robô IA GRÁTIS com POE", icon: PlusCircle, color: "text-green-400" },
  { title: "Configurando Robô IA no ChatGPT", icon: Settings, color: "text-emerald-400" },
  { title: "Publicando e Compartilhando o seu Robô IA GPT", icon: Share2, color: "text-blue-400" },
  { title: "Criando Assistente no ChatGPT", icon: MessageSquare, color: "text-pink-400" },
  { title: "Compra e Gestão de Tokens", icon: Database, color: "text-red-400" },
  { title: "Integrando ChatGPT com TypeBot", icon: FileText, color: "text-yellow-400" },
  { title: "Integrando TypeBot com IA GRÁTIS", icon: PlusCircle, color: "text-green-400" },
  { title: "Overview e Personalização do TypeBot", icon: Settings, color: "text-blue-400" },
  { title: "Robô IA com TypeBot com funções Avançadas", icon: Terminal, color: "text-purple-400" },
  { title: "Envio de Email com TypeBot", icon: Mail, color: "text-orange-400" },
  { title: "Conectando seu Robô IA no Whatsapp", icon: Smartphone, color: "text-green-500" },
  { title: "Acesso a Evolution API do Whatsapp", icon: Smartphone, color: "text-green-500" },
  { title: "Como vender seu robô de IA", icon: DollarSign, color: "text-yellow-500" },
  { title: "Modelo de Contrato", icon: Shield, color: "text-blue-300" },
  { title: "Entrega de Robôs IA para cliente", icon: Share2, color: "text-purple-300" },
];

export const Curriculum: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-400 font-bold tracking-wider uppercase text-sm">Cronograma Completo</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-2 mb-6">
            Descubra o que Você <br/> <span className="text-brand-500">Aprenderá neste Curso</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Do zero ao avançado. Um passo a passo prático para você sair do absoluto zero e ter seu negócio de automação rodando.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((module, index) => (
            <div 
              key={index} 
              className="bg-white/5 border border-white/5 hover:border-brand-500/30 hover:bg-white/10 rounded-xl p-4 flex items-center gap-4 transition-all duration-300 group"
            >
              <div className={`p-3 rounded-lg bg-dark-900/50 ${module.color} group-hover:scale-110 transition-transform`}>
                <module.icon className="w-5 h-5" />
              </div>
              <h3 className="text-gray-200 text-sm font-medium leading-snug group-hover:text-white transition-colors">
                {module.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
