import {RiComputerLine} from 'react-icons/ri'
import {FaServer, FaDatabase} from 'react-icons/fa'
import { IService } from '../type'


export const services:IService[] = [
    {
        Icon:RiComputerLine,
        title:"Front-End Developer",
        about:'I can build a beautiful and scalable Single-Page Application using <b> HTML </b>, <b>CSS</b>, <b>Javascript</b> and <b>React</b>, with frameworks such as <b>NextJS 13</b> and libraries like <b>Redux</b> or <b> Redux Toolkit </b>'
    },
    {
        Icon:FaServer,
        title:"Back-End Developer",
        about:'I can build a server using frameworks such as <b> Express </b>'
    },
    {
        Icon:FaDatabase,
        title:"Database",
        about:'I can handle SQL databases such as PostgreSQL and No SQL databases like MongoDB'
    }
]