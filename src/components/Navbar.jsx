import logo from "../assets/atharvaLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/">
                    <img className="mx-2 w-10" src={logo} alt="logo" />
                </a>
            </div>
            <div className="mr-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/imatharva" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/ImAtharva4907" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/real_atharvaa" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://twitter.com/imatharvaaa" target="_blank" rel="noopener noreferrer">
                    <FaSquareXTwitter />
                </a>
                <a href="https://leetcode.com/imatharva" target="_blank" rel="noopener noreferrer">
                    <SiLeetcode />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
