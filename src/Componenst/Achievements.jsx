import {useState} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles (Wajib)
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";

// Ikon Piala bawaan warna #FE8425 (berubah putih jika kartu aktif/di-hover)
const TrophyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75v-1.5m0-11.25v-1.5M4.5 12h-1.5m18 0h-1.5" />
  </svg>
);

export default function Achievement() {
  const achievements = [
    {
      title: "JavaScript Certification",
      description:
        "Menyelesaikan pelatihan JavaScript di Skilvul dan memahami dasar hingga pengembangan logika pemrograman web.",
      year: "2026",
    },
    {
      title: "React Basic Certification",
      description:
        "Menyelesaikan pelatihan React Dasar di Skilvul dan mampu membangun tampilan website interaktif berbasis komponen.",
      year: "2026",
    },
    {
      title: "Git & GitHub Workflow",
      description:
        "Memahami workflow Git dan GitHub seperti branching, merge, pull request, dan kolaborasi project berbasis version control.",
      year: "2026",
    },
    {
      title: "Frontend Developer Journey",
      description:
        "Mempelajari dan mengembangkan skill frontend development menggunakan React, TailwindCSS, dan teknologi web modern.",
      year: "2026",
    },
    {
      title: "UI/UX Designer",
      description:
        "Membuat desain antarmuka website yang modern, responsif, dan nyaman digunakan pada berbagai perangkat.",
      year: "2025",
    },
    {
      title: "Web Developer",
      description:
        "Mengembangkan website menggunakan React, TailwindCSS, dan teknologi frontend modern lainnya.",
      year: "2026",
    },
  ];

  return (
    <section id="Achievements" className="bg-[#434537] py-24 text-white relative overflow-hidden -mt-2">
      
      {/* Container Utama dengan Margin Kanan-Kiri px-6 sampai md:px-12 */}
      <div className="max-w-7xl mx-auto relative z-10 px-6 md:px-12">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white font-bebas">
            ACHIEVEMENT
          </h1>
          <p className="text-white/80 font-poppins max-w-2xl mx-auto mt-6 text-base md:text-lg leading-relaxed">
            Kumpulan pencapaian, pengalaman, dan perjalanan kreatif yang
            menunjukkan passion saya dalam bidang teknologi, desain, dan
            kreativitas.
          </p>
        </div>

        {/* ACHIEVEMENT SLIDER AREA */}
        <div className="relative lg:px-12">
          
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 15,          // Efek kemiringan 3D melengkung halus
              stretch: 0,
              depth: 100,
              modifier: 1.5,
              slideShadows: false, // Dimatikan agar tidak merusak palet warna asli
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={{
              nextEl: ".swiper-button-next-achievement",
              prevEl: ".swiper-button-prev-achievement",
            }}
            breakpoints={{
              640: { slidesPerView: 2, centeredSlides: false },
              1024: { slidesPerView: 3, centeredSlides: true },
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="achievement-swiper-container !pb-14"
          >
            {achievements.map((item, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center py-4 px-2">
                {/* Menggunakan fungsi render bawaan Swiper `isActive` untuk mendeteksi kartu tengah */}
                {({ isActive }) => (
                  <div
                    className={`p-8 rounded-3xl transform transition-all duration-500 ease-out flex flex-col justify-between min-h-[260px] md:min-h-[300px] w-full cursor-pointer
                      md:hover:-rotate-2 md:hover:-translate-y-3 md:hover:shadow-2xl ${
                      isActive
                        ? "bg-[#514E3D] text-white shadow-lg"
                        : "bg-[#191C0C] text-white hover:bg-[#514E3D]"
                    }`}
                  >
                    <div className="space-y-4">
                      {/* Bagian Icon (Oranye jika pasif, Putih jika aktif/hover) */}
                      <div
                        className={`transition-colors duration-300 ${
                          isActive
                            ? "text-white"
                            : "text-[#FE8425] group-hover:text-white"
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <TrophyIcon />
                          {/* Label Tahun Kecil */}
                          <span className="text-xs font-poppins border border-current px-2.5 py-0.5 rounded-full opacity-80">
                            {item.year}
                          </span>
                        </div>
                      </div>
                      
                      {/* Judul & Deskripsi */}
                      <h3 className="text-xl font-semibold tracking-wide font-poppins">
                        {item.title}
                      </h3>

                      <p className="text-sm leading-relaxed font-poppins text-white">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Tombol Navigasi Kiri & Kanan Rapih di Sisi Luar Desktop */}
          <div className="hidden lg:block">
            <button className="swiper-button-prev-achievement absolute top-1/2 -left-4 transform -translate-y-1/2 z-20 p-3 bg-[#FE8425] hover:bg-[#ff6600] text-black rounded-full shadow-xl transition-all duration-300 active:scale-95">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="swiper-button-next-achievement absolute top-1/2 -right-4 transform -translate-y-1/2 z-20 p-3 bg-[#FE8425] hover:bg-[#ff6600] text-black rounded-full shadow-xl transition-all duration-300 active:scale-95">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}