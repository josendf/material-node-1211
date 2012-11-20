#!/usr/bin/node
/**
 * Primer ejemplo de cliente http en Node
 *
 * @module client
 */

// La función require() nos permite importar otros módulos.
// En este caso importamos el módulo 'http' incluído en Node.
// Ver http://nodejs.org/api/http.html
var http = require("http");

// Construímos un objeto con las opciones de la petición que queremos realizar
var options = {
  "host": "en.wikipedia.org", // El nombre de host o dirección IP
  "port": 80,                 // El número de puerto, por defecto 80 para http
  "path": "/wiki/Node.js",    // La ruta del recurso solicitado
  "method": "GET"             // El método HTTP
  // Ver http://en.wikipedia.org/wiki/HTTP_method#Request_methods
};

// Creamos una petición cliente http
var request = http.request(options, function (response) {

  // Cuando el cliente recibe la respuesta http ejecuta esta función.
  // En el objeto 'response' figuran los datos de la respuesta.

  // Comprobamos el código de respuesta
  // Ver http://en.wikipedia.org/wiki/List_of_HTTP_status_codes#2xx_Success
  var status = response.statusCode;
  var desc = http.STATUS_CODES[status];

  // Comprobamos el tipo de contenido recibido,
  // este dato figura en el encabezado Content-type
  // Ver http://en.wikipedia.org/wiki/HTTP_response
  //     http://en.wikipedia.org/wiki/Content-type
  var tipo = response.headers["content-type"];

  console.log("Respuesta recibida. Código:%d %s Tipo:%s", status, desc, tipo);

  // Ahora nos preparamos a recibir el cuerpo de la respuesta
  // Para ello declaramos un par de variables para acumular la respuesta e
  // instalamos un gestor en el evento 'data' y en el evento 'end'
  var parts = [];
  var partsLen = 0;

  return response.on("data", function (chunk) {

    // Esta función es llamada a medida que se recibe el cuerpo de la respuesta
    // El parámetro 'chunk' es de tipo Buffer y contiene el fragmento de
    // información recibida
    // Ver http://nodejs.org/api/buffer.html
    // También podemos convertir automáticamente a String mediante la función
    // response.setEncoding([encoding])
    // Ver http://nodejs.org/api/stream.html#stream_stream_setencoding_encoding
    partsLen += chunk.length;
    parts.push(chunk);

  }).on("end", function () {

    // Este evento se detona cuando se ha completado la recepción
    // de la respuesta

    // Concatenamos los fragmentos de respuesta recibida
    var body = Buffer.concat(parts, partsLen);

    // Convertimos a String e imprimimos
    // Nota aquí suponemos que la respuesta está codificada en utf-8
    // Más correcto es analizar el contenido del encabezado Content-type
    var text = body.toString("utf8");

    console.log("Contenido de la respuesta:");
    // Truncamos para no llenar la pantalla
    console.log(text.substr(0, 500));

  }).on("close", function () {

    // Este evento se detona si la conexión se cierra
    console.log("La conexión se ha cerrado");
  });
});

// Instalamos un gestor de errores
request.on("error", function (err) {
console.log("Ha ocurrido un error. %s", err);
});

console.log("Efectuando petición hacia %s:%d...", options.host, options.port);

// El método end() dá por finalizada la construcción de la petición
// y la envía
request.end();
