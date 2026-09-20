# Pilar Sistem — Landing Page

Landing page jasa pembuatan website & sistem kustom.

**Stack:** Next.js (App Router) · React · TypeScript · Tailwind CSS v4 · [Motion](https://motion.dev) (`motion/react`) · lucide-react

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build produksi
npm run start    # jalankan hasil build
```

## Mengubah konten

Semua teks, layanan, paket, FAQ, dan nomor WhatsApp ada di satu file: `src/lib/content.ts`.
Nomor WhatsApp (`site.whatsapp`, format `62812...` tanpa `+`) dan pesan template (`site.message`) juga diatur di sana — semua tombol pemesanan memakainya.

Warna tema ada di `src/app/globals.css` (blok `@theme`).

## Struktur

```
src/
├─ app/            layout, halaman, tema global, icon
├─ components/     Navbar, Hero, Services, Features, Process, Plans, Faq, Contact, Footer, ...
└─ lib/content.ts  seluruh konten & konfigurasi
```
