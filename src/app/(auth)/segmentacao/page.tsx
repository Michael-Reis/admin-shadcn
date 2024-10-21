"use client"

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, CheckCheck, Link } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import PlaceholderContent from "@/components/demo/placeholder-content";
import { Navbar } from "@/components/admin-panel/navbar";
import { Button } from "@/components/ui/button";

export default function CategoriesPage() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulando o carregamento de 10 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    return () => clearTimeout(timer); // Limpa o timer ao desmontar
  }, []);

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

  return (
    <div className="grid grid-cols-12 gap-2 h-screen overflow-hidden container">
      <div className="grid col-span-5 sm:col-span-5 lg:col-span-3 p-1 h-screen">
        <div className="flex flex-col gap-2 h-screen">
          <div className="relative h-9">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search" className="pl-8 focus-visible:outline-none focus-visible:ring-0 bg-white " />
          </div>
          <div className="flex flex-col gap-2 overflow-y-auto max-h-full custom-scrollbar">
            <div className="flex flex-col gap-2">
              {isLoading ? (
                // Renderizando skeletons enquanto carrega
                <>
                  {cardSkeleton}
                  {cardSkeleton}
                  {cardSkeleton}
                  {cardSkeleton}
                  {cardSkeleton}
                </>
              ) : (
                // Conteúdo dos cards carregado
                <>
                  <Card className="w-full h-20 flex items-center p-2 gap-2 border-l-lime-500 border-2">
                    <Avatar>
                      <AvatarImage src="#" />
                      <AvatarFallback className="bg-black text-white">MR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="font-size text-sm">Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </div>
                    <div className="w-10 flex flex-col justify-center items-end">
                      <CardTitle className="text-xs">16:40</CardTitle>
                      <CheckCheck size={20} className="text-lime-500" />
                    </div>
                  </Card>
                  <Card className="w-full h-20 flex items-center p-2 gap-2 border-l-lime-500 border-2">
                    <Avatar>
                      <AvatarImage src="#" />
                      <AvatarFallback className="bg-black text-white">MR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="font-size text-sm">Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </div>
                    <div className="w-10 flex flex-col justify-center items-end">
                      <CardTitle className="text-xs">16:40</CardTitle>
                      <CheckCheck size={20} className="text-lime-500" />
                    </div>
                  </Card>
                  <Card className="w-full h-20 flex items-center p-2 gap-2 border-l-lime-500 border-2">
                    <Avatar>
                      <AvatarImage src="#" />
                      <AvatarFallback className="bg-black text-white">MR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="font-size text-sm">Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </div>
                    <div className="w-10 flex flex-col justify-center items-end">
                      <CardTitle className="text-xs">16:40</CardTitle>
                      <CheckCheck size={20} className="text-lime-500" />
                    </div>
                  </Card>
                  <Card className="w-full h-20 flex items-center p-2 gap-2 border-l-lime-500 border-2">
                    <Avatar>
                      <AvatarImage src="#" />
                      <AvatarFallback className="bg-black text-white">MR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="font-size text-sm">Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </div>
                    <div className="w-10 flex flex-col justify-center items-end">
                      <CardTitle className="text-xs">16:40</CardTitle>
                      <CheckCheck size={20} className="text-lime-500" />
                    </div>
                  </Card>
                  <Card className="w-full h-20 flex items-center p-2 gap-2 border-l-lime-500 border-2">
                    <Avatar>
                      <AvatarImage src="#" />
                      <AvatarFallback className="bg-black text-white">MR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="font-size text-sm">Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </div>
                    <div className="w-10 flex flex-col justify-center items-end">
                      <CardTitle className="text-xs">16:40</CardTitle>
                      <CheckCheck size={20} className="text-lime-500" />
                    </div>
                  </Card>
                  <Card className="w-full h-20 flex items-center p-2 gap-2 border-l-lime-500 border-2">
                    <Avatar>
                      <AvatarImage src="#" />
                      <AvatarFallback className="bg-black text-white">MR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="font-size text-sm">Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </div>
                    <div className="w-10 flex flex-col justify-center items-end">
                      <CardTitle className="text-xs">16:40</CardTitle>
                      <CheckCheck size={20} className="text-lime-500" />
                    </div>
                  </Card>
                  <Card className="w-full h-20 flex items-center p-2 gap-2 border-l-lime-500 border-2">
                    <Avatar>
                      <AvatarImage src="#" />
                      <AvatarFallback className="bg-black text-white">MR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="font-size text-sm">Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </div>
                    <div className="w-10 flex flex-col justify-center items-end">
                      <CardTitle className="text-xs">16:40</CardTitle>
                      <CheckCheck size={20} className="text-lime-500" />
                    </div>
                  </Card>
                  <Card className="w-full h-20 flex items-center p-2 gap-2 border-l-lime-500 border-2">
                    <Avatar>
                      <AvatarImage src="#" />
                      <AvatarFallback className="bg-black text-white">MR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="font-size text-sm">Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </div>
                    <div className="w-10 flex flex-col justify-center items-end">
                      <CardTitle className="text-xs">16:40</CardTitle>
                      <CheckCheck size={20} className="text-lime-500" />
                    </div>
                  </Card>
                  <Card className="w-full h-20 flex items-center p-2 gap-2 border-l-lime-500 border-2">
                    <Avatar>
                      <AvatarImage src="#" />
                      <AvatarFallback className="bg-black text-white">MR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="font-size text-sm">Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </div>
                    <div className="w-10 flex flex-col justify-center items-end">
                      <CardTitle className="text-xs">16:40</CardTitle>
                      <CheckCheck size={20} className="text-lime-500" />
                    </div>
                  </Card>
                  <Card className="w-full h-20 flex items-center p-2 gap-2 border-l-lime-500 border-2">
                    <Avatar>
                      <AvatarImage src="#" />
                      <AvatarFallback className="bg-black text-white">MR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="font-size text-sm">Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </div>
                    <div className="w-10 flex flex-col justify-center items-end">
                      <CardTitle className="text-xs">16:40</CardTitle>
                      <CheckCheck size={20} className="text-lime-500" />
                    </div>
                  </Card>
                  <Card className="w-full h-20 flex items-center p-2 gap-2 border-l-lime-500 border-2">
                    <Avatar>
                      <AvatarImage src="#" />
                      <AvatarFallback className="bg-black text-white">MR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="font-size text-sm">Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </div>
                    <div className="w-10 flex flex-col justify-center items-end">
                      <CardTitle className="text-xs">16:40</CardTitle>
                      <CheckCheck size={20} className="text-lime-500" />
                    </div>
                  </Card>
                  <Card className="w-full h-20 flex items-center p-2 gap-2 border-l-lime-500 border-2">
                    <Avatar>
                      <AvatarImage src="#" />
                      <AvatarFallback className="bg-black text-white">MR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="font-size text-sm">Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </div>
                    <div className="w-10 flex flex-col justify-center items-end">
                      <CardTitle className="text-xs">16:40</CardTitle>
                      <CheckCheck size={20} className="text-lime-500" />
                    </div>
                  </Card>
                  <Card className="w-full h-20 flex items-center p-2 gap-2 border-l-lime-500 border-2">
                    <Avatar>
                      <AvatarImage src="#" />
                      <AvatarFallback className="bg-black text-white">MR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="font-size text-sm">Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </div>
                    <div className="w-10 flex flex-col justify-center items-end">
                      <CardTitle className="text-xs">16:40</CardTitle>
                      <CheckCheck size={20} className="text-lime-500" />
                    </div>
                  </Card>
                  <Card className="w-full h-20 flex items-center p-2 gap-2 border-l-lime-500 border-2">
                    <Avatar>
                      <AvatarImage src="#" />
                      <AvatarFallback className="bg-black text-white">MR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="font-size text-sm">Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </div>
                    <div className="w-10 flex flex-col justify-center items-end">
                      <CardTitle className="text-xs">16:40</CardTitle>
                      <CheckCheck size={20} className="text-lime-500" />
                    </div>
                  </Card>
                  <Card className="w-full h-20 flex items-center p-2 gap-2 border-l-lime-500 border-2">
                    <Avatar>
                      <AvatarImage src="#" />
                      <AvatarFallback className="bg-black text-white">MR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="font-size text-sm">Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </div>
                    <div className="w-10 flex flex-col justify-center items-end">
                      <CardTitle className="text-xs">16:40</CardTitle>
                      <CheckCheck size={20} className="text-lime-500" />
                    </div>
                  </Card>
                  <Card className="w-full h-20 flex items-center p-2 gap-2 border-l-lime-500 border-2">
                    <Avatar>
                      <AvatarImage src="#" />
                      <AvatarFallback className="bg-black text-white">MR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="font-size text-sm">Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </div>
                    <div className="w-10 flex flex-col justify-center items-end">
                      <CardTitle className="text-xs">16:40</CardTitle>
                      <CheckCheck size={20} className="text-lime-500" />
                    </div>
                  </Card>
                  <Card className="w-full h-20 flex items-center p-2 gap-2 border-l-lime-500 border-2">
                    <Avatar>
                      <AvatarImage src="#" />
                      <AvatarFallback className="bg-black text-white">MR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="font-size text-sm">Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </div>
                    <div className="w-10 flex flex-col justify-center items-end">
                      <CardTitle className="text-xs">16:40</CardTitle>
                      <CheckCheck size={20} className="text-lime-500" />
                    </div>
                  </Card>
                  <Card className="w-full h-20 flex items-center p-2 gap-2 border-l-lime-500 border-2">
                    <Avatar>
                      <AvatarImage src="#" />
                      <AvatarFallback className="bg-black text-white">MR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="font-size text-sm">Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </div>
                    <div className="w-10 flex flex-col justify-center items-end">
                      <CardTitle className="text-xs">16:40</CardTitle>
                      <CheckCheck size={20} className="text-lime-500" />
                    </div>
                  </Card>
                  <Card className="w-full h-20 flex items-center p-2 gap-2 border-l-lime-500 border-2">
                    <Avatar>
                      <AvatarImage src="#" />
                      <AvatarFallback className="bg-black text-white">MR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="font-size text-sm">Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </div>
                    <div className="w-10 flex flex-col justify-center items-end">
                      <CardTitle className="text-xs">16:40</CardTitle>
                      <CheckCheck size={20} className="text-lime-500" />
                    </div>
                  </Card>
                  <Card className="w-full h-20 flex items-center p-2 gap-2 border-l-lime-500 border-2">
                    <Avatar>
                      <AvatarImage src="#" />
                      <AvatarFallback className="bg-black text-white">MR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="font-size text-sm">Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </div>
                    <div className="w-10 flex flex-col justify-center items-end">
                      <CardTitle className="text-xs">16:40</CardTitle>
                      <CheckCheck size={20} className="text-lime-500" />
                    </div>
                  </Card>
                  <Card className="w-full h-20 flex items-center p-2 gap-2 border-l-lime-500 border-2">
                    <Avatar>
                      <AvatarImage src="#" />
                      <AvatarFallback className="bg-black text-white">MR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="font-size text-sm">Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </div>
                    <div className="w-10 flex flex-col justify-center items-end">
                      <CardTitle className="text-xs">16:40</CardTitle>
                      <CheckCheck size={20} className="text-lime-500" />
                    </div>
                  </Card>
                  <Card className="w-full h-20 flex items-center p-2 gap-2 border-l-lime-500 border-2">
                    <Avatar>
                      <AvatarImage src="#" />
                      <AvatarFallback className="bg-black text-white">MR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="font-size text-sm">Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </div>
                    <div className="w-10 flex flex-col justify-center items-end">
                      <CardTitle className="text-xs">16:40</CardTitle>
                      <CheckCheck size={20} className="text-lime-500" />
                    </div>
                  </Card>
                  {/* Repita mais cards conforme necessário */}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Card className=" col-span-7 bg-white rounded-none">
        <Navbar title={'Orit'} />
            
        <Button className="w-full">LIBERAR CLIENTE</Button>
      </Card>
      <Card className=" col-span-2 hidden sm:hidden lg:block rounded-none"></Card>
    </div>

  );
}
