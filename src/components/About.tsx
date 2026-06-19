import React, { useState } from "react";
import { TIMELINE_EVENTS, LAWYERS } from "../data";
import { Scale, Mail, Info, Award, UserCheck, ChevronRight, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

interface AboutProps {
  onOpenModal: (area: string) => void;
}

export default function About({ onOpenModal }: AboutProps) {
  const [selectedLawyer, setSelectedLawyer] = useState<number | null>(null);

  const triggerDirectWhatsappLawyer = (lawyerName: string) => {
    const text = encodeURIComponent(
      `Olá, li a apresentação institucional da banca d'Auden Advocacia e gostaria de solicitar agendamento diretamente com o especialista *${lawyerName}* para expor uma necessidade jurídica.`
    );
    window.open(`https://wa.me/5511999999999?text=${text}`, "_blank");
  };

  return (
    <section id="sobre-nos" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1.5 rounded-full inline-block mb-3 font-serif-clean">
            Nossa Proposta
          </span>
          <h2 className="text-3xl md:text-4xl font-serif-clean font-bold text-brand-blue tracking-tight">
            Advocacia Estratégica Baseada na Conectividade e Fidelidade
          </h2>
          <div className="legal-divider" />
          <p className="text-sm md:text-base text-gray-650 max-w-2xl mx-auto">
            A boutique Auden & Associados nasceu com o compromisso de oferecer atendimento personalizado de elite. Desenvolvemos soluções preventivas e contenciosas focadas na saúde e longevidade do negócio de nossos parceiros comerciais.
          </p>
        </div>

        {/* Section Grid: Philosophy and Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          
          {/* Philosophy / Overview */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl md:text-2xl font-serif-clean font-bold text-brand-blue leading-tight">
              Um modelo de atendimento focado no cliente, sem intermediários.
            </h3>
            
            <p className="text-sm text-gray-600 leading-relaxed">
              Diferente de grandes bancas massificadas, no d'Auden Advocacia de Prestígio, as causas de alta complexidade são analisadas e lideradas diretamente pelos sócios seniores. 
            </p>

            <p className="text-sm text-gray-600 leading-relaxed">
              Trabalhamos sob um modelo ágil de governança corporativa, aliando tecnologia segura, relatórios proativos e confidencialidade máxima para dar ao conselho gestor da sua empresa total tranquilidade operacional.
            </p>

            <div className="bg-brand-blue/5 p-5 rounded border-l-2 border-brand-gold space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-blue flex items-center gap-1.5 font-serif-clean">
                <ShieldCheck className="h-4 w-4 text-brand-gold" /> Pilares d'Auden
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold font-bold">•</span>
                  <span><strong>Eficiência Fiscal Contínua:</strong> Adequação contínua de regimes fiscais sob leis fiscais vigentes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold font-bold">•</span>
                  <span><strong>Sigilo Absoluto:</strong> Criptografia corporativa para segredos intelectuais e comerciais.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold font-bold">•</span>
                  <span><strong>Fidelidade Ética OAB:</strong> Preconizamos os limites de conformidade ética da ordem dos advogados.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="lg:col-span-7">
            <h3 className="text-lg font-serif-clean font-semibold uppercase tracking-wider text-brand-blue mb-8 border-b border-gray-100 pb-3 flex items-center gap-2">
              <Award className="h-4 w-4 text-brand-gold" /> Nossa Linha de Sucessos
            </h3>

            {/* Vertical timeline timeline component */}
            <div className="relative border-l border-brand-gold/30 ml-4 md:ml-6 pl-6 md:pl-8 space-y-10 py-2">
              {TIMELINE_EVENTS.map((event, idx) => (
                <div key={idx} className="relative group">
                  {/* Outer circle dot */}
                  <div className="absolute -left-10 md:-left-12 top-1.5 h-6 w-6 rounded-full bg-white border-2 border-brand-gold flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-brand-blue duration-300">
                    <div className="h-2 w-2 rounded-full bg-brand-gold" />
                  </div>

                  {/* Year tag */}
                  <span className="inline-block text-xs font-serif-clean font-bold tracking-wider text-brand-gold border border-brand-gold/30 bg-brand-gold/5 px-2.5 py-0.5 rounded mb-2">
                    {event.year}
                  </span>

                  {/* Text card */}
                  <h4 className="text-base font-bold text-brand-blue font-serif-clean group-hover:text-brand-gold transition-colors duration-300">
                    {event.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1.5 leading-relaxed max-w-xl">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Meet the Lawyers Section */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1.5 rounded-full inline-block mb-3 font-serif-clean">
              Corpo Técnico
            </span>
            <h3 className="text-2xl md:text-3xl font-serif-clean font-bold text-brand-blue tracking-tight">
              Sócios e Advogados da Banca
            </h3>
            <p className="text-xs text-gray-500 mt-2">
              Profissionais laureados dedicados integralmente à consecução do seu direito comercial.
            </p>
          </div>

          {/* Grid layout for Lawyers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {LAWYERS.map((lawyer, index) => (
              <div
                key={index}
                className="group relative flex flex-col justify-between overflow-hidden bg-white border border-gray-150 rounded-lg shadow-lux hover:shadow-2xl transition-all duration-300 hover:border-brand-gold/40"
              >
                <div>
                  {/* Photo area with Referrer Policy and safety wrapper */}
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-bg flex-shrink-0">
                    <img
                      src={lawyer.imageUrl}
                      alt={lawyer.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Visual gradient overlay on photo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Floating OAB tag */}
                    <div className="absolute bottom-4 right-4 bg-brand-blue-dark/95 border border-brand-gold/40 text-brand-gold text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded shadow-md font-serif-clean">
                      {lawyer.oab}
                    </div>
                  </div>

                  {/* Text details content */}
                  <div className="p-6 md:p-7">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold font-serif-clean block mb-1.5">
                      {lawyer.role}
                    </span>
                    <h4 className="text-lg font-bold text-brand-blue font-serif-clean group-hover:text-brand-gold transition-colors duration-200">
                      {lawyer.name}
                    </h4>
                    
                    <p className="text-xs font-semibold text-gray-600 mt-2 line-clamp-1 bg-brand-blue/5 py-1 px-2 rounded inline-block">
                      {lawyer.specialty}
                    </p>

                    <p className="text-xs text-gray-500 mt-4 leading-relaxed font-light">
                      {lawyer.bio}
                    </p>
                  </div>
                </div>

                {/* Footer contact button */}
                <div className="p-6 pt-0 mt-auto">
                  <button
                    onClick={() => triggerDirectWhatsappLawyer(lawyer.name)}
                    id={`connect-lawyer-btn-${index}`}
                    className="w-full py-2.5 border border-brand-blue-light/20 rounded text-xs font-semibold tracking-wider text-brand-blue-light hover:bg-brand-blue-dark hover:text-white hover:border-brand-blue-dark transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <UserCheck className="h-3.5 w-3.5" />
                    <span>Agendar com {lawyer.name.split(" ")[1]}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
