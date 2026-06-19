import React, { useState } from "react";
import { FAQ_ITEMS } from "../data";
import { HelpCircle, ChevronDown, PhoneCall, ArrowUpRight, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQProps {
  onOpenModal: () => void;
}

export default function FAQ({ onOpenModal }: FAQProps) {
  // Store open index State
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const triggerDirectWhatsappConfidential = () => {
    const text = encodeURIComponent(
      "Olá, gostaria de esclarecer uma dúvida jurídica específica com a banca do escritório Auden & Associados."
    );
    window.open(`https://wa.me/5511999999999?text=${text}`, "_blank");
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-bg overflow-hidden text-brand-blue-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1.5 rounded-full inline-block mb-3 font-serif-clean">
            Dúvidas Práticas
          </span>
          <h2 className="text-3xl md:text-4xl font-serif-clean font-bold text-brand-blue tracking-tight">
            Perguntas Frequentes & Procedimentos
          </h2>
          <div className="legal-divider" />
          <p className="text-sm text-gray-550 max-w-2xl mx-auto">
            Entenda como operamos, quais são as garantias éticas estruturais e de que forma iniciamos nossa parceria consultiva.
          </p>
        </div>

        {/* Accordion container */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                id={`faq-item-${idx}`}
                className="bg-white border border-gray-200/85 rounded-lg overflow-hidden shadow-lux transition-all duration-300 hover:border-brand-gold/30"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  id={`faq-trigger-btn-${idx}`}
                  className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 transition-colors hover:bg-slate-bg/35 focus:outline-none focus:bg-slate-bg/25 group cursor-pointer"
                >
                  <div className="flex gap-3 items-start">
                    <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5 text-brand-gold shrink-0 mt-0.5" />
                    <span className="font-serif-clean font-bold text-[13px] sm:text-[15px] text-brand-blue group-hover:text-brand-gold transition-colors leading-snug">
                      {item.question}
                    </span>
                  </div>
                  
                  <div className={`h-6 w-6 rounded-full bg-brand-blue/5 flex items-center justify-center shrink-0 border border-brand-blue/5 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-brand-gold/10 text-brand-gold" : "text-brand-blue-light"
                  }`}>
                    <ChevronDown className="h-4.5 w-4.5" />
                  </div>
                </button>

                {/* Animated expandable panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-5 sm:p-6 pt-0 border-t border-gray-150/80 bg-slate-bg/15 text-xs sm:text-sm text-gray-650 leading-relaxed font-light">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* FAQ Bottom CTA for conversions */}
        <div className="mt-12 bg-white border border-brand-gold/25 rounded-lg p-6 text-center max-w-2xl mx-auto shadow-lux flex flex-col items-center">
          <p className="text-xs font-semibold text-brand-blue">
            Não encontrou sua dúvida técnica específica d'Advocacia?
          </p>
          <p className="text-[10px] sm:text-xs text-gray-400 mt-1 max-w-md">
            Sua dúvida pode requerer análise de conflito de interesses formal e individualizada. Toque no botão para agendar uma chamada preliminar.
          </p>
          
          <div className="mt-4 flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center">
            {/* WhatsApp trigger */}
            <button
              onClick={triggerDirectWhatsappConfidential}
              id="faq-whatsapp-btn"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <MessageCircle className="h-4 w-4 shrink-0 fill-current text-white" />
              <span>Chamar Plantão</span>
            </button>

            {/* Custom Modal clicker */}
            <button
              onClick={onOpenModal}
              id="faq-audit-btn"
              className="border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-bold px-5 py-2.5 rounded text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <span>Preencher Diagnóstico Rápido</span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-brand-gold" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
