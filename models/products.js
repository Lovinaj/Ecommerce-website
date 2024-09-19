const mongodb = require('mongodb;')
const getDb = require('../utils/database').getDb;

class Product {
    constructor(productName, imageUrl, price, description) {
        this.productName = productName;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }
    save() {
      const db = getDb();
      let dbAction;
      if (this._id) {
          // Update the product
          dbAction = db
              .collection('products')
              .updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: this });
      } else {
          // Add a new product
          dbAction = db.collection('products').insertOne(this);
      }
      return dbAction;
    }
    
    static fetchAll() {
        const db = getDb();
        return db
          .collection('products')
          .find()
          .toArray()
          .then(products => {
            console.log(products);
            return products;
          })
          .catch(err => {
            console.log(err);
          });
    }
    
    static findById(prodId) {
        const db = getDb();
        return db
          .collection('products')
          .find({ _id: new mongodb.ObjectId(prodId) })
          .next()
          .then(product => {
            console.log(product);
            return product;
          })
          .catch(err => {
            console.log(err);
          });
    }
}

module.exports = Product;