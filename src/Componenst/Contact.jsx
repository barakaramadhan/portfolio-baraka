import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_djye3as",
        "template_6uke406",
        form.current,
        "n9P75okMv4FaNljhV"
      )
      .then(
        () => {
          form.current.reset();

          // === SUCCESS ALERT (Modern Clean) ===
          Swal.fire({
            title: "Pesan Terkirim!",
            text: "Baraka Ramadhan akan segera membalas.",
            icon: "success",
            background: "#ffffff",
            color: "#1C1C1C",
            showConfirmButton: false,
            timer: 2300,
            customClass: {
              popup: "rounded-2xl shadow-lg border border-gray-200",
              title: "text-lg font-semibold",
              htmlContainer: "text-sm",
            },
          });
        },
        () => {
          // === ERROR ALERT (Modern Clean) ===
          Swal.fire({
            title: "Gagal Terkirim",
            text: "Coba lagi nanti ya.",
            icon: "error",
            background: "#ffffff",
            color: "#1C1C1C",
            confirmButtonColor: "#1C1C1C",
            customClass: {
              popup: "rounded-2xl shadow-lg border border-gray-200",
              title: "text-lg font-semibold",
              htmlContainer: "text-sm",
            },
          });
        }
      );
  };

  return (
    <div
      id="Contact"
      className="flex justify-center items-center bg-[#D1CBB2]  pt-[100px] pb-[100px] px-3 md:pt-[150px] md:pb-[150px] mpx-4 md:px-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white/70 shadow-xl border border-white/40 
        flex flex-col md:flex-row justify-between items-center w-full max-w-5xl 
        gap-10 rounded-3xl p-10"
      >
        {/* Text Area */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-left flex-1"
        >
          <h1 className="font-bebas text-[36px] md:text-[48px] text-[#514E3D] leading-tight">
            Chat Aja <span className="bg-[#FE8425] px-1 text-white">Kalau Perlu</span>
          </h1>
          <p className="text-sm md:text-base opacity-90 font-poppins text-[#4A4A4A] mt-2">
            Jadilah Orang Pertama Yang Menghubungi Saya.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          ref={form}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 flex-1 max-w-md w-full"
        >
          {/* Nama */}
          <div className="flex flex-col gap-2">
            <label className="font-poppins text-sm pl-1 text-[#1C1C1C]/70">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="rounded-xl p-3 w-full bg-white shadow-sm border border-gray-200 
              focus:outline-none focus:ring-2 focus:ring-[#1C1C1C]/30 transition"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="font-poppins text-sm pl-1 text-[#1C1C1C]/70">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="rounded-xl p-3 w-full bg-white shadow-sm border border-gray-200 
              focus:outline-none focus:ring-2 focus:ring-[#1C1C1C]/30 transition"
            />
          </div>

          {/* Pesan */}
          <div className="flex flex-col gap-2">
            <label className="font-poppins text-sm pl-1 text-[#1C1C1C]/70">
              Pesan
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className="rounded-xl p-3 w-full bg-white shadow-sm border border-gray-200 
              focus:outline-none focus:ring-2 focus:ring-[#1C1C1C]/30 transition resize-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-[#514E3D] text-white font-semibold rounded-xl py-3 w-full 
            hover:bg-[#191C0C] hover:scale-[1.02] active:scale-[0.98] 
            transition-all duration-300"
          >
            Kirim Pesan →
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
}
