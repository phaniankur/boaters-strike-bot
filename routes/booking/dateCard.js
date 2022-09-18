const express = require('express');
const router = express.Router();

const dateCardMethod = require('../../methods/dateCardMethod.js');
    try{
        router.post('/', async (req,res) => {

        let strikeObj = await dateCardMethod(req);
        
        res.status(200).json(strikeObj.Data());
        });
    } catch(err){
        console.log(err)
    }
module.exports = router;