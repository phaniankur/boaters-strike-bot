const baseAPI = require("../config/baseAPI");
const { priceCard, aartiPrice,regularPrice } = require("../config/data");
const Create = require("../interfaces/strike");

function price(req){

    const userResp = req.body.user_session_variables;
    let boatRate;

    if(userResp.rideRoute){

        userResp.rideRoute[0] === 'Ganga Aarti Boat-Ride'?
        boatRate = aartiPrice : boatRate = regularPrice;
    } else{
        boatRate = regularPrice;
    }

    let strikeObj = new Create('getting_started', `${baseAPI}timecard/${req.params.id}`);

    questionNumberObj = strikeObj.Question('basePrice');
    questionNumberObj.QuestionText().
        SetTextToQuestion("Select a pack. 👇");
    
    timeSlotAnswerObj = questionNumberObj.Answer(false);
    timeSlotAnswerObj.AnswerCardArray(strikeObj.VERTICAL_ORIENTATION);
    for(let i=0;i<boatRate.length;i++) {

        timeSlotAnswerObj.AnswerCard().
        SetHeaderToAnswer(1,strikeObj.WRAP_WIDTH).
            AddTextRowToAnswer(strikeObj.H3, "₹" + boatRate[i].amount,"#1746A2",true).
            AddTextRowToAnswer(strikeObj.H4,"Boat Type: " + boatRate[i].boatType,"#FF731D",false).
            AddTextRowToAnswer(strikeObj.H4 ,"No of People: " + boatRate[i].riderRange,"#1746A2",true);
            // AddTextRowToAnswer(strikeObj.H5, "Pickup Station: " + boatRate[i].pickupGhat,"#687987",false)
	}
    timeSlotAnswerObj.AnswerCard().SetHeaderToAnswer(1, strikeObj.WRAP_WIDTH).AddTextRowToAnswer(strikeObj.H4, "↩️ Change Ride Date", "#009646", )

    return strikeObj;
}
module.exports = price;