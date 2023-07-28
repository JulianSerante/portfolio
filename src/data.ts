import {HiDesktopComputer} from 'react-icons/hi'
import {FaServer, FaDatabase} from 'react-icons/fa'
import { IService } from './type'


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
    }
]