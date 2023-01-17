import { motion } from "framer-motion";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";

export default function ContactMe() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl max-sm:text-base">
        Contato
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Entre em contato comigo para conversarmos sobre projetos, ideias e
          oportunidades.
        </h4>

        <div>
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-5 w-5 text-gray-300 animate-pulse" />
            <p>
              <a href="tel:+5567998309537">+55 67 99830-9537</a>
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-5 w-5 text-gray-300 animate-pulse" />
            <p>
              <a href="mailto:thiagocastagnazzi@gmail.com">
                thiagocastagnazzi@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-5 w-5 text-gray-300 animate-pulse" />
            <p>
              Nova Andradina MS,{" "}
              <span className="font-semibold text-lg">Brasil</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
