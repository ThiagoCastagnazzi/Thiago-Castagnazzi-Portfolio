import { SocialIcon } from "react-social-icons";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-50 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.linkedin.com/in/thiagocastagnazzi/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/ThiagoCastagnazzi"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/thiago_castagnazzi/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.facebook.com/thiagocastagnazzi/"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center"
      >
        <Link legacyBehavior href="mailto:thiagocastagnazzi@gmail.com" passHref>
          <div className="flex flex-row items-center cursor-pointer">
            <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
              Entre em Contato
            </p>
          </div>
        </Link>
      </motion.div>
    </header>
  );
}
