import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl max-sm:text-base">
        Sobre
      </h3>

      <motion.img
        src="/images/profile.jpg"
        alt="Foto de Perfil"
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-40 h-40 mt-8 -mb-20 md:mb-0 flex-shrink-0 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10 text-center">
        <h4 className="text-4xl font-semibold">
          Aqui esta um <span className="">pequeno</span> Resumo
        </h4>
        <p className="text-base">
          Eu sou o Thiago. Venho codando a mais ou menos 3 anos até o momento.
          Como Desenvolvedor Front-end trabalhei em Startup com tecnologias como
          ReactJS, NextJS, VueJS, SCSS, Docker, Kanban e entre outros. Estudo
          todo dia para aprimorar minhas habilidades e conhecimentos não só em
          Linguagens de Computadores, mas também na tecnologia como um todo.
        </p>
      </div>
    </div>
  );
}
