import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiTailwindcss,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiC,
  SiCplusplus,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs, FaPython, FaHtml5, FaCss3, FaGit, FaJsSquare } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
      duration: duration,
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl lg:text-5xl tracking-tighter font-semibold text-white"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-8"
      >
        {/* Programming Languages */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <SiC className="text-7xl text-[#0077B5] neon-glow" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <SiCplusplus className="text-7xl text-[#00599C] neon-glow" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <FaPython className="text-7xl text-[#f8cc2e] neon-glow" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <FaHtml5 className="text-7xl text-[#E44D26] neon-glow" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <FaCss3 className="text-7xl text-[#1572B6] neon-glow" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <FaJsSquare className="text-7xl text-[#F7DF1E] neon-glow" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <FaNodeJs className="text-7xl text-[#3fdd30] neon-glow" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <RiReactjsLine className="text-7xl text-[#61DBFB] neon-glow" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <TbBrandNextjs className="text-7xl text-white neon-glow" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <SiTailwindcss className="text-7xl text-[#38BDF8] neon-glow" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <SiTensorflow className="text-7xl text-[#FF6F00] neon-glow" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <SiPandas className="text-7xl text-[#308eed] neon-glow" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <SiScikitlearn className="text-7xl text-[#faa631] neon-glow" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <SiNumpy className="text-7xl text-[#2C6BC0] neon-glow" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <BiLogoPostgresql className="text-7xl text-[#336791] neon-glow" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <SiMongodb className="text-7xl text-[#1c7d1e] neon-glow" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <FaGit className="text-7xl text-[#F05032] neon-glow" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
