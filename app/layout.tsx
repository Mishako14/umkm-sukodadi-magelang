import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://umkm-sukodadi-magelang.vercel.app"),

  title: {
    default: "UMKM Desa Sukodadi | Digitalisasi UMKM",
    template: "%s | UMKM Desa Sukodadi",
  },

  description:
    "Website resmi UMKM Desa Sukodadi, Kabupaten Magelang. Menyediakan informasi produk unggulan, kerajinan, kuliner, dan kontak pelaku usaha.",

  keywords: [
    "UMKM Desa Sukodadi",
    "UMKM Sukodadi",
    "UMKM Magelang",
    "Produk Desa Sukodadi",
    "Kerajinan Bambu",
    "Besek Sukodadi",
    "Kuliner Sukodadi",
    "Digitalisasi UMKM",
    "KKN UNNES",
  ],

  authors: [
    {
      name: "KKN GIAT 16 Universitas Negeri Semarang",
    },
  ],

  creator: "KKN GIAT 16 UNNES",

  openGraph: {
    title: "UMKM Desa Sukodadi",
    description:
      "Temukan berbagai produk unggulan UMKM Desa Sukodadi Kabupaten Magelang.",
    url: "https://umkm-sukodadi-magelang.vercel.app",
    siteName: "UMKM Desa Sukodadi",
    locale: "id_ID",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2500,
          }}
        />
      </body>
    </html>
  );
}