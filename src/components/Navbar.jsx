import logo from "../assets/kevinRushLogo.png";
import cv from "../assets/socials/cv.png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div>
        <img className="mx-2 w-20" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a target="_blank" href="https://drive.google.com/file/d/1GdrEMpBQMAiSsJSk12IcUrJifan3KvkY/view?usp=drive_link"><img className="w-[24px]" src={cv} alt="cv" /></a>
        <a target="_blank" href="https://www.linkedin.com/in/aadityarathod7"><FaLinkedin/></a>
        <a target="_blank" href="https://www.github.com/aadityarathod7"><FaGithub/></a>
        <a target="_blank" href="https://www.instagram.com/aadityarathod7"><FaInstagram/></a>
        <a target="_blank" href="https://x.com/aadityarathod7"><FaSquareXTwitter/></a>
    </div>
  </nav>
};

export default Navbar