import { ArrowRightCircle } from "react-feather";
import TrackVisibility from "react-on-screen";
import { Link } from "react-router-dom";

function Skills() {
  return (
    <section className="skills w-full py-8 md:py-16 gradient-bg bg-gradient-to-bl via-gray-800 from-slate-700 to-slate-900 text-white">
    <div className="container mx-auto px-5 sm:px-10 md:px-20 text-center">
      {/* Experiência e Projetos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 md:mb-20">
          <div className="flex flex-col items-center space-y-2 transform transition-all hover:scale-105">
            <span className="text-7xl font-extrabold text-slate-blue-fu ">
              +01
            </span>
            <p className="text-xl font-light text-gray-100">
              Ano de Experiência como Desenvolvedor
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 transform transition-all hover:scale-105">
            <span className="text-7xl font-extrabold text-slate-blue-fu">
              +08
            </span>
            <p className="text-xl font-light text-gray-100">
              Projetos Pessoais e Educativos Concluídos
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 transform transition-all hover:scale-105">
            <span className="text-7xl font-extrabold text-slate-blue-fu">
              +01
            </span>
            <p className="text-xl font-light text-gray-100">
              Projeto Freelancer Entregue
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 transform transition-all hover:scale-105">
            <span className="text-7xl font-extrabold text-slate-blue-fu">
              +02
            </span>
            <p className="text-xl font-light text-gray-100"  id="skills">
              Cursos Front-end Concluídos
            </p>
          </div>
        </div>

        {/* Lista de Skills */}
        {/* <h2 className="text-3xl mb-10">Conhecimento</h2> */}
        <div>
        <h2 className="tracking-wider text-xl sm:text-2xl md:text-3xl font-light text-gray-200 my-8 md:my-14">
  <span className="text-xl sm:text-2xl md:text-3xl mr-2 mt-4 sm:mt-0" >➤</span>
  Meus Conhecimentos:
</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            <div className="flex flex-col items-center justify-center space-y-2 hover:bg-slate-600 p-2 rounded-lg transition-colors shadow-md">
              <img src="../img/html.png" alt="HTML5" className="w-12 h-12" />
              <span className="text-base font-light text-gray-100">HTML5</span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 hover:bg-slate-600  p-2 rounded-lg transition-colors shadow-md">
              <img src="../img/css.png" alt="CSS3" className="w-12 h-12" />
              <span className="text-base font-light text-gray-100">CSS3</span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 hover:bg-slate-600  p-2 rounded-lg transition-colors shadow-md">
              <img src="../img/js.png" alt="JavaScript" className="w-12 h-12" />
              <span className="text-base font-light text-gray-100">
                JavaScript
              </span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 hover:bg-slate-600  p-2 rounded-lg transition-colors shadow-md">
              <img
                src="../img/react.png"
                alt="React.js"
                className="w-12 h-12"
              />
              <span className="text-base font-light text-gray-100">
                React.js
              </span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 hover:bg-slate-600  p-2 rounded-lg transition-colors shadow-md">
              <img src="../img/node.png" alt="Node.js" className="w-12 h-12" />
              <span className="text-base font-light text-gray-100">
                Node.js
              </span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 hover:bg-slate-600  p-2 rounded-lg transition-colors shadow-md">
              <img
                src="../img/express.png"
                alt="Express.js"
                className="w-12 h-12"
              />
              <span className="text-base font-light text-gray-100">
                Express.js
              </span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 hover:bg-slate-600  p-2 rounded-lg transition-colors shadow-md">
              <img src="../img/docker.png" alt="Docker" className="w-12 h-12" />
              <span className="text-lg font-light text-gray-100">
                React Native
              </span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 hover:bg-slate-600  p-2 rounded-lg transition-colors shadow-md">
              <img
                src="../img/bootstrap.png"
                alt="Bootstrap"
                className="w-12 h-12"
              />
              <span className="text-lg font-light text-gray-100">
                Bootstrap
              </span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 hover:bg-slate-600  p-2 rounded-lg transition-colors shadow-md">
              <img
                src="../img/tailwind.png"
                alt="Tailwind CSS"
                className="w-12 h-12"
              />
              <span className="text-lg font-light text-gray-100">
                Tailwind CSS
              </span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 hover:bg-slate-600  p-2 rounded-lg transition-colors shadow-md">
              <img src="../img/git.png" alt="Git" className="w-12 h-12" />
              <span className="text-lg font-light text-gray-100">Git</span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 hover:bg-slate-600  p-2 rounded-lg transition-colors shadow-md">
              <img src="../img/python.png" alt="python" className="w-12 h-12" />
              <span className="text-lg font-light text-gray-100">Python</span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 hover:bg-slate-600  p-2 rounded-lg transition-colors shadow-md">
              <img
                src="../img/type.png"
                alt="TypeScript"
                className="w-12 h-12"
              />
              <span className="text-lg font-light text-gray-100">
                TypeScript
              </span>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2 hover:bg-slate-600  p-2 rounded-lg transition-colors shadow-md">
              <img src="../img/prisma.png" alt="prisma" className="w-12 h-12" />
              <span className="text-lg font-light text-gray-100">Prisma</span>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2 hover:bg-slate-600  p-2 rounded-lg transition-colors shadow-md">
              <img src="../img/csharp.png" alt="C#" className="w-12 h-12" />
              <span className="text-lg font-light text-gray-100">C#</span>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2 hover:bg-slate-600  p-2 rounded-lg transition-colors shadow-md">
              <img src="../img/sql.png" alt="Git" className="w-12 h-12" />
              <span className="text-lg font-light text-gray-100">MySQL</span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 hover:bg-slate-600  p-2 rounded-lg transition-colors shadow-md">
              <img
                src="../img/material.png"
                alt="Material UI"
                className="w-12 h-12"
              />
              <span className="text-lg font-light text-gray-100">
                Material UI
              </span>
            </div>
            {/* Adicione outras habilidades conforme necessário */}
          </div>
          <TrackVisibility>
      {({ isVisible }) => (
        <div className="text-center mt-10">
          <p className="text-base md:text-xl text-gray-200">
            Quer ver mais do meu trabalho ou conversar sobre projetos?
          </p>
          <Link to="#connect">
            <button
              className={`animate-bounce-slow-mt mt-4 md:mt-6 bg-blue-500 text-white font-semibold py-2 md:py-4 px-4 md:px-6 rounded-lg hover:bg-blue-600 ${
                isVisible ? "animate-zoomIn" : ""
              }`}
            >
              <span className="">
                Fale comigo
                <ArrowRightCircle size={24} className="inline-block ml-1" />
              </span>
            </button>
          </Link>
        </div>
      )}
    </TrackVisibility>
        </div>
      </div>
    </section>
  );
}

export default Skills;
