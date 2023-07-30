import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightCircle } from 'react-feather';
import TrackVisibility from 'react-on-screen';
import typecode from '../../img/typecode.png';

const Banner = () => {
  const texts = ['desenvolvedor Front-end', 'desenvolvedor Back-end', 'desenvolvedor Full Stack'];

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const deltaRef = useRef(300 - Math.random() * 100);
  const period = 1400;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, deltaRef.current);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    const i = loopNum % texts.length;
    const fullText = texts[i];
    const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      deltaRef.current = deltaRef.current / 2;
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      deltaRef.current = period;
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      deltaRef.current = 400;
    }
  };

  return (
    <section className="banner w-full h-screen gradient-bg bg-gradient-to-b from-gray-950 to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={`animate__animated ${isVisible ? 'animate__fadeIn' : ''}`}>
                  <span className="text-lg text-gray-600">Bem vindo ao meu Portfólio</span>
                  <h1 className="text-4xl font-bold text-slate-200 mb-4">{`Me chamo Stariel, sou ${text}`}</h1>
                  <p className="text-gray-800 mb-4">Sou amante da Tecnologia, gosto de trabalhar em equipe, criar meus próprios projetos e desenvolver aplicações úteis para facilitar a vida das pessoas.</p>
                  <p className="text-gray-800">Estudando as principais tecnologias requisitadas pelo mercado, atualmente busco um novo desafio, me tornar desenvolvedor Full Stack.</p>
                  <Link to="#connect">
                    <button className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600">
                      <span className="effect-blue">Fale comigo</span><ArrowRightCircle size={30} />
                    </button>
                  </Link>
                </div>
              )}
            </TrackVisibility>
          </div>
          <div>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={`animate-bounce-slow ${isVisible ? 'animate-zoomIn' : ''}`}>
                  <img className="w-full rounded-lg shadow-lg" src={typecode} alt="Header Img" />
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