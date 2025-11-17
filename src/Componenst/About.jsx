import Badoon from "../Assets/img/badoon.png";
export default function About() {
  return (
    <section id="About" className="bg-[#514E3D] -mt-[100px] md:pt-[50px] md:pb-[50px] md:-mt-[200px]">
      <div className="md:flex md:items-center ">
           {/* img about */}
    <div>
      <img src={Badoon} alt="" className="w-[600px] max-sm:hidden"/>
    </div>


      {/* pembukaan about */}
      <div>
          <div className="flex justify-center pt-[50px] gap-2 pb-[5px] md:-ml-[300px]">
        <h1 className="font-bebas text-[30px] bg-[#191C0C] px-2 text-white">Hello</h1>
        <h1 className="text-white font-bebas text-[30px]">I'M !!</h1>
      </div>
      {/* isi about */}
      <div className="flex flex-col justify-center items-center pb-[5px] md:-mt-[15px]">
        <h1 className="font-bebas text-[60px] text-white text-center md:text-[100px] md:ml-[60px]">UI&UX DESIGNER</h1>

        <div className="absolute">
             <h1 className="font-bebas text-[40px] text-white text-center bg-[#FE8425] w-[60px] h-[50px] flex justify-center items-center -mt-[10px] rotate-[20deg] z-10 md:text-[55px] md:w-[80px] md:h-[60px]">AND</h1>
        </div>
       
        <h1 className="font-bebas text-[60px] text-white text-center -mt-[30px] md:ml-5 md:text-[85px] md:-mt-[50px]">CODING LEARNER.</h1>
      </div>
       <p className="text-[#D1CBB2] font-poppins text-center text-[15px] px-3 md:text-start md:w-[500px] md:text-[18px] md:ml-[60px] md:-mt-[20px]">
          Seorang UI/UX Designer sekaligus Code Learner yang bersemangat
          menciptakan pengalaman digital yang tidak hanya indah dilihat, tapi
          juga fungsional dan bermakna.
        </p>
      {/* sosmed */}
      <div className="flex justify-center items-center gap-2 pt-[20px] pb-[50px] md:-ml-[280px]">
        <div className="hover:scale-125 transform transition duration-400 hover:text-white"><a href="https://www.linkedin.com/in/baraka-ramadhan-8a9b85377/"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg></a></div>
       <div className="hover:scale-125 transform transition duration-400 hover:text-white"><a href="https://www.instagram.com/ramadhannn_2808/"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg></a></div>
        <div className="hover:scale-125 transform transition duration-400 hover:text-white"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg></a></div>
      </div>
      </div>
      </div>
    </section>
  );
}
