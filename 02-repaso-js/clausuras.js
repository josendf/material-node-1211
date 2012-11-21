#!/usr/bin/node
/**
 * Clausuras (closures) en JavaScript
 *
 * @module clausuras
 */

/*
  Una clausura es el ámbito (scope) que queda definido cuando se declara
  una función y le permite acceder y manipular variables que le son externas.

  Dicho de otra manera las clausuras permiten a una función acceder a
  todas las variables y funciones que le son visibles en
  el momento de ser declarada.

  Ver
  http://en.wikipedia.org/wiki/Closure_(computer_science)
*/

console.log("-- 1 -----------------------");

function funcionA() {

  var x = 10;

  return function(y) {

    // Esta función puede acceder a la variable
    // x que le es externa
    return x + y;
  };
}

var suma10 = funcionA();

console.log("resultado: %d", suma10(5));


/*
  Las clausuras nos permiten simular propiedades privadas.
*/

console.log("-- 2 -----------------------");

function ClaseA() {

  // Una propiedad pública
  this.publica = "Es publica";

  // Una propiedad privada
  var privada = "Es privada";

  this.setPrivada = function(valor) {
    privada = valor;
  }

  this.getPrivada = function() {
    return privada;
  }
}

var objA = new ClaseA();

console.log("pública: %s", objA.publica);

// Aquí nos dirá 'undefined'
console.log("privada: %s", objA.privada);

// Manipulamos la propiedad privada mediante las funciones de acceso
console.log("privada: %s", objA.getPrivada());

objA.setPrivada("Nuevo valor");

console.log("privada: %s", objA.getPrivada());

/*
  Las clausuras sirven también para establecer el contexto
  en las funciones callback y timers.
*/

console.log("-- 3 -----------------------");

function imprimeDespues(obj, prop, segundos) {

  var valor = obj[prop];

  return setTimeout(function() {

    // Accedemos a la variable 'valor' dentro de la clausura
    console.log(valor);

  }, segundos * 1000);
}


var objB = {
  "propiedad": "Una propiedad"
};

var segs = 2;

console.log("Imprimirá en %d segs...", segs);

imprimeDespues(objB, "propiedad", segs);