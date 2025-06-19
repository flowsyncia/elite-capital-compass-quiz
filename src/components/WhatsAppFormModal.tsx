

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

  const sendToWebhook = async (data: any) => {
    try {
      await fetch('https://n8nwebhook.flowsyncia.online/webhook/dados_quizz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify(data),
      });
      console.log('Dados enviados para webhook:', data);
    } catch (error) {
      console.error('Erro ao enviar dados para webhook:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.cpf || !formData.email || !formData.phone) {
      return;
    }

    const webhookData = {
      Nome: formData.name,
      CPF: formData.cpf,
      Email: formData.email,
      WhatsApp: formData.phone,
      Income: '',
      Amount: '',
      Objective: '',
      "Income Range": '',
      "Amount Desired": '',
      Guarantee: '',
      Urgency: '',
      "Contact Preference": 'WhatsApp',
      Timestamp: new Date().toISOString(),
      Type: 'whatsapp_direct_contact'
    };

    await sendToWebhook(webhookData);

    const message = `Olá Pedro! Meu nome é ${formData.name}, CPF ${formData.cpf}. Acabei de ver o site e quero saber mais sobre as opções de crédito.`;
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

