import { useState } from "react";
import contactImg from "../../img/computer1.jpg";
import TrackVisibility from "react-on-screen";

const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Enviar");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Enviando...");
    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });

      setButtonText("Enviar");
      const result = await response.json();
      setFormDetails(formInitialDetails);

      if (result.code === 200) {
        setStatus({ success: true, message: "Mensagem enviada com sucesso" });
      } else {
        setStatus({
          success: false,
          message: "Ocorreu um erro, por favor, tente novamente mais tarde",
        });
      }
    } catch (error) {
      setButtonText("Enviar");
      setStatus({
        success: false,
        message: "Ocorreu um erro, por favor, tente novamente mais tarde",
      });
    }
  };

  return (
<section className="contact gradient-bg bg-gradient-to-bl via-gray-800 from-slate-700 to-slate-900" id="connect">
  <div className="container mx-auto text-gray-200">
    <div className="flex flex-wrap items-center">
      <div className="w-full md:w-1/2">
        <TrackVisibility>
          {({ isVisible }) => (
            <img
              className={isVisible ? "animate-zoomIn" : ""}
              src={contactImg}
              alt="Contact Us"
            />
          )}
        </TrackVisibility>
      </div>
      <div className="w-full md:w-1/2 px-6 py-10">
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={
                isVisible ? "animate__animated animate__fadeIn" : ""
              }
            >
              <h2 className="text-5xl font-semibold mb-8 transform transition-all">
                Fale comigo{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8 inline-block align-middle transition hover:text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  ></path>
                </svg>
              </h2>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-6 text-slate-600"
              >
                <div>
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="Primeiro nome"
                    onChange={(e) =>
                      onFormUpdate("firstName", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 shadow-inner mb-4"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={formDetails.lasttName}
                    placeholder="Sobrenome"
                    onChange={(e) =>
                      onFormUpdate("lastName", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Número"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Mensagem"
                    onChange={(e) =>
                      onFormUpdate("message", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="py-4 px-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform transition-all animate-bounce-slow-mt shadow-md"
                  >
                    <span>{buttonText}</span>
                  </button>
                </div>
                {status.message && (
                  <div>
                    <p
                      className={`text-${
                        status.success ? "green" : "red"
                      }-600 text-center`}
                    >
                      {status.message}
                    </p>
                  </div>
                )}
              </form>
            </div>
          )}
        </TrackVisibility>
      </div>
    </div>
  </div>
</section>
  );
};

export default Contact;
