import logo from "../assets/atharvaLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

// Trailhead SVG Icon from src/assets/trailhead.svg
const TrailheadIcon = ({ className }) => (
    <svg
        fill="currentColor"
        viewBox="0 0 52 52"
        className={className || "w-[1em] h-[1em] inline-block align-middle"}
        xmlns="http://www.w3.org/2000/svg"
    >
        <polygon points="12.3,37 9.7,40 14.8,40" />
        <polygon points="14.7,43.1 19.8,43.1 17.2,40.2" />
        <polygon points="35.2,41 37.7,38.1 40.3,41" />
        <path d="M26.8,2.2c-0.4-0.2-0.9-0.2-1.4,0C11.1,8.2,1.9,22.4,2.2,38v3.4c0,0.5,0.2,1,0.7,1.4 c6.9,4.6,15,7.1,23.3,7.2H27h0.1c7.9-0.3,15.7-2.7,22.3-7.2c0.4-0.3,0.7-0.8,0.7-1.4V38C50.4,22.4,41.2,8.2,26.8,2.2z M13.9,14.8 c5.8-6.9,12.3-9.2,12.3-9.2c1.4,0.6,16.9,6.7,20.2,26.4h-4.1l-7.8-11.3c-0.5-0.7-1.6-0.9-2.4-0.4c-0.2,0.1-0.3,0.3-0.4,0.4l-2,2.8 l-5.5-7.9c-0.5-0.7-1.6-0.9-2.4-0.4c-0.2,0.1-0.3,0.3-0.4,0.4L10.2,31.9L6.1,32C7.3,24.5,10.4,19,13.9,14.8z M38.1,32h-4.7H28 l2.6-3.8l2.4-3.6L38.1,32z M23.7,20.9L23.7,20.9L23.7,20.9l4,5.7l-3.8,5.3h-1h-8.6l4.1-6.1l4.3-6.4l0,0L23.7,20.9z M27.5,44 L27.5,44l-1.5,2.6c-2.9,0-5.6-0.4-8.8-1.1l0,0c-4.1-1-8-2.7-11.6-4.9v-2.5c0-0.8,0-1.7,0.1-2.6h7.5h10.1c-1.4,2.1-0.7,4.9,1.5,6.2 c0.2,0.1,0.4,0.2,0.5,0.3l1.6,0.7C27.5,42.9,27.7,43.5,27.5,44z M46.8,40.5c-2.6,1.6-5.3,2.9-8.1,3.9c0,0-0.5,0.2-0.7,0.2 c-1.6,0.5-3.2,0.9-4.9,1.3c-0.9,0.2-1.9,0.3-2.8,0.4l0.3-0.5c1.3-2.2,0.5-4.9-1.7-6.2c-0.1-0.1-0.3-0.1-0.4-0.2l-1.6-0.7 c-0.5-0.2-0.8-0.8-0.5-1.4c0-0.1,0.1-0.2,0.1-0.2l1.5-1.7H31h15.7c0,0.8,0.1,1.7,0.1,2.6L46.8,40.5z" />
    </svg>
);

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/">
                    <img className="mx-2 w-10" src={logo} alt="logo" />
                </a>
            </div>
            <div className="mr-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/imatharva" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="flex items-center">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/ImAtharva4907" target="_blank" rel="noopener noreferrer" title="GitHub" className="flex items-center">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/real_atharvaa" target="_blank" rel="noopener noreferrer" title="Instagram" className="flex items-center">
                    <FaInstagram />
                </a>
                <a href="https://twitter.com/imatharvaaa" target="_blank" rel="noopener noreferrer" title="Twitter / X" className="flex items-center">
                    <FaSquareXTwitter />
                </a>
                <a href="https://leetcode.com/imatharva" target="_blank" rel="noopener noreferrer" title="LeetCode" className="flex items-center">
                    <SiLeetcode />
                </a>
                <a
                    href="https://www.salesforce.com/trailblazer/imatharva"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Salesforce Trailhead"
                    className="flex items-center"
                >
                    <TrailheadIcon />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
