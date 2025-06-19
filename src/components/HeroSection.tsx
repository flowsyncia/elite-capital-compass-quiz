
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Clock, Shield } from "lucide-react";
import WhatsAppFormModal from './WhatsAppFormModal';

interface HeroSectionProps {
  onStartQuiz: () => void;
}

const HeroSection = ({ onStartQuiz }: HeroSectionProps) => {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden font-poppins">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-blue-900/10"></div>
        </div>
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            {/* Logo */}
            <div className="mb-12">
              <img 
                src="/lovable-uploads/10e585cc-9b4c-4e11-b7ad-5d3f581227a4.png" 
                alt="Elite Capital - Soluções Financeiras" 
                className="h-24 md:h-32 mx-auto"
              />
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight">
              Conquiste o <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Crédito Ideal</span> com Quem Entende do Assunto
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 leading-relaxed text-gray-300 font-medium">
              Mais de 10 anos de experiência conectando pessoas às melhores soluções financeiras do mercado.
            </p>

            {/* Benefit statement */}
            <p className="text-lg md:text-xl mb-16 text-cyan-200 font-medium">
              Consultoria personalizada, aprovação rápida e atendimento humano de verdade.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
              <Button 
                onClick={onStartQuiz}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-12 py-6 text-lg md:text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Descobrir Minha Solução Ideal
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
              
              <Button 
                onClick={() => setShowWhatsAppModal(true)}
                variant="outline"
                className="border-2 border-cyan-400 bg-transparent text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-12 py-6 text-lg md:text-xl font-bold rounded-xl transition-all duration-300"
              >
                Falar Agora no WhatsApp
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center md:justify-start">
                <Clock className="w-8 h-8 mr-4 text-cyan-400" />
                <span className="font-semibold text-lg">Análise Rápida</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <CheckCircle className="w-8 h-8 mr-4 text-cyan-400" />
                <span className="font-semibold text-lg">100% Gratuito</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Shield className="w-8 h-8 mr-4 text-cyan-400" />
                <span className="font-semibold text-lg">Atendimento Humano</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFormModal 
        isOpen={showWhatsAppModal}
        onClose={() => setShowWhatsAppModal(false)}
      />
    </>
  );
};

export default HeroSection;
