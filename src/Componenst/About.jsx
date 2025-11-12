import Hero from "./Hero";

export default function About() {
  return (
    <section id="About" className="bg-[#514E3D] -mt-[100px]">
      {/* pembukaan about */}
      <div className="flex justify-center pt-[50px] gap-2 pb-[5px]">
        <h1 className="font-bebas text-[30px] bg-[#191C0C] px-2 text-white">Hello</h1>
        <h1 className="text-white font-bebas text-[30px]">I'M !!</h1>
      </div>
      {/* isi about */}
      <div className="flex flex-col justify-center items-center pb-[5px]">
        <h1 className="font-bebas text-[60px] text-white text-center">UI&UX DESIGNER</h1>

        <div className="absolute">
             <h1 className="font-bebas text-[40px] text-white text-center bg-[#FE8425] w-[60px] h-[50px] flex justify-center items-center -mt-[10px] rotate-[20deg] z-10">AND</h1>
        </div>
       
        <h1 className="font-bebas text-[60px] text-white text-center -mt-[30px]">CODING LEARNER.</h1>
      </div>
       <p className="text-[#D1CBB2] font-poppins text-center text-[15px] px-3">
          Seorang UI/UX Designer sekaligus Code Learner yang bersemangat
          menciptakan pengalaman digital yang tidak hanya indah dilihat, tapi
          juga fungsional dan bermakna.
        </p>
      {/* sosmed */}
      <div className="flex justify-center items-center gap-2 pt-[20px] pb-[50px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
      </div>
    </section>
  );
}
