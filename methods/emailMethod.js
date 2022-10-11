const baseAPI = require("../config/baseAPI");
const Create = require("../interfaces/strike");
const booking = require("../models/booking");

async function emailMethod(req){

    const strikeBody = req.body.bybrisk_session_variables;
    const userResp = req.body.user_session_variables;
    const dbRes = req.body.user_session_variables.rideDetails;

    // await booking.findByIdAndUpdate(req.params.id,{
    //     riderPhone: strikeBody.phone,
    //     riderEmail: '',
    //     rideDetails:{
    //         rideTime: dbRes.rideTime,
    //         rideDate: dbRes.rideDate,
    //         rideRoute: dbRes.rideRoute,
    //         discountCode: dbRes.discountCode || '',
    //         orderID: dbRes.orderID,
    //         noofRiders: '',
    //         typeofBoat: '',
    //         bookingPrice: dbRes.bookingPrice,
    //         txnId: '',
    //         paymentStatus: ''
    //     },
    // })
    // .catch(err=> console.log(err))
    
    const strikeObj = new Create('getting_started', `${baseAPI}payment/${req.params.id}`);
    
    if(userResp.email){
        quesObj = strikeObj.Question('email');
        quesObj.QuestionCard().SetHeaderToQuestion(1,strikeObj.HALF_WIDTH).
        AddTextRowToQuestion(strikeObj.H4,"Invalid Email!").
        AddTextRowToQuestion(strikeObj.H4,"Type your Email");
    } else{
     quesObj = strikeObj.Question('email');
    quesObj.
        QuestionText().
            SetTextToQuestion(`Type your Email`)   
    }
    
    
    quesObj.TextInput();
    return strikeObj
}
module.exports = emailMethod