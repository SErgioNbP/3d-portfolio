import { celfocus, devoteam, boostit } from "../assets/images";
import {
    aem,
    contact,
    css,
    java,
    express,
    spring,
    git,
    github,
    figma,
    html,
    javascript,
    linkedin,
    mongodb,
    mysql,
    nodejs,
    netflix,
    react,
    maze,
    secret,
    headset,
    todo,
    typewriter,
    vuejs,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: vuejs,
        name: "VueJs",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: aem,
        name: "Adobe Experience Manager",
        type: "CMS",
    },

    {
        imageUrl: spring,
        name: "Spring Boot",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: express,
        name: "Express.js",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Boost IT",
        icon: boostit,
        iconBg: "#dae3fb",
        date: "Aug 2023 - Present",
        points: [
            "Contributed to the development of NOS ecosystem websites, including WOO, WTF, and NOS Cinemas",
            "Utilized a diverse technology stack including Java, JavaScript, HTML, and CSS",
            "Worked within an Agile development environment",
            "Collaborated with cross-functional teams using tools like FIGMA for design and project management"
        ],
    },
    {
        title: "Software Developer",
        company_name: "Devoteam",
        icon: devoteam,
        iconBg: "#feb7c0",
        date: "Feb 2021 - May 2023",
        points: [
            "Worked on a strategic project for the Crédit Agricole group in the banking sector",
            "Performed comprehensive technical analysis and application development",
            "Specialized in Java-based backend development",
            "Contributed to solving complex technical challenges in the financial technology domain"
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Celfocus",
        icon: celfocus,
        iconBg: "#ededed",
        date: "Jan 2018 - Dec 2020",
        points: [
            "Developed projects for Vodafone UK and Vodafone PT using diverse technological stacks",
            "Implemented solutions with Java, Hibernate, and Oracle Database using MVC architecture for Vodafone UK",
            "Built Vodafone PT's eShop using JavaScript and Vue.js on Adobe Experience Manager",
            "Worked effectively in Agile methodologies across multiple international projects"
        ],
    }
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/SErgioNbP',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sergionevespinheiro/',
    }
];

export const projects = [
    {
        iconUrl: netflix,
        theme: 'btn-back-red',
        name: 'Netflix Clone App',
        description: 'A Netflix clone application with video player, gallery, video preview and authentication.',
        link: 'https://netflix-clone-app-rust.vercel.app/',
        git: 'https://github.com/SErgioNbP/netflix-clone-app'
    },
    {
        iconUrl: headset,
        theme: 'btn-back-pink',
        name: 'Metaverse Madness',
        description: 'A Modern Next 13 Website With Framer Motion & Tailwind CSS',
        link: 'https://the-metaverse-madness.netlify.app/',
        git: 'https://github.com/SErgioNbP/metaverse-landing-page'
    },
    {
        iconUrl: todo,
        theme: 'btn-back-yellow',
        name: 'MERN Todo App',
        description: 'Full Stack Todo application using the MERN stack, featuring task management, real-time updates, and responsive design.',
        link: 'https://mern-todo-app-1.netlify.app/',
        git: 'https://github.com/SErgioNbP/todo-mern-app',
    },
    {
        iconUrl: maze,
        theme: 'btn-back-green',
        name: 'Maze Game with Matter.js',
        description: 'Interactive web-based maze game that generates random labyrinths using Matter.js physics engine, using W A S D keys as controls.',
        link: 'https://maze-matter-js-sergionbp.vercel.app/',
        git: 'https://github.com/SErgioNbP/maze-matter-js/',
    },
    {
        iconUrl: secret,
        theme: 'btn-back-blue',
        name: 'Secret Message Sharing App',
        description: 'Web application that allows users to create encrypted, self-destructing messages that can be shared via unique URL links and viewed one time.',
        link: 'https://secret-message-sergionbp.vercel.app/',
        git: 'https://github.com/SErgioNbP/secret-message',
    },
    {
        iconUrl: typewriter,
        theme: 'btn-back-black',
        name: 'Text Similarity API',
        description: 'API that enables developers to programmatically compare text similarities with easy-to-use authentication and light and dark modes.',
        link: 'https://text-similarity-api-seven.vercel.app/',
        git: 'https://github.com/SErgioNbP/text-similarity-api'
    }
];

import {
    estrela,
    papoa,
    rossim,
    silva,
    canoa,
    tejo,
    scotland,
    arelho,
    pessegueiro,
    avestruz,
    podence,
    cabras,
    bezerro,
} from '../assets/images/photography';

export const photographyCollections = [
    {
        name: "Landscape Portraits",
        description: "Capturing the unique landscapes and natural beauty of Portugal.",
        images: [estrela, papoa, rossim],
        link: "/gallery/landscapes"
    },
    {
        name: "Natural Wonders",
        description: "Exploring the diverse ecosystems and wildlife of the region.",
        images: [silva, canoa, pessegueiro],
        link: "/gallery/nature"
    },
    {
        name: "Local Culture",
        description: "Documenting the rich cultural heritage and local scenes.",
        images: [scotland, tejo, arelho],
        link: "/gallery/culture"
    },
    {
        name: "Wild Encounters",
        description: "Showcasing Portugal's amazing wildlife and its untamed side.",
        images: [avestruz, podence, cabras, bezerro],
        link: "/gallery/wildlife"
    }
];

export const NAV_LINKS = [
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/photography', label: 'Photography' }
];