import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Poppins, Roboto_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Font judul: sans-serif grotesque yang lebih berkarakter, dipasangkan dengan Poppins untuk teks isi
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pilar Sistem — Jasa Pembuatan Website & Sistem Kustom",
    template: "%s · Pilar Sistem",
  },
  description:
    "Pilar Sistem membantu bisnis Anda tumbuh lewat website, landing page, toko online, dan sistem kustom yang cepat, rapi, dan siap berkembang.",
  keywords: [
    "jasa pembuatan website",
    "jasa website",
    "landing page",
    "company profile",
    "toko online",
    "aplikasi web",
    "sistem kustom",
    "Pilar Sistem",
  ],
  openGraph: {
    title: "Pilar Sistem — Jasa Pembuatan Website & Sistem Kustom",
    description:
      "Website, landing page, toko online, dan sistem kustom untuk bisnis yang ingin tumbuh.",
    siteName: "Pilar Sistem",
    locale: "id_ID",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1122",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className={`${poppins.variable} ${bricolage.variable} ${robotoMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen overflow-x-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
