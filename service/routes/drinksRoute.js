const express = require('express')
const router = express.Router()
const Drink = require('../models/drinkModel')

router.get("/getalldrinks", async(req, res)=>{
    try{
        const drinks = await Drink.find({})
        res.send(drinks)
    } catch(error){
        return res.status(400).json({message: error})
    }
})

router.post("/adddrink", async(req, res) => {

    const drink = req.body.drink

   try {
    const newdrink = new Drink({
        name : drink.name,
        image :drink.image,
        varients : ['330L','550L','1L'],
        description : drink.description,
        prices : [drink.prices]
    })
    await newdrink.save()
    res.send('New Drink Added Successfully')
   } catch (error) {
       return res.status(400).json({ message: error });
   }
  
});

router.post("/getdrinkbyid", async(req, res) => {

 const drinkid = req.body.drinkid

 try {
     const drink = await Drink.findOne({_id : drinkid})
     res.send(drink)
 } catch (error) {
     return res.status(400).json({ message: error });
 }
  
});

router.post("/editdrink", async(req, res) => {

    const editeddrink = req.body.editeddrink

    try {
        const drink = await Drink.findOne({_id : editeddrink._id})
        
        drink.name= editeddrink.name,
        drink.description= editeddrink.description,
        drink.image= editeddrink.image,
        drink.prices = [editeddrink.prices]

        await drink.save()

        res.send('Drink Details Edited successfully')

    } catch (error) {
        return res.status(400).json({ message: error });
    }
  
});

router.post("/deletedrink", async(req, res) => {

    const drinkid = req.body.drinkid

  try {
    await Drink.findOneAndDelete({_id : drinkid})
    res.send('Drink Deleted successfully')
  } catch (error) {
      return res.status(400).json({ message: error });
  }
  
});


module.exports = router;
