import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  C,
  python,
  sql,
  iit,
  news,
  poke,
  pintrest,
  yoga,
  todo,
  github,
  linkedin,
  leet,
  geeks,
  Tata_Elxsi,
  c,
  nit,
  gssc,
  power,
  dict,
  face,
  tic,
  portfolio
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: C,
  },
  {
    name: "Python",
    icon: python,
  },

  {
    name: "HTML 5",
    icon: html,
  },

  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "SQL",
    icon: sql,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Tata Elxsi",
    icon: Tata_Elxsi,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "Lead the development efforts for a client project with Renault Nissan, managing 9 key features from requirements gathering to developer testing.",
      "Spearheaded the creation of high-level and low-level designs for the assigned features, ensuring alignment with project objectives and client specifications.",
      "Utilized Static Analysis techniques to enhance code quality and identify potential issues, contributing to the overall robustness of the project.",
      "In addition to my ongoing client project, I also dedicate time to working on a couple of internal projects while undergoing training.",
    ],
  },
  {
    title: " Internship Co-ordinator",
    company_name: "NIT Srinagar",
    icon: nit,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - May 2022",
    points: [
      "Managed internship programs, coordinating between departments and interns.",
      "Identified opportunities, screened candidates, and facilitated onboarding.",
      "Supported interns throughout their tenure",
    ],
  },
  {
    title: "Open Source Contributor",
    company_name: "Girls Script Summer of Code ",
    icon: gssc,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Actively participated in open-source projects, collaborating with diverse teams.",
      "Provided code, documentation, and support to enhance project functionality.",
      "Engaged in discussions and code reviews to improve project outcomes.",
      "Merged my Project.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "Developed a responsive portfolio website showcasing project and Skills.Implemented contact forms and integrated social media links for enhanced connectivity",
    tags: [
      {
        name: "HTML/CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "ReactJS",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Piyush-Aman/Portfolio",
  },
  {
    name: "Dictionary Application",
    description:
      "Multilingual Support: Provides comprehensive dictionary functionality in 12 languages, catering to diverse user needs",
    "Dark Mode Interface: Oers a visually appealing and user-friendly dark mode interface, enhancing usability especially in low-light environments.",
    "Extensive Word Database: Includes an extensive database of words and their meanings, ensuring accurate and reliable translations across languages",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
      {
        name: "Axios/Material UI",
        color: "blue-text-gradient",
      },
    ],
    image: dict,
    source_code_link: "https://github.com/Piyush-Aman/Dictionary",
  },
  {
    name: "Tic-Tac-Toe",
    description:
      "HTML Structure: Structured the game layout using HTML to depict the game board and user interface components.",
    " CSS Styling: Employed CSS for visual enhancements, including the board layout, X and O markers, and game controls.",
    "Interactive Gameplay: Implemented JavaScript for game logic, enabling player moves, win detection,and tie conditions",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: tic,
    source_code_link: "https://github.com/Piyush-Aman/Tic-Tac-Toe",
  },
  {
    name: " TE_SWS_FACE",
    description:
      " Handling 9 Key Feature in ongoing project at TATA Elxsi for Renault-Nissan, undertaking the following tasks",
    "Requirements Specification,High-Level Design, Low-Level Design,Coding, Static Analysis,Gap Analysis and Developer Testing",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "Requirement gathering",
        color: "green-text-gradient",
      },
      {
        name: "High Level / Low Level Design",
        color: "pink-text-gradient",
      },
    ],
    image: face,
    source_code_link: "",
  },
  {
    name: "Power Window Implementation",
    description:
      " Executed a Power Window Implementation project in compliance with ASPICE standards, encompassing development phases up to testing utilizing gtest  ",
    " With Different mode Auto/Manual and Managing Obstacles and Voltage drop in between",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "Requirement gathering",
        color: "green-text-gradient",
      },
      {
        name: "High Level / Low Level Design",
        color: "pink-text-gradient",
      },
      {
        name: "C++",
        color: "blue-text-gradient",
      },
    ],
    image: power,
    source_code_link: "",
  }
];
const contact = [
  {
    title: "Linkedin",
    icon: linkedin,
    source: "https://www.linkedin.com/in/aman-kumar-94bb6b1b5/"
  },
  {
    title: "Github",
    icon: github,
    source: "https://github.com/Piyush-Aman"
  },
  {
    title: "GeeksForGeeks",
    icon: geeks,
    source: "https://www.geeksforgeeks.org/user/piyushraj249/"
  },
];

export { services, technologies, experiences, testimonials, projects, contact };
