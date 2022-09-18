const booking = require('../models/booking');

function getUserData(req,res,next) {
    // console.log('middleware',req.params)
    const userResp = req.body.user_session_variables;
    booking.findById(req.params.id, function(err, data){
        if(err){
            console.log(err);
            return
        }
        if(data.length == 0) {
            console.log("No record found")
            return
        }else{
            // console.log('record found', data)
            userResp.rideDetails = data.rideDetails || '';
            next();
        }
    })
    
}

module.exports = getUserData;