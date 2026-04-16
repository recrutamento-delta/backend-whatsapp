const express = require("express");
const app = express();

app.use(express.json());

app.post("/enviar", (req, res) => {
  const data = req.body;

  let corpo = "📋 MAPEAMENTO DE ATIVIDADES\n\n";
  corpo += "👤 Nome: " + data.nome + "\n";

  data.atividades.forEach((a, i) => {
    corpo += "\n" + (i + 1) + ". " + a.processo;
  });

  const url = "https://wa.me/5519993618849?text=" + encodeURIComponent(corpo);

  res.json({ link: url });
});

app.get("/", (req, res) => {
  res.send("Backend rodando 🚀");
});

app.listen(3000, () => console.log("Servidor rodando"));
