const express = require("express");
const bodyParser = require("body-parser")
const calculadora = require("./calculadora");

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post("/soma", (req, res) => {
  const { body: {a, b} } = req;
  res.json({reposta: calculadora.soma(a, b)});
});

app.post("/subtracao", (req, res) => {
  const { body: {a, b} } = req;
  res.json({reposta: calculadora.subtrai(a, b)});
});

app.post("/multiplicacao", (req, res) => {
  const { body: {a, b} } = req;
  res.json({reposta: calculadora.multiplica(a, b)});
});

app.post("/divisao", (req, res) => {
  const { body: {a, b} } = req;
  res.json({resposta: calculadora.divide(a, b)});
});

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));
