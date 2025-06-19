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
    whatsapp: '',
    income: '',
    amount: ''
  });

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
      question: 'Qual sua faixa de renda mensal?',
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

  const handleAnswerSelect = (answer: string) => {
    setAnswers({ ...answers, [questions[currentStep].id]: answer });
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(questions.length); // Vai para o formulário
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
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
    const webhookData = {
      nome: formData.name,
      cpf: formData.cpf,
      email: formData.email,
      whatsapp: formData.whatsapp,
      renda_mensal: formData.income,
      valor_pretendido: formData.amount,
      objetivo: answers.objective,
      faixa_renda: answers.income,
      valor_desejado: answers.amount,
      garantia: answers.guarantee,
      urgencia: answers.urgency,
      preferencia_contato: answers.contact,
      timestamp: new Date().toISOString(),
      tipo: 'quiz_completo',
      fonte: 'site_elite_capital'
    };

    await sendToWebhook(webhookData);

    const whatsappMessage = `Olá! Completei o quiz no site. Meu nome é ${formData.name} e meu CPF é ${formData.cpf}. Gostaria de receber minha proposta personalizada!

Minhas respostas:
- Objetivo: ${answers.objective}
- Renda: ${answers.income}
- Valor desejado: ${answers.amount}
- Garantia: ${answers.guarantee}
- Urgência: ${answers.urgency}
- Preferência de contato: ${answers.contact}

Aguardo retorno!`;

    const whatsappURL = `https://wa.me/5511940134427?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-slate-800">
            Quiz Personalizado - Elite Capital
          </h2>
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-6">
          {currentStep < questions.length ? (
            // Perguntas do Quiz
            <div>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-blue-600">
                    Pergunta {currentStep + 1} de {questions.length}
                  </span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-cyan-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-6">
                  {questions[currentStep].question}
                </h3>
              </div>

              <div className="grid gap-3">
                {questions[currentStep].options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    variant="outline"
                    className="p-4 text-left justify-start hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          ) : (
            // Formulário Final
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-6">
                Últimas informações para sua proposta personalizada
              </h3>

              <div className="grid gap-4">
                <div>
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Seu nome completo"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="cpf">CPF/CNPJ *</Label>
                  <Input
                    id="cpf"
                    value={formData.cpf}
                    onChange={(e) => handleInputChange('cpf', e.target.value)}
                    placeholder="000.000.000-00"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="seu.email@exemplo.com"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="whatsapp">WhatsApp *</Label>
                  <Input
                    id="whatsapp"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="income">Renda Mensal Aproximada</Label>
                  <Input
                    id="income"
                    value={formData.income}
                    onChange={(e) => handleInputChange('income', e.target.value)}
                    placeholder="R$ 5.000,00"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="amount">Valor Pretendido</Label>
                  <Input
                    id="amount"
                    value={formData.amount}
                    onChange={(e) => handleInputChange('amount', e.target.value)}
                    placeholder="R$ 50.000,00"
                    className="mt-1"
                  />
                </div>

                <Button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-3 text-lg font-semibold mt-6"
                  disabled={!formData.name || !formData.cpf || !formData.email || !formData.whatsapp}
                >
                  RECEBER MINHA PROPOSTA PERSONALIZADA
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
