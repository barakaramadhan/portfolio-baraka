import Kece from "../Assets/img/Kece.png";
import Kotak from "../Assets/img/Kotak.png";

export default function Hero() {
  return (
  <div className="flex justify-center items-center bg-[#D1CBB2] min-h-screen flex-col -mt-[100px]">
  <div className="flex flex-col items-center">
    <h1 className="font-bebas text-[120px] text-[#191C0C] font-semibold">
      BARAKA
    </h1>
    <h1 className="font-bebas text-[100px] text-[#434537] font-semibold -mt-[70px]">
      RAMADHAN
    </h1>
  </div>

   <div><img src={Kece} alt="img" className="hidden"/></div>

    <div className="flex flex-col justify-center ml-[10px] mt-[10px]">
        <div className="flex gap-1 mb-1">
            <img src={Kotak} alt="" className="w-[10px] h-[10px]" />
            <img src={Kotak} alt="" className="w-[10px] h-[10px]"/>
        </div>

        <div>
            <p className="text-start w-[350px] text-poppins font-semibold text-[15px] ">Menciptakan desain yang sederhana, bermakna, dan mudah digunakan.</p>
        </div>
    </div>
  

</div>


   
  );
}
