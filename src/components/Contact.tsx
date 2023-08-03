import { useState } from "react";
import contactImg from "../../img/computer1.jpg";
import TrackVisibility from "react-on-screen";

interface StatusType {
  success: boolean;
  message: string;
}

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
  const [status, setStatus] = useState<StatusType>({ success: false, message: "" });

  const onFormUpdate = (category: string, value: string) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setButtonText("Enviando...");
    try {
      const response = await fetch("http://localhost:5174", {
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
        <div className="w-full md:w-1/2 px-4 md:px-8">
          <TrackVisibility>
            {({ isVisible }) => (
              <img
                className={`rounded-2xl ${isVisible ? "animate-zoomIn" : ""}`}
                src={contactImg}
                alt="Contact Us"
              />
            )}
          </TrackVisibility>
        </div>
        <div className="w-full md:w-1/2 px-4 md:px-8 py-6 md:py-10">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible ? "animate__animated animate__fadeIn" : ""
                }
              >
                <h2 className="text-3xl md:text-5xl font-semibold mb-6 md:mb-8 transform transition-all">
                  Fale comigo{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="animate-bounce w-6 h-6 md:w-8 md:h-8 inline-block align-middle transition hover:text-blue-600"
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
                      placeholder="Primeiro nome:"
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 shadow-inner mb-4"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={formDetails.lastName}
                      placeholder="Sobrenome:"
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
                      placeholder="Email:"
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      value={formDetails.phone}
                      placeholder="Número:"
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={6}
                      value={formDetails.message}
                      placeholder="Mensagem: (Ex: Gostaria de solicitar a criação de um projeto)"
                      onChange={(e) =>
                        onFormUpdate("message", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="py-4 px-8 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform transition-all animate-bounce-slow-mt shadow-md"
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
