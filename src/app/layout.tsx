import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arhan Yüzme Akademisi | Profesyonel Yüzme Eğitimi İstanbul",
  description: "İstanbul'da profesyonel yüzme eğitimi ve kursları. Çocuklar ve yetişkinler için özel yüzme programları. Tecrübeli eğitmenlerle güvenli öğrenme ortamı.",
  keywords: [
    "yüzme akademisi",
    "yüzme kursu",
    "yüzme eğitimi",
    "İstanbul yüzme",
    "çocuk yüzme",
    "yetişkin yüzme",
    "profesyonel yüzme",
    "yüzme antrenörü",
    "yüzme dersleri"
  ],
  authors: [{ name: "Arhan Yüzme Akademisi" }],
  creator: "Arhan Yüzme Akademisi",
  publisher: "Arhan Yüzme Akademisi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  alternates: {
    canonical: "https://www.arhanyuzmeakademisi.com",
  },
  other: {
    "sitemap": "https://www.arhanyuzmeakademisi.com/sitemap.xml",
  },
  openGraph: {
    title: "Arhan Yüzme Akademisi | Profesyonel Yüzme Eğitimi İstanbul",
    description: "İstanbul'da profesyonel yüzme eğitimi ve kursları. Çocuklar ve yetişkinler için özel yüzme programları. Tecrübeli eğitmenlerle güvenli öğrenme ortamı.",
    url: "https://www.arhanyuzmeakademisi.com",
    siteName: "Arhan Yüzme Akademisi",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Arhan Yüzme Akademisi Logo",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arhan Yüzme Akademisi | Profesyonel Yüzme Eğitimi İstanbul",
    description: "İstanbul'da profesyonel yüzme eğitimi ve kursları. Çocuklar ve yetişkinler için özel yüzme programları.",
    images: ["/images/logo.jpg"],
  },
  icons: {
    icon: '/favicon.ico',
  },
  verification: {
    google: "Q0KJmYE3W7xTDaS842HLHMJSf6zBXGvHB30timnYdDg",
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
