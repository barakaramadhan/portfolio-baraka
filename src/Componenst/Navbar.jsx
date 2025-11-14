import { useState, useEffect } from "react";
import Logoo from "../Assets/img/logoo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showBar, setShowBar] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
      setShowBar(window.scrollY > 50); // muncul setelah scroll 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`z-50 fixed top-0 left-0 w-full pb-2 transition-all duration-500 ${
        showBar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      } bg-[#D1CBB2]/90`}>
      {/* Header atas */}
      <div className="flex justify-between px-5 pt-5 items-center md:px-[35px] md:pt-[35px]">
        <div className="flex items-center gap-3">
          <img src={Logoo} alt="logo" className="w-[30px] md:w-[40px]" />
          <h1 className="font-bebas text-[30px] text-[#191C0C]">BARAKA</h1>
        </div>

        {/* Tombol menu (hanya muncul di mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="block md:hidden -mt-[5px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </button>

        {/* Navigasi biasa untuk layar md ke atas */}
        <ul className="hidden md:flex gap-10 mr-5 ">
          <li className="hover:scale-110 transform transition duration-300">
            <a
              href="#Home"
              
              className="font-bebas text-[30px] text-[#191C0C] "
            >
              HOME
            </a>
          </li>
          <li className="hover:scale-110 transform transition duration-300">
            <a
              href="#About"
              className="font-bebas text-[30px] text-[#191C0C] "
            >
              ABOUT
            </a>
          </li>
          <li className="hover:scale-110 transform transition duration-300">
            <a
              href="#Contact"
              className="font-bebas text-[30px] text-[#191C0C]"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>

      {/* Sidebar mobile */}
      <div
        className={`fixed top-0 right-0 w-[300px] h-screen bg-[#FE8425] transition-transform duration-500 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Tombol close */}
        <div className="flex justify-end p-5">
          <button onClick={() => setOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-x"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Isi navigasi (hanya mobile) */}
        <div className="flex flex-col items-center mt-10 gap-5">
          <div className="flex gap-3 md:hidden">
            <img src={Logoo} alt="img" className="w-[50px]" />
            <div className="font-bebas text-[45px] text-black">BARAKA</div>
          </div>

          <ul className="mt-10 space-y-2">
            <li className="hover:scale-110 transform transition duration-300">
              <a href="#Home" 
                  onClick={() => setOpen(false)}  className="font-bebas text-[70px] text-white">
                HOME
              </a>
            </li>
            <li className="hover:scale-110 transform transition duration-300">
              <a href="#About"  
              onClick={() => setOpen(false)} className="font-bebas text-[65px] text-white">
                ABOUT
              </a>
            </li>
            <li className="hover:scale-110 transform transition duration-300">
              <a href="#Contact"
                onClick={() => setOpen(false)} className="font-bebas text-[60px] text-white">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
