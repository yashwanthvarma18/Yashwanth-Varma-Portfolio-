import { PROJECTS } from "../constants"; // Ensure PROJECTS is properly imported
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

const Projects = () => {
  return (
    <div className="pb-24">
      {/* Projects Section Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl lg:text-5xl tracking-tighter font-semibold text-white"
      >
        Projects
      </motion.h2>

      {/* Project List */}
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:justify-center lg:items-start gap-8">
            {/* Project Image with Hover Effect */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="flex justify-center relative group"
              style={{ width: "250px", height: "250px" }}
            >
              <div
                className="relative overflow-hidden rounded-lg w-full h-full"
                style={{
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.8), 0 5px 15px rgba(0, 0, 0, 0.5)",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay with GitHub Link */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300"
                  >
                    <div className="flex items-center">
                      <span>View on GitHub</span>
                      <MdArrowOutward />
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Project Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl"
            >
              <h3 className="mb-4 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mb-6 text-stone-400">{project.description}</p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="mr-2 mb-2 rounded bg-stone-900 px-4 py-2 text-sm font-medium text-stone-300 transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-500"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: techIndex * 0.2, // Staggered animation for each tech
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
