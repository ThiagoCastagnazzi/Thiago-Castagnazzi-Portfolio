import { motion } from "framer-motion";
import ProjectsData from "./ProjectsData";

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projetos
      </h3>

      <div
        className="
        relative
        w-full
        flex
        overflow-x-scroll
        overflow-y-hidden
        snap-x
        snap-mandatory
        z-20
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-gray-500/40
      "
      >
        <ProjectsData
          link="https://solution-company.vercel.app/"
          title="Solution Company"
          description="E-commerce"
          image="https://cdn.discordapp.com/attachments/389224091686666240/1064978170169798686/Solution-Company.PNG"
        />
        <ProjectsData
          link="https://thiago-castagnazzi-portfolio.vercel.app/"
          title="Portfolio"
          description="Projeto para mostrar um pouco sobre a minha pessoa e meus projetos"
          image="https://cdn.discordapp.com/attachments/389224091686666240/1064978244593528923/Portfolio_Home.PNG"
        />
        <ProjectsData
          link="https://mks-frontend-challenge-phi.vercel.app/"
          title="MKS Challenge"
          description="Desafio de Front-end da MKS"
          image="https://cdn.discordapp.com/attachments/389224091686666240/1080886015117508668/image.png"
        />
        <ProjectsData
          link="https://github.com/ThiagoCastagnazzi/ignews"
          title="ig news"
          description="Projeto de blog para assinatura de conteúdo feito junto ao curso da Trilha de React da Rocketseat"
          image="https://cdn.discordapp.com/attachments/389224091686666240/1064978494100086864/1666009862286.png"
        />
        <ProjectsData
          link="https://mrsa-phi.vercel.app/"
          title="MRSA"
          description="Jogo de plataforma 2D feito com HTML, CSS e JavaScript"
          image="https://cdn.discordapp.com/attachments/389224091686666240/1064979562548711444/image.png"
        />
      </div>

      <div className="w-full absolute top-[25%] bg-white/100 h-[500px] -skew-y-12 max-w-7xl mx-auto left-0 right-0" />
    </motion.div>
  );
}
