import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRightCircle } from "react-feather";
import TrackVisibility from "react-on-screen";
import typecode from "../../img/typecode.png";

const Banner = () => {
  const texts = [
    "programador Front-end.",
    "programador Back-end.",
    "programador Full Stack.",
  ];

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const deltaRef = useRef(300 - Math.random() * 100);
  const period = 1000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, deltaRef.current);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    const i = loopNum % texts.length;
    const fullText = texts[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      deltaRef.current = deltaRef.current / 2;
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      deltaRef.current = period;
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      deltaRef.current = 400;
    }
  };

  return (
    <section
      className="banner w-full min-h-screen max-h-screen flex items-center gradient-bg bg-gradient-to-tl via-gray-800 from-gray-700 to-slate-custom"
      style={{ maxHeight: "100vh" }}
    >
      <div className="container mx-auto px-5 py-10 mt-20 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={`animate__animated ${
                    isVisible ? "animate__fadeIn" : ""
                  }`}
                >
                  <span className="text-base sm:text-lg md:text-xl text-gray-400 block text-center">
                    Bem-vindo ao meu Portfólio
                  </span>
                  <h1 className="text-3xl md:text-base lg:text-2xl xl:text-5xl font-bold text-slate-100 text-center mb-4 md:mb-6 mt-1 md:mt-2">{`Me chamo Stariel, sou ${text}`}</h1>
                  <p className="text-slate-100 text-base sm:text-sm md:text-2xl xl:text-lg tracking-wide text-center mb-4">
                    Sou desenvolvedor Full Stack e tenho paixão por tornar
                    ideias em realidade. Estou aqui para ajudá-lo a criar a
                    experiência perfeita para o seu projeto.
                    Vamos juntos transformar sua ideia em um produto incrível!
                  </p>
                  <Link to="#connect">
                    <button className="animate-bounce-slow-mt mt-4 md:mt-6 bg-blue-500 text-white font-bold py-2 sm:py-3 md:py-4 px-4 sm:px-6 rounded-lg hover:bg-blue-600 block mx-auto">
                      <span className="">
                        Fale comigo
                        <ArrowRightCircle
                          size={24}
                          className="inline-block ml-1"
                        />
                      </span>
                    </button>
                  </Link>
                </div>
              )}
            </TrackVisibility>
          </div>
          <div>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={`text-center md:text-left ${
                    isVisible ? "animate-zoomIn" : ""
                  }`}
                >
                  <img
                    className=" my-img w-full md:w-64 lg:w-72 xl:w-96 m-auto rounded-lg shadow-2xl animate-bounce-slow"
                    src={typecode}
                    alt="Header Img"
                  />
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

