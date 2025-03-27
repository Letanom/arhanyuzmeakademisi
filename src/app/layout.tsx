import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arhan Yüzme Akademisi",
  description: "Profesyonel yüzme eğitimi ve kursları",
  icons: {
    icon: '/logo.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth w-full">
      <body className={`${inter.className} w-full m-0 p-0 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
