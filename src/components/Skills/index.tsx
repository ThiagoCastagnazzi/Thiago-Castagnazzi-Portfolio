import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Habilidades
      </h3>

      <div className="flex flex-col items-center justify-center space-y-5">
        <div className="flex flex-col items-center justify-center space-y-5">
          <div
            className="
            grid grid-cols-4 gap-5 items-center justify-center
          "
          >
            <img
              src="/images/responsive-design.png"
              alt="CSS"
              className="w-20"
            />
            <img src="/images/figma.png" alt="FIGMA" className="w-20" />
            <img src="/images/html.png" alt="HTML" className="w-20" />
            <img src="/images/css.png" alt="CSS" className="w-20" />
            <img src="/images/sass.png" alt="SASS" className="w-20" />
            <img src="/images/bootstrap.png" alt="BOOTSTRAP" className="w-20" />
            <img
              src="/images/tailwind-css.png"
              alt="TAILWINDCSS"
              className="w-20"
            />
            <img src="/images/js.png" alt="JAVASCRIPT" className="w-20" />
            <img
              src="/images/typescript.png"
              alt="TYPESCRIPT"
              className="w-20"
            />
            <img src="/images/react.png" alt="React" className="w-20" />
            <img src="/images/nextjs.png" alt="NEXTJS" className="w-20" />
            <img src="/images/vue.png" alt="VUE" className="w-20" />
            <img src="/images/git.png" alt="GIT" className="w-20" />
            <img src="/images/github.png" alt="GITHUB" className="w-20" />

            <img src="/images/java.png" alt="JAVA" className="w-20" />
            <img src="/images/mysql.png" alt="MYSQL" className="w-20" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
