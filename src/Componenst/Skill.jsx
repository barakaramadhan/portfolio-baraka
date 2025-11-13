import React, { useRef, useState } from 'react';
import Figma from "../Assets/img/Figma.png";
import Tailwind from "../Assets/img/Tailwind.png";
import ReactLogo from "../Assets/img/reactLogo.png";
import CssLogo from "../Assets/img/cssLogo.png";
import HtmlLogo from "../Assets/img/htmlLogo.png";

// Data skill
const skillData = [
  { name: 'TAILWIND', logo: Tailwind, width: 'h-[45px]' },
  { name: 'FIGMA', logo: Figma, width: 'w-[45px] h-[45px]' },
  { name: 'REACT', logo: ReactLogo, width: 'w-[45px] h-[45px]' },
  { name: 'CSS', logo: CssLogo, width: 'w-[45px] h-[45px]' },
  { name: 'HTML', logo: HtmlLogo, width: 'w-[45px] h-[45px]' },
];

export default function Skil() {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    containerRef.current.style.cursor = 'grabbing';
  };

  const handleMouseEnd = () => {
    if (!containerRef.current) return;
    setIsDragging(false);
    containerRef.current.style.cursor = 'grab';
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="bg-[#D1CBB2] pt-[40px] sm:pt-[60px] md:pt-[80px] overflow-hidden">
      {/* Judul */}
      <div className="px-4 pb-[25px] sm:pb-[30px] md:pb-[40px]">
        <h1 className="text-center font-bebas text-[40px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-[#191C0C]">
          SKILL GUA, <span className="text-white bg-[#FE8425] px-1 py-0">GAYA GUA</span>
        </h1>
      </div>

      {/* Container Skill Scroll */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto gap-5 sm:gap-6 md:gap-8 px-4 pb-[90px] select-none scrollbar-hide"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseEnd}
        onMouseUp={handleMouseEnd}
        onMouseMove={handleMouseMove}
        style={{
          cursor: 'grab',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
        }}
      >
        {skillData.map((skill, index) => (
          <div key={index} className="flex-shrink-0">
            <div
              className="
                bg-[#514E3D]
                flex flex-col items-center justify-center
                rounded-xl rounded-br-none text-white shadow-2xl
                transition-transform hover:scale-105 duration-300
                w-[140px] h-[160px] 
                sm:w-[170px] sm:h-[190px] 
                md:w-[230px] md:h-[250px] 
                lg:w-[280px] lg:h-[300px] 
                xl:w-[320px] xl:h-[340px]
              "
            >
              <img src={skill.logo} alt={skill.name} className={`${skill.width}`} />
              <h1 className="font-bebas text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] text-center pt-[10px]">
                {skill.name}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
