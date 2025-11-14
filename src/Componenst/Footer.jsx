import { FaInstagram, FaGithub, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#191C0C] text-white py-10 px-6 md:px-12 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-16">

        {/* Brand */}
        <div className="flex flex-col gap-2 text-center md:text-left mx-auto md:mx-0">
          <h1 className="font-bebas text-[36px] md:text-[40px] leading-none">
            BARAKA RAMADHAN
          </h1>
          <p className="text-sm text-gray-300 max-w-xs mx-auto md:mx-0">
            Designer • Frontend Developer
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3 text-center md:text-left">
          <h3 className="font-poppins font-semibold text-lg">Navigasi</h3>
          <ul className="flex flex-col gap-1 text-gray-300 text-sm">
            <li><a href="#Home" className="hover:text-white transition">Home</a></li>
            <li><a href="#About" className="hover:text-white transition">About</a></li>
            <li><a href="#Project" className="hover:text-white transition">Project</a></li>
            <li><a href="#Contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-3 text-center md:text-left mx-auto md:mx-0">
          <h3 className="font-poppins font-semibold text-lg">Ikuti Saya</h3>
          <div className="flex justify-center md:justify-start items-center gap-6 text-[22px]">
            <a
              href="#"
              target="_blank"
              className="hover:text-gray-500 hover:scale-125 transform transition duration-200"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              target="_blank"
              className="hover:text-gray-500 hover:scale-125 transform transition duration-200"
            >
              <FaTiktok />
            </a>

            <a
              href="#"
              target="_blank"
              className="hover:text-gray-500 hover:scale-125 transform transition duration-200"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center border-t border-white/20 mt-10 pt-5">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Baraka Ramadhan. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
