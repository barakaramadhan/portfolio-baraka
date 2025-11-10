import React, { useRef, useState } from 'react';
import Figma from "../Assets/img/Figma.png";
import Tailwind from "../Assets/img/Tailwind.png";
import ReactLogo from "../Assets/img/reactLogo.png";
import CssLogo from "../Assets/img/cssLogo.png";
import HtmlLogo from "../Assets/img/htmlLogo.png";

// Data kartu untuk memudahkan map (opsional, tapi baik untuk skalabilitas)
const skillData = [
    { name: 'TAILWIND', logo: Tailwind, width: 'h-[45px]' },
    { name: 'FIGMA', logo: Figma, width: 'w-[45px] h-[45px]' },
    { name: 'REACT', logo: ReactLogo, width: 'w-[45px] h-[45px]' },
    { name: 'CSS', logo: CssLogo, width: 'w-[45px] h-[45px]' },
    { name: 'HTML', logo: HtmlLogo, width: 'w-[45px] h-[45px]' },
    // Anda bisa tambahkan skill lain di sini
];

export default function Skil(){
    // 1. Inisialisasi State dan Ref untuk Logika Geser
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // 2. Event Handler: Mouse Down (Memulai Geser)
    const handleMouseDown = (e) => {
        if (!containerRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
        containerRef.current.style.cursor = 'grabbing'; // Feedback visual
    };

    // 3. Event Handler: Mouse Up / Mouse Leave (Mengakhiri Geser)
    const handleMouseEnd = () => {
        if (!containerRef.current) return;
        setIsDragging(false);
        containerRef.current.style.cursor = 'grab'; // Kembalikan kursor
    };

    // 4. Event Handler: Mouse Move (Melakukan Geser)
    const handleMouseMove = (e) => {
        if (!isDragging || !containerRef.current) return;
        
        e.preventDefault(); 
        
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // Faktor 1.5 untuk kecepatan
        
        // Mengubah posisi scroll kontainer
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    return(
        <div className="bg-[#D1CBB2] pt-[70px] overflow-hidden"> {/* Tambahkan overflow-hidden pada parent agar tidak ada scroll vertikal berlebihan */}
            <div className="px-4 pb-[35px]"> {/* Tambahkan padding horizontal agar judul tidak terlalu mepet */}
                <h1 className="text-center font-bebas text-[40px] text-[#191C0C]">
                    SKILL GUA, <span className="text-white bg-[#FE8425] px-1 py-0">GAYA GUA</span>
                </h1>
            </div>

            {/* skill Container yang Diberi Logika Geser */}
            <div 
                ref={containerRef} // Dapatkan referensi DOM
                className="mb-[10px] flex overflow-x-scroll pb-[100px] px-4 select-none" // Tambahkan overflow-x-scroll dan select-none
                // Event Handlers
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseEnd}
                onMouseUp={handleMouseEnd}
                onMouseMove={handleMouseMove}
                // Styling kursor awal & menyembunyikan scrollbar (opsional)
                style={{ cursor: 'grab', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}
            >
                {/* Menggunakan map untuk me-render skill agar lebih dinamis */}
                {skillData.map((skill, index) => (
                    <div 
                        key={index}
                        className="flex-shrink-0 mr-4" // flex-shrink-0 dan mr-4 sangat penting agar item tidak menyusut dan ada jarak
                    >
                        <div className="bg-[#514E3D] py-[50px] px-[50px] flex flex-col items-center w-[150px] rounded-xl rounded-br-none text-white shadow-xl ">
                            <img 
                                src={skill.logo} 
                                alt={skill.name} 
                                className={`${skill.width}`} // Menggunakan width dari data
                            />
                            <div>
                                <h1 className="font-bebas text-[30px] text-center pt-[10px]">
                                    {skill.name}
                                </h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}