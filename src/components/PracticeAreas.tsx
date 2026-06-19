import React, { useState } from "react";
import { PRACTICE_AREAS } from "../data";
import { Briefcase, FileSpreadsheet, Shield, Scale, Cpu, FileCheck, ChevronRight, ArrowUpRight, HelpCircle, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PracticeAreasProps {
  onOpenModal: (areaId: string) => void;
}

export default function PracticeAreas({ onOpenModal }: PracticeAreasProps) {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  // Return appropriate Lucide component to prevent dynamic lookup bundle failures
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Briefcase":
        return <Briefcase className="h-6 w-6 text-brand-gold" />;
      case "FileSpreadsheet":
        return <FileSpreadsheet className="h-6 w-6 text-brand-gold" />;
      case "Shield":
        return <Shield className="h-6 w-6 text-brand-gold" />;
      case "Scale":
        return <Scale className="h-6 w-6 text-brand-gold" />;
      case "Cpu":
        return <Cpu className="h-6 w-6 text-brand-gold" />;
      case "FileCheck":
        return <FileCheck className="h-6 w-6 text-brand-gold" />;
      default:
        return <Scale className="h-6 w-6 text-brand-gold" />;
    }
  };

  const handleCardToggle = (id: string) => {
    if (activeCard === id) {
      setActiveCard(null);
    } else {
      setActiveCard(id);
    }
  };

  return (
    <section id="atuacao" className="py-20 md:py-28 bg-slate-bg overflow-hidden text-brand-blue-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1.5 rounded-full inline-block mb-3 font-serif-clean">
            Nossas Especialidades
          </span>
          <h2 className="text-3xl md:text-4xl font-serif-clean font-bold text-brand-blue tracking-tight">
            Áreas de Atuação de Alto Impacto
          </h2>
          <div className="legal-divider" />
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
            Oferecemos soluções preventivas sólidas e contencioso sofisticado para garantir a proteção dos seus ativos mais valiosos. Toque em qualquer área para expandir detalhes.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRACTICE_AREAS.map((area, index) => {
            const isExpanded = activeCard === area.id;

            return (
              <div
                key={area.id}
                id={`practice-card-${area.id}`}
                className={`relative flex flex-col justify-between bg-white border rounded-lg transition-all duration-300 p-6 sm:p-8 hover:-translate-y-1 ${
                  isExpanded
                    ? "border-brand-gold ring-1 ring-brand-gold shadow-lux"
                    : "border-gray-200/80 shadow-md hover:border-brand-gold/40 hover:shadow-lux"
                }`}
              >
                {/* Visual Top Line Decor on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-lg bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-0 hover:opacity-100 transition-opacity" />

                <div>
                  {/* Icon + Title block */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded bg-brand-blue/5 border border-brand-gold/20 flex-shrink-0">
                      {getIcon(area.iconName)}
                    </div>
                    <h3 className="font-serif-clean font-bold text-base sm:text-lg text-brand-blue leading-snug">
                      {area.title}
                    </h3>
                  </div>

                  {/* Summary description */}
                  <p className="text-xs sm:text-sm text-gray-650 leading-relaxed font-light">
                    {area.summary}
                  </p>

                  {/* Tiny Feature Chips */}
                  <div className="flex flex-wrap gap-1.5 mt-4 mb-5">
                    {area.features.map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-[9px] bg-brand-blue/5 border border-brand-blue/10 text-brand-blue px-2 py-0.5 rounded font-medium tracking-wide uppercase"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>

                  {/* Accordion list details */}
                  <div className="mb-2">
                    <button
                      onClick={() => handleCardToggle(area.id)}
                      id={`toggle-details-btn-${area.id}`}
                      className="text-xs font-bold text-brand-gold hover:text-brand-gold-hover transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>{isExpanded ? "Ocultar especificidades" : "Ver especificidades e teses"}</span>
                      <ChevronRight
                        className={`h-3 w-3 shrink-0 transform transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}
                      />
                    </button>

                    {/* Smooth height transition using Framer Motion */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-4 space-y-2 border-t border-gray-100 pt-4 text-xs text-gray-550 leading-relaxed list-none pl-0">
                            {area.details.map((detail, dIdx) => (
                              <li key={dIdx} className="flex items-start gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Bottom interactive action triggers */}
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <button
                    onClick={() => onOpenModal(area.id)}
                    id={`request-audit-${area.id}`}
                    className="w-full bg-brand-blue/5 hover:bg-brand-blue text-brand-blue hover:text-white font-bold py-2.5 rounded text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer border border-brand-blue/10 hover:border-brand-blue shadow-sm hover:shadow-md"
                  >
                    <span>Solicitar Análise de Causa</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Global Conversion Bannertip */}
        <div className="mt-16 bg-brand-blue-light/95 border border-brand-gold/30 rounded-lg p-8 md:p-10 shadow-xl max-w-4xl mx-auto relative overflow-hidden">
          {/* Accent decoration scale logo */}
          <div className="absolute top-1/2 -right-16 -translate-y-1/2 text-brand-gold/5 pointer-events-none transform -rotate-12 select-none">
            <Scale className="h-72 w-72" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 flex flex-col gap-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold font-serif-clean">
                Canal Corporativo Exclusivo
              </span>
              <h3 className="text-lg md:text-xl font-serif-clean font-bold text-white tracking-normal leading-snug">
                Sua empresa enfrenta um litígio, autuação fiscal de grande porte ou demanda societária urgente?
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed max-w-lg mt-1">
                Conecte-se imediatamente à nossa mesa estratégica. Atendimento rápido e análise de risco preliminar com sigilo absoluto garantido por instrumentos de NDA se necessário.
              </p>
            </div>
            
            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-stretch">
              <button
                onClick={() => onOpenModal("societario-merg")}
                id="practice-bannertip-modal-btn"
                className="bg-brand-gold text-brand-blue-dark font-bold hover:bg-brand-gold-hover transition-colors py-3 px-5 rounded text-xs uppercase tracking-wider text-center cursor-pointer shadow-md"
              >
                Solicitar Análise Rápida
              </button>
              
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20tenho%20uma%20demanda%20corporativa%20urgente%20e%20gostaria%20de%20falar%20com%20um%20advogado%20na%20mesa%20societ%C3%A1ria%2Ftribut%C3%A1ria."
                target="_blank"
                id="practice-bannertip-whatsapp"
                className="bg-brand-blue border border-brand-gold/20 hover:border-brand-gold/50 text-white font-bold py-3 px-5 rounded text-xs uppercase tracking-wider text-center cursor-pointer flex items-center justify-center gap-1.5 transition-all shadow-md"
              >
                <span>Falar com Plantão de Sócios</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-brand-gold shrink-0" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
