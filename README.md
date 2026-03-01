# ♿ Accessibility-First Landing Page

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://your-live-demo-link.com)
[![Lighthouse Accessibility](https://img.shields.io/badge/Lighthouse-A11y-100%25-blue)](https://github.com/yourusername/your-repo)
[![WCAG Compliance](https://img.shields.io/badge/WCAG-2.1-AA-success)](https://www.w3.org/WAI/WCAG21/quickref/)
[![Tech Stack](https://img.shields.io/badge/Tech-Astro%20%7C%20Tailwind%20%7C%20TS-informational)](https://github.com/yourusername/your-repo)

> Sebuah demonstrasi landing page modern yang memprioritaskan inklusivitas, kinerja, dan kepatuhan terhadap standar WCAG 2.1 Level AA.

## 📖 Tentang Proyek

Proyek ini bukan sekadar landing page statis, melainkan bukti komitmen terhadap **Web Accessibility (A11y)**. Banyak situs web modern mengabaikan pengguna dengan disabilitas; proyek ini dirancang untuk memastikan bahwa semua orang, terlepas dari kemampuan visual, motorik, atau kognitif mereka, dapat mengakses informasi dengan setara.

Tujuan utama proyek ini adalah mencapai skor **100/100 pada Lighthouse Accessibility** dan memastikan navigasi yang mulus menggunakan keyboard serta screen reader.

## ✨ Fitur Aksesibilitas Utama

- **♿ Navigasi Keyboard Penuh:** Semua elemen interaktif dapat diakses hanya menggunakan `Tab`, `Enter`, dan `Space`.
- **🔗 Skip Links:** Tautan loncat untuk melewati navigasi dan langsung ke konten utama bagi pengguna keyboard.
- **👁️ High Contrast Mode:** Toggle untuk mengubah tema menjadi kontras tinggi bagi pengguna dengan gangguan penglihatan.
- **🎬 Reduced Motion Support:** Animasi otomatis dimatikan jika pengguna mengaktifkan `prefers-reduced-motion` di sistem operasi mereka.
- **🗣️ Screen Reader Optimized:** Struktur HTML semantik, ARIA labels yang tepat, dan teks alternatif yang deskriptif.
- **🎯 Focus Trapping:** Fokus keyboard terperangkap dengan benar saat modal/popup aktif.

## 🛠️ Tech Stack

| Teknologi | Deskripsi |
| :--- | :--- |
| **Astro** | Framework web modern untuk kinerja statis yang optimal. |
| **TypeScript** | Menjamin keamanan tipe dan maintainability kode. |
| **Tailwind CSS** | Styling utilitas dengan konfigurasi kustom untuk fokus yang terlihat. |
| **Pa11y CI** | Automated testing untuk kepatuhan aksesibilitas. |
| **Vercel** | Hosting untuk performa edge network yang cepat. |

## 📊 Kinerja & Metrik Aksesibilitas

Proyek ini telah diaudit menggunakan **Google Lighthouse** dan **Pa11y**. Berikut adalah hasilnya:

| Kategori | Skor |
| :--- | :---: |
| **Performance** | 100 |
| **Accessibility** | 100 |
| **Best Practices** | 100 |
| **SEO** | 100 |

![Lighthouse Score](./public/lighthouse-score.png)
*(Tambahkan screenshot hasil audit Lighthouse Anda di sini)*

## 🎥 Video Walkthrough

Berikut adalah demonstrasi navigasi situs menggunakan **Keyboard Only** dan **Screen Reader**.

![Keyboard Navigation Demo](./public/keyboard-nav-demo.gif)
*(Upload GIF atau video pendek navigasi keyboard Anda di sini)*

> **Catatan:** Video lengkap navigasi screen reader dapat dilihat [di sini](link-ke-video-lengkap-jika-ada).

## 🚀 Instalasi & Menjalankan Lokal

Ikuti langkah berikut untuk menjalankan proyek ini di mesin lokal Anda:

1.  **Clone Repositori:**
    ```bash
    git clone https://github.com/username-anda/accessibility-landing.git
    cd accessibility-landing
    ```

2.  **Instal Dependensi:**
    ```bash
    npm install
    ```

3.  **Jalankan Development Server:**
    ```bash
    npm run dev
    ```

4.  **Build untuk Production:**
    ```bash
    npm run build
    ```

5.  **Jalankan Test Aksesibilitas (Pa11y):**
    ```bash
    npm run test:a11y
    ```

## 📄 Pernyataan Aksesibilitas (Accessibility Statement)

Kami berkomitmen untuk memastikan aksesibilitas digital bagi semua orang. Proyek ini mengikuti panduan **WCAG 2.1 Level AA**.

- **Standar:** WCAG 2.1 AA
- **Tanggal Evaluasi Terakhir:** [Tanggal Hari Ini]
- **Teknologi Asistif yang Diuji:** NVDA, VoiceOver, TalkBack.

## 🧠 Pelajaran & Tantangan

Selama pengembangan, beberapa tantangan aksesibilitas yang berhasil diatasi:

1.  **Focus Management:** Mengelola fokus saat modal terbuka dan tertutup agar tidak hilang dari konteks.
2.  **Warna & Kontras:** Memastikan semua kombinasi warna memenuhi rasio kontras 4.5:1 tanpa mengorbankan estetika.
3.  **Semantic HTML:** Menghindari `div` yang dapat diklik dan menggantinya dengan `<button>` atau `<a>` yang semantik.

## 🤝 Kontribusi

Kontribusi untuk meningkatkan aksesibilitas situs ini sangat welcome! Silakan buat **Pull Request** atau buka **Issue** jika Anda menemukan bug aksesibilitas.

---
*Dibuat dengan ❤️ dan komitmen terhadap inklusivitas.*
