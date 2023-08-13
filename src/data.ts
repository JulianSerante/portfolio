import {HiDesktopComputer} from 'react-icons/hi'
import {FaServer, FaDatabase} from 'react-icons/fa'
import {RiJavascriptFill} from 'react-icons/ri'
import {BiLogoTypescript, BiSolidFileHtml, BiSolidFileCss, BiLogoReact, BiLogoRedux, BiLogoBootstrap, BiLogoTailwindCss, BiLogoNodejs, BiLogoPostgresql, BiLogoMongodb, BiLogoGit, BiCircle} from 'react-icons/bi'
import {SiExpress, SiGithubactions, SiMongodb, SiMongoose, SiNextdotjs, SiPostman, SiSequelize} from 'react-icons/si'
import { MdOutlineWork } from 'react-icons/md'
import { IProject, IService, ISkill } from './type'


export const services:IService[] = [
    {
        Icon:HiDesktopComputer,
        title:"Front-End Developer",
        about:'I can build a beautiful and scalable Single-Page Application using <b> HTML </b>, <b>CSS</b>, <b>Javascript</b> and <b>React</b>, with frameworks such as <b>NextJS 13</b> and libraries like <b>Redux</b> or <b> Redux Toolkit </b>'
    },
    {
        Icon:FaServer,
        title:"Back-End Developer",
        about:'I can build a server using <b> NodeJS</b> as runtime environment and frameworks such as <b> Express </b> '
    },
    {
        Icon:FaDatabase,
        title:"Database",
        about:'I can handle <b> SQL databases </b> such as <b>PostgreSQL</b> and <b>No SQL databases</b> like <b>MongoDB</b>'
    },
    {
        Icon:MdOutlineWork,
        title:"Agile methodologies & workflow",
        about:'I am familiar with agile work methodologies such as <b> SCRUM </b> and with <b>Git Flow</b> as a workflow'
    }
]

export const languages:ISkill[] = [
    {
        name:'JavaScript',
        level:'65%',
        Icon:RiJavascriptFill
    },
    {
        name:'TypeScript',
        level:'55%',
        Icon:BiLogoTypescript
    },
    {
        name:'HTML',
        level:'70%',
        Icon:BiSolidFileHtml
    },
    {
        name:'CSS',
        level:'60%',
        Icon:BiSolidFileCss
    }
]

export const frontend:ISkill[] = [
    {
        name:'React',
        level:'75%',
        Icon:BiLogoReact
    },
    {
        name:'Next.JS',
        level:'70%',
        Icon:SiNextdotjs
    },
    {
        name:'Redux',
        level:'60%',
        Icon:BiLogoRedux
    },
    {
        name:'Bootstrap',
        level:'60%',
        Icon:BiLogoBootstrap
    },
    {
        name:'Tailwind CSS',
        level:'70%',
        Icon:BiLogoTailwindCss
    },
]

export const backend:ISkill[] = [

    {
        name:'NodeJS',
        level:'75%',
        Icon:BiLogoNodejs
    },
    {
        name:'Express',
        level:'70%',
        Icon:SiExpress
    },
]

export const database:ISkill[] = [
    {
        name:'PostgreSQL',
        level:'65%',
        Icon:BiLogoPostgresql
    },
    {
        name:'Sequelize',
        level:'65%',
        Icon:SiSequelize
    },
    {
        name:'MongoDB',
        level:'55%',
        Icon:BiLogoMongodb
    },
    {
        name:'Mongoose',
        level:'50%',
        Icon:SiMongoose
    },
]

export const tools:ISkill[] = [
    {
        name:'Postman',
        level:'80%',
        Icon:SiPostman
    },
    {
        name:'Git',
        level:'70%',
        Icon:BiLogoGit
    },
    {
        name:'MongoDB Atlas',
        level:'65%',
        Icon:SiMongodb
    },
]

export const workMethods:ISkill[] = [
    {
        name:'Git Flow',
        level:'70%',
        Icon:SiGithubactions
    },
    {
        name:'SCRUM',
        level:'85%',
        Icon:BiCircle
    },
]

export const projects:IProject[] = [
    {
        name:"MarketX",
        description:"This app is a result of a groupal proyect. It is a market place specialized in technology wher you can buy, sell, create a user, rate products, etc.",
        image_path:"/images/MarketX.jpeg",
        github_url:"https://github.com/Gabriel20Arr/marketX",
        category:["next", "react", "express", "node", "redux toolkit", "mongo"],
        key_techs:["NextJS 13", "Node.js", "Express", "MongoDB"]
    },
    {
        name:"Pokedex 2.0",
        description:"This Full-Stack SPA is based on Pokemon. It is a pokedex where you can see the data, search for an specific Pokemon, filter the Pokemons and create new Pokemons",
        image_path:"/images/Pokedex.jpeg",
        github_url:"https://github.com/JulianSerante/Pokemon-Client-app",
        githubBack_url:"https://github.com/JulianSerante/Pokemon-Api-app",
        category:["react", "express", "node", "redux", "postgre"],
        key_techs:["React", "Node.js", "Express", "PostgreSQL"]
    },
]