import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Button asChild variant="outline" className="mb-4">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao site
            </Link>
          </Button>
          
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Política de Privacidade
          </h1>
          <p className="text-slate-600">
            Última atualização: Janeiro de 2025
          </p>
        </div>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Informações Gerais</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              A <strong>ELITE CAPITAL ESC LTDA</strong>, inscrita no CNPJ sob o nº <strong>42.837.586/0001-93</strong>, 
              está comprometida com a proteção da privacidade e dos dados pessoais de seus usuários, em conformidade 
              com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
            <p className="text-slate-700 leading-relaxed">
              Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos suas informações 
              pessoais quando você utiliza nosso site e serviços.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Dados Coletados</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Coletamos os seguintes dados pessoais quando você utiliza nossos serviços:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-4">
              <li><strong>Nome completo:</strong> Para identificação e personalização do atendimento</li>
              <li><strong>CPF:</strong> Para análise de crédito e identificação fiscal</li>
              <li><strong>CNPJ:</strong> Quando aplicável, para pessoas jurídicas</li>
              <li><strong>E-mail:</strong> Para comunicação e envio de informações</li>
              <li><strong>WhatsApp/Telefone:</strong> Para contato direto e atendimento</li>
              <li><strong>Dados de renda:</strong> Para análise de capacidade de pagamento</li>
              <li><strong>Finalidade do crédito:</strong> Para direcionamento da proposta adequada</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Finalidade do Tratamento</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Utilizamos seus dados pessoais para as seguintes finalidades:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-4">
              <li>Realização de contato comercial e institucional</li>
              <li>Análise de crédito e elaboração de propostas personalizadas</li>
              <li>Prestação de serviços financeiros solicitados</li>
              <li>Comunicação sobre produtos e serviços da Elite Capital</li>
              <li>Cumprimento de obrigações legais e regulamentares</li>
              <li>Melhoria da experiência do usuário em nossos canais</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Base Legal</h2>
            <p className="text-slate-700 leading-relaxed">
              O tratamento de seus dados pessoais é fundamentado nas seguintes bases legais previstas na LGPD:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-4">
              <li><strong>Consentimento:</strong> Fornecido no momento do preenchimento do formulário</li>
              <li><strong>Execução de contrato:</strong> Para prestação dos serviços financeiros solicitados</li>
              <li><strong>Legítimo interesse:</strong> Para análise de crédito e prevenção à fraude</li>
              <li><strong>Cumprimento de obrigação legal:</strong> Para atender exigências regulamentares</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Armazenamento e Segurança</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Seus dados pessoais são armazenados em:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-4">
              <li><strong>Google Sheets:</strong> Para organização e análise inicial dos dados</li>
              <li><strong>Sistemas internos seguros:</strong> Com criptografia e controle de acesso</li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, 
              alteração, divulgação ou destruição indevida.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Compartilhamento de Dados</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              <strong>Garantimos que seus dados pessoais não serão compartilhados com terceiros sem seu consentimento expresso</strong>, 
              exceto nas seguintes situações:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-4">
              <li>Quando necessário para cumprimento de obrigação legal</li>
              <li>Por determinação judicial ou de autoridade competente</li>
              <li>Para proteção do crédito, mediante autorização específica</li>
              <li>Com parceiros e prestadores de serviços, mediante contrato de confidencialidade</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Direitos do Titular dos Dados</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Você possui os seguintes direitos em relação aos seus dados pessoais:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-4">
              <li><strong>Acesso:</strong> Conhecer quais dados pessoais são tratados</li>
              <li><strong>Correção:</strong> Solicitar a correção de dados incompletos, inexatos ou desatualizados</li>
              <li><strong>Exclusão:</strong> Solicitar a eliminação de dados desnecessários ou tratados em desconformidade</li>
              <li><strong>Portabilidade:</strong> Solicitar a portabilidade dos dados a outro fornecedor</li>
              <li><strong>Revogação do consentimento:</strong> Retirar o consentimento a qualquer momento</li>
              <li><strong>Informação:</strong> Obter informações sobre o tratamento de seus dados</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Prazo de Retenção</h2>
            <p className="text-slate-700 leading-relaxed">
              Mantemos seus dados pessoais pelo período necessário para cumprir as finalidades descritas nesta política, 
              observando os prazos legais de retenção aplicáveis ao setor financeiro e as obrigações regulamentares.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Cookies e Tecnologias Similares</h2>
            <p className="text-slate-700 leading-relaxed">
              Nosso site pode utilizar cookies e tecnologias similares para melhorar a experiência do usuário, 
              analisar o tráfego e personalizar conteúdos. Você pode gerenciar as configurações de cookies em seu navegador.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Alterações nesta Política</h2>
            <p className="text-slate-700 leading-relaxed">
              Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que você a consulte regularmente. 
              As alterações entrarão em vigor na data de sua publicação.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">11. Contato</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Para exercer seus direitos, esclarecer dúvidas ou fazer solicitações relacionadas a esta Política de Privacidade, 
              entre em contato conosco:
            </p>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-slate-700 mb-2"><strong>ELITE CAPITAL ESC LTDA</strong></p>
              <p className="text-slate-700 mb-2">CNPJ: 42.837.586/0001-93</p>
              <p className="text-slate-700 mb-2">Instagram: <a href="https://instagram.com/elitecapitalx" className="text-cyan-600 hover:text-cyan-700 underline" target="_blank" rel="noopener noreferrer">@elitecapitalx</a></p>
              <p className="text-slate-700">WhatsApp: (11) 94013-4427</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">12. Conformidade com a LGPD</h2>
            <p className="text-slate-700 leading-relaxed">
              Esta Política de Privacidade foi elaborada em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) 
              e demais normas aplicáveis à proteção de dados pessoais no Brasil.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;