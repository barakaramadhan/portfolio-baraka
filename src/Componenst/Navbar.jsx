import { useState, useEffect } from "react";
import Logoo from "../Assets/img/logoo.png";

// Komponen SVG Icons bawaan
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
);
const AboutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
);
const SkillsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
);
const AchievementsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
);
const ContactIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const menuItems = [
    { id: "Home", label: "HOME", icon: <HomeIcon /> },
    { id: "About", label: "ABOUT", icon: <AboutIcon /> },
    { id: "Skill", label: "SKILLS", icon: <SkillsIcon /> },
    { id: "Achievements", label: "ACHIEVEMENTS", icon: <AchievementsIcon /> },
    { id: "Contact", label: "CONTACT", icon: <ContactIcon /> },
  ];

  // Efek memunculkan Navbar saat scroll ke bawah
  useEffect(() => {
    const handleScroll = () => {
      setShowBar(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer untuk mendeteksi section aktif saat di-scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const matchedItem = menuItems.find(
            (item) => item.id.toLowerCase() === entry.target.id.toLowerCase()
          );
          if (matchedItem) setActiveSection(matchedItem.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    menuItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HEADER NAV MELAYANG (Berlaku untuk Mobile & Desktop) */}
      <nav
        className={`z-40 fixed top-0 left-0 w-full px-4 md:px-8 py-5 transition-all duration-500 flex justify-center ${
          showBar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        {/* Container Isi Navbar */}
        <div className="w-full max-w-6xl bg-[#D1CBB2]/90 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.15)] rounded-full px-6 py-2.5 flex justify-between items-center border border-white/20">
          
          {/* Logo & Nama */}
          <div className="flex items-center gap-3">
            <img src={Logoo} alt="logo" className="w-[30px] md:w-[35px] object-contain" />
            <h1 className="font-bebas text-[26px] md:text-[28px] text-[#191C0C] tracking-wide mt-1">
              BARAKA
            </h1>
          </div>

          {/* Tombol Hamburger (Sekarang muncul di semua ukuran layar) */}
          <button
            onClick={() => setOpen(true)}
            className="text-[#191C0C] hover:scale-110 transition duration-300 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" />
            </svg>
          </button>
        </div>
      </nav>

      {/* OVERLAY GELAP LALU BACKDROP BLUR (Muncul jika Sidebar Terbuka) */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`} 
        onClick={() => setOpen(false)} 
      />

      {/* SIDEBAR DRAWER (Bergeser dari kanan, berlaku untuk semua ukuran layar) */}
      <div
        className={`fixed top-0 right-0 w-[280px] md:w-[320px] h-screen bg-[#D1CBB2]/95 backdrop-blur-md shadow-2xl z-50 transition-transform duration-500 ease-in-out flex flex-col justify-between py-8 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Tombol Close di Atas Sidebar */}
          <div className="flex justify-end px-6">
            <button onClick={() => setOpen(false)} className="hover:rotate-90 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#191C0C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Logo Brand di dalam Sidebar */}
          <div className="flex flex-col px-8">
            <div className="flex items-center gap-3 pb-6 border-b border-[#191C0C]/10">
              <img src={Logoo} alt="logo" className="w-[35px]" />
              <div className="font-bebas text-[30px] text-[#191C0C] tracking-wide mt-1">BARAKA</div>
            </div>

            {/* List Item Navigasi */}
            <ul className="mt-8 space-y-3">
              {menuItems.map((item) => {
                const isCurrent = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className={`font-bebas text-[26px] md:text-[28px] flex items-center gap-4 py-1.5 transition-all duration-500 ease-out ${
                        isCurrent 
                          ? "text-[#FE8425] translate-x-2" 
                          : "text-[#191C0C] hover:text-[#FE8425] hover:translate-x-2"
                      }`}
                    >
                      {/* Ikon Menu */}
                      <span className={`transition-colors duration-500 ease-out ${isCurrent ? "text-[#FE8425]" : "text-[#191C0C]/70"}`}>
                        {item.icon}
                      </span>
                      {/* Teks Menu */}
                      <span className="mt-[2px]">{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Hak Cipta Kaki di bagian bawah Sidebar */}
        <div className="px-8 text-center text-[12px] text-[#191C0C] font-poppins">
          &copy; {new Date().getFullYear()} Baraka. All rights reserved.
        </div>
      </div>
    </>
  );
}