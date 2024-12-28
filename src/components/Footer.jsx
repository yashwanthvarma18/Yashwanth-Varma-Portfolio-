import { motion } from "framer-motion";

const footerLinks = [
  { label: "About", target: "#hero" },
  { label: "Technologies", target: "#technologies" },
  { label: "Projects", target: "#projects" },
  { label: "Experience", target: "#experience" },
  { label: "Education", target: "#education" },
  { label: "Contact", target: "#contact" },
];

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.2,
    },
  }),
};

const smoothScroll = (target, duration = 1000) => {
  const targetElement = document.querySelector(target);
  if (!targetElement) return;

  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;

    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else {
      window.scrollTo(0, targetPosition);
    }
  };
  const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame(animation);
};

const Footer = () => {
  return (
    <div className="border-t border-stone-900 pb-10 px-6 sm:px-10 md:px-16">
      <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-10 items-center space-y-4 sm:space-y-0 mt-6">
        {footerLinks.map((link, index) => (
          <motion.a
            key={link.label}
            onClick={(e) => {
              e.preventDefault();
              smoothScroll(link.target, 100);
            }}
            variants={linkVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            className="text-stone-300 hover:text-white text-sm sm:text-lg cursor-pointer"
          >
            {link.label}
          </motion.a>
        ))}
      </div>
      <div className="text-center mt-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs sm:text-sm tracking-wide text-gray-400"
        >
          &copy; {new Date().getFullYear()} Yashwanth Varma. All rights reserved.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs sm:text-sm tracking-wide text-gray-400"
        >
          Created with ❤️
        </motion.p>
      </div>
    </div>
  );
};

export default Footer;
