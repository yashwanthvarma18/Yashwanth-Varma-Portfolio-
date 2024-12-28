import { motion } from "framer-motion";
import { Education as EducationData } from "../constants";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1, 
      staggerChildren: 0.5 
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.5 } 
  }
};

const Education = () => {
  return (
    <div className="container mx-auto" id="education">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl lg:text-5xl tracking-tighter font-semibold text-white">Education</motion.h2>
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        variants={containerVariants}
        className="mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30 backdrop-blur-xl bg-opacity-20 bg-white/10"
      >
        {EducationData.map((education, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`py-6 flex items-center justify-between ${
              index !== EducationData.length - 1 ? "border-b border-stone-50/30" : ""
            }`}
          >
            <div className="flex items-center">
              <img
                src={education.image}
                alt={education.name}
                className="h-12 w-12 rounded-full lg:h-16 lg:w-16 object-cover"
              />
              <h3 className="px-6 text-lg lg:text-2xl">{education.name}</h3>
            </div>
            <div className="text-md font-semibold lg:text-xl">
              <span>{education.experience}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;
