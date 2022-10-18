const express = require('express');
const router = express.Router();

const dateCardMethod = require('../../methods/dateCardMethod.js');
const emailNotification = require('../../methods/emailNotification.js');

router.post('/', async (req,res) => {
    try{
        // await emailNotification(req);
    let strikeObj = await dateCardMethod(req);
    
    res.status(200).json(strikeObj.Data());
    } catch(err){
        console.log(err)
    }
});
module.exports = router;