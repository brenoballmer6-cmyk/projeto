import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
            ))}
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            São mais de <span className="text-brand-500">7 mil alunos</span> faturando
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A maior escola de IA em língua Portuguesa do mundo. Veja o que estão falando:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-dark-800 p-6 rounded-2xl border border-white/5 relative">
                <div className="absolute -top-3 -left-3 bg-brand-500 rounded-full p-2">
                    <svg className="w-4 h-4 text-dark-900" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01701V13C9.01701 11.8954 9.91244 11 11.017 11H15.017V7H11.017C7.7033 7 5.01701 9.68629 5.01701 13V18C5.01701 19.6569 6.36016 21 8.01701 21H14.017ZM23.017 21L23.017 18C23.017 16.8954 22.1216 16 21.017 16H18.017V13C18.017 11.8954 18.9124 11 20.017 11H24.017V7H20.017C16.7033 7 14.017 9.68629 14.017 13V18C14.017 19.6569 15.3602 21 17.017 21H23.017Z"/></svg>
                </div>
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-12 h-12 bg-gray-600 rounded-full overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100" alt="Aluno" className="w-full h-full object-cover"/>
                   </div>
                   <div>
                       <p className="text-white font-bold">Marcelo Ferraz</p>
                       <p className="text-xs text-gray-500">Jorge Oliveira</p>
                   </div>
                </div>
                <p className="text-gray-300 italic">
                    "Fechei 2 contratos de 3 mil cada, um total de 6.000, mais 2 de recorrência em apenas 15 dias de aula. O método é insano."
                </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-dark-800 p-6 rounded-2xl border border-white/5 relative">
                <div className="absolute -top-3 -left-3 bg-brand-500 rounded-full p-2">
                    <svg className="w-4 h-4 text-dark-900" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01701V13C9.01701 11.8954 9.91244 11 11.017 11H15.017V7H11.017C7.7033 7 5.01701 9.68629 5.01701 13V18C5.01701 19.6569 6.36016 21 8.01701 21H14.017ZM23.017 21L23.017 18C23.017 16.8954 22.1216 16 21.017 16H18.017V13C18.017 11.8954 18.9124 11 20.017 11H24.017V7H20.017C16.7033 7 14.017 9.68629 14.017 13V18C14.017 19.6569 15.3602 21 17.017 21H23.017Z"/></svg>
                </div>
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-12 h-12 bg-gray-600 rounded-full overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=100&h=100" alt="Lillian" className="w-full h-full object-cover"/>
                   </div>
                   <div>
                       <p className="text-white font-bold">Lillian</p>
                       <p className="text-xs text-gray-500">Aluna Verificada</p>
                   </div>
                </div>
                <p className="text-gray-300 italic">
                    "Já estou faturando 5 dígitos com Robôs IA. Cliquei em 'saiba mais' e garanti minha vaga no curso agora. Foi o melhor investimento."
                </p>
            </div>

            {/* Testimonial 3 (Video Thumb style) */}
            <div className="bg-dark-800 p-0 rounded-2xl border border-white/5 overflow-hidden group cursor-pointer relative h-full min-h-[200px]">
                <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?fit=crop&w=600&h=400" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" alt="Video Depoimento"/>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <p className="text-white font-bold text-sm">Case: De 0 a R$ 10k em 30 dias</p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};