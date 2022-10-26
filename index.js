const express = require("express");

const app = express();

app.get("/", (req, res) =>
  res.sendFile(require("path").join(__dirname, "/index.html"))
);
app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));
