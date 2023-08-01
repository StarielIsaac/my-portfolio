import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderComponent from "./SliderComponent";

import com3 from "../../img/blogs.png";
import com4 from "../../img/starwars.png";
import com2 from "../../img/computer.jpg";
import com1 from "../../img/computer1.jpg";

const tunes = [
  {
    name: "StarWars",
    type: "Front-end",
    message: "Tecnologias e habilidades que usei:",
    techStack:
      "React JS, Styled Components, Redux, API Request, RTL(React Testing Library), Material UI, Figma e outros...",
    githubLink: "https://github.com/seu-usuario/projeto1",
    icons: [com1, com2], // Certifique-se de que os nomes das imagens estejam corretos aqui
  },
  {
    name: "Jogo de trivia",
    type: "Front-end",
    message: "Algumas tecnologias que usei:",
    techStack:
      "React JS, Styled Components, Redux, API Request, RTL(React Testing Library), Material UI, Figma e outros...",
    githubLink: "https://github.com/seu-usuario/projeto1",
    icons: [com3, com4], // Certifique-se de que os nomes das imagens estejam corretos aqui
  },
  // Adicione mais projetos à lista conforme necessário
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
    <section className="py-12 gradient-bg bg-gradient-to-t via-slate-700 from-slate-900 to-slate-900">
      <div className="container mx-auto px-8 my-8 bg">
        <h2 className="text-6xl font-bold text-gray-200 text-center">
          Portfolio
        </h2>
        <p className="text-xl text-gray-200 text-center">
          Confira alguns dos meus últimos projetos.
        </p>

        {/* Aqui colocamos o componente Slider dentro do slide */}
        <Slider
          {...settings}
          className="my-16 border-2 border-black bg-gray-900 bg-opacity-50"
        >
          {tunes.map((project, index) => (
            <div
              key={index}
              className="flex flex-wrap items-center justify-center gap-8 mt-6"
            >
              <div className="w-full">
                <div className="text-center">
                  <h3 className="text-6xl font-extrabold text-gray-200 mb-3">
                    {project.name}
                  </h3>
                  <p className="text-xl text-gray-300 mb-6">{project.type}</p>
                  <p className="text-2xl text-gray-200 mb-3">
                    <span className="text-3xl mr-2 animate-pulse">➤</span>
                    {project.message}
                  </p>
                  <p className="text-xl font-medium text-gray-200">
                    {project.techStack}
                  </p>
                  <a
                    href={project.githubLink}
                    className="animate-bounce-slow-mt inline-block mt-7 px-8 py-3 text-lg font-extrabold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                  >
                    Dê uma olhada
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-2 inline-block"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.8 2.5 1.3 3.1 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.3 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.6 3.3-1.3 3.3-1.3.6 1.7.2 3-.1 3.3.7.9 1.2 2 1.2 3.3 0 4.6-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6A12 12 0 0012 0z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="w-full my-8">
                <SliderComponent images={project.icons} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Projects;
