#!/usr/bin/node
/**
 * Ejemplo de cliente http GET en Node
 *
 * @module client-get
 */

// La función require() nos permite importar otros módulos.
// En este caso importamos el módulo 'http' incluído en Node.
// Ver http://nodejs.org/api/http.html
var http = require("http");

// Creamos una petición cliente http
var url = "http://en.wikipedia.org/wiki/Node.js";
var request = http.get(url, function (response) {

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

  // Podemos convertir el contenido de la respuesta automáticamente
  // a String mediante la función setEncoding()
  // Ver http://nodejs.org/api/stream.html#stream_stream_setencoding_encoding
  // Nota aquí suponemos que la respuesta está codificada en utf-8
  // Más correcto es analizar el contenido del encabezado Content-type
  response.setEncoding("utf8");

  // Ahora nos preparamos a recibir el cuerpo de la respuesta
  // instalamos un gestor en el evento 'data' y en el evento 'end'

  return response.on("data", function (chunk) {

    // Esta función es llamada a medida que se recibe el cuerpo de la respuesta
    // El parámetro 'chunk' es de tipo String porque antes hemos
    // lamado a la función setEncoding() y contiene el fragmento de
    // información recibida
    console.log(chunk);

  }).on("end", function () {

    // Este evento se detona cuando se ha completado la recepción
    // de la respuesta

    console.log("Respuesta completa");

  }).on("close", function () {

    // Este evento se detona si la conexión se cierra
    console.log("La conexión se ha cerrado");
  });
});

// Instalamos un gestor de errores
request.on("error", function (err) {
console.log("Ha ocurrido un error. %s", err);
});

console.log("Efectuando petición hacia %s...", url);

// El método end() dá por finalizada la construcción de la petición
// y la envía
request.end();
