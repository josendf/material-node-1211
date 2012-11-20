#!/usr/bin/node
/**
 * Primer ejemplo de servidor http en Node
 *
 * @module server
 */

// La función require() nos permite importar otros módulos.
// En este caso importamos el módulo 'http' incluído en Node.
// Ver http://nodejs.org/api/http.html
var http = require("http");

// Declaramos la dirección IP y el puerto de escucha
var addr = "127.0.0.1";
var port = 3000;

// Creamos un servidor http
var server = http.createServer(function (request, response) {

  // Cuando el servidor recibe una petición http
  // ejecuta esta función.
  // En en el objeto 'request' figuran los datos de la petición
  // y el objeto 'response' nos permite escribir la respuesta.
  console.log("%s %s", request.method, request.url);


  // Escribimos el encabezado http de la respuesta con código 200
  // y tipo 'text/html'
  // Ver http://en.wikipedia.org/wiki/HTTP_response#Responses
  //     http://en.wikipedia.org/wiki/List_of_HTTP_status_codes#2xx_Success
  //     http://en.wikipedia.org/wiki/Content-type
  response.writeHead(200, {"Content-Type": "text/html"});

  // En este caso componemos un documento html de respuesta
  var doc = [
    "<!DOCTYPE html>",
    "<html>",
    "<head><title>Hola</title></head>",
    "<body><h2>Esto es Node.js</h2>",
    "</html>\n"
  ];

  // Finalmente enviamos la respuesta
  return response.end(doc.join("\n"));
});

console.log("Iniciando servidor en %s:%d...", addr, port);

// Ponemos al servidor en escucha
server.listen(port, addr);

console.log("Servidor escuchando, presiona Ctrl-C para salir...");