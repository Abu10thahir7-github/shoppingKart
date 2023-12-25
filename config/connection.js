const mongoose = require("mongoose"); 
mongoose.set('strictQuery', true); 
const state = { 
    db: null
 } 
 module.exports.connect = function (done) {
     const url = mongoose.connect('mongodb://127.0.0.1:27017') 
     const dbname = 'shopping' 
     
     mongoose .connect({ useNewUrlParser: true }, url, (err, data) => {
         if (err) return done(err) 
         state.db = data.db(dbname) 
         done()
      })
    } 
         
module.exports.get = function () { return state.db }