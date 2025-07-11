
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
    cnpj: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Validation functions
  const validateName = (name: string) => {
    if (name.length < 3) return 'Nome deve ter pelo menos 3 caracteres';
    return '';
  };

  const validateCPF = (cpf: string) => {
    const numbers = cpf.replace(/\D/g, '');
    if (numbers.length !== 11) {
      return 'CPF deve ter 11 dígitos';
    }
    return '';
  };

  const validateCNPJ = (cnpj: string) => {
    if (!cnpj) return ''; // CNPJ é opcional
    const numbers = cnpj.replace(/\D/g, '');
    if (numbers.length !== 14) {
      return 'CNPJ deve ter 14 dígitos';
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

  const handleInputChange = (field: string, value: string) => {
    let formattedValue = value;
    
    if (field === 'cpf') {
      const numbers = value.replace(/\D/g, '');
      if (numbers.length <= 11) {
        formattedValue = numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
      }
    } else if (field === 'cnpj') {
      const numbers = value.replace(/\D/g, '');
      if (numbers.length <= 14) {
        formattedValue = numbers.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
      }
    } else if (field === 'phone') {
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
    
    const cnpjError = validateCNPJ(formData.cnpj);
    if (cnpjError) newErrors.cnpj = cnpjError;
    
    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;
    
    const phoneError = validateWhatsApp(formData.phone);
    if (phoneError) newErrors.phone = phoneError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
    
    if (!validateForm()) {
      return;
    }

    const webhookData = {
      nome: formData.name,
      cpf: formData.cpf,
      cnpj: formData.cnpj,
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

    const cpfCnpj = formData.cnpj ? `CPF: ${formData.cpf}, CNPJ: ${formData.cnpj}` : `CPF: ${formData.cpf}`;
    const message = `Olá Pedro! Meu nome é ${formData.name} e acabei de preencher meus dados na página da Elite Capital. ${cpfCnpj}. Gostaria de saber mais sobre as opções de crédito disponíveis.`;
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
            <div>
              <Label htmlFor="name">Nome Completo *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Seu nome completo"
                className={`mt-1 ${errors.name ? 'border-red-500' : ''}`}
                required
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <Label htmlFor="cpf">CPF *</Label>
              <Input
                id="cpf"
                value={formData.cpf}
                onChange={(e) => handleInputChange('cpf', e.target.value)}
                placeholder="000.000.000-00"
                className={`mt-1 ${errors.cpf ? 'border-red-500' : ''}`}
                required
              />
              {errors.cpf && <p className="text-red-500 text-sm mt-1">{errors.cpf}</p>}
            </div>

            <div>
              <Label htmlFor="cnpj">CNPJ (opcional - se for pela empresa)</Label>
              <Input
                id="cnpj"
                value={formData.cnpj}
                onChange={(e) => handleInputChange('cnpj', e.target.value)}
                placeholder="00.000.000/0000-00"
                className={`mt-1 ${errors.cnpj ? 'border-red-500' : ''}`}
              />
              {errors.cnpj && <p className="text-red-500 text-sm mt-1">{errors.cnpj}</p>}
            </div>

            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="seu.email@exemplo.com"
                className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <Label htmlFor="phone">Telefone/WhatsApp *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="(11) 99999-9999"
                className={`mt-1 ${errors.phone ? 'border-red-500' : ''}`}
                required
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
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
