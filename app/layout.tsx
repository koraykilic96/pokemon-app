import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderMenu from "./pages/components/HeaderMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PokeApp",
  description: "PokeApp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{minHeight: '100vh', height:'100%'}} className={inter.className} >
       <HeaderMenu/>
        {children}
        </body>
    </html>
  );
}
