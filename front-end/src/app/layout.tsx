import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Softmoda",
  description: "Seu gerenciador de loja de roupa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <div className="flex flex-col justify-center items-center h-20 bg-primary">
          <h1 className="text-background text-5xl">SOFTMODA</h1>
        </div>
        {children}
      </body>
    </html>
  );
}
