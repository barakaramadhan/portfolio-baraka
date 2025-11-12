export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const whatsappNumber = "6281234567890"; // 🔹 Ganti dengan nomor WA kamu
    const url = `https://wa.me/${whatsappNumber}?text=Halo,%20saya%20${encodeURIComponent(
      name
    )}%20ingin%20menghubungi%20Baraka%20Ramadhan.%20No%20HP:%20${encodeURIComponent(
      phone
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div id="Contact" className="flex justify-center items-center bg-[#D1CBB2] text-white py-10 px-5 rounded-xl ">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl gap-6 pt-[100px]">
  
        <div className="text-center md:text-left flex-1">
          <h1 className="font-bebas text-[34px] md:text-[40px] leading-tight bg-[#FE8425]  py-3 hover:rotate-[5deg]  hover:scale-110 transform transition duration-500 ">
           Chat Aja Kalau Perlu
          </h1>
          <p className="text-sm md:text-base mt-2 opacity-90 w-[300px] text-[#191C0C] font-poppins">
            Jadilah yang pertama dapat kabar dari Baraka Ramadhan
          </p>
        </div>

 
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 bg-transparent flex-1 max-w-sm w-full"
        >
          <input
            type="text"
            name="name"
            placeholder="Nama Lengkap"
            required
            className="rounded-xl p-3 w-full border-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          <input
            type="text"
            name="phone"
            placeholder="Pesan"
            required
            className="rounded-xl p-3 w-full border-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          <button
            type="submit"
            className="bg-[#191C0C] text-white font-semibold rounded-full py-3 w-full hover:bg-[#434537] hover:scale-110 transform transition duration-500"
          >
            Hubungi Baraka Ramadhan →
          </button>
        </form>
      </div>
    </div>
  );
}
