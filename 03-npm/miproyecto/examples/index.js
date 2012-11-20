#!/usr/bin/node
var MiClase = require("../lib/miclase");

var obj = new MiClase("abc", "DEF");

console.log("titulo: %s", obj.titulo());