const express = require('express');
const discount = require('../../models/discount');
const router = express.Router();

router.post('/newdiscount', async(req,res) => {
    let body = req.body;
  try{
    await discount.create({
        code: body.code,
        partner: body.partner,
        amount: body.amount,
        validity: body.validity,
    })
    // newDiscount.save();
   res.status(200).json('New Code Saved!')
  }catch(err){
    console.log(err)
    res.status(400).json("validation error")
  }
    
  });

  module.exports = router;