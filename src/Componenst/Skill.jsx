import React from 'react';
import Design from "../Assets/img/design.png";
import Tailwind from "../Assets/img/tailwind.png";
import ReactLogo from "../Assets/img/reactLogo.png";
import CssLogo from "../Assets/img/cssLogo.png";
import HtmlLogo from "../Assets/img/htmlLogo.png";

// Data skill
const skillData = [
  { name: 'TAILWIND', logo: Tailwind, width: 'h-[45px]' },
  { name: 'FIGMA', logo: Design, width: 'w-[45px] h-[45px]' },
  { name: 'REACT', logo: ReactLogo, width: 'w-[45px] h-[45px]' },
  { name: 'CSS', logo: CssLogo, width: 'w-[45px] h-[45px]' },
  { name: 'HTML', logo: HtmlLogo, width: 'w-[45px] h-[45px]' },
];

export default function Skil() {
  return (
    <div className="bg-[#D1CBB2] text-white py-[80px] px-4">

      {/* JUDUL */}
      <h1 className="text-center text-[50px] sm:text-[40px] md:text-[80px] font-bebas text-[#514E3D]">
       <span className='bg-[#FE8425] px-2 py-0.5 text-white'>KEAHLIAN</span> SAYA
      </h1>

      <p className="text-center text-black font-poppins max-w-[700px] mx-auto mt-3 text-[15px] sm:text-[15px] md:text-[16px] leading-relaxed">
       Gua nguasain beberapa tools dan teknologi yang bikin proses desain & ngoding jadi lebih cepat dan rapi.
      </p>

      <div className="flex flex-col items-center md:flex-row md:justify-center gap-10 mt-[60px]">

        {/* TEXT SKILLS — RESPONSIVE */}
        <div className="flex items-center -mt-[50px] sm:-mt-[50px] md:-mt-[50px] lg:-mt-[50px] xl:-mt-[50px]">
        </div>

        {/* GRID RESPONSIVE */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            gap-6 sm:gap-8 md:gap-10
          "
        >
          {skillData.map((skill, index) => (
            <div
              key={index}
              className="
                bg-[#191C0C]
                w-[130px] h-[130px]
                sm:w-[150px] sm:h-[150px]
                md:w-[170px] md:h-[170px]
                lg:w-[190px] lg:h-[190px]
                rounded-2xl shadow-xl
                flex flex-col justify-center items-center
                hover:scale-105 transition duration-300
              "
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className={`${skill.width}`}
              />
              <h1 className="text-[20px] font-bebas sm:text-[18px] md:text-[30px] mt-3 tracking-wide">
                {skill.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
