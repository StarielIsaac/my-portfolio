import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { createTransport } from "nodemailer";
import cors from "cors";

dotenv.config();

const port = 5174;
const app = express();

app.use(cors());

// Configuração do body-parser para processar dados do formulário
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota para enviar o email
app.post("", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    // Configuração do transporte do Nodemailer (configure de acordo com o seu serviço de email)
    const transporter = createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Conteúdo do email
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: "Contato do Site",
      html: `
        <p>Nome: ${firstName} ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Telefone: ${phone}</p>
        <p>Mensagem: ${message}</p>
      `,
    };

    // Enviar o email
    await transporter.sendMail(mailOptions);

    // Responder com sucesso
    console.log(mailOptions);
    res.status(200).json({ code: 200, message: "Email enviado com sucesso" });
  } catch (error) {
    // Responder com erro
    res.status(500).json({
      code: 500,
      message: "Ocorreu um erro, por favor, tente novamente mais tarde",
    });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
