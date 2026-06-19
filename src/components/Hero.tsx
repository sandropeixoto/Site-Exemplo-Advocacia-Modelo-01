import React from "react";
import { motion } from "motion/react";
import { CheckCircle, ShieldCheck, ArrowRight, ArrowUpRight, Award, MessageSquare } from "lucide-react";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const triggerWhatsappDirect = () => {
    const text = encodeURIComponent(
      "Olá, vi a landing page institucional d'Auden Advocacia de Prestígio e gostaria de falar imediatamente com um advogado sobre um caso complexo corporativo."
    );
    window.open(`https://wa.me/5511999999999?text=${text}`, "_blank");
  };

  const trustBadges = [
    { text: "Conformidade e Sigilo Ético OAB" },
    { text: "Infraestrutura Criptografada e Segura" },
    { text: "Especialistas de Nível Doutorado e Mestrado" }
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-brand-blue-dark"
    >
      {/* Background Image with Ref Policy to prevent restrictive origin blocks */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80"
          alt="Banca de Advocacia Auden Legal Escritório"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-25 scale-105 filter brightness-75 transition-all duration-1000"
        />
        {/* Deep, rich overlays (gradient) for ultimate high-contrast readability and prestige */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark via-brand-blue-dark/95 to-brand-blue-dark/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark via-transparent to-brand-blue-dark/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy Area */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Tagline / Micro Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-semibold uppercase tracking-widest mb-6"
            >
              <Award className="h-4 w-4 shrink-0 text-brand-gold" />
              <span>Banca Jurídica de Prestígio e Alta Performance</span>
            </motion.div>

            {/* Imposing Title (Cinzel Serif) */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif-clean text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-normal text-white leading-tight"
            >
              A excelência de uma <span className="text-brand-gold block lg:inline">banca boutique</span> para causas e patrimônios de alto valor.
            </motion.h1>

            {/* Descriptive conversion-focused description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-gray-300 mt-6 leading-relaxed max-w-2xl font-light"
            >
              Defendemos corporações e linhagens familiares com estratégias cirúrgicas sob rígido código de sigilo técnico. Especialistas seniores dedicados do início ao desfecho.
            </motion.p>

            {/* Core trust pillars block */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 text-gray-300"
            >
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {trustBadges.map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-xs">
                    <ShieldCheck className="h-4 w-4 text-brand-gold flex-shrink-0" />
                    <span className="font-medium text-gray-200">{badge.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Dual CTAs focused on high conversion and phone optimized comfort */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              {/* Highlighted WhatsApp Button */}
              <button
                onClick={triggerWhatsappDirect}
                id="hero-whatsapp-cta"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded shadow-lg shadow-emerald-950/20 hover:shadow-emerald-900/30 transition-all flex items-center justify-center gap-3 text-sm tracking-wider uppercase cursor-pointer group active:translate-y-px"
              >
                <MessageSquare className="h-5 w-5 fill-current text-white shrink-0" />
                <span>Iniciar Consulta no WhatsApp</span>
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Action builder button */}
              <button
                onClick={onOpenModal}
                id="hero-modal-cta"
                className="border border-brand-gold text-brand-gold hover:text-brand-blue-dark hover:bg-brand-gold font-bold px-6 py-4 rounded transition-all flex items-center justify-center gap-2 text-sm tracking-wider uppercase cursor-pointer group"
              >
                <span>Agendar Avaliação Confidencial</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>

          </div>

          {/* Side stats / credibility dynamic card */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative p-8 rounded-lg bg-brand-blue-light/75 backdrop-blur-md border border-brand-gold/30 shadow-2xl max-w-md mx-auto"
            >
              {/* Embedded luxury shine */}
              <div className="absolute top-0 right-0 h-40 w-40 bg-brand-gold/5 blur-2xl rounded-full" />
              
              <div className="relative z-10 space-y-6">
                <span className="text-xs uppercase tracking-widest text-brand-gold font-bold font-serif-clean block mb-4 border-b border-brand-gold/20 pb-2">
                  Histórico de Excelência Mensurável
                </span>

                {/* Stat 1 */}
                <div id="stat-1-tax-recovery" className="flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold font-bold text-sm">
                    R$
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif-clean font-bold text-white tracking-tight">R$ 50 Milhões+</h4>
                    <p className="text-xs text-gray-400 mt-1">Recuperados ou poupados para nossos clientes sob planejamento tributário lícito.</p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div id="stat-2-case-success" className="flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold font-bold text-sm">
                    %
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif-clean font-bold text-white tracking-tight">98.4% de Êxito</h4>
                    <p className="text-xs text-gray-400 mt-1">De taxa resolutiva em defesas fiscais administrativas e arbitragens complexas.</p>
                  </div>
                </div>

                {/* Stat 3 */}
                <div id="stat-3-history-years" className="flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold font-bold text-sm font-serif-clean">
                    L
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif-clean font-bold text-white tracking-tight">Consultoria Premium</h4>
                    <p className="text-xs text-gray-400 mt-1">Disponibilidade imediata e atendimento direto personalizado pelos próprios sócios senior.</p>
                  </div>
                </div>
              </div>

              {/* Bottom ethical seal placeholder */}
              <div className="mt-6 pt-6 border-t border-brand-gold/20 flex items-center justify-between text-[11px] text-gray-400">
                <span>Atuação Ética em todo o Brasil</span>
                <span className="font-semibold text-brand-gold">OAB Compliant</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
