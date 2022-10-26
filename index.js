const express = require("express");


const app = express();

app.get('/', (req, res) => 
res.send('<h1 style="color: blue">Criadoo</h1>')
);
app.listen(3000, () => 
console.log('Servidor iniciado na porta 3000')
);