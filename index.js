const express = require("express");
const app = express();

app.use(express.json());

// rota principal
app.get("/", (req, res) => {
  res.send("Backend rodando 🚀");
});

// NOVA ROTA
app.post("/enviar", (req, res) => {
  const { nome, telefone, mensagem } = req.body;

  const texto = `Nome: ${nome}\nTelefone: ${telefone}\nMensagem: ${mensagem}`;

  const url = `https://wa.me/55SEUNUMEROAQUI?text=${encodeURIComponent(texto)}`;

  res.json({ link: url });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
