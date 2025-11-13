import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_djye3as",
      "template_6uke406",
      form.current,
      "n9P75okMv4FaNljhV"
    )
    .then(
      () => {
        form.current.reset();
        Swal.fire({
          title: 'Pesan Terkirim!',
          text: 'Baraka Ramadhan akan segera membalas.',
          icon: 'success',
          background: '#f5f5f5', // soft grey
          color: '#2c2c2c', // dark text
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
        });
      },
      () => {
        Swal.fire({
          title: 'Gagal Terkirim',
          text: 'Coba lagi nanti ya.',
          icon: 'error',
          background: '#f5f5f5',
          color: '#2c2c2c',
          showConfirmButton: true,
        });
      }
    );
  };

  return (
    <div className="flex justify-center items-center bg-[#E8E5DE] min-h-screen p-5">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl gap-6 bg-white rounded-xl shadow-md p-8">
        
        {/* Bagian text */}
        <div className="text-center md:text-left flex-1">
          <h1 className="font-bebas text-[34px] md:text-[40px] leading-tight text-[#1C1C1C] mb-4">
            Chat Aja Kalau Perlu
          </h1>
          <p className="text-sm md:text-base opacity-90 font-poppins text-[#4A4A4A]">
            Jadilah yang pertama dapat kabar dari Baraka Ramadhan
          </p>
        </div>

        {/* Form */}
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 flex-1 max-w-md w-full"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Nama Lengkap"
            required
            className="rounded-lg p-3 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-800"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
            className="rounded-lg p-3 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-800"
          />

          <textarea
            name="message"
            placeholder="Pesan"
            required
            rows="4"
            className="rounded-lg p-3 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-800 resize-none"
          />

          <button
            type="submit"
            className="bg-[#2C2C2C] text-white font-semibold rounded-full py-3 w-full hover:bg-[#444444] hover:scale-105 transform transition duration-300"
          >
            Kirim Pesan →
          </button>
        </form>
      </div>
    </div>
  );
}
