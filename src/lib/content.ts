import {
  Blocks,
  Gauge,
  Globe,
  LayoutDashboard,
  MessagesSquare,
  MousePointerClick,
  PenTool,
  ServerCog,
  ShoppingCart,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "Pilar Sistem",
  // Nomor WhatsApp (format internasional, tanpa "+" / "0" di depan)
  whatsapp: "6289669643272",
  // Pesan template untuk semua tombol pemesanan / konsultasi
  message: "Hallo saya ingin konsultasi dengan pilar sistem",
};

export function whatsappUrl(message: string = site.message) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const navItems = [
  { href: "#layanan", label: "Layanan" },
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#proses", label: "Proses" },
  { href: "#paket", label: "Paket" },
  { href: "#faq", label: "FAQ" },
];

export const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Figma",
  "Vercel",
];

export type VisualKind =
  | "profile"
  | "landing"
  | "shop"
  | "dashboard"
  | "mobile"
  | "design"
  | "seo"
  | "hosting";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
  visual: VisualKind;
};

export const services: Service[] = [
  {
    icon: Globe,
    title: "Website Company Profile",
    tag: "Website",
    visual: "profile",
    description:
      "Wajah digital yang meyakinkan untuk bisnis Anda — profesional, cepat, dan mudah ditemukan di Google.",
  },
  {
    icon: MousePointerClick,
    title: "Landing Page",
    tag: "Konversi",
    visual: "landing",
    description:
      "Satu halaman yang fokus pada satu tujuan: mengubah pengunjung menjadi pelanggan atau calon klien.",
  },
  {
    icon: ShoppingCart,
    title: "Toko Online",
    tag: "E-commerce",
    visual: "shop",
    description:
      "Etalase digital lengkap dengan katalog, keranjang, dan alur pemesanan yang memudahkan pembeli.",
  },
  {
    icon: LayoutDashboard,
    title: "Aplikasi Web & Dashboard",
    tag: "Sistem",
    visual: "dashboard",
    description:
      "Sistem internal seperti kasir, inventori, booking, hingga dashboard laporan sesuai alur kerja Anda.",
  },
  {
    icon: Smartphone,
    title: "Aplikasi Mobile",
    tag: "Mobile",
    visual: "mobile",
    description:
      "Aplikasi yang nyaman dipakai di genggaman, terhubung dengan sistem dan data bisnis Anda.",
  },
  {
    icon: PenTool,
    title: "Desain UI/UX",
    tag: "Desain",
    visual: "design",
    description:
      "Antarmuka yang enak dilihat dan mudah dipahami, dirancang berdasarkan cara pengguna Anda bekerja.",
  },
  {
    icon: Gauge,
    title: "Optimasi SEO & Performa",
    tag: "SEO",
    visual: "seo",
    description:
      "Struktur, kecepatan, dan metadata yang dioptimalkan agar website unggul di pencarian.",
  },
  {
    icon: ServerCog,
    title: "Hosting & Maintenance",
    tag: "Support",
    visual: "hosting",
    description:
      "Kami bantu urus domain, hosting, backup, dan pembaruan supaya website Anda selalu sehat.",
  },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
};

export const features: Feature[] = [
  {
    icon: Blocks,
    title: "Dibangun custom, bukan template",
    description:
      "Setiap baris kode ditulis sesuai kebutuhan bisnis Anda. Tidak ada fitur berlebih yang memberatkan, tidak ada batasan template yang menghambat.",
    className: "lg:col-span-2",
  },
  {
    icon: Smartphone,
    title: "Responsif di semua layar",
    description:
      "Tampil rapi dan nyaman dari ponsel, tablet, hingga layar desktop lebar.",
  },
  {
    icon: Gauge,
    title: "Cepat & ramah SEO",
    description:
      "Dibangun dengan teknologi modern agar ringan dimuat dan mudah dibaca mesin pencari.",
  },
  {
    icon: MessagesSquare,
    title: "Komunikasi transparan",
    description:
      "Progres jelas, revisi terarah, dan Anda selalu tahu sampai mana pekerjaan berjalan.",
  },
  {
    icon: Sparkles,
    title: "Dukungan setelah rilis",
    description:
      "Kami tidak menghilang setelah launching. Ada bantuan perawatan dan pengembangan lanjutan.",
  },
];

export type Step = {
  title: string;
  description: string;
};

export const steps: Step[] = [
  {
    title: "Konsultasi",
    description:
      "Kami dengarkan kebutuhan, target, dan anggaran Anda, lalu menyusun ruang lingkup yang jelas.",
  },
  {
    title: "Desain",
    description:
      "Rancangan tampilan dan alur pengguna dibuat dan disepakati bersama sebelum pengembangan dimulai.",
  },
  {
    title: "Pengembangan",
    description:
      "Desain diwujudkan menjadi produk yang berfungsi, dengan pembaruan berkala agar Anda bisa memantau.",
  },
  {
    title: "Peluncuran & Support",
    description:
      "Pengujian akhir, peluncuran ke publik, dan pendampingan agar semuanya berjalan mulus.",
  },
];

export type Plan = {
  name: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Landing Page",
    tagline: "Untuk promosi, kampanye, atau peluncuran produk.",
    features: [
      "Satu halaman fokus konversi",
      "Desain custom & responsif",
      "Tombol WhatsApp / formulir kontak",
      "Dasar optimasi SEO",
      "Revisi terarah",
    ],
  },
  {
    name: "Website Bisnis",
    tagline: "Untuk bisnis yang butuh kehadiran online yang utuh.",
    features: [
      "Multi halaman (profil, layanan, kontak, dll.)",
      "Desain custom & animasi halus",
      "Optimasi SEO & kecepatan",
      "Integrasi WhatsApp, peta, dan media sosial",
      "Panduan penggunaan & dukungan awal",
    ],
    highlighted: true,
  },
  {
    name: "Sistem Kustom",
    tagline: "Untuk kebutuhan yang tidak bisa dijawab template.",
    features: [
      "Analisis alur kerja bisnis",
      "Dashboard, autentikasi & manajemen data",
      "Fitur sesuai kebutuhan (kasir, inventori, booking, dll.)",
      "Integrasi dengan layanan pihak ketiga",
      "Pendampingan & pengembangan lanjutan",
    ],
  },
];

export const faqs = [
  {
    question: "Berapa lama proses pembuatan website?",
    answer:
      "Tergantung ruang lingkupnya. Landing page biasanya lebih cepat, sedangkan website bisnis dan sistem kustom membutuhkan waktu lebih panjang. Estimasi yang jelas kami berikan setelah sesi konsultasi.",
  },
  {
    question: "Berapa biaya pembuatan website?",
    answer:
      "Biaya menyesuaikan kompleksitas dan fitur yang dibutuhkan. Ceritakan kebutuhan Anda lewat WhatsApp, dan kami kirimkan penawaran yang transparan tanpa biaya tersembunyi.",
  },
  {
    question: "Apakah saya bisa mengubah konten sendiri?",
    answer:
      "Bisa. Kami dapat menyiapkan panel pengelolaan konten sesuai kebutuhan, atau Anda cukup mengirim perubahan kepada kami untuk kami perbarui.",
  },
  {
    question: "Apakah website saya akan tampil baik di ponsel?",
    answer:
      "Ya. Semua website yang kami buat responsif dan diuji di berbagai ukuran layar sebelum diluncurkan.",
  },
  {
    question: "Bagaimana dukungan setelah website selesai?",
    answer:
      "Kami menyediakan pendampingan setelah peluncuran serta opsi maintenance untuk pembaruan, backup, dan perbaikan agar website tetap aman dan berjalan optimal.",
  },
];

export const projectTypes = [
  "Website Company Profile",
  "Landing Page",
  "Toko Online",
  "Aplikasi Web / Sistem Kustom",
  "Aplikasi Mobile",
  "Lainnya",
];
