import React from 'react';
import { Gift, Zap, Server, Layout, Users, TrendingUp, MonitorPlay } from 'lucide-react';

const bonuses = [
  {
    id: 1,
    title: "16 Robôs IA + Prompts",
    description: "Você pode copiar, colar e revender conectando no WhatsApp e Instagram!",
    value: "127",
    icon: Gift
  },
  {
    id: 2,
    title: "Template de TypeBot Avançado",
    description: "Programar seus robôs com planilha, disparo de email e coleta de leads em 2 minutos.",
    value: "97",
    icon: Layout
  },
  {
    id: 3,
    title: "Servidor Grátis para Testes",
    description: "Teste e apresente ao cliente sem custo usando nosso servidor com Evolution API.",
    value: "47",
    icon: Server
  },
  {
    id: 4,
    title: "Modelos de Apresentação",
    description: "Modelos comerciais e contratos para captar e vender para seu primeiro cliente.",
    value: "297",
    icon: BriefcaseIcon
  },
  {
    id: 5,
    title: "Comunidade Global Gaia",
    description: "Networking com mais de 6 mil alunos de todo o mundo.",
    value: "197",
    icon: Users
  },
  {
    id: 6,
    title: "Seleção 21 Robôs Produtividade",
    description: "Robôs utilizados pelo mentor para aumentar a produtividade em 10x.",
    value: "77",
    icon: Zap
  },
  {
    id: 7,
    title: "Prospecção em Dólar",
    description: "Aprenda a prospectar clientes que pagam em Dólar com tráfego pago.",
    value: "77",
    icon: TrendingUp
  }
];

function BriefcaseIcon(props: any) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
    )
}

export const Bonuses: React.FC = () => {
  return (
    <section id="bonuses" className="py-24 bg-dark-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Garanta <span className="text-brand-500">7 BÔNUS</span> com a oferta de hoje
          </h2>
          <p className="text-gray-400">Acesso vitalício e instantâneo a todo este material complementar.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Featured Main Bonus */}
            <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-r from-purple-900/50 to-brand-900/50 rounded-3xl p-8 border border-brand-500/30 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Gift className="w-32 h-32 text-white" />
                </div>
                <div className="relative z-10">
                    <span className="bg-brand-500 text-dark-900 font-bold px-3 py-1 rounded-full text-xs uppercase mb-4 inline-block">Bônus #1</span>
                    <h3 className="text-2xl font-bold text-white mb-2">Pacote Completo: 16 Robôs IA Prontos</h3>
                    <p className="text-gray-300 mb-6">A joia da coroa. Todo o trabalho duro já foi feito. Basta importar e começar a vender.</p>
                    <div className="flex items-center gap-2">
                        <span className="text-gray-500 line-through text-sm">De R$ 127</span>
                        <span className="text-green-400 font-bold">GRÁTIS HOJE</span>
                    </div>
                </div>
            </div>

            {bonuses.slice(1).map((bonus, index) => (
                <div key={index} className="bg-dark-900/50 rounded-2xl p-6 border border-white/5 hover:border-brand-500/30 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-brand-400 font-mono text-xs font-bold uppercase">Bônus #{bonus.id}</span>
                        <bonus.icon className="w-6 h-6 text-gray-500" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 leading-tight">{bonus.title}</h4>
                    <p className="text-sm text-gray-400 mb-4">{bonus.description}</p>
                    <div className="mt-auto border-t border-white/5 pt-4 flex justify-between items-center text-sm">
                        <span className="text-red-500/60 line-through">R$ {bonus.value}</span>
                        <span className="text-green-400 font-bold">por R$ 0</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};