import { FaInstagram, FaLinkedin, FaWhatsapp, FaArrowUp } from "react-icons/fa";
import Logoo from "../Assets/img/logoo.png";

export default function Footer() {
  // Fungsi untuk kembali ke bagian atas halaman secara halus
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    // Menggunakan background custom warna #434537 dan teks krem terang #D1CBB2
    <footer className="bg-[#434537] text-[#D1CBB2] pt-12 pb-6 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-0">
        {/* SISI KIRI: BRAND & LOGO */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-3">
            {/* invert-[0.1] dipasang agar logo terlihat pas di background gelap */}
            <img
              src={Logoo}
              alt="logo"
              className="w-[30px] md:w-[35px] object-contain invert-[0.1]"
            />
            <h1 className="font-bebas text-[28px] md:text-[32px] text-white tracking-wide mt-1">
              BARAKA
            </h1>
          </div>
          <p className="font-poppins text-[13px] text-[#D1CBB2]/70 text-center md:text-start max-w-[300px]">
            UI/UX Designer & Coding Learner. Mari terhubung dan bangun sesuatu
            yang luar biasa bersama.
          </p>
        </div>

        {/* SISI TENGAH: TAUTAN NAVIGASI CEPAT */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="font-bebas text-[20px] text-white tracking-wider">
            NAVIGATION
          </h2>
          <div className="flex gap-4 md:gap-6 font-poppins text-[14px]">
            <a
              href="#Home"
              className="hover:text-[#FE8425] transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#About"
              className="hover:text-[#FE8425] transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#Skills"
              className="hover:text-[#FE8425] transition-colors duration-300"
            >
              Skills
            </a>
            <a
              href="#Contact"
              className="hover:text-[#FE8425] transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>

        {/* SISI KANAN: SOSIAL MEDIA & TOMBOL BALIK KE ATAS */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <h2 className="font-bebas text-[20px] text-white tracking-wider">
            CONNECT WITH ME
          </h2>
          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/baraka-ramadhan-8a9b85377/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[38px] h-[38px] rounded-full bg-[#514E3D]/30 border border-[#D1CBB2]/20 flex justify-center items-center text-white hover:bg-[#FE8425] hover:border-[#FE8425] hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin size={16} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/ramadhannn_2808/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[38px] h-[38px] rounded-full bg-[#514E3D]/30 border border-[#D1CBB2]/20 flex justify-center items-center text-white hover:bg-[#FE8425] hover:border-[#FE8425] hover:scale-110 transition-all duration-300"
            >
              <FaInstagram size={16} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/6289531894039"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[38px] h-[38px] rounded-full bg-[#514E3D]/30 border border-[#D1CBB2]/20 flex justify-center items-center text-white hover:bg-[#FE8425] hover:border-[#FE8425] hover:scale-110 transition-all duration-300"
            >
              <FaWhatsapp size={16} />
            </a>

            {/* Tombol Scroll To Top */}
            <button
              onClick={scrollToTop}
              className="w-[38px] h-[38px] rounded-full bg-[#FE8425] flex justify-center items-center text-white hover:bg-white hover:text-[#191C0C] hover:scale-110 transition-all duration-300 ml-2 shadow-lg focus:outline-none"
              title="Back to top"
            >
              <FaArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* GARIS PEMBATAS & HAK CIPTA KAKI */}
      <div className="max-w-6xl mx-auto border-t border-[#D1CBB2]/10 mt-10 pt-6 flex flex-col items-center gap-2 md:flex-row md:justify-between md:gap-0 font-poppins text-[12px] text-[#D1CBB2]/40">
        <p>&copy; {new Date().getFullYear()} BARAKA. All rights reserved.</p>
        <p>Designed & Built with React & Tailwind</p>
      </div>
    </footer>
  );
}
