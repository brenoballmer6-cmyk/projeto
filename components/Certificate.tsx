import React from 'react';
import { FileCheck, Award } from 'lucide-react';

export const Certificate: React.FC = () => {
  return (
    <section className="py-6 bg-dark-900 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-4">
            <FileCheck className="w-6 h-6 text-brand-500 mx-auto mb-2" />
            <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-1">
                Certificado de Conclusão Incluso
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-xs md:text-sm">
                Ao concluir o curso, você receberá um certificado oficial que comprova seu domínio em automação e IA.
            </p>
        </div>
        
        {/* Certificate container adjusted to 'standard' size (flat, compact) */}
        <div className="relative inline-block w-full max-w-[280px] group">
            <div className="absolute inset-0 bg-brand-500/20 blur-xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity"></div>
            
            {/* Certificate Sheet - Flat view, smaller dimensions */}
            <div className="relative z-10 bg-white text-gray-900 p-1 rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-[1.02]">
                <div className="border-[3px] border-double border-gray-300 p-3 h-full rounded-md bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] relative overflow-hidden">
                    {/* Background Seal Watermark */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                        <Award className="w-20 h-20 text-gray-900" />
                    </div>

                    {/* Corner Decorations */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-brand-900"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-brand-900"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-brand-900"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-brand-900"></div>

                    <div className="text-center relative z-10 space-y-1">
                        <div className="flex justify-center mb-1">
                             <div className="flex items-center gap-1">
                                <div className="bg-brand-900 p-0.5 rounded-md">
                                  <Award className="w-2.5 h-2.5 text-white" />
                                </div>
                                <span className="text-[10px] font-bold text-brand-900 tracking-tighter">ZX LAB</span>
                              </div>
                        </div>

                        <h3 className="text-lg font-serif font-bold text-gray-800 uppercase tracking-wide leading-none">Certificado</h3>
                        <p className="text-[9px] text-gray-600 font-serif italic">Este certificado é concedido a</p>
                        
                        <div className="text-base font-cursive text-brand-700 font-bold border-b border-gray-300 pb-0.5 inline-block min-w-[120px] leading-tight">
                            Seu Nome Aqui
                        </div>

                        <p className="text-gray-600 max-w-xs mx-auto leading-tight text-[9px] px-1 mt-1">
                            Por concluir com êxito o treinamento intensivo de <b>Criação de Robôs com IA</b>, demonstrando competência em N8N e Typebot.
                        </p>

                        <div className="flex justify-between items-end mt-3 px-1">
                            <div className="text-center">
                                <div className="text-[6px] font-bold border-t border-gray-400 pt-0.5 px-2">Data</div>
                            </div>
                            
                            <div className="w-8 h-8 relative -mb-1">
                                {/* Gold Seal */}
                                <div className="w-full h-full bg-yellow-500 rounded-full flex items-center justify-center shadow-md border-2 border-yellow-300">
                                    <div className="text-center">
                                        <Award className="w-3 h-3 text-yellow-900 mx-auto" />
                                        <span className="text-[4px] font-bold text-yellow-900 block uppercase">Verificado</span>
                                    </div>
                                </div>
                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-yellow-600 rotate-45 -z-10"></div>
                            </div>

                            <div className="text-center">
                                <div className="font-cursive text-[10px] text-brand-900 mb-0.5">Rafael Castro</div>
                                <div className="text-[6px] font-bold border-t border-gray-400 pt-0.5 px-2">Instrutor</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};