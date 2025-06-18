
import { Button } from "@/components/ui/button";
import { Shield, Users, Clock, CheckCircle } from "lucide-react";

interface HeroSectionProps {
  onStartQuiz: () => void;
}

const HeroSection = ({ onStartQuiz }: HeroSectionProps) => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Vim através do site da Elite Capital e gostaria de conhecer as opções de crédito disponíveis!";
    const whatsappURL = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-cyan-500/5"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/1ac73565-912f-4874-bdfe-836cb16a4dd9.png" 
              alt="Elite Capital - Soluções Financeiras" 
              className="h-24 mx-auto mb-6"
            />
          </div>

          {/* Headline Principal */}
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Desbloqueie Seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Potencial Financeiro</span> com Soluções Sob Medida
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Mais de <span className="font-bold text-blue-600">10 anos</span> conectando pessoas aos melhores produtos de crédito do mercado. Descubra qual solução se encaixa perfeitamente no seu perfil.
          </p>

          {/* CTAs Principais */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={onStartQuiz}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              DESCOBRIR MINHA SOLUÇÃO IDEAL
            </Button>
            
            <Button 
              onClick={handleWhatsAppClick}
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              FALAR DIRETO NO WHATSAPP
            </Button>
          </div>

          {/* Selos de Confiança */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center p-4 bg-white/70 rounded-lg shadow-sm">
              <Shield className="w-8 h-8 text-blue-600 mb-2" />
              <span className="text-sm font-medium text-slate-700">Site Seguro</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/70 rounded-lg shadow-sm">
              <CheckCircle className="w-8 h-8 text-green-600 mb-2" />
              <span className="text-sm font-medium text-slate-700">Dados Protegidos</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/70 rounded-lg shadow-sm">
              <Users className="w-8 h-8 text-blue-600 mb-2" />
              <span className="text-sm font-medium text-slate-700">Atendimento Especializado</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/70 rounded-lg shadow-sm">
              <Clock className="w-8 h-8 text-blue-600 mb-2" />
              <span className="text-sm font-medium text-slate-700">Resposta Rápida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
