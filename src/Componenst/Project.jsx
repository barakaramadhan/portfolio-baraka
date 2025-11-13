import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import BreadPapas from "../Assets/img/breadpapas.png";
import Slicing from "../Assets/img/slicing.png";
import PelanggaranBahasa from "../Assets/img/pelanggaranBahasa.png";
import Eid from "../Assets/img/eid.png"; // 🆕 Tambahan gambar baru

export default function Project() {
  const projects = [
    {
      img: BreadPapas,
      title: "BREAD PAPA'S",
      desc: "Website toko roti sederhana yang dibuat oleh 3 orang laki-laki tampan.",
    },
    {
      img: Slicing,
      title: "SLICING",
      desc: "Hanya slicing biasa, cuma buat ngasah skill ajaa.",
    },
    {
      img: PelanggaranBahasa,
      title: "APK BAHASA",
      desc: "Aplikasi Pelanggaran Siswa berbasis Android.",
    },
    {
      img: Eid,
      title: "EID MUBAROK",
      desc: "Website bertema Idul Fitri dengan sistem dark dan light mode.",
    },
  ];

  return (
    <div className="bg-[#434537] py-10">
      <h1 className="font-bebas text-[40px] text-white text-center pt-[30px]">
        DARI IDE JADI{" "}
        <span className="bg-[#FE8425] px-1 py-0">REALITA</span>
      </h1>
      <h2 className="text-center font-poppins text-white text-[15px]">Beberapa Project Yang Berhasil Saya Buat</h2>

      {/* SLIDER */}
      <div className="mt-10 px-8">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="relative group rounded-lg overflow-hidden shadow-lg h-[350px] cursor-pointer">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-50"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h2 className="text-[50px] text-white bg-[#FE8425] font-bebas mb-[10px] px-3 py-0 rotate-3 hover:-rotate-3 hover:scale-110 transform transition duration-500">
                    {project.title}
                  </h2>
                  <p className="text-white text-[15px] font-medium font-poppins w-[250px] mb-[10px] text-center">
                    {project.desc}
                  </p>
                  <button className="bg-[#FE8425] text-white font-bebas text-[30px] px-[30px] py-[1px] rounded-lg hover:bg-[#FF7000] transition-all">
                    LOOK
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
