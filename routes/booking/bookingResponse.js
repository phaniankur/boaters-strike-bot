const express = require('express');
const router = express.Router();

// Import this to use the interface library
const Create = require('../../interfaces/strike');

const baseAPI = "https://0100-103-163-67-77.in.ngrok.io/"
router.post('/',(req,res,next) => {

    const strikeObj = new Create('getting_started', 'http://ec2-18-218-96-97.us-east-2.compute.amazonaws.com/onboardingBot/register');

    console.log(req.body.user_session_variables.email)
    let name = req.body.bybrisk_session_variables.username;
    
    // let apiRes = req.body
    // let cardResp = apiRes["user_session_variables"]["cardResp"][0]
    // let name = apiRes["user_session_variables"]["name"]
    // let locationLat = apiRes["user_session_variables"]["location"]["latitude"]
    // let locationLon = apiRes["user_session_variables"]["location"]["longitude"]
    // let favNumber = apiRes["user_session_variables"]["favNumber"]
    // let dob = apiRes["user_session_variables"]["dob"][0]
    

    //Question Card interface
    // quesObj = strikeObj.Question('val1');
    // quesObj.QuestionText().SetTextToQuestion("hello "+name+" Thanks for giving us your location which is longitude "+ locationLat + " and longititude "+locationLon+". And your favourite number is "+favNumber+" and you were born on "+ dob)

    // Question interface 6
    questionNumberObj = strikeObj.Question('test2');
    questionNumberObj.QuestionText().
        SetTextToQuestion(`Please ${name} provide your email2`);
    
    // Answer interface 6
    questionNumberObj.TextInput();

    res.status(200).json(strikeObj.Data());
});

module.exports = router;