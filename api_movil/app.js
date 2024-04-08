const express = require("express");
const cors = require("cors");
const http = require('http');

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer((req, res) => {
    console.log("Probando backend con react native")
    // Configurar la cabecera de la respuesta con el código de estado 200 (OK) y el tipo de contenido
    const jsonResponse = { mensaje: "Hola Mundo" };
    
    // Configurar la cabecera de la respuesta con el código de estado 200 (OK) y el tipo de contenido
    res.writeHead(200, {'Content-Type': 'application/json'});
    
    // Enviar la respuesta al cliente como un objeto JSON
    res.end(JSON.stringify(jsonResponse));
  });

  
// Definir el puerto en el que el servidor escuchará las solicitudes
const PORT = process.env.PORT || 3000;

// Iniciar el servidor y escuchar en el puerto especificado
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});
  