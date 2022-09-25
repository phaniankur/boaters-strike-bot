const Create = require("../interfaces/strike");
const booking = require("../models/booking");
const pushNotification = require("./pushNotification");

async function confirmBookingMethod(req){

    const strikeBody = req.body.bybrisk_session_variables;
    const userResp = req.body.user_session_variables;
    const dbRes = req.body.user_session_variables.rideDetails;

    await booking.findByIdAndUpdate(req.params.id,{
        riderPhone: strikeBody.phone,
        riderEmail: '',
        rideDetails:{
            rideTime: dbRes.rideTime,
            rideDate: dbRes.rideDate,
            rideRoute: dbRes.rideRoute,
            discountCode: dbRes.discountCode || '',
            bookingStatus: 'booked',
            orderID: dbRes.orderID,
            noofRiders: '',
            pickupGhat: 'Kedar Ghat',
            typeofBoat: '',
            bookingPrice: dbRes.bookingPrice,
            txnId: '',
            paymentStatus: ''
        },
    })
    .then((data)=> pushNotification(req))
    .catch(err=> console.log(err))
    
    const strikeObj = new Create('getting_started', '');
    
    quesObj = strikeObj.Question('val1');
    quesObj.
        QuestionText().
            SetTextToQuestion(`Hi ${strikeBody.username},\nYour boat ride is booked with Boaters!\nScheduled on: ${dbRes.rideDate}\nTime: ${dbRes.rideTime}\nPick up: ${dbRes.pickupGhat}\nRoute: ${dbRes.rideRoute}\nPaid Amount: ${userResp.bookingPrice}`)
    return strikeObj
}
module.exports = confirmBookingMethod