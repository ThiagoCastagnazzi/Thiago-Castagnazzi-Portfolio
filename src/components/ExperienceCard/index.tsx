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
    <article className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200">
      <motion.img
        src={companyImg}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-20 h-20 rounded-full object-cover object-center"
      />
      <div className="px-0 md:px10 flex flex-col items-center space-y-4">
        <h4 className="text-4xl font-light text-center max-sm:text-2xl">
          {title}
        </h4>
        <p className="font-semibold text-2xl max-sm:text-xl">{company}</p>
        <div className="flex space-x-2 my-2">
          {technologies
            ? technologies.map((technology, index) => (
                <img
                  key={index}
                  src={technology}
                  alt="Tecnolgia"
                  className="w-10 h-10 rounded-full object-cover object-center xl:w-7 xl:h-7"
                />
              ))
            : null}
        </div>
        <p>
          Inicio em {initialDate} até {finalDate}
        </p>

        <ul className="list-disc text-left space-y-4 ml-5 text-lg max-sm:text-sm list-none">
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
