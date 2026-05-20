import React, { useState, useEffect, useRef } from "react";

import Bahasa from "../Assets/img/bahasa.png";
import TokoRoti from "../Assets/img/roti.png";
import Eid from "../Assets/img/mubarok.png";
import Cuaca from "../Assets/img/cuaca.png";
import Webs from "../Assets/img/webs.png";
import Ducati from "../Assets/img/ducati.png";
import Furniture from "../Assets/img/adz-furniture.png";
import Quranku from "../Assets/img/quranku.png";

export default function Project() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const projects = [
    {
      title: "Bread Papa's",
      desc: "Platform toko roti modern yang dirancang untuk memberikan pengalaman pemesanan yang mulus dan intuitif.",
      link: "https://bread-papas.vercel.app/",
      tag: "E-Commerce",
      tech: ["React", "Tailwind CSS", "Vite"],
      accentColor: "bg-orange-500",
      img: TokoRoti,
    },
    {
      title: "Slicing Showcase",
      desc: "Eksplorasi layouting detail tingkat tinggi untuk menerjemahkan desain Figma rumit menjadi kode pixel-perfect.",
      link: "https://tinyurl.com/Slicing-web",
      tag: "Slicing UI",
      tech: ["HTML5", "CSS Grid", "JavaScript"],
      accentColor: "bg-indigo-500",
      img: Webs,
    },
    {
      title: "Apk Bahasa",
      desc: "Sistem pencatatan dan analisis pelanggaran tata tertib siswa berbasis web mobile untuk instansi sekolah.",
      link: "https://tinyurl.com/pelanggaraan",
      tag: "Mobile Web App",
      tech: ["React Native", "Tailwind", "Supabase"],
      accentColor: "bg-emerald-500",
      img: Bahasa,
    },
    {
      title: "Eid Mubarok",
      desc: "Halaman interaktif perayaan hari raya dengan fitur transisi tema adaptif yang bersih dan minimalis.",
      link: "https://tinyurl.com/eid-mubarok",
      tag: "Interactive Web",
      tech: ["React", "Framer Motion", "Tailwind"],
      accentColor: "bg-purple-500",
      img: Eid,
    },
    {
      title: "Weather App",
      desc: "Aplikasi prakiraan cuaca minimalis dengan integrasi API cuaca publik dan visualisasi data dinamis.",
      link: "https://wheather-app-git-main-barakaramadhan444-1812s-projects.vercel.app/",
      tag: "Web Utility",
      tech: ["JavaScript", "OpenWeather API", "CSS Modules"],
      accentColor: "bg-sky-500",
      img: Cuaca,
    },
    {
      title: "ADZ Furniture",
      desc: "Katalog online interaktif untuk menampilkan koleksi furnitur premium dengan tata letak modern dan estetika minimalis.",
      link: "https://adz-furniture.vercel.app/", 
      tag: "Company Profile",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      accentColor: "bg-amber-700",
      img: Furniture,
    },
    {
      title: "Ducati Showcase",
      desc: "Landing page otomotif berperforma tinggi dengan fokus pada visualiasasi produk yang elegan dan animasi transisi yang halus.",
      link: "https://ducati-kalcer.vercel.app/", 
      tag: "Landing Page",
      tech: ["React", "Tailwind CSS", "Vite"],
      accentColor: "bg-red-600",
      img: Ducati,
    },
    {
      title: "Quranku",
      desc: "Aplikasi Al-Quran digital berbasis web yang responsif, dilengkapi dengan fitur pencarian ayat dan pembacaan yang nyaman di berbagai perangkat.",
      link: "https://quran-digital-nu.vercel.app/", 
      tag: "Web Application",
      tech: ["React", "Tailwind CSS", "Quran API"],
      accentColor: "bg-teal-600",
      img: Quranku,
    },
  ];
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  let startX = 0;

  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diffX = startX - endX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  return (
    <section
      id="portfolio"
      className="bg-[#434537] text-slate-100 py-28 px-6 md:px-12 lg:px-20 border-t border-slate-900 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
     {/* Mengubah pt-5 (mobile) agar tidak terlalu jauh, dan md:pt-12 saat layar desktop */}
<div className="flex flex-col items-center text-center md:flex-row md:items-end md:justify-between md:text-left gap-6 pt-4 md:pt-12">
  <div className="space-y-3 max-w-2xl">
    <h2 className="text-[40px] md:text-[60px] font-semibold tracking-wide text-white font-bebas">
      PROJECT SAYA
    </h2>

    {/* Deskripsi baru yang lebih panjang dan profesional */}
    <p className="text-white/80 text-sm md:text-base leading-relaxed font-poppins text-[16px]">
      Berikut adalah beberapa proyek yang saya kerjakan. Setiap proyek ini
      merupakan hasil dari pengalaman dan pengetahuan teknis yang saya miliki.
    </p>
  </div>

  {/* Button */}
  <div className="flex items-center space-x-3">
    <button
      onClick={handlePrev}
      className="p-3 bg-[#FE8425] hover:bg-[#ff6600] rounded-xl border border-[#FE8425] transition"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>

    <button
      onClick={handleNext}
      className="p-3 bg-[#FE8425] hover:bg-[#ff6600] rounded-xl border border-[#FE8425] transition"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
</div>

        {/* Slider */}
        <div
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative overflow-hidden"
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-1"
              >
                <div className="bg-[#191C0C]  rounded-2xl overflow-hidden grid md:grid-cols-12 md:h-[450px]">

                  {/* Image */}
                  <div className="md:col-span-7 h-[240px] md:h-full overflow-hidden relative">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                    <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest bg-black/70 px-3 py-1 rounded-md border border-slate-700">
                      {project.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-5 p-8 flex flex-col justify-between bg-black/20">
                    <div className="space-y-4">
                      <h3 className="text-[50px] font-bebas ">
                        {project.title}
                      </h3>

                      <p className="text-sm text-white/80 leading-relaxed font-poppins ">
                        {project.desc}
                      </p>
                    </div>

                    <div className="space-y-5 pt-6 border-t border-white">
                      
                      {/* Tech */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-poppins bg-[#FE8425] px-2 py-1 rounded text-white "
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Link */}
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] uppercase tracking-widest text-white/80 font-poppins">
                          Live Preview
                        </span>

                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm hover:text-slate-300 transition"
                        >
                          Kunjungi

                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14 3h7m0 0v7m0-7L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-3 pt-5">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? `${project.accentColor} w-6`
                  : "bg-slate-700 w-2"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}