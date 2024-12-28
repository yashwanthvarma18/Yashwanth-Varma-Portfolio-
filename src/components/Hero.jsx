import profilePic from "../assets/yash.jpg";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

// Container motion variants for animating the entire Hero section
const containerVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.5,
    },
  },
};

// Child motion variants for animating individual elements inside the Hero section
const childVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        {/* Profile Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="Yashwanth Varma"
              className="border border-stone-900 rounded-3xl shadow-lg" // Added shadow for a more polished look
              width={650}
              height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }} // Adjusted delay for smooth entry
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:items-start">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10 px-4 lg:px-0"
          >
            {/* Name */}
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter lg:text-7xl"
            >
              Yashwanth Varma
            </motion.h2>

            {/* Role */}
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>

            {/* Description */}
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Optional Resume Button (uncomment if needed) */}
            {/* <motion.a
              variants={childVariants}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10 hover:shadow-lg"
            >
              Download Resume
            </motion.a> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
