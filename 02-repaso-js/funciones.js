#!/usr/bin/node
/**
 * Funciones en JavaScript
 *
 * @module funciones
 */

/*
  Definción de funciones

  FunctionDeclaration:

    function Identifier ( OptFormalParameterList ) { FunctionBody }

  FunctionExpression:

    function IdentifierOpt ( FormalParameterListOpt ) { FunctionBody }

  Ver http://www.ecma-international.org/ecma-262/5.1/#sec-13
*/


var x = 10, y = 20;

// Diferentes maneras de definir funciones

// Una función declarada
function sumar(x, y) {
  return x + y;
}

console.log("-- 1 -----------------------");
console.log("sumar(%d, %d) = %d", x, y, sumar(x, y));

// Una función definida en una expresión y asignada a una variable
var multiplicar = function(x, y) {
  return x * y;
};

console.log("-- 2 -----------------------");
console.log("multiplicar(%d, %d) = %d", x, y, multiplicar(x, y));


// Una función definida en una expresión y asignada a la propiedad
// de un objeto
var objeto = {};
objeto.restar = function(x, y) {
  return x - y;
};

console.log("-- 3 -----------------------");
console.log("restar(%d, %d) = %d", x, y, objeto.restar(x, y));

// Una función que recibe una función como primer parámetro
function operar(op, x, y) {
  return op(x, y);
}

console.log("-- 4 -----------------------");
console.log("operar(%s, %d, %d) = %d", "sumar", x, y,
            operar(sumar, x, y));

console.log("operar(%s, %d, %d) = %d", "multiplicar", x, y,
            operar(multiplicar, x, y));

console.log("operar(%s, %d, %d) = %d", "restar", x, y,
            operar(objeto.restar, x, y));

function incrementar(x) {
  return sumar(x, 1);
}

function duplicar(x) {
  return multiplicar(x, 2);
}

// Una función que acepta dos funciones y devuelve una función nueva
function componer(f, g) {
  return function (x) {
    return f(g(x));
  };
}

console.log("-- 5 -----------------------");
console.log("componer(%s, %s)(%d) = %d", "incrementar", "duplicar", x,
            componer(incrementar, duplicar)(x));


// El método bind() del objeto Function permite
// construir una función nueva a partir de una función existente aplicando
// algunos parámetros, esto se conoce como aplicación parcial.
// Ver
// http://www.ecma-international.org/ecma-262/5.1/#sec-15.3.4.5
// http://en.wikipedia.org/wiki/Partial_function_application
var sumaDos = sumar.bind(null, 2);

console.log("-- 6 -----------------------");
console.log("sumaDos(%d) = %d", x,
            sumaDos(x));
