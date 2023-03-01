const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const drinkSchema = mongoose.Schema({
    name: {type: String , require},
    varients: [],
    prices: [],
    image: {type:String , require},
    description: {type: String , require}
},{
    timestamps: true,
})

const drinkModel = mongoose.model('drinks' , drinkSchema)

module.exports = drinkModel