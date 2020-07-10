'use strict'

/*
|--------------------------------------------------------------------------
| InitSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Brand = use('App/Models/Brand')
const Product = use('App/Models/Product')

class InitSeeder {
  async run () {
    const brandData =
    [
      { brandname: 'Wheeler', shortdescr: 'Wheeler Worldwide' },
      { brandname: 'BiXs', shortdescr: 'lorem', longdescr: 'Lorem' },
      { brandname: 'BMC', shortdescr: 'Lorem' },
      { brandname: 'NoBike', shortdescr: 'Lorem' },
    ]

    await Brand.createMany(brandData)

    const productData =
      [ 
        { brand_id: 1, name: 'i-Chaser LTD', descr: '2019-01' },
        { brand_id: 1, name: 'i-Seen SE', descr: '2019-07' },
        { brand_id: 1, name: 'i-Vision Speed 45', descr: '2019-11' },
        { brand_id: 2, name: 'Lane X', descr: 'BX01' },
        { brand_id: 2, name: 'Lane 150', descr: 'BX04' },
        { brand_id: 2, name: 'Lane 150', descr: 'BX05' },
        { brand_id: 3, name: 'Speedfox 01 One', descr: 'SF01' },
        { brand_id: 3, name: 'Speedfox 01 One', descr: 'SF04' },
        { brand_id: 3, name: 'Agonist 02 One', descr: 'AG01' },
        { brand_id: 3, name: 'Agonist 02 One', descr: 'AG02' },
      ]    
      
      await Product.createMany(productData)

  }
}

module.exports = InitSeeder
