const db = require('./');

module.exports = {
  get: (callback) => {
    var queryStr = 'SELECT p.name "Pokemon", t.type "Type", i.img "Image" FROM pokemon p, types t, images i WHERE p.typeNum = t.id and p.imageNum = i.id'
    db.query(queryStr, (err, results) => {
      callback(err, results);
    })
  }
}