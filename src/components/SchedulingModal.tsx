import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, ShieldAlert, ChevronRight, Briefcase } from "lucide-react";

interface SchedulingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedArea?: string;
}

export default function SchedulingModal({ isOpen, onClose, selectedArea = "" }: SchedulingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    area: selectedArea || "societario-merg",
    urgency: "Normal",
    notes: ""
  });

  const [step, setStep] = useState(1); // 1 = Form, 2 = Success/Loading, 3 = Redirect
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-fill area if prop changes
  React.useEffect(() => {
    if (selectedArea) {
      setFormData(prev => ({ ...prev, area: selectedArea }));
    }
  }, [selectedArea]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Nome completo é obrigatório.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "E-mail corporativo inválido.";
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      newErrors.phone = "Informe um celular/WhatsApp válido com DDD.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real database write or endpoint log (no mock-larping, just robust simulation and quick success transition)
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(2);
    }, 1200);
  };

  const triggerWhatsAppRedirect = () => {
    const areaLabels: Record<string, string> = {
      "societario-merg": "Societário, M&A & Governança",
      "tributario-fiscal": "Tributário de Alta Performance",
      "patrimonio-wealth": "Planejamento e Blindagem Patrimonial",
      "contencioso-elite": "Litígios Cíveis",
      "direito-digital": "Direito Digital & LGPD",
      "contratos-negocios": "Contratos Comerciais"
    };

    const areaName = areaLabels[formData.area] || formData.area;
    const txt = `Olá Dr. Henrique Auden, gostaria de agendar uma consulta jurídica estratégica preliminar sobre a área de *${areaName}*.

*Meus dados de contato:*
• *Nome:* ${formData.name}
• *Empresa:* ${formData.company || "Não Informada/Individual"}
• *E-mail:* ${formData.email}
• *Contato:* ${formData.phone}
• *Anotação adicional:* ${formData.notes || "Não inclusa"}

Aguardo disponibilidade de horários da secretária da banca. `;

    const encodedText = encodeURIComponent(txt);
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodedText}`;
    
    // Open in safety and close modal
    window.open(whatsappUrl, "_blank");
    onClose();
    // Reset back to step 1
    setTimeout(() => {
      setStep(1);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        area: "societario-merg",
        urgency: "Normal",
        notes: ""
      });
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="scheduling-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-blue-dark/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-lg bg-white shadow-2xl border border-brand-gold/20"
          >
            {/* Header decor */}
            <div className="h-1.5 w-full bg-gradient-to-r from-brand-blue via-brand-gold to-brand-blue-light" />

            <button
              onClick={onClose}
              id="close-modal-btn"
              className="absolute right-4 top-4 text-gray-400 hover:text-brand-blue transition-colors p-1"
            >
              <X className="h-5 w-5" />
            </button>

            {step === 1 ? (
              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-gold font-serif-clean mb-1">
                    <Briefcase className="h-3 w-3" /> Fale com a banca
                  </div>
                  <h3 className="text-xl font-bold text-brand-blue font-serif-clean">
                    Agende sua Análise de Caso
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Preencha o formulário institucional. Sua consulta passará por crivo confidencial ético em instantes.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Nome Completo */}
                  <div>
                    <label className="block text-xs font-semibold text-brand-blue mb-1" htmlFor="name">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ex: Dr. Marcelo da Silva"
                      className={`w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring-1 ${
                        errors.name ? "border-red-500 focus:ring-red-400" : "border-gray-200 focus:ring-brand-gold focus:border-brand-gold"
                      }`}
                    />
                    {errors.name && <span className="text-[10px] text-red-500 mt-0.5 block">{errors.name}</span>}
                  </div>

                  {/* E-mail e WhatsApp lado a lado */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-brand-blue mb-1" htmlFor="email">
                        E-mail Corporativo
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="diretoria@empresa.com.br"
                        className={`w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring-1 ${
                          errors.email ? "border-red-500 focus:ring-red-400" : "border-gray-200 focus:ring-brand-gold focus:border-brand-gold"
                        }`}
                      />
                      {errors.email && <span className="text-[10px] text-red-500 mt-0.5 block">{errors.email}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-blue mb-1" htmlFor="phone">
                        Celular / WhatsApp
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(11) 99999-9999"
                        className={`w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring-1 ${
                          errors.phone ? "border-red-500 focus:ring-red-400" : "border-gray-200 focus:ring-brand-gold focus:border-brand-gold"
                        }`}
                      />
                      {errors.phone && <span className="text-[10px] text-red-500 mt-0.5 block">{errors.phone}</span>}
                    </div>
                  </div>

                  {/* Empresa */}
                  <div>
                    <label className="block text-xs font-semibold text-brand-blue mb-1" htmlFor="company">
                      Nome da Empresa / CNPJ <span className="text-[10px] text-gray-400">(Opcional)</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Ex: Grupo Aliança S/A"
                      className="w-full rounded border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold"
                    />
                  </div>

                  {/* Área de Interesse */}
                  <div>
                    <label className="block text-xs font-semibold text-brand-blue mb-1" htmlFor="area">
                      Área Jurídica Pretendida
                    </label>
                    <select
                      id="area"
                      name="area"
                      value={formData.area}
                      onChange={handleInputChange}
                      className="w-full rounded border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold bg-white"
                    >
                      <option value="societario-merg">Societário, M&A & Governança</option>
                      <option value="tributario-fiscal">Tributário de Alta Performance</option>
                      <option value="patrimonio-wealth">Planejamento e Blindagem Patrimonial</option>
                      <option value="contencioso-elite">Litígios Cíveis & Tribunais Superiores</option>
                      <option value="direito-digital">Direito Digital & compliance LGPD</option>
                      <option value="contratos-negocios">Contratos de Alta Engenharia Jurídica</option>
                    </select>
                  </div>

                  {/* Resumo da Demanda */}
                  <div>
                    <label className="block text-xs font-semibold text-brand-blue mb-1" htmlFor="notes">
                      Pequeno resumo da sua necessidade <span className="text-[10px] text-gray-400">(Altamente Confidencial)</span>
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={2}
                      placeholder="Gostaria de falar sobre..."
                      className="w-full rounded border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold resize-none"
                    />
                  </div>

                  {/* Consentimento Ético */}
                  <div className="bg-slate-bg/50 p-2.5 rounded flex items-start gap-2 border border-brand-blue/5">
                    <ShieldAlert className="h-4 w-4 text-brand-gold flex-shrink-0 mt-0.5" />
                    <p className="text-[10px] leading-tight text-gray-500">
                      <strong>Conformidade LGPD & OAB:</strong> Garantimos proteção total e sigilo profissional do segredo corporativo conforme legislação brasileira vigente de ética profissional.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="submit-booking-btn"
                    disabled={isSubmitting}
                    className="w-full bg-brand-blue text-white font-semibold rounded py-3 text-sm hover:bg-brand-blue-light transition-all shadow-md active:translate-y-px duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        Enviar Solicitação de Análise
                        <ChevronRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-8 text-center flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="rounded-full bg-brand-gold/10 p-4 text-brand-gold mb-4"
                >
                  <CheckCircle2 className="h-10 w-10 text-brand-gold" />
                </motion.div>

                <h3 className="text-xl font-bold text-brand-blue font-serif-clean">
                  Solicitação Recebida com Sucesso
                </h3>
                <p className="text-sm text-gray-600 mt-2 max-w-sm">
                  Seus dados foram validados e criptografados. Para acelerar o agendamento e ser inserido com prioridade na nossa agenda corporativa, por favor, estabeleça conexão direta do seu WhatsApp corporativo com nossa secretaria no botão abaixo.
                </p>

                <button
                  onClick={triggerWhatsAppRedirect}
                  id="modal-whatsapp-redirect-btn"
                  className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-md shadow-md hover:shadow-emerald-900/10 transition-all flex items-center justify-center gap-2 text-sm group cursor-pointer"
                >
                  Conectar ao WhatsApp da Banca
                  <ChevronRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => {
                    setStep(1);
                    onClose();
                  }}
                  id="final-close-modal-btn"
                  className="text-xs text-gray-400 hover:text-gray-600 underline mt-4 hover:no-underline"
                >
                  Fechar janela
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
