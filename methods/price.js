const baseAPI = require("../config/baseAPI");
const { priceCard } = require("../config/data");
const Create = require("../interfaces/strike");

function price(req){

    const strikeObj = new Create('getting_started', `${baseAPI}discountcard/${req.params.id}`);
    
    // Question interface 5
    //defining question obj
    questionNumberObj = strikeObj.Question('basePrice');
    questionNumberObj.QuestionText().
        SetTextToQuestion("Please select your ride");
    
    // Answer interface 5
    // defining an answer obj for the above  question
    timeSlotAnswerObj = questionNumberObj.Answer(true);
    timeSlotAnswerObj.AnswerCardArray(strikeObj.VERTICAL_ORIENTATION);
    for(let i=0;i<priceCard.length;i++) {
        // apennding answers for the above answer obj
        timeSlotAnswerObj.AnswerCard().
        SetHeaderToAnswer(1,strikeObj.HALF_WIDTH).
            AddTextRowToAnswer(strikeObj.H3, "₹" + priceCard[i].amount,"Black",true).
            AddTextRowToAnswer(strikeObj.H4,"Boat Type: " + priceCard[i].boatType,"#d61a7e",false).
            AddTextRowToAnswer(strikeObj.H4 ,"No of People: " + priceCard[i].riderRange,"Black",false);
            // AddTextRowToAnswer(strikeObj.H5, "Pickup Station: " + priceCard[i].pickupGhat,"#687987",false)
	}
    timeSlotAnswerObj.AnswerCard().SetHeaderToAnswer(1, strikeObj.HALF_WIDTH).AddTextRowToAnswer(strikeObj.H4, "↩️ Back to Previous handler", "#009646", )

    // rideDiscountObj = strikeObj.Question('discount');
    // rideDiscountObj.QuestionText().
    //     SetTextToQuestion("Do you have any discount code?");

    //     rideDiscountObj.TextInput();
    return strikeObj;
}
module.exports = price;