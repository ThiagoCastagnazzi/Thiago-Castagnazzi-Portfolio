import { motion } from "framer-motion";
import { useEffect } from "react";
import { api } from "../../services/axios";

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projetos
      </h3>

      <div className="relative w-full felx overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20"></div>

      <div className="w-full absolute top-[30%] bg-white/100 h-[500px] -skew-y-12 max-w-7xl mx-auto left-0 right-0" />
    </motion.div>
  );
}
