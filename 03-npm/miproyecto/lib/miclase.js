/**
 * Mi clase
 *
 * @module miclase
 * @author titular@example.com
 */

/**
 * Una clase de ejemplo
 *
 * @class MiClase
 * @constructor
 * @param {String} nombre El nombre
 * @param {String} desc La descripción
 */
function MiClase(nombre, desc) {

  /**
   * El nombre
   *
   * @property nombre
   * @type {String}
   */
  this.nombre = String(nombre);

  /**
   * La descripción
   *
   * @property desc
   * @type {String}
   */
  this.desc = String(desc);
}

/**
 * Compone el título
 *
 * @method titulo
 * @return {String} El título
 */
MiClase.prototype.titulo = function() {
  return this.nombre + " " + this.desc;
};

exports = module.exports = MiClase;
