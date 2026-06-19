import React from "react";
import { TESTIMONIALS } from "../data";
import { Star, ShieldAlert, BadgeCheck, Scale, AlertCircle } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-white text-brand-blue-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1.5 rounded-full inline-block mb-3 font-serif-clean">
            Sigilo e Confiança
          </span>
          <h2 className="text-3xl md:text-4xl font-serif-clean font-bold text-brand-blue tracking-tight">
            Relatos de Caso e Confidencialidade
          </h2>
          <div className="legal-divider" />
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
            Em estrito cumprimento ao Estatuto da OAB e ao Código de Ética Profissional d'Advocacia, resguardamos plenamente a identidade de nossas parcerias jurídicas corporativas.
          </p>
        </div>

        {/* Ethical Disclaimer Warning Panel */}
        <div className="max-w-4xl mx-auto mb-14 bg-slate-bg/50 border border-brand-gold/25 rounded p-4 sm:p-5 flex gap-4 items-start">
          <ShieldAlert className="h-5 w-5 md:h-6 md:w-6 text-brand-gold shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-brand-blue font-serif-clean uppercase tracking-wide">
              Conformidade Ética OAB Pratice — Proteção Intelectual de Assuntos e Segredos Comerciais
            </h4>
            <p className="text-[11px] sm:text-xs text-gray-500 mt-1.5 leading-relaxed">
              O artigo 355 do Código Penal brasileiro e os regulamentos institucionais da Ordem dos Advogados do Brasil proíbem a divulgação promocional de nomes de marcas ou logotipos de clientes em litígio ativamente. Desta forma, as referências abaixo utilizam apenas as iniciais qualificadoras e seus segmentos de atuação para atestar a qualidade técnica inabalável de nossa banca.
            </p>
          </div>
        </div>

        {/* Testimonials Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="flex flex-col justify-between p-6 sm:p-8 bg-slate-bg/30 border border-gray-150 rounded-lg shadow-lux hover:shadow-2xl hover:border-brand-gold/20 transition-all duration-300 relative group"
            >
              <div>
                {/* Gold glowing quotation marker decorative element */}
                <span className="absolute right-6 top-6 text-5xl font-serif text-brand-gold/20 select-none pointer-events-none font-bold">
                  “
                </span>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(test.rating)].map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-brand-gold text-brand-gold shrink-0" />
                  ))}
                </div>

                {/* Feedback content */}
                <blockquote className="text-xs sm:text-sm text-gray-650 leading-relaxed italic mb-6 font-light">
                  &ldquo;{test.content}&rdquo;
                </blockquote>
              </div>

              {/* Masked Client Initials Profile */}
              <div className="mt-auto border-t border-gray-150/80 pt-4 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif-clean font-bold text-sm tracking-widest text-brand-blue">
                      {test.initials}
                    </span>
                    <BadgeCheck className="h-4 w-4 text-emerald-600 shadow-sm shrink-0" />
                  </div>
                  
                  <span className="text-[11px] block text-brand-gold font-medium mt-0.5 leading-tight">
                    {test.segment}
                  </span>
                  
                  <span className="text-[10px] block text-gray-400 mt-1 max-w-[200px] line-clamp-1 leading-normal">
                    {test.clientCategory}
                  </span>
                </div>

                {/* Confidentiality seal miniature */}
                <div className="bg-brand-blue/5 rounded px-2 py-1 text-[8px] uppercase tracking-wider text-brand-blue border border-brand-blue/10 shrink-0 select-none">
                  Sigilo Firmado
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Interactive Stats micro row */}
        <div className="mt-16 pt-12 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
          <div>
            <span className="block font-serif-clean font-bold text-2xl md:text-3xl text-brand-blue">98.4%</span>
            <span className="block text-[10px] uppercase font-bold text-gray-400 mt-1 tracking-widest">Satisfação de Clientes</span>
          </div>
          <div>
            <span className="block font-serif-clean font-bold text-2xl md:text-3xl text-brand-blue">250+</span>
            <span className="block text-[10px] uppercase font-bold text-gray-400 mt-1 tracking-widest">Empresas Atendidas</span>
          </div>
          <div>
            <span className="block font-serif-clean font-bold text-2xl md:text-3xl text-brand-blue">R$ 50M+</span>
            <span className="block text-[10px] uppercase font-bold text-gray-400 mt-1 tracking-widest">Valores Economizados</span>
          </div>
          <div>
            <span className="block font-serif-clean font-bold text-2xl md:text-3xl text-brand-blue">100%</span>
            <span className="block text-[10px] uppercase font-bold text-gray-400 mt-1 tracking-widest">Processos Auditados</span>
          </div>
        </div>

      </div>
    </section>
  );
}
