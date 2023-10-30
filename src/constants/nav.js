import { AiOutlineProfile } from "react-icons/ai";
import { BsPersonFillGear, BsTelephone } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import {SiBloglovin} from 'react-icons/si'

export const navLinks = [
    {
      key: "portfolio",
      title: "Portfolio",
      link:'/portfolio',
      icon:BsPersonFillGear,
    },
    {
      key: "about",
      title: "About",
      link:"/about",
      icon:TfiWrite
    },
    {
      key: "services",
      title: "Services",
      link:"/services",
      icon: AiOutlineProfile
    },
    {
      key: "blogs",
      title: "Blogs",
      link:"https://reblatesols.com/",
      icon: SiBloglovin
    },
    {
      key: "contact",
      title: "Contact",
      link:"/contact",
      icon: BsTelephone
    },
  ];