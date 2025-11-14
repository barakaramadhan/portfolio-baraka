import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Roti from "../Assets/img/roti.png";
import Webs from "../Assets/img/Webs.png";
import Bahasa from "../Assets/img/bahasa.png";
import Mubarok from "../Assets/img/mubarok.png";

export default function Project() {
  const projects = [
    {
      img: Roti,
      title: "BREAD PAPA'S",
      desc: "Website toko roti sederhana yang dibuat oleh 3 orang laki-laki tampan.",
      link: "https://bread-papas.vercel.app/",
    },
    {
      img: Webs,
      title: "SLICING",
      desc: "Hanya slicing biasa, cuma buat ngasah skill ajaa.",
      link: "https://github.com/baraka/slicing",
    },
    {
      img: Bahasa,
      title: "APK BAHASA",
      desc: "Aplikasi Pelanggaran Siswa berbasis Android.",
      link: "https://play.google.com/store/apps/details?id=apk.bahasa",
    },
    {
      img: Mubarok,
      title: "EID MUBAROK",
      desc: "Website bertema Idul Fitri dengan sistem dark dan light mode.",
      link: "https://eidmubarok.vercel.app",
    },
  ];

  return (
    <div className="bg-[#434537] py-16 pb-[100px]">
      <h1 className="font-bebas text-[42px] md:text-[64px] text-white text-center">
        DARI IDE JADI{" "}
        <span className="bg-[#FE8425] px-2 py-0.5">REALITA</span>
      </h1>

      <h2 className="text-center font-poppins text-white/80 text-[16px] md:text-[20px] mt-2">
        Beberapa Project Yang Berhasil Saya Buat
      </h2>

      {/* Padding kanan-kiri mobile = px-4, desktop = px-16 */}
      <div className="mt-12 px-4 md:px-16">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={40}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="relative group overflow-hidden rounded-none md:rounded-2xl shadow-xl cursor-pointer w-full mx-auto bg-black">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-auto md:h-[70vh] object-contain md:object-cover transition-all duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/80">
                  <h2 className="text-[42px] md:text-[56px] text-white font-bebas mb-3 px-4 py-1 rounded-md shadow-md transform rotate-3 group-hover:-rotate-3 group-hover:scale-110 transition-all">
                    {project.title}
                  </h2>

                  <p className="text-white/90 text-[16px] md:text-[18px] font-poppins w-[85%] md:w-[400px] text-center mb-4 leading-relaxed">
                    {project.desc}
                  </p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FE8425] hover:bg-[#ff6b00] text-white font-bebas text-[26px] px-[40px] py-[6px] rounded-lg shadow-md transition-all"
                  >
                    LOOK
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
