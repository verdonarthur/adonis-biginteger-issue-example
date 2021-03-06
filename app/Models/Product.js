'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
  static get table() {
    return "products";
  }
  static get primaryKey() {
    return "id";
  }
  
  brand() {
    return this.belongsTo("App/Models/Brand", "brand_id", "id");
  }
}

module.exports = Product
