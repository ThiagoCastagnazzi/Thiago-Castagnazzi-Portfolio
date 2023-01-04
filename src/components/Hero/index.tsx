import Image from "next/image";

import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "../BackgroundCircles";
import Link from "next/link";

export default function Hero() {
  const [text] = useTypewriter({
    words: ["<Olá, meu nome é Thiago Castagnazzi />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-6 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src="/images/profile.jpg"
        alt="Foto de Perfil"
        className="relative rounded-full h-40 w-40 mx-auto object-cover"
      />
      <div>
        <h2 className="text-sm uppercase text-gray-500 tracking-[15px]">
          Desenvolvedor Front-end
        </h2>
        <h1 className="pt-3 text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="text-white text-4xl">{text}</span>
          <Cursor />
        </h1>
      </div>
    </div>
  );
}
