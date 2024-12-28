import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <motion.div
            className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7],
              x: [-50, 50, -50],
              y: [-20, 50, -20],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          ></motion.div>
        </div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <div id="hero"><Hero /></div>
        <div id="technologies"><Technologies /></div>
        <div id="projects"><Projects /></div>
        <div id="experience"><Experience /></div>
        <div id="education"><Education /></div>
        <div id="contact"><Contact /></div>
        <Footer />
      </div>
    </div>
  );
};

export default App;