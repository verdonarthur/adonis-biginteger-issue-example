'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BrandSchema extends Schema {
  up () {
    this.create('brands', (table) => {
      table.increments('id').primary()
      table.string('brandname').notNullable()
      table.string('shortdescr').notNullable()
      table.string('longdescr')
      table.timestamps()
    })
  }

  down () {
    this.drop('brands')
  }
}

module.exports = BrandSchema
