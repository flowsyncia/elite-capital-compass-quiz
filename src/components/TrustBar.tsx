
import { CheckCircle, Users, Building } from "lucide-react";

const TrustBar = () => {
  return (
    <section className="py-8 bg-gradient-to-r from-slate-50 to-cyan-50 border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center md:justify-start">
            <CheckCircle className="w-6 h-6 mr-3 text-cyan-600" />
            <span className="font-semibold text-slate-700">+10 anos de experiência</span>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <Users className="w-6 h-6 mr-3 text-cyan-600" />
            <span className="font-semibold text-slate-700">+5.000 clientes atendidos</span>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <Building className="w-6 h-6 mr-3 text-cyan-600" />
            <span className="font-semibold text-slate-700">50+ parcerias financeiras</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
