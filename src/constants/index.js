import {
  frontend,
  backend,
  devops,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  docker,
  postgresql,
  graphql,
  freshShop,
  sponsro,
  chegg,
  credflow,
  mongoDb,
  ezycare, 
  testing,
  freelance
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
    content:"Proficient in HTML, CSS, React, Redux and familiar with Tailwind, NextJs with overall experience more than 1.5 yr in Frontend Development"
  },
  {
    title: 'Backend Developer',
    icon: backend,
    content:"Proficient in NodeJs, Typescript, ExpressJs, SQL, MongoDb, Sequelize, Redis and familiar with Prisma, Python, Django with overall experience more than 1.5 yr in Backend Development"
  },
  {
    title: 'Dev Operations',
    icon: devops,
    content:"Familiar with Docker, Kubernetics, AWS (Lambda, EC2, S3, Automated Jobs) with experience more than 1 yr in DevOps Tech"
  },
  {
    title: 'Automation Testing',
    icon:testing ,
    content:"Familiar with Robot Framework with experience of over 1 yr in Automation Testing"
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'MongoDb',
    icon: mongoDb,
  },
]

const experiences = [
  {
    title: 'Software Developer',
    company_name: 'Freelance',
    icon: freelance,
    iconBg: '#333333',
    date: 'June 2024',
    brief: "Working on variety of full-stack developments from developments, deployments to client satisfaction. Creating connections via connecting with projects from clients over world wide. Getting hands on experience on latest market techs. Handling everything single handly and keeping client satisfaction on top."
  },
  {
    title: 'Software Developer',
    company_name: 'Credflow',
    icon: credflow,
    iconBg: '#333333',
    date: 'Jan 2023 - April 2024',
    brief: "As a key contributor, I have managed microservices and third-party integrations, developed REST APIs, and optimized various product features including cron jobs, automated tasks, Redis, and database-to-file system processes. My role involved collaborating with cross-functional teams to ensure seamless integration of new technologies and solutions, while also providing technical guidance and mentorship to junior team members. Notable achievements include a 70% reduction in database expenses and significant improvements in user experience through faster compilation times. Additionally, I have received commendations from senior management for my coding structure, optimization efforts, and delivery of bug-free features."
  },
  {
    title: 'Subject matter Expert',
    company_name: 'Chegg',
    icon: chegg,
    iconBg: '#333333',
    date: 'Mar 2022 - June 2022',
    brief: "My role involved providing expert knowledge and solutions in my field of expertise to support students in their learning journey. I developed right, detailed solutions for textbook problems and responded to student queries, ensuring clarity and accuracy. Additionally, I collaborated with other experts to review and improve content, contributing to a rich, reliable knowledge base. My achievements include maintaining a high accuracy rate in my solutions, receiving consistently positive feedback from students, and helping to increase student satisfaction and engagement through timely and insightful assistance."
  },
]

const projects = [
  {
    id: 'project-1',
    name: 'EzyCare | Doctor is Live',
    description: 'A medical apppointment and consultancy platform',
    tags: [
      {
        name: 'ReactJs',
        color: 'blue-text-gradient',
      },
      {
        name: 'NodeJs',
        color: 'green-text-gradient',
      },
      {
        name: 'Prisma',
        color: 'yellow-text-gradient',
      },
      {
        name: 'Docker',
        color: 'pink-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'orange-text-gradient',
      },
      {
        name: 'Redux',
        color: 'teal-text-gradient',
      },
    ],
    image: ezycare,
    repo: 'https://github.com/BFurious/EzyCare_frontend',
    demo: 'https://ezy-care.vercel.app/',
  },
  {
    id: 'project-2',
    name: 'FreshShop',
    description: 'An Self-made E-commerce Website',
    tags: [
      {
        name: 'EJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'MongoDb',
        color: 'green-text-gradient',
      },
      {
        name: 'NodeJs',
        color: 'pink-text-gradient',
      },
      {
        name: 'Docker',
        color: 'yellow-text-gradient',
      },
    ],
    image: freshShop,
    repo: 'https://github.com/BFurious/Freshshop',
    demo: 'https://freshshop-tp39.onrender.com/',
  },
  {
    id: 'project-3',
    name: 'Sponsro',
    description: 'A platform to give and find Sponsorship',
    tags: [
      {
        name: 'EJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'NodeJs',
        color: 'green-text-gradient',
      },
      {
        name: 'Docker',
        color: 'pink-text-gradient',
      },
    ],
    image: sponsro,
    repo: 'https://github.com/BFurious/Sponsro-a-Sponsor-Management',
    demo: 'https://sponsro-latest.onrender.com/',
  },
]

export { services, technologies, experiences, projects }
