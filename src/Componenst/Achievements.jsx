import { useState } from "react";

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
    <section className=" bg-[#434537] py-24 px-6 text-white relative overflow-hidden ">
      {/* Background Blur */}
      {/* <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/5 blur-3xl rounded-full" /> */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white font-anton">
             <span className="text-white font-bebas">ACHIEVEMENT</span>
          </h1>

          <p className="text-white/80 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
            Kumpulan pencapaian, pengalaman, dan perjalanan kreatif yang
            menunjukkan passion saya dalam bidang teknologi, desain, dan
            kreativitas.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              {/* Year */}
              <div className="absolute top-6 right-6 text-sm text-gray-300 bg-white/10 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                {item.year}
              </div>

              {/* Content */}
              <h2 className="text-2xl font-bold mb-4 relative z-10 mt-10">
                {item.title}
              </h2>

              <p className="text-white/80 leading-relaxed relative z-10">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}