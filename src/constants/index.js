import project1 from "../assets/projects//project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";



import IITM from "../assets/projects/IITM.png";
import Thiru from "../assets/projects/Tiru.png";
import SFS from "../assets/projects/SFS.png";

export const HERO_CONTENT = `I am a skilled full-stack developer with over 2 years of experience creating scalable, high-performance web applications. My expertise spans front-end technologies like React.js, Next.js, and Framer Motion, as well as back-end frameworks such as Node.js, Express.js, and databases like PostgreSQL and MongoDB. With a strong foundation in Artificial Intelligence and Machine Learning, I excel in solving complex problems in data structures and algorithms, with proven success on platforms like LeetCode, Codeforces, and CodeChef. I am committed to delivering innovative solutions that enhance user satisfaction and drive business success.`;


export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "OpenSource Contributor",
    company: "",
    description: ` Actively contributed to several prominent open-source organizations, including FreeCodeCamp, Ezmail, and Stake-frontend, delivering impactful solutions that enhanced project functionality.\n Consistently provided high-quality, well-documented code that improved the overall codebase quality to 97%, driving higher maintainability and efficiency.\n Demonstrated proficiency in version control systems like Git, ensuring effective collaboration and seamless code management across multiple teams and projects.\n Actively participated in open-source events both within colleges and externally, including Hacktoberfest, fostering community engagement and contributing to the growth of open-source ecosystems.`,
    technologies: ["Python", "React.js", "JavaScript", "UI/UX"],
  }
];

export const PROJECTS = [
  {
    title: "TaskWave", 
    subtitle: "Streamlined Team Task Management", 
    image: project1,
    description: 
      "TaskWave is a feature-rich web application designed to simplify team task management. Built with the MERN stack (MongoDB, Express.js, React, Node.js), it offers intuitive task assignment, progress tracking, and collaboration tools. The platform includes role-based access control, secure authentication, and productivity-enhancing dashboards for administrators and users alike.",
    technologies: [
      "React", 
      "Redux Toolkit", 
      "Tailwind CSS", 
      "Node.js", 
      "Express.js", 
      "MongoDB", 
      "JWT", 
      "Headless UI"
    ],
    githubLink: "https://github.com/yashwanthvarma18/TASKWAVE",
  }
  
  ,
  {
    title: "NovaConnect | Realtime HD Video Calling Web App",
    image: project2,
    description: 
      "NovaConnect delivers crystal-clear HD video calls with a user-friendly interface and a robust WebRTC-powered foundation. Achieve seamless communication with 90% reduced latency and optimized performance for real-time collaboration.",
    technologies: ["HTML", "CSS", "JavaScript", "WebRTC"],
    githubLink: "https://github.com/yashwanthvarma18/NovaConnect"
  },  
 
  {
    title: "CIPHER-CHAT | Intelligent Chat Bot",
    image: project3,
    description: 
      "CIPHER-CHAT is an innovative chatbot developed to enhance user engagement with advanced conversational AI. Designed with a sleek, intuitive UI, it achieves 95% user satisfaction. Built using HTML, CSS, JS, Node.js, Express.js, EJS, and GPT-3.5 API, the app provides seamless, interactive functionality.",
    technologies: ["HTML", "CSS", "JavaScript", "EJS", "Node.js", "Express.js", "GPT-3.5 API"],
    githubLink: "https://github.com/yashwanthvarma18/CIPHER-CHAT-CHAT-BOT-"
  }
  ,  
  {
    title: "Portfolio Website",
    image: project4,
    description: 
      "A modern, minimalist portfolio website that elegantly showcases projects, skills, and education. Designed with a focus on clean aesthetics and functionality, it leverages ReactJS, Tailwind CSS, and Framer Motion to provide smooth animations, responsive layouts, and a visually appealing user experience.",
    technologies: ["ReactJS", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/user/weather-app"
  }
  
  
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
export const Education = [
  {
    image: IITM,
    name: "Indian Institute of Technology Madras (IITM)",
    experience: "2026",
  },
  {
    image: Thiru,
    name: "Tirumala IIT & MEDICAL ACADEMY",
    experience: "2022",
  },
  {
    image: SFS,
    name: "St. Francis School (SFS)",
    experience: "2020",
  },
];
