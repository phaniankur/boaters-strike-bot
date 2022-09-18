const express = require('express');
const router = express.Router();

const getUserData = require('../../middlewares/getUserData.js');
const discount = require('../../methods/discount');
const finalprice = require('../../methods/finalPrice.js');

router.post('/:id', getUserData, async(req,res,next) => {

    const strikeBody = req.body.bybrisk_session_variables;
    const userResp = req.body.user_session_variables;
    const dbRes = req.body.user_session_variables.rideDetails;
    // console.log('invalid disc card', req.body)
    let strikeObj;
    if(userResp.invalidDiscount[0] === 'Try Again'){
        strikeObj = await discount(req);
    }else if(userResp.invalidDiscount[0] === 'Skip'){
        strikeObj = await finalprice(req);
    }

    res.status(200).json(strikeObj.Data());
});

module.exports = router;