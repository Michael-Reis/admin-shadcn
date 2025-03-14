"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const description =
  "A login page with two columns. The first column has the login form with email and password. There's a Forgot your password link and a link to sign up if you do not have an account. The second column has a cover image.";

export default function HomePage() {
  const router = useRouter(); // Hook para redirecionar

  const handleLogin = () => {
    router.push("/dashboard"); // Redireciona para a dashboard ao clicar
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center lg:grid lg:min-h-[600px] lg:grid-cols-2 ">
      <div className="flex items-center justify-center">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Entre com seu email para acessar sua conta
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Esqueceu sua senha?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button
              type="button"
              className="w-full"
              onClick={handleLogin} // Redireciona ao clicar no botão
            >
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login com o Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Você não tem uma conta?{" "}
            <Link href="#" className="underline">
              Registre-se
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted object-contain lg:block relative">
        <video
          src="/home/login.mp4"
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-40 flex flex-col text-white p-8 gap-5">
          <h2 className="text-4xl font-bold">A Verdade por Trás do Brilho</h2>
          <div className="flex">
            <div className="border-l-4 border-white mr-4 rounded-sm"></div>
            <p className="leading-relaxed">
              No mundo das joias, cada peça tem uma história. O <strong>Orithub</strong> ajuda a garantir que essa história seja legítima. Nossa análise de risco verifica a procedência e o poder aquisitivo do cliente, assegurando transações confiáveis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
