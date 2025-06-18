
import { Button } from "@/components/ui/button";
import { Shield, Users, Clock, CheckCircle } from "lucide-react";

interface HeroSectionProps {
  onStartQuiz: () => void;
}

const HeroSection = ({ onStartQuiz }: HeroSectionProps) => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Vim através do site da Elite Capital e gostaria de conhecer as opções de crédito disponíveis!";
    const whatsappURL = `https://wa.me/5511940134427?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="relative min-h-screen bg-slate-900 text-white flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-16">
            <img 
              src="/lovable-uploads/1ac73565-912f-4874-bdfe-836cb16a4dd9.png" 
              alt="Elite Capital - Soluções Financeiras" 
              className="h-28 mx-auto mb-8"
            />
          </div>

          {/* Headline Principal */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Conquiste o <span className="text-cyan-400">Crédito Ideal</span> com Quem Entende do Assunto
          </h1>

          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            Mais de <span className="font-bold text-cyan-400">10 anos</span> de experiência conectando pessoas às melhores soluções financeiras do mercado.
          </p>

          {/* Benefício rápido */}
          <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-3xl mx-auto">
            Consultoria personalizada, aprovação rápida e atendimento humano de verdade.
          </p>

          {/* CTAs Principais */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Button 
              onClick={onStartQuiz}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-12 py-6 text-xl font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              DESCOBRIR MINHA SOLUÇÃO IDEAL
            </Button>
            
            <Button 
              onClick={handleWhatsAppClick}
              variant="outline"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-12 py-6 text-xl font-bold rounded-lg transition-all duration-300"
            >
              FALAR AGORA NO WHATSAPP
            </Button>
          </div>

          {/* Selos de Confiança */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-slate-800/50 rounded-xl shadow-lg backdrop-blur-sm">
              <Shield className="w-10 h-10 text-cyan-400 mb-3" />
              <span className="text-lg font-medium text-gray-300">Site Seguro</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-slate-800/50 rounded-xl shadow-lg backdrop-blur-sm">
              <CheckCircle className="w-10 h-10 text-green-400 mb-3" />
              <span className="text-lg font-medium text-gray-300">Dados Protegidos</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-slate-800/50 rounded-xl shadow-lg backdrop-blur-sm">
              <Users className="w-10 h-10 text-cyan-400 mb-3" />
              <span className="text-lg font-medium text-gray-300">Atendimento Especializado</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-slate-800/50 rounded-xl shadow-lg backdrop-blur-sm">
              <Clock className="w-10 h-10 text-cyan-400 mb-3" />
              <span className="text-lg font-medium text-gray-300">Resposta Rápida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
