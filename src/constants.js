// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';

import isteLogo from './assets/experience_logo/iste.png';


// Project Section Logo's
import attendancelogo from "./assets/work_logo/attendance.png"
import eduappLogo from "./assets/work_logo/eduapp.png"
import obsidianLogo from "./assets/work_logo/obsidian.png"




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
    ],
  },
];

export const codingprofiles=[
  {
    id:0,
    // img:codeforcesLogo,
    platform:'CodeForces',
    rating:'1089',
  },
  {
    id:1,
    // img:codechefLogo,
    platform:'codeChef',
    rating:'1421',
  },
  {
    id:0,
    // img:leetcodeLogo,
    platform:'LeetCode',
    rating:'1089',
  }

]
 export const experiences = [
   {
     id: 0,
     date: "2025",
     img: isteLogo,
     role: "4th rank",
     company: "Smart Interviews contest",
     desc: "",
     skills: [
       "DSA",
       "Problem Solving",
       "Time Management",
     ],
   },
   {
     id: 2,
     date: "2025",
     img: isteLogo,
     role: "9 TH position   (BEST ONE)",
     company: "Smart Interviews DashBoard",
     desc: "",
     skills: [
      "DSA",
       "Problem Solving",
       "Time Management",
     ],
   },
 {
    id: 1,
    date: "2025",
    img: isteLogo,
    role: " Volunteer",
    company: "Indian Society for Technical Education",
    desc: "",
    skills: [
      "Professional Development",
      "Technical Learning", 
      "Networking",
      "Industry Exposure",
    ],
  },
  {
    id: 3,
    date: "2025",
    img: isteLogo,
    role: "Selected for 2nd round",
    company: "TechnoVista Hackathon",
    desc: "",
    skills: [
      "Web Development",
      "Technical Learning", 
      // "replit",
      "Yolo",
    ],
  },
];
  export const projects = [
    {
      id: 0,
      title: "The  Obsidian Circle",
      description:
        "The Obsidian Circle is a college-only mentorship platform that connects students and alumni for project collaboration and guidance. It helps students showcase verified work and allows alumni to mentor, evaluate contributions, and support referrals in a transparent and structured way",
      image: obsidianLogo,
      tags: ["HTML", " Tailwind CSS", "JavaScript", "React JS", "firebase"],
      github: "https://github.com/Dilip-22r",
      webapp: "",
    },
    {
      id: 1,
      title: "EduApp",
      description:
        "A full-stack AI-based application that combines multiple learning modules, including adaptive learning, AI chatbot support, emotion recognition, and performance analytics using Python-based machine learning models.",
      image: eduappLogo,
      tags: ["React JS", "HTML", " Tailwind CSS", "JavaScript","API"],
      github: "https://github.com/Dilip-22r",
      webapp: "",
    },
    {
      id: 2,
      title: "Attendance Portal ",
      description:
        "A Centralized Permission and Attendance Portal allows students to digitally request approval for attending events and workshops. Faculty and department heads can review and approve requests in one place, ensuring faster processing, clear tracking, and transparent attendance management.",
      image: attendancelogo,
      tags: ["React JS", "HTML", "Tailwind CSS", "JavaScript","Supabase"],
      github: "https://github.com/Dilip-22r",
      webapp: "",
    },

  ];  