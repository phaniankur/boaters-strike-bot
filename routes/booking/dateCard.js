<<<<<<< HEAD
const express = require('express');
const router = express.Router();

const dateCardMethod = require('../../methods/dateCardMethod.js');

router.post('/', async (req,res) => {
    try{
    let strikeObj = await dateCardMethod(req);
    
    res.status(200).json(strikeObj.Data());
    } catch(err){
        console.log(err)
    }
});
=======
const express = require('express');
const router = express.Router();

const dateCardMethod = require('../../methods/dateCardMethod.js');

router.post('/', async (req,res) => {
    try{
    let strikeObj = await dateCardMethod(req);
    
    res.status(200).json(strikeObj.Data());
    } catch(err){
        console.log(err)
    }
});
>>>>>>> 4b194cbb85be9d87af25db80cee9158f9f361797
module.exports = router;