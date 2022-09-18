const express = require('express');
const router = express.Router();

const baseAPI = require('../../config/baseAPI.js')

const Create = require('../../interfaces/strike');
const booking = require('../../models/booking.js');
const getUserData = require('../../middlewares/getUserData.js');
const validateDiscount = require('../../middlewares/validateDiscount.js');
const finalPrice = require('../../methods/finalPrice');
const { validDiscounts } = require('../../config/data.js');
const discount = require('../../methods/discount.js');

router.post('/:id', getUserData,  async(req,res,next) => {
    // console.log('final Price', req.body)
    const strikeBody = req.body.bybrisk_session_variables;
    const userResp = req.body.user_session_variables;
    const dbRes = req.body.user_session_variables.rideDetails;

    console.log('final price card',userResp)
    let strikeObj;

    if(userResp.discount){
        const discountValid = await validDiscounts.find(item => item.code === userResp.discount.toLowerCase())
        if(discountValid){
            // userResp.basePrice[0] = userResp.basePrice[0].replace('₹', '')
            dbRes.bookingPrice = dbRes.bookingPrice - discountValid.discountPrice
            strikeObj = finalPrice(req);
        } else{
            console.log('invalid code')
            strikeObj = discount(req);
        }

        try{
            await booking.findByIdAndUpdate(req.params.id,{
                riderPhone: strikeBody.phone,
                rideDetails:{
                    rideTime: dbRes.rideTime,
                    rideDate: dbRes.rideDate,
                    rideRoute: dbRes.rideRoute,
                    discountCode: userResp.discount,
                    bookingPrice: discountValid ? dbRes.bookingPrice : '',
                    bookingStatus: 'pending'
                },
            }).then(console.log('saved'))
        }catch(err){
            console.log(err)
        }
    }
    res.status(200).json(strikeObj.Data());
});

module.exports = router;