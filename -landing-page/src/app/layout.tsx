import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "NEX - Loja Online",
  description: "Descubra os melhores produtos com qualidade e preço justo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900">
        <Header /> {/* Vai aparecer em todas as páginas */}
        {children} {/* Aqui entra o conteúdo da página */}
      </body>
    </html>
  );
}
