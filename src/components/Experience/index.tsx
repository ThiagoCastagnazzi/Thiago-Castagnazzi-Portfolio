import ExperienceCard from "../ExperienceCard";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center overflow-hidden"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experiencias
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <ExperienceCard
          companyImg="/images/mercado-radar.png"
          company="Mercado Radar"
          title="Desenvolvedor Front-end"
          initialDate="03/2022"
          finalDate="o Momento"
          technologies={[
            "/images/react.png",
            "/images/vue.png",
            "/images/js.png",
          ]}
          responsibilities={[
            "Migração do Front-end de VueJS para ReactJS",
            "Manutenção de Código",
            "Transformar Layouts em Código",
          ]}
        />
        <ExperienceCard
          companyImg="/images/mega-informatica.png"
          company="Mega Informática"
          title="Analista de Suporte Técnico Computacional"
          initialDate="08/2020"
          finalDate="03/2022"
          technologies={[
            "/images/team-viewer.png",
            "/images/technical-support.png",
          ]}
          responsibilities={[
            "Suporte Técnico Computacional",
            "Revenda de Sistemas",
            "Treinamento de Funcionários, Clientes e Parceiros",
            "Visitas Agendadas",
          ]}
        />
        <ExperienceCard
          companyImg="/images/ganso-sistemas.png"
          company="Ganso Sistemas"
          title="Analista de Suporte Técnico Computacional"
          initialDate="04/2019"
          finalDate="04/2020"
          technologies={[
            "/images/team-viewer.png",
            "/images/technical-support.png",
          ]}
          responsibilities={[
            "Suporte Técnico Computacional",
            "Treinamento de Clientes",
            "Visitas Agendadas",
          ]}
        />
      </div>
    </motion.div>
  );
}
