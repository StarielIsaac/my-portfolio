import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h4 className="text-2xl font-bold">Stariel .F</h4>
            <p className="text-sm text-gray-300">Fale comigo: stariel.fernandesdev@gmail.com</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/stariel-isaac/" target="_blank" rel="noopener noreferrer">
              <FiLinkedin className="animate-bounce-slow-mt text-white w-6 h-6" />
            </a>
            <a href="https://github.com/StarielIsaac" target="_blank" rel="noopener noreferrer">
              <FiGithub className="animate-bounce-slow-mt text-white w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/starielisaac/?igshid=ZDdkNTZiNTM%3D" target="_blank" rel="noopener noreferrer">
              <FiInstagram className="animate-bounce-slow-mt text-white w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center md:text-right">
          <p className="text-sm text-gray-300">Desenvolvido por <strong className="text-blue-400 text-base">Stariel Isaac</strong></p>
          <p className="text-xs text-gray-500">© 2023 Todos os direitos reservados</p>
          <p className="text-xs text-gray-500"><a href="/politica-de-privacidade">Política de Privacidade</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;