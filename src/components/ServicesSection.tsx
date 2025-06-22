import { Button } from "@/components/ui/button";
import { Coins, Users, Home, Car, FileText, Shield, Calendar, Briefcase } from "lucide-react";

interface ServicesSectionProps {
  onStartQuiz: () => void;
}

const ServicesSection = ({
  onStartQuiz
}: ServicesSectionProps) => {
  const services = [
    {
      icon: Coins,
      title: "Crédito Pessoal",
      color: "from-cyan-500 to-cyan-600"
    }, {
      icon: Users,
      title: "Empréstimo Consignado",
      color: "from-blue-500 to-blue-600"
    }, {
      icon: Home,
      title: "Financiamento Imobiliário",
      color: "from-teal-500 to-teal-600"
    }, {
      icon: Home,
      title: "Crédito com Garantia de Imóvel",
      color: "from-indigo-500 to-indigo-600"
    }, {
      icon: Car,
      title: "Financiamento de Veículos",
      color: "from-cyan-500 to-cyan-600"
    }, {
      icon: Car,
      title: "Crédito com Garantia de Veículo",
      color: "from-blue-500 to-blue-600"
    }, {
      icon: FileText,
      title: "Antecipação de Recebíveis",
      color: "from-teal-500 to-teal-600"
    }, {
      icon: Shield,
      title: "Seguros",
      color: "from-cyan-500 to-cyan-600"
    }, {
      icon: Users,
      title: "Consórcio",
      color: "from-blue-500 to-blue-600"
    }, {
      icon: Briefcase,
      title: "Mercado Livre de Energia",
      color: "from-teal-500 to-teal-600"
    }, {
      icon: Coins,
      title: "Câmbio",
      color: "from-cyan-500 to-cyan-600"
    }, {
      icon: Calendar,
      title: "Previdência Privada",
      color: "from-blue-500 to-blue-600"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 font-poppins">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tight">
            Soluções que se <span className="text-cyan-600">encaixam no seu perfil</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-700 max-w-4xl mx-auto font-medium">
            Oferecemos uma gama completa de produtos financeiros para atender suas necessidades específicas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group border border-gray-200">
              <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 font-medium">
                Condições especiais e atendimento personalizado
              </p>
            </div>
          ))}
        </div>

        <div className="text-center px-4">
          <Button 
            onClick={onStartQuiz} 
            className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 sm:px-12 py-4 sm:py-6 text-base sm:text-lg md:text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-bold rounded-lg max-w-md mx-auto"
          >
            <span className="block sm:hidden text-center leading-tight">
              DESCOBRIR MINHA<br />SOLUÇÃO IDEAL
            </span>
            <span className="hidden sm:block">
              QUERO DESCOBRIR QUAL É IDEAL PARA MIM
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
