
import { Users, Calendar, Briefcase } from "lucide-react";

const AuthoritySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Por que Escolher a <span className="text-blue-600">Elite Capital</span>?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Lado Esquerdo - Foto e Informações */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <div className="w-48 h-48 mx-auto lg:mx-0 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mb-6">
                <div className="w-40 h-40 bg-slate-300 rounded-full flex items-center justify-center">
                  <span className="text-slate-600 font-medium">Foto Pedro Barbosa</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Pedro Barbosa</h3>
              <p className="text-blue-600 font-semibold">Fundador & CEO</p>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              "Com mais de uma década de atuação no mercado financeiro, a Elite Capital se consolidou como referência nacional em consultoria de crédito. Nossa missão é conectar você às melhores oportunidades, oferecendo soluções mesmo em cenários desafiadores."
            </p>

            {/* Logos dos Parceiros */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-slate-700 mb-4">Nossos Parceiros</h4>
              <div className="flex gap-6 justify-center lg:justify-start">
                <div className="w-32 h-20 bg-white rounded-lg flex items-center justify-center shadow-md border">
                  <img 
                    src="/lovable-uploads/35f772db-2585-4ba9-b244-04dc27b410b8.png" 
                    alt="FRANQ - Membro Oficial" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="w-32 h-20 bg-white rounded-lg flex items-center justify-center shadow-md border">
                  <img 
                    src="/lovable-uploads/2e77cbad-2407-4570-9c08-f744131ca797.png" 
                    alt="SINFAC-SP" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito - Estatísticas */}
          <div className="grid gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <Calendar className="w-12 h-12 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-3xl font-bold text-slate-800">10+</h3>
                  <p className="text-slate-600 font-medium">Anos de Experiência</p>
                </div>
              </div>
              <p className="text-slate-600">Uma década construindo relacionamentos sólidos no mercado financeiro.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <Users className="w-12 h-12 text-green-600 mr-4" />
                <div>
                  <h3 className="text-3xl font-bold text-slate-800">5.000+</h3>
                  <p className="text-slate-600 font-medium">Clientes Atendidos</p>
                </div>
              </div>
              <p className="text-slate-600">Milhares de brasileiros já conquistaram seus objetivos conosco.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <Briefcase className="w-12 h-12 text-purple-600 mr-4" />
                <div>
                  <h3 className="text-3xl font-bold text-slate-800">50+</h3>
                  <p className="text-slate-600 font-medium">Parcerias Estratégicas</p>
                </div>
              </div>
              <p className="text-slate-600">Rede robusta com as principais instituições financeiras do país.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
