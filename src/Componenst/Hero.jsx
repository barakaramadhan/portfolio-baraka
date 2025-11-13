import { motion } from "framer-motion";
import Kece from "../Assets/img/Kece.png";
import Koma from "../Assets/img/koma.png";
import Badon from "../Assets/img/Badon.png";


export default function Hero() {
  return (
  <div id="Home" className="flex justify-center items-center bg-[#D1CBB2] min-h-screen flex-col -mt-[100px] md:mt-0 md:mb-[80px]">
    
  <div className="flex flex-col items-center ">
    <h1 className="font-bebas text-[120px] text-[#191C0C] font-semibold md:text-[250px] relative">
      BARAKA
    </h1>
    <img src={Badon} alt="" className="w-[400px]  absolute z-10 max-sm:hidden" />

   <div
  className="
    md:animate-goyang
    md:bg-[#FE8425] md:pt-[45px] md:h-[120px]
    md:px-[30px] md:-mt-[50px] md:mb-[50px]
    md:rotate-[7deg] md:z-20 inline-block
  "
>
  <h1
    className="
      font-bebas text-[100px] text-[#434537] font-semibold -mt-[70px]
      md:text-[120px] md:text-white
      animate-goyangMobile md:animate-none
    "
  >
    RAMADHAN
  </h1>
</div>
     
  </div>

   <div><img src={Kece} alt="img" className="hidden"/></div>

    <div className="flex flex-col justify-center ml-[10px] mt-[10px] md:-ml-[80px] ">
        <div className="flex gap-1 mb-1">
            <img src={Koma} alt="" className="w-[10px] h-[10px]" />
            <img src={Koma} alt="" className="w-[10px] h-[10px]"/>
        </div>

        <div>
            <p className="text-start w-[350px] text-poppins font-semibold text-[15px] md:text-[20px] md:w-[500px]">Menciptakan desain yang sederhana, bermakna, dan mudah digunakan.</p>
        </div>
    </div>
  

</div>


   
  );
}
