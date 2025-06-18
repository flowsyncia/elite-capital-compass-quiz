
import { Users, Calendar, Briefcase } from "lucide-react";

const AuthoritySection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
            Sobre <span className="text-cyan-600">Pedro Barbosa</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Lado Esquerdo - Foto e Informações */}
          <div className="text-center lg:text-left">
            <div className="mb-12">
              <div className="w-64 h-64 mx-auto lg:mx-0 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center mb-8 shadow-lg">
                <div className="w-56 h-56 bg-slate-300 rounded-full flex items-center justify-center">
                  <span className="text-slate-600 font-medium text-lg">Foto Pedro Barbosa</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-3">Pedro Barbosa</h3>
              <p className="text-cyan-600 font-bold text-xl">Fundador & CEO</p>
            </div>

            <p className="text-xl text-slate-700 leading-relaxed mb-12 max-w-lg mx-auto lg:mx-0">
              "Com mais de uma década de atuação no mercado financeiro, a Elite Capital se consolidou como referência nacional em consultoria de crédito. Liderada por Pedro Barbosa, a empresa já impactou mais de 5.000 clientes com soluções estratégicas, mesmo em cenários desafiadores."
            </p>

            {/* Logos dos Parceiros */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-slate-800 mb-6">Nossos Parceiros</h4>
              <div className="flex gap-8 justify-center lg:justify-start">
                <div className="w-40 h-24 bg-white rounded-xl flex items-center justify-center shadow-lg border-2 border-gray-200">
                  <img 
                    src="/lovable-uploads/35f772db-2585-4ba9-b244-04dc27b410b8.png" 
                    alt="FRANQ - Membro Oficial" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="w-40 h-24 bg-white rounded-xl flex items-center justify-center shadow-lg border-2 border-gray-200">
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
          <div className="grid gap-10">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-10 rounded-2xl shadow-lg border border-cyan-100">
              <div className="flex items-center mb-6">
                <Calendar className="w-16 h-16 text-cyan-600 mr-6" />
                <div>
                  <h3 className="text-4xl font-bold text-slate-900">10+</h3>
                  <p className="text-slate-700 font-bold text-xl">Anos de Experiência</p>
                </div>
              </div>
              <p className="text-slate-600 text-lg">Uma década construindo relacionamentos sólidos no mercado financeiro.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 rounded-2xl shadow-lg border border-green-100">
              <div className="flex items-center mb-6">
                <Users className="w-16 h-16 text-green-600 mr-6" />
                <div>
                  <h3 className="text-4xl font-bold text-slate-900">5.000+</h3>
                  <p className="text-slate-700 font-bold text-xl">Clientes Atendidos</p>
                </div>
              </div>
              <p className="text-slate-600 text-lg">Milhares de brasileiros já conquistaram seus objetivos conosco.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-2xl shadow-lg border border-blue-100">
              <div className="flex items-center mb-6">
                <Briefcase className="w-16 h-16 text-blue-600 mr-6" />
                <div>
                  <h3 className="text-4xl font-bold text-slate-900">50+</h3>
                  <p className="text-slate-700 font-bold text-xl">Parcerias Estratégicas</p>
                </div>
              </div>
              <p className="text-slate-600 text-lg">Rede robusta com as principais instituições financeiras do país.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
