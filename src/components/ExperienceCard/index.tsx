import { motion } from "framer-motion";

interface ExperienceCardProps {
  companyImg: string;
  title: string;
  company: string;
  initialDate: string;
  finalDate: string;
  technologies: string[];
  responsibilities: string[];
}

export default function ExperienceCard({
  companyImg,
  title,
  company,
  initialDate,
  finalDate,
  technologies,
  responsibilities,
}: ExperienceCardProps) {
  return (
    <article className="flex flex-col items-center rounded-lg space-y-7 flex-shrink-0 w-[500px] md:w[600px] xl:w-[900px] snap-center bg-[#292929] p-3 hover:opacity-100 opacity-70 transition-opacity cursor-pointer duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-24 h-24 mt-8 rounded-full md:rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src={companyImg}
      />
      <div className="px-0 md:px10 flex flex-col items-center space-y-4">
        <h4 className="text-4xl font-light text-center max-[480px]:text-lg">
          {title}
        </h4>
        <p className="font-semibold text-2xl max-[480px]:text-xl">{company}</p>
        <div className="flex space-x-2 my-2">
          {technologies
            ? technologies.map((technology, index) => (
                <img
                  key={index}
                  src={technology}
                  alt="Tecnolgia"
                  className="w-10 h-10 rounded-full object-cover object-center"
                />
              ))
            : null}
        </div>
        <p>
          Inicio em {initialDate} até {finalDate}
        </p>

        <ul className="list-disc text-left space-y-4 ml-5 text-lg max-[480px]:text-sm max-[480px]:list-none">
          {responsibilities
            ? responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))
            : null}
        </ul>
      </div>
    </article>
  );
}
