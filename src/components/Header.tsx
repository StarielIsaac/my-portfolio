import { useState } from "react";
import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";
import brSvg from "../../img/br.svg";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar bg-slate-900 text-gray-100 shadow-lg py-4 sm:py-6 px-4 sm:px-8 lg:px-16 flex justify-between items-center fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a
            href="#home"
            className="navbar-brand text-2xl sm:text-4xl font-semibold text-yellow-50 hover:scale-105 transition-transform"
          >
            Stariel .F
          </a>
          <ul className="navbar-nav hidden sm:flex items-center space-x-4 md:space-x-8 ml-4 md:ml-8">
            <li className="nav-item text-white">
              PT/BR{" "}
              <img
                className="w-6 inline-block ml-1"
                src={brSvg}
                alt="Header Img"
              />
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className={`navbar-toggler ${
              isMobileMenuOpen ? "active" : ""
            } p-2 focus:outline-none focus:ring`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div
          className={`lg:hidden absolute top-14 right-0 left-0 bg-slate-900 w-full ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="navbar-nav flex flex-col items-center space-y-4">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                Início
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">
                Habilidades
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">
                Projetos
              </a>
            </li>
          </ul>
          <div className="social-icon flex items-center space-x-4 justify-center my-4">
            <a
              href="https://www.linkedin.com/in/stariel-isaac/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin className="w-7 h-7 text-gray-200 hover:text-blue-500 transition" />
            </a>
            <a
              href="https://github.com/StarielIsaac"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub className="w-7 h-7 text-gray-200 hover:text-slate-400 transition" />
            </a>
            <a
              href="https://www.instagram.com/starielisaac/?igshid=ZDdkNTZiNTM%3D"
              target="_blank"
              rel="noreferrer"
            >
              <FiInstagram className="w-7 h-7 text-gray-200 hover:text-pink-500 transition" />
            </a>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className={`hidden lg:flex items-center space-x-8`}>
          <ul className="navbar-nav flex items-center space-x-8">
            <li className="nav-item hover:scale-110 transition-transform">
              <a href="#home" className="nav-link ">
                Início
              </a>
            </li>
            <li className="nav-item hover:scale-110 transition-transform">
              <a href="#skills" className="nav-link">
                Habilidades
              </a>
            </li>
            <li className="nav-item hover:scale-110 transition-transform">
              <a href="#projects" className="nav-link">
                Projetos
              </a>
            </li>
          </ul>
          <div className="social-icon flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/stariel-isaac/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin className="w-7 h-7 text-gray-200 hover:text-blue-500 transition" />
            </a>
            <a
              href="https://github.com/StarielIsaac"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub className=" w-7 h-7 text-gray-200 hover:text-slate-400 transition" />
            </a>
            <a
              href="https://www.instagram.com/starielisaac/?igshid=ZDdkNTZiNTM%3D"
              target="_blank"
              rel="noreferrer"
            >
              <FiInstagram className="w-7 h-7 text-gray-200 hover:text-pink-500 transition" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
