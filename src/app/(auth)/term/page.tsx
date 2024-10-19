'use client';

import React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { User, BarChart, Package, CreditCard, FileText } from 'lucide-react';
import { ContentLayout } from '@/components/admin-panel/content-layout';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [step, setStep] = useState(1);

  const [data, setData] = useState({
    cliente: {
      isValid: true
    },
    produto: {
      isValid: true
    },
    pagamento: {
      isValid: true
    },
    termo: {
      isValid: true
    }
  });

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const steps = [
    { id: 1, label: 'Cliente', icon: <User /> },
    { id: 2, label: 'Análises', icon: <BarChart /> },
    { id: 3, label: 'Produtos', icon: <Package /> },
    { id: 4, label: 'Pagamento', icon: <CreditCard /> },
    { id: 5, label: 'Termo', icon: <FileText /> },
  ];

  const variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 10 },
  };

  return (
    <ContentLayout title="Termo">
      <div className="mx-auto p-6 space-y-6">
        <Card className="p-4 rounded-full shadow-md flex items-center overflow-hidden justify-between overflow-x-auto">
          {steps.map((s, index) => (
            <React.Fragment key={s.id}>
              <div className="flex items-center gap-2 mb-0 min-w-[150px]" onClick={() => {
                step > s.id ? setStep(s.id) : null;
              }}>
                <div
                  className={`flex items-center justify-center p-3 rounded-full transition-all duration-300 ${step >= s.id
                    ? 'bg-orange-600 text-white border border-white'
                    : 'dark:bg-white text-gray-600 border border-gray-300'
                    }`}
                >
                  {s.icon}
                </div>
                <div>
                  <span className="text-xs text-gray-500 dark:text-gray-300">
                    Etapa {s.id}/{steps.length}
                  </span>

                  <span
                    className={`block text-sm font-medium dark:text-white ${step >= s.id ? 'text-black' : 'text-gray-600'
                      }`}
                  >
                    {s.label}
                  </span>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block mx-4 h-10 border-r border-gray-300"></div>
              )}
            </React.Fragment>
          ))}
        </Card>

        {/* Form */}
        <Card className="p-6 shadow-md">
          <motion.div
            key={step}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            {step === 1 && (
              <>
                <h2 className="text-lg font-semibold mb-1">
                  Informações do Cliente
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  Por favor, preencha os campos abaixo com seus detalhes de contato.
                </p>
                <form>
                  <div className="mb-4">
                    <Label htmlFor="cpf" className="block text-sm font-medium">
                      CPF, CNPJ ou Passaporte
                    </Label>
                    <Input
                      type="text"
                      id="cpf"
                      placeholder="000.000.000-00"
                      className="mt-1"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
                    <div>
                      <Label
                        htmlFor="firstName"
                        className="tracking-tight text-sm font-medium"
                      >
                        Nome completo
                      </Label>
                      <Input
                        type="text"
                        id="firstName"
                        placeholder="John"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="dob" className="tracking-tight text-sm font-medium">
                        Data de Nascimento
                      </Label>
                      <Input type="date" id="dob" className="mt-1" />
                    </div>
                  </div>

                  {/* <div className="mb-4">

                  </div>

                  <div className="mb-4">
                    <Label htmlFor="email" className="block text-sm font-medium">
                      Email
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="johnvario@example.com"
                      className="mt-1"
                    />
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="address" className="block text-sm font-medium">
                      Address
                    </Label>
                    <Input
                      type="text"
                      id="address"
                      placeholder="Sydney, Australia, 2000"
                      className="mt-1"
                    />
                  </div> */}
                </form>
                {/* Botões de Navegação */}
                <div className="flex justify-end mt-6">
                  <Button onClick={handleNext}>
                    Próximo
                  </Button>
                </div>

              </>
            )}

            {step === 2 && (
              <>
                {/* Conteúdo da etapa 2 */}
                <h2 className="text-lg font-semibold mb-1">Análises</h2>
                <p className="text-sm text-gray-500 mb-6">
                  Detalhes sobre as análises necessárias.
                </p>
                <div className="flex justify-between mt-6">
                  <Button variant="secondary" onClick={handleBack}>
                    Voltar
                  </Button>

                  <Button onClick={handleNext}>
                    Próximo
                  </Button>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h2 className="text-lg font-semibold mb-1">Produtos</h2>
                <p className="text-sm text-gray-500 mb-6">
                  Selecione os produtos desejados.
                </p>
                <div className="flex justify-between mt-6">
                  <Button variant="secondary" onClick={handleBack}>
                    Voltar
                  </Button>

                  <Button onClick={handleNext}>
                    Próximo
                  </Button>
                </div>

              </>
            )}

            {step === 4 && (
              <>
                <h2 className="text-lg font-semibold mb-1">Pagamento</h2>
                <p className="text-sm text-gray-500 mb-6">
                  Informações sobre o pagamento.
                </p>
                <div className="flex justify-between mt-6">
                  <Button variant="secondary" onClick={handleBack}>
                    Voltar
                  </Button>

                  <Button onClick={handleNext}>
                    Próximo
                  </Button>
                </div>

              </>
            )}

            {step === 5 && (
              <>
                <h2 className="text-xl font-semibold mb-4">Completed</h2>
                <p className="text-sm text-gray-500 mb-6">
                  You have successfully completed the form.
                </p>
                <div className="text-center">
                  <p className="text-sm">Thank you for your submission!</p>
                </div>
                <div className="flex justify-between mt-6">
                  <Button variant="secondary" onClick={handleBack}>
                    Voltar
                  </Button>

                  <Button onClick={handleNext}>
                    Próximo
                  </Button>
                </div>
              </>
            )}
          </motion.div>


        </Card>
      </div>
    </ContentLayout>
  );
}
