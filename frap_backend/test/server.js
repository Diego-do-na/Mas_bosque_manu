const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
// aqui pondre todos los use con el endpoint y las variables declaradas iguales al archivo

app.listen(port, () => {
    console.log("Conexion establecida en puerto " + port);
}); 