const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://VusalUmudov:la0fQTNGnq90FFNg@cluster0.ojjymlf.mongodb.net/pizza'

mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log("Mongo DB Connection Successfull");
})
db.on('error', ()=>{
    console.log('MOngo Db Connection failed')
})

module.export = mongoose