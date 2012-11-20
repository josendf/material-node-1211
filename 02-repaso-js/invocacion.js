#!/usr/bin/node
/**
 * Invocación de Funciones en JavaScript
 *
 * @module invocacion
 */

/*
  Hay cuatro formas de invocar funciones en JavaScript:

  1. Como una función

     funcion(x, y);

  2. Como un método de un objeto

    objeto.funcion(x, y);

  3. Como un constructor de objetos

    var obj = new funcion(x, y);

  4. Usando los métodos apply() o call() del objeto Function

    funcion.apply(objetoThis, [x, y]);

    funcion.call(objetoThis, x, y);

  Ver
  http://www.ecma-international.org/ecma-262/5.1/#sec-11.2.3
  http://www.ecma-international.org/ecma-262/5.1/#sec-15.3.4.3
  http://www.ecma-international.org/ecma-262/5.1/#sec-15.3.4.4
*/



var x = 10, y = 20;

function sumar(x, y) {
  console.log(this === global ? "this: %s" : "this: %j", this);
  return x + y;
}

// Llamada a una función
console.log("-- 1 -----------------------");
sumar(x, y);

// Llamada como método
var objeto = {
  "nombre": "abc",
  "desc": "ABC",
  "sumar": sumar
};

console.log("-- 2 -----------------------");
objeto.sumar(x, y);

// Una función que imprime las propiedades
// nombre y desc de un objeto
function titulo(prefijo, sufijo) {
  console.log(this === global ? "this: %s" : "this: %j", this);
  return String(prefijo) + " " + this.nombre + " " + this.desc + " " + sufijo;
}

console.log("-- 3 -----------------------");
console.log("titulo: %s", titulo("(", ")"));


// Un constructor
function Objeto(nombre, desc) {
  this.nombre = nombre;
  this.desc = desc;
}

// Asignamos la función título al protipo del objeto
Objeto.prototype.titulo = titulo

// Creamos un par de objetos nuevo
var obj1 = new Objeto("abc", "ABC");
console.log("-- 4 -----------------------");
console.log("titulo: %s", obj1.titulo("(", ")"));

var obj2 = new Objeto("def", "DEF");
console.log("-- 5 -----------------------");
console.log("titulo: %s", obj2.titulo("(", ")"));

// Invocamos la función usando el método call(thisArg, arg1, arg2, ...)
// del objeto Function
// Ver http://www.ecma-international.org/ecma-262/5.1/#sec-15.3.4.4
console.log("-- 7 -----------------------");
console.log("titulo: %s", titulo.call(obj1, "(", ")"));

// Invocamos la función usando el método apply(thisArg, argArray)
// del objeto Function
// Ver http://www.ecma-international.org/ecma-262/5.1/#sec-15.3.4.3
console.log("-- 8 -----------------------");
console.log("titulo: %s", titulo.apply(obj2, ["(", ")"]));
