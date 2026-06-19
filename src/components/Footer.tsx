import React from "react";
import { Scale, Mail, MapPin, Phone, ShieldCheck, ArrowUpCircle } from "lucide-react";

interface FooterProps {
  onOpenModal: () => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const menuLinks = [
    { label: "Home Base", href: "#" },
    { label: "Sobre o Escritório", href: "#sobre-nos" },
    { label: "Áreas Jurídicas", href: "#atuacao" },
    { label: "Casos de Estudo", href: "#depoimentos" },
    { label: "Dúvidas Frequentes", href: "#faq" }
  ];

  return (
    <footer id="footer-section" className="bg-[#000810] text-gray-400 font-sans border-t border-brand-gold/25 relative overflow-hidden">
      
      {/* Upper subtle linear highlight */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-blue via-brand-gold to-brand-blue-dark" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Column 1: Brand & Oath */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#" onClick={handleScrollToTop} className="flex items-center gap-2 group inline-flex select-none">
              <div className="relative flex items-center justify-center h-10 w-10 border border-brand-gold/60 rounded bg-brand-blue/30">
                <Scale className="h-5 w-5 text-brand-gold" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-clean text-lg font-bold tracking-[0.18em] text-white leading-none">
                  AUDEN
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-brand-gold/90 font-sans mt-1">
                  ADVOCACIA DE PRESTÍGIO
                </span>
              </div>
            </a>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Fundado sob os dogmas da fidelidade, excelência técnica e sigilo intangível, o escritório Auden & Associados atua como escudo corporativo e patrimonial para famílias empresárias e grandes litigantes.
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-[10px] uppercase font-bold tracking-widest text-brand-gold font-serif-clean">
                Conformidade Ética Regulamentar
              </h4>
              
              <div className="flex items-start gap-2 bg-brand-blue/15 border border-brand-gold/15 p-3 rounded">
                <ShieldCheck className="h-4.5 w-4.5 text-brand-gold shrink-0 mt-0.5" />
                <p className="text-[10px] text-gray-400 leading-normal font-light">
                  <strong>Código de Ética da OAB:</strong> Esta página opera em total simetria com o Provimento nº 205/2021 e Resolução nº 228/21 do Conselho Federal da OAB, prezando pelo caráter meramente informativo e institucional de nossas publicações.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-xs uppercase font-semibold text-white tracking-widest border-b border-gray-800 pb-2">
              Navegação Interna
            </h4>
            <ul className="space-y-2.5 text-xs">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href === "#") {
                        handleScrollToTop(e);
                      } else {
                        e.preventDefault();
                        const element = document.querySelector(link.href);
                        if (element) {
                          const offset = 80;
                          const bodyRect = document.body.getBoundingClientRect().top;
                          const elementRect = element.getBoundingClientRect().top;
                          const elementPosition = elementRect - bodyRect;
                          const offsetPosition = elementPosition - offset;
                          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                        }
                      }
                    }}
                    className="hover:text-brand-gold transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenModal}
                  id="footer-diagnostic-cta"
                  className="text-brand-gold hover:text-white transition-colors block py-0.5 font-bold cursor-pointer text-left"
                >
                  Agendar Triagem Criptografada
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Locations */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="text-xs uppercase font-semibold text-white tracking-widest border-b border-gray-800 pb-2">
              Unidades & Atendimento
            </h4>
            
            <ul className="space-y-4 text-xs font-light">
              {/* São Paulo Unit */}
              <li className="flex gap-2.5 items-start">
                <MapPin className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Sede Corporativa — São Paulo/SP</span>
                  <span className="text-gray-400 text-[11px] block mt-0.5 leading-relaxed">
                    Av. Brigadeiro Faria Lima, 3477 - 14º Andar, Itaim Bibi, São Paulo - SP, 04538-133
                  </span>
                </div>
              </li>

              {/* Brasília Unit */}
              <li className="flex gap-2.5 items-start">
                <MapPin className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Apoio aos Tribunais — Brasília/DF</span>
                  <span className="text-gray-400 text-[11px] block mt-0.5 leading-relaxed">
                    Setor de Autarquias Sul (SAS), Quadra 5, Bloco N, Asa Sul, Brasília - DF, 70070-913
                  </span>
                </div>
              </li>

              {/* Immediate Contacts */}
              <li className="flex gap-2.5 items-center border-t border-gray-800/80 pt-3">
                <Phone className="h-4 w-4 text-brand-gold shrink-0" />
                <span className="text-[11px] text-gray-300">
                  Central: <strong className="text-white">(11) 99999-9999</strong> (WhatsApp / Desk)
                </span>
              </li>

              <li className="flex gap-2.5 items-center">
                <Mail className="h-4 w-4 text-brand-gold shrink-0" />
                <span className="text-[11px] text-gray-300">
                  E-mail: <strong className="text-white">secretaria@auden.adv.br</strong>
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower copyright bar with ethical seal placeholder and compliance */}
        <div className="mt-14 pt-8 border-t border-gray-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-gray-500">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-center sm:text-left">
            <span>
              &copy; {currentYear} Auden & Associados. Todos os direitos reservados.
            </span>
            <span className="text-brand-gold/60">
              Inscrição de Sociedade nº 45.891 OAB/SP
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" onClick={handleScrollToTop} className="font-semibold hover:text-brand-gold transition-colors flex items-center gap-1">
              <span>Voltar ao topo</span>
              <ArrowUpCircle className="h-4 w-4 text-brand-gold animate-bounce" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
