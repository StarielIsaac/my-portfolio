import { useState } from "react";
import { FiCopy, FiDownload } from "react-icons/fi";
import TrackVisibility from "react-on-screen";

function About() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmailToClipboard = () => {
    const email = "seu-email@example.com";
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section className="about w-full py-20 text-slate-200 bg-slate-500 flex flex-col md:flex-row justify-center items-center">
      <div className="container mx-auto px-10 flex flex-col md:flex-row md:space-x-8 items-center">
        {/* Foto */}
        <TrackVisibility>
          {({ isVisible }) => (
            <div className="animate-bounce-slow-mt w-full md:w-3/4 mb-8 md:mb-0">
              <img
                className={`w-full h-auto rounded-full shadow-lg border-4 border-gray-700 ${
                  isVisible ? "animate-zoomIn" : ""
                }`}
                src="../img/my.jpeg"
                alt="Minha Foto"
              />
            </div>
          )}
        </TrackVisibility>

        {/* Descrição */}
        <div className="md:w-2/3">
          <div className="flex items-center">
            <span className="text-3xl mr-2">➤</span>
            <p className="font-bold tracking-wider">
              DESENVOLVEDOR FRONT-END | BACK-END | FULLSTACK{" "}
            </p>
          </div>
          <p className="text-3xl mt-4">
            Desenvolvedor Front-end e Back-end com experiências em React, Node,
            Js, Ts, Python, C#, Express e Docker.
          </p>
          <p className="mt-4">
            Meu nome é Stariel Isaac, tenho 22 anos e atuo na área de
            desenvolvimento há mais de 1 ano. Possuo experiência como
            freelancer, e estou buscando uma primeira oportunidade no mercado
            como desenvolvedor Jr.
          </p>
          <p className="mt-4">
            Logo abaixo tem o meu currículo com informações mais detalhadas
            sobre mim. Se preferir, podemos marcar uma call através do meu
            e-mail que está disponibilizado.
          </p>

          {/* Botões */}
          <div className="flex flex-col md:flex-row mt-6 space-y-4 md:space-y-0 md:space-x-4 items-center md:justify-start">
            <a href="caminho/para/seu/curriculo.pdf" download>
              <button className=" bg-blue-500 text-white font-semibold py-4 px-7 rounded-lg hover:bg-blue-600">
                Baixar CV
                <FiDownload className="inline-block ml-1" />
              </button>
            </a>
            <button
              className={`bg-green-500 text-white font-semibold py-4 px-7 rounded-lg hover:bg-green-600 ${
                emailCopied ? "bg-green-600" : ""
              }`}
              onClick={copyEmailToClipboard}
            >
              {emailCopied ? "Email copiado!" : "Copiar email"}
              <FiCopy className="inline-block ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
