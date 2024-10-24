"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, CheckCheck, Unlock } from "lucide-react"; 
import { Input } from "@/components/ui/input";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Navbar } from "@/components/admin-panel/navbar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import dynamic from 'next/dynamic';

const Comentario = dynamic(() => import('./comentario/page'));
const Compra = dynamic(() => import('./compra/page'));
const Venda = dynamic(() => import('./vendas/page'));
const Whatsapp = dynamic(() => import('./whatsapp/page'));
const Idwall = dynamic(() => import('./idwall/page'));

const getInitials = (name: string) => {
  const nameParts = name.split(' ');
  const initials = nameParts[0][0] + (nameParts[1] ? nameParts[1][0] : '');
  return initials.toUpperCase();
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const cards = [
    { id: '1', client: 'João Silva', evaluator: 'Carlos Pereira', time: '16:40', approved: true },
    { id: '2', client: 'Maria Souza', evaluator: 'Ana Mendes', time: '16:40', approved: false },
    { id: '3', client: 'Pedro Oliveira', evaluator: 'Roberto Lopes', time: '16:40', approved: true },
    { id: '4', client: 'Pedro Oliveira', evaluator: 'Roberto Lopes', time: '16:40', approved: true },
    { id: '5', client: 'Pedro Oliveira', evaluator: 'Roberto Lopes', time: '16:40', approved: true },
    { id: '6', client: 'Pedro Oliveira', evaluator: 'Roberto Lopes', time: '16:40', approved: true },
    { id: '7', client: 'Pedro Oliveira', evaluator: 'Roberto Lopes', time: '16:40', approved: true },
    { id: '8', client: 'Pedro Oliveira', evaluator: 'Roberto Lopes', time: '16:40', approved: true },
    { id: '9', client: 'Pedro Oliveira', evaluator: 'Roberto Lopes', time: '16:40', approved: true },
    { id: '10', client: 'Pedro Oliveira', evaluator: 'Roberto Lopes', time: '16:40', approved: true },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const filteredCards = cards.filter((card) =>
    card.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const cardSkeleton = (
    <Card className="w-full h-20 flex items-center p-2 gap-2 border-l-lime-500 border-2">
      <Skeleton className="w-10 h-10 rounded-full" />
      <div className="flex-1">
        <Skeleton className="h-5 w-32 mb-2" />
        <Skeleton className="h-4 w-40" />
      </div>
      <Skeleton className="w-10 h-4" />
    </Card>
  );

  const handleCardClick = (id: string) => {
    setSelectedTab('comentario');
    setSelectedId(id);
  };

  const isCardSelected = (id: string) => selectedId === id;

  return (
    <div className="grid grid-cols-12 gap-4 h-screen overflow-hidden container">
      <div className="sm:col-span-5 lg:col-span-3 col-span-5 py-1 h-screen">
        <div className="flex flex-col gap-2 h-screen">
          <div className="relative h-9">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search"
              className="pl-8 bg-white dark:bg-black focus-visible:outline-none focus-visible:ring-0"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 overflow-y-auto max-h-full custom-scrollbar">
            <div className="flex flex-col gap-2">
              {isLoading ? (
                <>
                  {cardSkeleton}
                  {cardSkeleton}
                  {cardSkeleton}
                  {cardSkeleton}
                  {cardSkeleton}
                </>
              ) : (
                <>
                  {filteredCards.length > 0 ? (
                    filteredCards.map((card) => (
                      <Card
                        key={card.id}
                        onClick={() => handleCardClick(card.id)}
                        className={`w-full h-20 flex items-center p-2 gap-2 border-2 cursor-pointer ${isCardSelected(card.id)
                          ? card.approved
                            ? 'border-l-green-500 bg-slate-100 dark:bg-gray-900'
                            : 'border-l-zinc-700 bg-slate-100 dark:bg-gray-900'
                          : card.approved
                            ? 'border-l-green-500'
                            : 'border-l-zinc-700'
                          }`}
                      >
                        <Avatar>
                          <AvatarImage src="#" />
                          <AvatarFallback className="bg-black text-white">
                            {getInitials(card.client)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <CardTitle className="font-size text-sm">{card.client}</CardTitle>
                          <CardDescription>{card.evaluator}</CardDescription>
                        </div>
                        <div className="w-10 flex flex-col justify-center items-end">
                          <CardTitle className="text-xs">{card.time}</CardTitle>
                          {card.approved && (
                            <CheckCheck size={20} className="text-green-500" />
                          )}
                        </div>
                      </Card>
                    ))
                  ) : (
                    <p className="text-center text-gray-600 dark:text-gray-400">
                      Nenhum card encontrado.
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Card className="lg:col-span-6 sm:col-span-7 col-span-7 rounded-none relative h-screen flex flex-col">
        <Navbar title={'Orit'} />

        <main className="flex flex-1 flex-col p-4">
          {selectedTab ? (
            <Tabs defaultValue={selectedTab} className="mt-0 flex flex-col flex-grow">
              <TabsList className="flex justify-start overflow-hidden">
                <TabsTrigger value="comentario">Comentários</TabsTrigger>
                <TabsTrigger value="idwall">Análise</TabsTrigger>
                <TabsTrigger value="compra">Compra</TabsTrigger>
                <TabsTrigger value="venda">Venda</TabsTrigger>
                <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>

                {selectedId && !cards.find(card => card.id === selectedId)?.approved && (
                  <Button className="ml-auto p-2">
                    <Unlock size={20} /> {/* Ícone Unlock */}
                  </Button>
                )}
              </TabsList>
              <TabsContent value="comentario" className="flex flex-grow flex-col">
                <Comentario id={selectedId || ''} />
              </TabsContent>
              <TabsContent value="idwall" className="h-full">
                <Idwall id={selectedId || ''} />
              </TabsContent>
              <TabsContent value="venda" className="h-full">
                <Venda id={selectedId || ''} />
              </TabsContent>
              <TabsContent value="compra" className="h-full">
                <Compra id={selectedId || ''} />
              </TabsContent>
              <TabsContent value="whatsapp" className="h-full">
                <Whatsapp id={selectedId || ''} />
              </TabsContent>
            </Tabs>
          ) : (
            <div className="flex flex-col justify-center items-center h-full space-y-4">
              <div className="flex justify-center items-center w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full">
                <Search className="h-8 w-8 text-gray-600 dark:text-gray-400" />
              </div>
              <h1 className="text-xl font-medium text-gray-800 dark:text-gray-100">
                Selecione um card
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center max-w-xs">
                Por favor, escolha um card à esquerda para visualizar o conteúdo aqui.
              </p>
            </div>
          )}
        </main>

      </Card>

      <Card className="col-span-3 hidden sm:hidden lg:block rounded-none">
        content cliente
      </Card>
    </div>
  );
}
