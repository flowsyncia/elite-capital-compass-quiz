import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

interface QuizProps {
  onClose: () => void;
}

const Quiz = ({ onClose }: QuizProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    email: '',
    whatsapp: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [allowConsultation, setAllowConsultation] = useState<boolean | null>(null);
  const [showThanks, setShowThanks] = useState(false);

  const questions = [
    {
      id: 'objective',
      question: 'Qual seu objetivo financeiro atual?',
      options: [
        'Quitar dívidas',
        'Comprar um imóvel',
        'Comprar um veículo',
        'Investir no meu negócio',
        'Reformar minha casa',
        'Outros'
      ]
    },
    {
      id: 'income',
      question: 'Renda mensal ou faturamento mensal (em caso de CNPJ)?',
      options: [
        'Até R$ 2.000',
        'R$ 2.001 a R$ 5.000',
        'R$ 5.001 a R$ 10.000',
        'R$ 10.001 a R$ 20.000',
        'Acima de R$ 20.000'
      ]
    },
    {
      id: 'amount',
      question: 'Qual valor de crédito você busca?',
      options: [
        'Até R$ 10.000',
        'R$ 10.001 a R$ 50.000',
        'R$ 50.001 a R$ 100.000',
        'R$ 100.001 a R$ 500.000',
        'Acima de R$ 500.000'
      ]
    },
    {
      id: 'guarantee',
      question: 'Possui algum bem para garantia?',
      options: [
        'Imóvel quitado',
        'Imóvel financiado',
        'Veículo quitado',
        'Veículo financiado',
        'Não possuo bens',
        'Outros bens'
      ]
    },
    {
      id: 'urgency',
      question: 'Qual a urgência da sua necessidade?',
      options: [
        'Muito urgente (até 7 dias)',
        'Urgente (até 15 dias)',
        'Moderada (até 30 dias)',
        'Sem pressa (acima de 30 dias)'
      ]
    },
    {
      id: 'contact',
      question: 'Prefere contato por WhatsApp ou Email?',
      options: [
        'WhatsApp',
        'Email',
        'Ambos'
      ]
    }
  ];

  const validateName = (name: string) => {
    if (name.length < 3) return 'Nome deve ter pelo menos 3 caracteres';
    return '';
  };

  const validateCPF = (cpf: string) => {
    const numbers = cpf.replace(/\D/g, '');
    if (numbers.length !== 11 && numbers.length !== 14) {
      return 'CPF deve ter 11 dígitos ou CNPJ deve ter 14 dígitos';
    }
    return '';
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Email deve ter formato válido';
    return '';
  };

  const validateWhatsApp = (phone: string) => {
    const numbers = phone.replace(/\D/g, '');
    if (numbers.length < 10 || numbers.length > 11) {
      return 'WhatsApp deve ter DDD + número (10 ou 11 dígitos)';
    }
    return '';
  };

  const formatCurrency = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (!numbers) return '';
    
    const amount = parseFloat(numbers) / 100;
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(amount);
  };

  const handleAnswerSelect = (answer: string) => {
    setAnswers({ ...answers, [questions[currentStep].id]: answer });
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(questions.length);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    let formattedValue = value;
    
    if (field === 'cpf') {
      const numbers = value.replace(/\D/g, '');
      if (numbers.length <= 11) {
        formattedValue = numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
      } else {
        formattedValue = numbers.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
      }
    } else if (field === 'whatsapp') {
      const numbers = value.replace(/\D/g, '');
      if (numbers.length <= 11) {
        formattedValue = numbers.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
      }
    }

    setFormData({ ...formData, [field]: formattedValue });
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    const nameError = validateName(formData.name);
    if (nameError) newErrors.name = nameError;
    
    const cpfError = validateCPF(formData.cpf);
    if (cpfError) newErrors.cpf = cpfError;
    
    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;
    
    const whatsappError = validateWhatsApp(formData.whatsapp);
    if (whatsappError) newErrors.whatsapp = whatsappError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendToWebhook = async (data: any) => {
    try {
      console.log('=== QUIZ WEBHOOK DEBUG ===');
      console.log('URL:', 'https://n8nwebhook.flowsyncia.online/webhook/dados_quizz');
      console.log('Dados sendo enviados:', JSON.stringify(data, null, 2));
      
      const response = await fetch('https://n8nwebhook.flowsyncia.online/webhook/dados_quizz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      console.log('Status da resposta:', response.status);
      console.log('Headers da resposta:', Object.fromEntries(response.headers.entries()));
      
      const responseText = await response.text();
      console.log('Corpo da resposta:', responseText);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, body: ${responseText}`);
      }
      
      console.log('✅ Webhook enviado com sucesso');
      console.log('=== FIM DEBUG ===');
    } catch (error) {
      console.error('❌ Erro ao enviar webhook:', error);
      console.log('=== FIM DEBUG (COM ERRO) ===');
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    // Show consultation permission question
    setCurrentStep(questions.length + 1);
  };

  const handleConsultationResponse = async (response: boolean) => {
    setAllowConsultation(response);

    if (response) {
      setShowThanks(true);
      
      // Wait 2 seconds then proceed
      setTimeout(async () => {
        await proceedWithSubmission();
      }, 2000);
    } else {
      await proceedWithSubmission();
    }
  };

  const proceedWithSubmission = async () => {
    const webhookData = {
      nome: formData.name,
      cpf: formData.cpf,
      email: formData.email,
      whatsapp: formData.whatsapp,
      renda_mensal: answers.income || '',
      valor_pretendido: answers.amount || '',
      objetivo: answers.objective,
      faixa_renda: answers.income,
      valor_desejado: answers.amount,
      garantia: answers.guarantee,
      urgencia: answers.urgency,
      preferencia_contato: answers.contact,
      permite_consulta_rapida: allowConsultation ? 'Sim' : 'Não',
      timestamp: new Date().toISOString(),
      tipo: 'quiz_completo',
      fonte: 'site_elite_capital'
    };

    await sendToWebhook(webhookData);

    const whatsappMessage = `Olá Pedro! Meu nome é ${formData.name} e acabei de preencher meus dados na página da Elite Capital. Meu CPF/CNPJ é: ${formData.cpf}. Gostaria de saber mais sobre as opções de crédito disponíveis.`;

    const whatsappURL = `https://wa.me/5511940134427?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[95vh] overflow-y-auto mx-2 sm:mx-4">
        <div className="p-4 sm:p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg sm:text-2xl font-bold text-slate-800">
            Quiz Personalizado - Elite Capital
          </h2>
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="text-gray-500 hover:text-gray-700 flex-shrink-0 ml-2"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-4 sm:p-6">
          {showThanks ? (
            // Mensagem de agradecimento
            <div className="text-center py-8">
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Obrigado!
                </h3>
                <p className="text-gray-600">
                  Agradecemos por permitir que façamos uma consulta rápida. Em breve entraremos em contato com as melhores opções para você.
                </p>
              </div>
            </div>
          ) : currentStep < questions.length ? (
            // Perguntas do Quiz
            <div>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-blue-600">
                    Pergunta {currentStep + 1} de {questions.length}
                  </span>
                  <div className="w-24 sm:w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-cyan-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-6 leading-tight">
                  {questions[currentStep].question}
                </h3>
              </div>

              <div className="grid gap-3">
                {questions[currentStep].options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    variant="outline"
                    className="p-3 sm:p-4 text-left justify-start hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 text-sm sm:text-base min-h-[48px] whitespace-normal h-auto"
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          ) : currentStep === questions.length ? (
            // Formulário Final (sem renda mensal e valor pretendido)
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-6">
                Últimas informações para sua proposta personalizada
              </h3>

              <div className="grid gap-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium">Nome Completo *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Seu nome completo"
                    className={`mt-1 text-sm sm:text-base min-h-[44px] ${errors.name ? 'border-red-500' : ''}`}
                  />
                  {errors.name && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="cpf" className="text-sm font-medium">CPF/CNPJ *</Label>
                  <Input
                    id="cpf"
                    value={formData.cpf}
                    onChange={(e) => handleInputChange('cpf', e.target.value)}
                    placeholder="000.000.000-00 ou 00.000.000/0000-00"
                    className={`mt-1 text-sm sm:text-base min-h-[44px] ${errors.cpf ? 'border-red-500' : ''}`}
                  />
                  {errors.cpf && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.cpf}</p>}
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="seu.email@exemplo.com"
                    className={`mt-1 text-sm sm:text-base min-h-[44px] ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="whatsapp" className="text-sm font-medium">WhatsApp *</Label>
                  <Input
                    id="whatsapp"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                    placeholder="(11) 99999-9999"
                    className={`mt-1 text-sm sm:text-base min-h-[44px] ${errors.whatsapp ? 'border-red-500' : ''}`}
                  />
                  {errors.whatsapp && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.whatsapp}</p>}
                </div>

                <Button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-3 sm:py-4 text-sm sm:text-lg font-semibold mt-6 min-h-[48px]"
                  disabled={!formData.name || !formData.cpf || !formData.email || !formData.whatsapp}
                >
                  CONTINUAR
                </Button>
              </div>
            </div>
          ) : (
            // Pergunta sobre consulta rápida
            <div className="text-center py-8">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-6">
                Podemos usar seus dados para uma consulta rápida sem compromisso?
              </h3>
              <p className="text-gray-600 mb-8 text-sm sm:text-base">
                Isso nos permitirá fazer uma análise prévia e oferecer as melhores condições para seu perfil.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => handleConsultationResponse(true)}
                  className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white py-3 px-8 text-lg font-semibold"
                >
                  SIM, AUTORIZO
                </Button>
                <Button
                  onClick={() => handleConsultationResponse(false)}
                  variant="outline"
                  className="py-3 px-8 text-lg font-semibold"
                >
                  NÃO, OBRIGADO
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
