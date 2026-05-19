import Badoon from "../Assets/img/badoon.png";
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="About"
      className="bg-[#514E3D] -mt-[100px] md:pt-[50px] md:pb-[50px] md:-mt-[200px]"
    >
      <div className="md:flex md:items-center ">
        
        {/* img about */}
        <div>
          <img
            src={Badoon}
            alt=""
            className="w-[600px] max-sm:hidden"
          />
        </div>

        {/* pembukaan about */}
        <div>

          {/* hello */}
          <div className="flex justify-center pt-[50px] gap-2 pb-[5px] md:-ml-[300px]">
            <h1 className="font-bebas text-[30px] bg-[#191C0C] px-2 text-white">
              Hello
            </h1>

            <h1 className="text-white font-bebas text-[30px]">
              I'M !!
            </h1>
          </div>

          {/* isi about */}
          <div className="flex flex-col justify-center items-center pb-[5px] md:-mt-[15px]">

            <h1 className="font-bebas text-[60px] text-white text-center md:text-[100px] md:ml-[60px]">
              UI&UX DESIGNER
            </h1>

            <div className="absolute">
              <h1 className="font-bebas text-[40px] text-white text-center bg-[#FE8425] w-[60px] h-[50px] flex justify-center items-center -mt-[10px] rotate-[20deg] z-10 md:text-[55px] md:w-[80px] md:h-[60px]">
                AND
              </h1>
            </div>

            <h1 className="font-bebas text-[60px] text-white text-center -mt-[30px] md:ml-5 md:text-[85px] md:-mt-[50px]">
              CODING LEARNER.
            </h1>
          </div>

          {/* desc */}
          <p className="text-[#D1CBB2] font-poppins text-center text-[15px] px-3 md:text-start md:w-[500px] md:text-[18px] md:ml-[60px] md:-mt-[20px]">
            Seorang UI/UX Designer sekaligus Code Learner yang
            bersemangat menciptakan pengalaman digital yang tidak hanya
            indah dilihat, tapi juga fungsional dan bermakna.
          </p>
          <div className="border-t-2 w-[70%] mt-[20px] ml-[13%]"></div>

          {/* social media */}
          <div className="flex justify-center md:justify-start items-center gap-3 pt-[30px] pb-[50px] md:ml-[70px] flex-wrap ">

          

            {/* linkedin */}
            <a
              href="https://www.linkedin.com/in/baraka-ramadhan-8a9b85377/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-[45px]
                h-[45px]
                md:w-[48px]
                md:h-[48px]
                rounded-full
                border
                border-[#E6DFC8]/70
                flex
                justify-center
                items-center
                text-[#F5F1E8]
                hover:bg-[#FE8425]
                hover:border-[#FE8425]
                hover:scale-110
                duration-300
              "
            >
              <FaLinkedin size={18} />
            </a>

            {/* instagram */}
            <a
              href="https://www.instagram.com/ramadhannn_2808/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-[45px]
                h-[45px]
                md:w-[48px]
                md:h-[48px]
                rounded-full
                border
                border-[#E6DFC8]/70
                flex
                justify-center
                items-center
                text-[#F5F1E8]
                hover:bg-[#FE8425]
                hover:border-[#FE8425]
                hover:scale-110
                duration-300
              "
            >
              <FaInstagram size={18} />
            </a>

            {/* whatsapp */}
            <a
              href="#"
              className="
                w-[45px]
                h-[45px]
                md:w-[48px]
                md:h-[48px]
                rounded-full
                border
                border-[#E6DFC8]/70
                flex
                justify-center
                items-center
                text-[#F5F1E8]
                hover:bg-[#FE8425]
                hover:border-[#FE8425]
                hover:scale-110
                duration-300
              "
            >
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}