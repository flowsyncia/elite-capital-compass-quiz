
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle } from "lucide-react";
import WhatsAppFormModal from './WhatsAppFormModal';

interface FinalCTASectionProps {
  onStartQuiz: () => void;
}

const FinalCTASection = ({ onStartQuiz }: FinalCTASectionProps) => {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  const handleDirectWhatsApp = () => {
    const message = `Olá! Vi o site da Elite Capital e gostaria de falar sobre minhas necessidades de crédito.`;
    const whatsappURL = `https://wa.me/5511940134427?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="py-24 bg-slate-900 text-white font-poppins">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tight">
            Está pronto para <span className="text-cyan-400">virar o jogo financeiro?</span>
          </h2>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-16 leading-relaxed text-gray-300 font-medium">
            Preencha o formulário e receba sua análise personalizada ou fale direto conosco no WhatsApp!
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
            <Button 
              onClick={onStartQuiz}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-16 py-6 text-xl md:text-2xl font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              FAZER MINHA ANÁLISE PERSONALIZADA
            </Button>
            
            <Button 
              onClick={handleDirectWhatsApp}
              variant="outline"
              className="border-2 border-cyan-400 bg-transparent text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-16 py-6 text-xl md:text-2xl font-bold rounded-lg transition-all duration-300"
            >
              FALAR AGORA NO WHATSAPP
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center md:justify-start">
              <Clock className="w-8 h-8 mr-4 text-cyan-400" />
              <span className="font-semibold text-xl">Análise Rápida</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <CheckCircle className="w-8 h-8 mr-4 text-cyan-400" />
              <span className="font-semibold text-xl">100% Gratuito</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <CheckCircle className="w-8 h-8 mr-4 text-cyan-400" />
              <span className="font-semibold text-xl">Atendimento Humano</span>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppFormModal 
        isOpen={showWhatsAppModal}
        onClose={() => setShowWhatsAppModal(false)}
      />
    </section>
  );
};

export default FinalCTASection;
