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
  leet
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
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Tata Elxsi",
    icon: iit,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "Lead the development efforts for a client project with Renault Nissan, managing 9 key features from requirements gathering to developer testing.",
      "Spearheaded the creation of high-level and low-level designs for the assigned features, ensuring alignment with project objectives and client specifications.",
      "Utilized Static Analysis techniques to enhance code quality and identify potential issues, contributing to the overall robustness of the project.",
      "In addition to my ongoing client project, I also dedicate time to working on a couple of internal projects while undergoing training.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "News Portal",
    description:
      "A real-time web-based application that displays news and its categories, along with the source, date, and time.",
    tags: [
      {
        name: "HTML/CSS,JS",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "FastAPI",
        color: "pink-text-gradient",
      },
    ],
    image: news,
    source_code_link: "https://github.com/Amanguptaprog/News-Project",
  },
  {
    name: "Yoga Site",
    description:
      "Web application that enables users to register for yoga classes at three different levels and also lets you connect to other social media",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: yoga,
    source_code_link: "https://github.com/Amanguptaprog/Yoga-site",
  },
  {
    name: "Pokemon Kingdom",
    description:
      "A frontend catalog application uses ”PokeAPI” to show trending Pokemon details and characteristics in cards.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: poke,
    source_code_link: "https://github.com/Amanguptaprog/Pokemon-Catalouge",
  },
  {
    name: "To-do List",
    description:
      "A simple To-do List using reactJS",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/Amanguptaprog/ToDoList-",
  },
  {
    name: "Pintrest Clone",
    description:
      "A printrest clone allows user to login and upload pictures from their devices.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pintrest,
    source_code_link: "https://github.com/Amanguptaprog/Pintrest-clone",
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
    icon: leet,
    source: "https://www.geeksforgeeks.org/user/piyushraj249/"
  },
];

export { services, technologies, experiences, testimonials, projects, contact };
