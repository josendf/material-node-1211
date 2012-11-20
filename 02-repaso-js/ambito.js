#!/usr/bin/node
/**
 * El ámbito (scope) en JavaScript
 *
 * @module ambito
 */

/*
  En JavaScript el ámbito lo determina la función
  y no los bloques {...} como en otros lenguajes (C, C++, Java, C#)

  Ver
  http://en.wikipedia.org/wiki/Scope_(programming)
  http://www.ecma-international.org/ecma-262/5.1/#sec-10.2
*/

function funcionA(arg1, arg2) {

  if(arg1) {
    console.log("x: %s", x);
    var x = "abc";
    console.log("x: %s", x);
  }

  if(arg2) {
    console.log("x: %s", x);
    var x = "def";
    console.log("x: %s", x);
  }
}

console.log("-- 1 -----------------------");
funcionA(true, false);

console.log("-- 2 -----------------------");
funcionA(false, true);

console.log("-- 3 -----------------------");
funcionA(true, true);


function funcionB(arg) {

  console.log("x: %s", x);
  var x = arg;
  console.log("x: %s", x);

  function funcionC(arg) {

    console.log("x: %s", x);
    var x = arg;
    console.log("x: %s", x);

  }

  funcionC("def");
}

console.log("-- 4 -----------------------");
funcionB("abc");
