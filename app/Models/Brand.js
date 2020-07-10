'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Brand extends Model {
  static get table() {
    return "brands";
  }
  static get primaryKey() {
    return "id";
  }

  products() {
    return this.hasMany("App/Models/Product");
  }
}

module.exports = Brand
