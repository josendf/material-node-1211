var MiClase = require('../lib/miclase');

exports["construccion"] = function(test) {
  test.expect(2);

  var nombre = "abc";
  var desc = "DEF"

  var obj = new MiClase(nombre, desc)

  // Ver https://github.com/caolan/nodeunit
  test.strictEqual(obj.nombre, nombre, "nombre debe coincidir");
  test.strictEqual(obj.desc, desc, "desc debe coincidir");


  test.done();
};

exports["titulo"] = function(test) {
  test.expect(3);

  var nombre = "abc";
  var desc = "DEF"

  var obj = new MiClase(nombre, desc)

  var result = obj.titulo();

  // Ver https://github.com/caolan/nodeunit
  test.strictEqual(typeof result, "string", "debe devolver String");
  test.ok(result.indexOf(nombre) >= 0, "debe contener nombre");
  test.ok(result.indexOf(desc) >= 0, "debe contener desc");

  test.done();
};
