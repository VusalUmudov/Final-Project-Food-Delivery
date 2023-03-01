const express = require('express');
const Pizza = require('./models/pizzaModel')
const Drink = require('./models/drinkModel')
const app = express();
const db = require('./db.js')

app.use(express.json());

const pizzasRoute = require('./routes/pizzasRoute')
const drinksRoute = require('./routes/drinksRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')


app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/', userRoute)
app.use('/api/orders/' , ordersRoute)
app.use('/api/drinks/', drinksRoute)



if(process.env.NODE_ENV ==='production')
{
    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

        res.sendFile(path.resolve(__dirname  , 'client/build/index.html'))

    })
}


const port = process.env.PORT || 8080;

app.listen(port, () => `Server running on port ${port}`);

//la0fQTNGnq90FFNg