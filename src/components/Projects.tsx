import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderComponent from "./SliderComponent";

import trivia from "../../img/trivia.png";
import back from "../../img/back.jpg";
import recipe from "../../img/recipe.png";
import wars from "../../img/starwars.png";
import clean from "../../img/clean.png";


const tunes = [
  {
    name: "Jogo de Trivia",
    type: "Front-end",
    message: "Algumas das Tecnologias que usei:",
    techStack:
      "React JS, Redux, RTL(React Testing Library), Material UI, StyleLint, ESLint Figma, Trello e Kanban..",
    githubLink: "https://github.com/StarielIsaac/project14-trivia-react-redux",
    icons: [trivia] // Certifique-se de que os nomes das imagens estejam corretos aqui
  },
  {
    name: "Recipes App",
    type: "Front-end",
    message: "Algumas das Tecnologias que usei:",
    techStack:
      "React JS, JavaScript, Css, Context API, Redux, RLT (React Testing Library)",
    githubLink: "https://github.com/StarielIsaac/project16-recipes-app",
    icons: [recipe], // Certifique-se de que os nomes das imagens estejam corretos aqui
  },
  {
    name: "Trybe Smith",
    type: "Back-end",
    message: "Algumas das Tecnologias que usei:",
    techStack:
      "Typescript, Node, Express, JWT, MySQL, Docker, Docker Compose, Nodemon e outros...",
    githubLink: "https://github.com/StarielIsaac/project23-trybesmith",
    icons: [back], // Certifique-se de que os nomes das imagens estejam corretos aqui
  }, 
  {
    name: "Motta Clean",
    type: "Front-end",
    message: "Algumas das Tecnologias que usei:",
    techStack:
      "React, JavaScript, Vite, Tailwind Css, Vercel e outros...",
    githubLink: "https://github.com/StarielIsaac/ecommerce-upholstery-cleaning",
    icons: [clean], // Certifique-se de que os nomes das imagens estejam corretos aqui
  },
  {
    name: "Trybe Futebol Clube (TFC)",
    type: "FullStack",
    message: "Algumas das Tecnologias que usei:",
    techStack:
    "Typescript, Node, Express, Sequelize, JWT, MySQL, Docker, Docker Compose, Joi, express-async-errors e outros...",
    githubLink: "https://github.com/StarielIsaac/project25-trybe-futebol-clube",
    icons: [back], // Certifique-se de que os nomes das imagens estejam corretos aqui
  },
  {
    name: "StarWars Planets",
    type: "Front-end",
    message: "Algumas das Tecnologias que usei:",
    techStack:
      "React js, Context API, Hooks, useEffect, CSS3 e outros...",
    githubLink: "https://github.com/StarielIsaac/project15-starwars-planets-search",
    icons: [wars], // Certifique-se de que os nomes das imagens estejam corretos aqui
  },
];

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="py-8 gradient-bg bg-gradient-to-l via-gray-800 from-gray-700 to-slate-custom">
      <div className="container mx-auto px-8 my-8 bg">
        <h2 className="text-6xl font-bold text-gray-200 text-center mb-4">
          Portfolio
        </h2>
        <p id="projects" className="text-xl text-gray-200 text-center">
          Confira alguns dos meus últimos projetos.
        </p>

        {/* Aqui colocamos o componente Slider dentro do slide */}
        <Slider
          {...settings}
          className="my-16 border-2 border-black bg-slate-custom-fu bg-opacity-40 rounded-xl"
        >
          {tunes.map((project, index) => (
            <div
              key={index}
              className="flex flex-wrap items-center justify-center gap-8 mt-6"
            >
              <div className="w-full">
                <div className="text-center">
                  <h3 className="text-6xl font-extrabold text-gray-100 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-xl text-gray-300 mb-5">{project.type}</p>
                  <p className="text-xl text-gray-200 mb-3">
                    {/* <span className="text-3xl mr-2 animate-pulse">➤</span> */}
                    {project.message}
                  </p>
                  <p className="px-6 text-xl font-medium text-gray-100 tracking-wide">
                  <span className="text-2xl mr-4 animate-pulse">➤</span>
                    {project.techStack}
                  </p>            
                </div>
              </div>
              <div className="w-full my-10">
                <SliderComponent images={project.icons} />
              </div>
              <div className="flex justify-center items-center ">
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="animate-bounce-slow-mt inline-block mb-6 px-8 py-4 text-lg font-extrabold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                >
                  Dê uma olhada
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-2 inline-block "
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.8 2.5 1.3 3.1 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.3 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.6 3.3-1.3 3.3-1.3.6 1.7.2 3-.1 3.3.7.9 1.2 2 1.2 3.3 0 4.6-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6A12 12 0 0012 0z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Projects;
