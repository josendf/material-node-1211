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

function funcionA() {

  var x = 10;

  return function(y) {

    // Esta función puede acceder a la variable
    // x que le es externa
    return x + y;
  };
}

console.log("-- 1 -----------------------");

var suma10 = funcionA();

console.log("resultado: %d", suma10(5));
