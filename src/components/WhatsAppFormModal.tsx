import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

interface WhatsAppFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WhatsAppFormModal = ({ isOpen, onClose }: WhatsAppFormModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const sendTestWebhook = async () => {
    const testData = {
      nome: 'TESTE - João Silva',
      cpf: '123.456.789-00',
      email: 'teste@exemplo.com',
      whatsapp: '(11) 99999-9999',
      renda_mensal: 'R$ 5.000',
      valor_pretendido: 'R$ 50.000',
      objetivo: 'TESTE',
      faixa_renda: 'TESTE',
      valor_desejado: 'TESTE',
      garantia: 'TESTE',
      urgencia: 'TESTE',
      preferencia_contato: 'WhatsApp',
      timestamp: new Date().toISOString(),
      tipo: 'teste_webhook',
      fonte: 'site_elite_capital'
    };

    try {
      console.log('=== TESTE WEBHOOK ===');
      console.log('URL:', 'https://n8nwebhook.flowsyncia.online/webhook/dados_quizz');
      console.log('Dados de teste sendo enviados:', JSON.stringify(testData, null, 2));
      
      const response = await fetch('https://n8nwebhook.flowsyncia.online/webhook/dados_quizz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(testData),
      });
      
      console.log('Status da resposta:', response.status);
      console.log('Headers da resposta:', Object.fromEntries(response.headers.entries()));
      
      const responseText = await response.text();
      console.log('Corpo da resposta:', responseText);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, body: ${responseText}`);
      }
      
      console.log('✅ TESTE - Webhook enviado com sucesso');
      console.log('=== FIM TESTE ===');
      alert('✅ Teste enviado com sucesso! Verifique o console para mais detalhes.');
    } catch (error) {
      console.error('❌ ERRO NO TESTE:', error);
      console.log('=== FIM TESTE (COM ERRO) ===');
      alert('❌ Erro no teste! Verifique o console para mais detalhes.');
    }
  };

  const sendToWebhook = async (data: any) => {
    try {
      console.log('=== WHATSAPP WEBHOOK DEBUG ===');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.cpf || !formData.email || !formData.phone) {
      return;
    }

    const webhookData = {
      nome: formData.name,
      cpf: formData.cpf,
      email: formData.email,
      whatsapp: formData.phone,
      renda_mensal: '',
      valor_pretendido: '',
      objetivo: '',
      faixa_renda: '',
      valor_desejado: '',
      garantia: '',
      urgencia: '',
      preferencia_contato: 'WhatsApp',
      timestamp: new Date().toISOString(),
      tipo: 'contato_direto_whatsapp',
      fonte: 'site_elite_capital'
    };

    await sendToWebhook(webhookData);

    const message = `Olá Pedro! Meu nome é ${formData.name} e acabei de preencher meus dados na página da Elite Capital. Meu CPF/CNPJ é: ${formData.cpf}. Gostaria de saber mais sobre as opções de crédito disponíveis.`;
    const whatsappURL = `https://wa.me/5511940134427?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold text-slate-800">
            Falar no WhatsApp
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

        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <Button
                type="button"
                onClick={sendTestWebhook}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white"
              >
                🧪 ENVIAR TESTE DO WEBHOOK
              </Button>
              <p className="text-xs text-yellow-700 mt-2 text-center">
                Clique para testar se o webhook está funcionando
              </p>
            </div>

            <div>
              <Label htmlFor="name">Nome Completo *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Seu nome completo"
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label htmlFor="cpf">CPF *</Label>
              <Input
                id="cpf"
                value={formData.cpf}
                onChange={(e) => handleInputChange('cpf', e.target.value)}
                placeholder="000.000.000-00"
                className="mt-1"
                required
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
                required
              />
            </div>

            <div>
              <Label htmlFor="phone">Telefone/WhatsApp *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="(11) 99999-9999"
                className="mt-1"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 text-lg font-semibold mt-6"
              disabled={!formData.name || !formData.cpf || !formData.email || !formData.phone}
            >
              FALAR NO WHATSAPP
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WhatsAppFormModal;
