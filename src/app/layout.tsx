import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SideBar } from "@/components/sideBar/sideBar";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DashBoard de Vendas",
  description:
    "Aplicação desenvolvida para fins de estudo da ferramenta Next.js",
  icons: "favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} antialiased`}>
        <div className="flex h-full">
          <SideBar />
          {children}
        </div>
      </body>
    </html>
  );
}
