import React from 'react';
import { FeatureItem } from '../types';
import { FileText, TrendingUp, Calculator, Shield, UserCheck, Briefcase, FileSearch, Coins, PenTool, ClipboardList, Lightbulb, MessageCircle, BarChart, CalendarCheck } from 'lucide-react';

// Content extracted from the "Confira a lista de Robôs que você vai receber" image
const modules: FeatureItem[] = [
  { title: "Assistente de Contratos", description: "Automação jurídica básica", icon: FileText },
  { title: "Analista de Vendas", description: "Otimização de conversão", icon: TrendingUp },
  { title: "Gerador de Orçamentos", description: "Precificação automática", icon: Calculator },
  { title: "Especialista Financeiro", description: "Controle de DRE e finanças", icon: Coins },
  { title: "Estrategista de Marketing", description: "Planejamento de campanhas", icon: BarChart },
  { title: "Especialista Jurídico", description: "Trabalhista e conformidade", icon: Shield },
  { title: "Perfil Comportamental", description: "Análise de soft skills", icon: UserCheck },
  { title: "Assessor Contábil", description: "Tira-dúvidas fiscais", icon: Briefcase },
  { title: "Seletor de Currículos", description: "Triagem automática de RH", icon: FileSearch },
  { title: "Calculadora de Tokens", description: "Gestão de custos de API", icon: Calculator },
  { title: "Gerador de Prompts", description: "Criação de instruções perfeitas", icon: PenTool },
  { title: "Gerador Plano de Ação", description: "Planejamento estratégico", icon: ClipboardList },
  { title: "Organizador de Ideias", description: "Brainstorming estruturado", icon: Lightbulb },
  { title: "Especialista Storytelling", description: "Narrativas que vendem", icon: MessageCircle },
  { title: "Vendas Alto Ticket", description: "Scripts para fechar high-ticket", icon: TrendingUp },
  { title: "Planejador de Conteúdo", description: "Calendário para redes sociais", icon: CalendarCheck },
];

export const BentoGrid: React.FC = () => {
  return (
    <section id="modules" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-400 font-bold tracking-wider uppercase text-sm">O que você vai receber</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-2 mb-6">
            Confira a lista de <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-500">Robôs Prontos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Você não precisa criar nada do zero. Receba um pacote com 16 robôs de IA validados que eu vendi por R$ 3.000 para você apenas copiar e colar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {modules.map((item, index) => (
            <div 
              key={index}
              className="bg-gradient-to-b from-brand-900/40 to-dark-900 border border-brand-500/10 p-6 rounded-2xl hover:border-brand-500/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="bg-brand-500/10 p-3 rounded-lg text-brand-400 group-hover:text-white group-hover:bg-brand-500 transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm leading-tight">
                    {/* Assuming we might want to map specific emojis to specific titles later, but for now using the icon */}
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="mt-20 border-t border-white/5 pt-16">
          <h3 className="text-center text-2xl font-bold text-white mb-10">Ferramentas que você vai dominar</h3>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
             <div className="flex flex-col items-center gap-3 group">
                <div className="w-20 h-20 bg-blue-600/10 rounded-2xl flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-600/20 group-hover:scale-110 transition-all duration-300">
                    <span className="text-4xl">💬</span>
                </div>
                <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">Typebot</span>
             </div>
             
             <div className="flex flex-col items-center gap-3 group">
                <div className="w-20 h-20 bg-pink-600/10 rounded-2xl flex items-center justify-center border border-pink-500/20 group-hover:bg-pink-600/20 group-hover:scale-110 transition-all duration-300">
                    <span className="text-4xl">🔄</span>
                </div>
                <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">N8N</span>
             </div>
             
             <div className="flex flex-col items-center gap-3 group">
                <div className="w-20 h-20 bg-green-600/10 rounded-2xl flex items-center justify-center border border-green-500/20 group-hover:bg-green-600/20 group-hover:scale-110 transition-all duration-300">
                    <span className="text-4xl">📱</span>
                </div>
                <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">Evolution API</span>
             </div>
             
             <div className="flex flex-col items-center gap-3 group">
                <div className="w-20 h-20 bg-emerald-600/10 rounded-2xl flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-600/20 group-hover:scale-110 transition-all duration-300">
                    <span className="text-4xl">🤖</span>
                </div>
                <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">OpenAI</span>
             </div>

             <div className="flex flex-col items-center gap-3 group">
                <div className="w-20 h-20 bg-yellow-600/10 rounded-2xl flex items-center justify-center border border-yellow-500/20 group-hover:bg-yellow-600/20 group-hover:scale-110 transition-all duration-300">
                    <span className="text-4xl">🧠</span>
                </div>
                <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">DeepSeek</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
