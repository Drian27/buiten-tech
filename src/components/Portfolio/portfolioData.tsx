import { Portfolio } from "@/types/portfolio";

const portfolioData: Portfolio[] = [
  {
    id: 1,
    title: "IKN Apps",
    paragraph: "IKN Apps adalah aplikasi digital yang dirancang untuk memberikan informasi lengkap, layanan interaktif, dan berbagai fitur pendukung bagi masyarakat serta pelaku bisnis di Ibu Kota Nusantara (IKN). Aplikasi ini menjadi pusat informasi resmi yang menghubungkan pemerintah, investor, dan masyarakat dalam satu platform yang modern dan inovatif.",
    image: "/images/portfolio/ibukota.png",
    name: "IKN Apps",
    company: "Company",
    category: "Mobile App",
    type: "Andriod",
    tech_stack: ["/images/tools/flutter.svg", "/images/tools/laravel.svg"],
    publishDate: "31 Jan 2024",
  },
  {
    id: 2,
    title: "Photobooth System",
    paragraph: "Photobooth System adalah solusi digital yang dirancang untuk memberikan pengalaman foto instan dalam berbagai acara seperti pernikahan, ulang tahun, pameran, dan acara perusahaan. Dengan sistem yang interaktif dan mudah digunakan, pengunjung dapat mengambil foto, menerapkan filter atau efek, serta mencetak atau membagikan hasilnya langsung ke media sosial.",
    image: "/images/portfolio/pipper.png",
    name: "Piper",
    company: "PT 2",
    category: "Desktop App",
    type: "Desktop",
    tech_stack: ["/images/tools/java.svg", "/images/tools/spring-boot.svg", "/images/tools/python.svg", "/images/tools/laravel.svg"],
    publishDate: "31 March  2025",
  },
  {
    id: 3,
    title: "Banhub Website",
    paragraph: "Banhub Website adalah platform digital yang menghubungkan pecinta kuliner dengan berbagai pilihan bakery, roti, dan kue terbaik. Dirancang untuk memberikan pengalaman yang mudah dan interaktif, website ini memungkinkan pengguna untuk menjelajahi, memesan, dan menikmati produk roti dari berbagai toko dengan satu platform yang modern dan responsif.",
    image: "/images/portfolio/banhub.png",
    name: "Banhub Website",
    company: "PT 3",
    category: "Web App",
    type: "Website",
    tech_stack: ["/images/tools/java.svg", "/images/tools/python.svg", "/images/tools/laravel.svg"],
    publishDate: "31 Aug  2023",
  },
];
export default portfolioData;
