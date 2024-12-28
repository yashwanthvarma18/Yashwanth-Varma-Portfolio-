import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import logo from "../assets/Logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const logoVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  const iconsVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };

  const staggerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.nav
      className="flex items-center justify-between py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex items-center">
        <a href="/" aria-label="Home">
          <motion.img
            src={logo}
            className="mx-2"
            width={100}
            height={33}
            alt="Logo"
            variants={logoVariants}
            initial="initial"
            animate="animate"
          />
        </a>
      </div>
      <motion.div
        className="flex items-center justify-center gap-4 text-3xl"
        variants={staggerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.a
          href="https://www.linkedin.com/in/yashwanth-varma/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          variants={iconsVariants}
          whileHover={{
            scale: 1.1,
            color: "#0A66C2",
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
        >
          <FaLinkedin className="text-blue-600 hover:text-blue-800" />
        </motion.a>
        <motion.a
          href="https://github.com/yashwanthvarma18"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          variants={iconsVariants}
          whileHover={{
            scale: 1.1,
            color: "#6e5494",
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
        >
          <FaGithub className="text-white hover:text-gray-500" />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/yashwanth_varma18/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          variants={iconsVariants}
          whileHover={{
            scale: 1.1,
            color: "#e4405f",
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
        >
          <FaInstagram className="text-pink-700 hover:text-pink-300" />
        </motion.a>
        <motion.a
          href="mailto:ch22b024@smail.iitm.ac.in" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Gmail"
          variants={iconsVariants}
          whileHover={{
            scale: 1.1,
            color: "#ea4335",
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
        >
          <SiGmail className="text-red-500 hover:text-red-700" /> {/* Gmail icon */}
        </motion.a>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
