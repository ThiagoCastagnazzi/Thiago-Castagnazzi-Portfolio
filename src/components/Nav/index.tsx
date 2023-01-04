import Link from "next/link";
import { motion } from "framer-motion";

export default function Nav() {
  return (
    <div className="text-gray-500 absolute bottom-0 p-5 flex flex-row items-center justify-center z-50 backdrop-blur-sm mx-auto my-auto left-0 right-0 max-w-7xl max-[520px]:hidden">
      <motion.button whileHover={{ scale: 1.1 }}>
        <Link href="#about" className="heroButton">
          Sobre
        </Link>
      </motion.button>
      <motion.button whileHover={{ scale: 1.1 }}>
        <Link href="#experience" className="heroButton">
          Experiencia
        </Link>
      </motion.button>
      <motion.button whileHover={{ scale: 1.1 }}>
        <Link href="#skills" className="heroButton">
          Habilidades
        </Link>
      </motion.button>
      <motion.button whileHover={{ scale: 1.1 }}>
        <Link href="#projects" className="heroButton">
          Projetos
        </Link>
      </motion.button>
    </div>
  );
}
