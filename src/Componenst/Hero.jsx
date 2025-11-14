import { motion } from "framer-motion";
import Koma from "../Assets/img/koma.png";
import User from "../Assets/img/User.png";

export default function Hero() {
  return (
    <div
      id="Home"
      className="flex justify-center items-center bg-[#D1CBB2] min-h-screen flex-col -mt-[20px] max-sm:mb-[100px] md:mt-0 md:mb-[80px]"
    >
      {/* Wrapper agar animasi rapi */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        {/* BARAKA */}
        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-bebas text-[120px] text-[#191C0C] font-semibold md:text-[250px] relative"
        >
          BARAKA
        </motion.h1>

        {/* FOTO USER */}
        <motion.img
          src={User}
          alt=""
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="w-[400px] absolute z-10 max-sm:hidden"
        />

        {/* RAMADHAN */}
        <motion.div
          initial={{ opacity: 0, rotate: -6, y: 50 }}
          animate={{ opacity: 1, rotate: 7, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.45 }}
          className="
            md:animate-goyang
            md:bg-[#FE8425] md:pt-[45px] md:h-[120px]
            md:px-[30px] md:-mt-[50px] md:mb-[50px]
            md:rotate-[7deg] md:z-20 inline-block
          "
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.55 }}
            className="
              font-bebas text-[100px] text-[#434537] font-semibold -mt-[70px]
              md:text-[120px] md:text-white
              animate-goyangMobile md:animate-none
            "
          >
            RAMADHAN
          </motion.h1>
        </motion.div>
      </motion.div>

      {/* TEXT BAWAH */}
      <motion.div
        className="flex flex-col justify-center ml-[10px] mt-[10px] md:-ml-[80px]"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {/* KOMAT KOMAT */}
        <motion.div
          className="flex gap-1 mb-1"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <img src={Koma} alt="" className="w-[10px] h-[10px]" />
          <img src={Koma} alt="" className="w-[10px] h-[10px]" />
        </motion.div>

        {/* DESKRIPSI */}
        <motion.p
          className="text-start w-[350px] text-poppins font-semibold text-[15px] md:text-[20px] md:w-[500px]"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          Menciptakan desain yang sederhana, bermakna, dan mudah digunakan.
        </motion.p>
      </motion.div>
    </div>
  );
}
