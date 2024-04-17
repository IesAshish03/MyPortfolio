import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/detection.png";
import Work2 from "./assets/webdesign.png";
import Work3 from "./assets/stock it.jpg";
import Work4 from "./assets/portfolio.png";
import Work5 from "./assets/piceditor.png";
import Work6 from "./assets/photoediting.png";
import Work7 from "./assets/portfolio.jpg";
import Work8 from "./assets/fitnesspage.png";
import Work9 from "./assets/amazon clone logo.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Ashish",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Kumar",
  },

  {
    id: 3,
    title: "Age : ",
    description: "26 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indian",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Patna,Bihar",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+91 9955737903",
  },

  {
    id: 8,
    title: "Email : ",
    description: "ieashish03@gmail.com",
  },

  {
    id: 9,
    title: "Linked-in : ",
    description: (
      <a href="https://www.linkedin.com/in/ashish-kumar-5a5b40207/">
        Click Here
      </a>
    ),
  },

  {
    id: 10,
    title: "Languages : ",
    description: "Hindi, English",
  },
];

export const stats = [
  {
    id: 1,
    no: "7+ ",
    title: "Months of <br/> Experience (fresher)",
  },

  {
    id: 2,
    no: "3+",
    title: "Completed <br/> Projects",
  },

  {
    id: 3,
    no: "2+",
    title: "Happy <br/> Clints",
  },

  {
    id: 4,
    no: "5+",
    title: " Awards Won in <br/> Acadmics",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2024 - PRESENT",
    title: "Web Designer Intern <span> Code Bucket Solution Pvt.Ltd </span>",
    desc: "Working on a Project with Frontend Technology.",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2019",
    title: "Summer Internship  <span> Tcs-ion, Bhopal </span>",
    desc: "Learned Python programming language and Worked on a Detection Project with Machine Learning techniques.",
  },

  {
    id: 3,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2022",
    title: "Certification in Full Stack Java <span> Satya Technology</span>",
    desc: "",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2020",
    title: "Bachelor of Engineering <span> IITM, Bhopal </span>",
    desc: "Passed Bachelor of Engineering with Computer Science with 68.50%",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2018",
    title: "Certification in C & C++  <span> Vedisoft </span>",
    desc: "Learned and completed C and C++ programming languages and got A grades",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2015",
    title: " Senior Secondary Education  <span> B.D College, Patna </span>",
    desc: "Completed Senior Secondary Education with 60% marks with PCM",
  },

  {
    id: 7,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2012",
    title: "Secondary Education <span> Govt.High School, NagarNausa </span>",
    desc: "Completed school education with 54.66% in all subjects",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "75",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "71",
  },

  {
    id: 3,
    title: "Css",
    percentage: "72",
  },

  {
    id: 4,
    title: "React",
    percentage: "75",
  },

  {
    id: 5,
    title: "Node-js",
    percentage: "11",
  },

  {
    id: 6,
    title: "Oracle",
    percentage: "55",
  },

  {
    id: 7,
    title: "Java",
    percentage: "60",
  },

  {
    id: 8,
    title: "Jsp & Jdbc",
    percentage: "65",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Detection project",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Object Detection",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "My Acanmic Project",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Python with M.L",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.        .com",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Web Designing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Amazon Page Clone",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Self",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Html & Css",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.      .com",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Stock It ",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Stock It",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "BootCamp Computers",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Python with dbSqlite",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.        .com",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Portfolio",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "My Portfolio",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Self",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React-Js with Css",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.MyPortfolio.com",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Pics Art",
    details: [
      {
        title: "Project : ",
        desc: "Pics Editing",
      },
      {
        title: "Client : ",
        desc: "Self",
      },
      {
        title: "Language : ",
        desc: "MicroSoft designer",
      },
      {
        title: "Preview : ",
        desc: "www.MyPicsArt.com",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dibble.com",
      },
    ],
  },

  {
    id: 7,
    img: Work7,
    title: "Intro Page",
    details: [
      {
        title: "Project : ",
        desc: "Website",
      },
      {
        title: "Client : ",
        desc: "",
      },
      {
        title: "Language : ",
        desc: "React JS",
      },
      {
        title: "Preview : ",
        desc: "",
      },
    ],
  },

  {
    id: 8,
    img: Work8,
    title: "Fitness page ",
    details: [
      {
        title: "Project : ",
        desc: "WebPage",
      },
      {
        title: "Client : ",
        desc: " GymMates",
      },
      {
        title: "Language : ",
        desc: "React Js",
      },
      {
        title: "Preview : ",
        desc: "",
      },
    ],
  },

  {
    id: 9,
    img: Work9,
    title: "Clone page of amazon",
    details: [
      {
        title: "Project : ",
        desc: "Website",
      },
      {
        title: "Client : ",
        desc: "",
      },
      {
        title: "Language : ",
        desc: "Html",
      },
      {
        title: "Preview : ",
        desc: "",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
