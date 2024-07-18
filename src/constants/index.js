import {
  frontend,
  backend,
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
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
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
  },
  {
    title: 'Backend Developer',
    icon: backend,
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
    company_name: 'Credflow',
    icon: credflow,
    iconBg: '#333333',
    date: 'Jan 2023 - April 2024',
  },
  {
    title: 'Subject matter Expert',
    company_name: 'Chegg',
    icon: chegg,
    iconBg: '#333333',
    date: 'Mar 2022 - May 2022',
  },
]

const projects = [
  {
    id: 'project-1',
    name: 'FreshShop',
    description: 'An Self-made E-commerce Website',
    tags: [
      {
        name: 'ejs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'NodeJs',
        color: 'pink-text-gradient',
      },
      {
        name: 'javascript',
        color: 'yellow-text-gradient',
      },
    ],
    image: freshShop,
    repo: 'https://github.com/BFurious/Freshshop',
    demo: 'https://freshshop-tp39.onrender.com/',
  },
  {
    id: 'project-2',
    name: 'Sponsro',
    description: 'A platform to give and find Sponsorship',
    tags: [
      {
        name: 'ejs',
        color: 'blue-text-gradient',
      },
      {
        name: 'NodeJs',
        color: 'green-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'pink-text-gradient',
      },
    ],
    image: sponsro,
    repo: 'https://github.com/BFurious/Sponsro-a-Sponsor-Management',
    demo: 'https://sponsro-latest.onrender.com/',
  },
]

export { services, technologies, experiences, projects }
