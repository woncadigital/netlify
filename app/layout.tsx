import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dica de sites para rastreamento Correios",
  description: "Encontre aqui os melhores sites para rastreamento Correios",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 mt-5 md:mt-32`}>
        <div className="container mx-auto px-6 max-w-screen-xl">{children}</div>
      </body>
    </html>
  );
}
