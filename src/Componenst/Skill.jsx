import { useState } from "react";
import {
  FaReact,
  FaFigma,
  FaGitAlt,
  FaHtml5,
} from "react-icons/fa";

const skills = [
  {
    icon: <FaReact size={28} />,
    title: "Frontend Development",
    desc: "Membangun website modern, responsive, dan interaktif menggunakan React, Tailwind CSS, dan JavaScript.",
    isActive: true,
  },
  {
    icon: <FaFigma size={28} />,
    title: "UI/UX Design",
    desc: "Mendesain tampilan yang clean, modern, dan nyaman digunakan dengan fokus pada user experience.",
    isActive: false,
  },
  {
    icon: <FaGitAlt size={28} />,
    title: "Git & Github",
    desc: "Mengelola project menggunakan version control, workflow Git, dan kolaborasi repository Github.",
    isActive: false,
  },
  {
    icon: <FaHtml5 size={28} />,
    title: "Responsive Website",
    desc: "Membuat tampilan website yang fleksibel dan optimal di desktop maupun mobile device.",
    isActive: false,
  },
];

export default function Skill() {
  return (
    <section id="Skill" className="bg-[#D1CBB2] text-white py-16 px-6 md:px-16 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
       {/* Kiri: Judul dan Deskripsi */}
<div className="lg:col-span-4 space-y-6 pt-4 text-center lg:text-left">
  
  <h2 className="text-[40px] md:text-[60px] font-bebas  tracking-wide text-[#514E3D]">
    KEAHLIAN SAYA
  </h2>

  <p className="text-[#514E3D] text-sm md:text-[17px] leading-relaxed font-poppins">
    Saya fokus membuat tampilan website yang modern,
    responsive, dan nyaman digunakan dengan menggabungkan
    desain UI/UX serta frontend development.
  </p>

  <div className="pt-2">
    <a href="#Contact">
      <button className="px-6 py-3 rounded-xl text-sm md:text-base font-medium bg-[#FE8425] text-white hover:scale-105 hover:bg-[#ff933f] transition-all duration-300 shadow-lg">
        Let's Work Together
      </button>
    </a>
  </div>
</div>
        {/* Kanan: Grid Kartu Skill */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 lg:pt-0">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-8 rounded-3xl transform transition-all duration-500 ease-out flex flex-col justify-between min-h-[240px] cursor-pointer
                md:hover:-rotate-2 md:hover:-translate-y-3 md:hover:shadow-2xl ${
                skill.isActive
                  ? "bg-[#514E3D] text-white shadow-lg"
                  : "bg-[#191C0C] text-white hover:bg-[#514E3D]"
              }`}
            >
              <div className="space-y-4">

                {/* Bagian Icon */}
                <div
                  className={`${
                    skill.isActive
                      ? "text-white"
                      : "text-[#FE8425]"
                  }`}
                >
                  {skill.icon}
                </div>
                
                {/* Judul & Deskripsi */}
                <h3 className="text-xl font-semibold tracking-wide font-poppins">
                  {skill.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed font-poppins ${
                    skill.isActive
                      ? "text-white"
                      : "text-white"
                  }`}
                >
                  {skill.desc}
                </p>
              </div>

             
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}