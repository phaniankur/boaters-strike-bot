const baseAPI = require("../config/baseAPI");
const { orange } = require("../config/constants");
const { rideCards } = require("../config/data");
const Create = require("../interfaces/strike");
const booking = require("../models/booking");

async function dateCardMethod(req){

    const strikeBody = req.body.bybrisk_session_variables;

    const newBooking = await new booking({
        riderPhone: strikeBody.phone,
    })
    newBooking.save();

    const strikeObj = new Create('getting_started', `${baseAPI}pricecard/${newBooking._id}`);

    // Question date
    rideDateObj = strikeObj.Question('dateOfRide');

    // Answer date
    rideDateObj.QuestionText().
        SetTextToQuestion("👇Select your ride date");
    rideDateObj.DateInput('Select Date');
    
    // Question interface 2
    //defining question obj
    questionNumberObj = strikeObj.Question('rideRoute');
    questionNumberObj.QuestionText().
        SetTextToQuestion("👇Select your ride type");
    
    // Answer interface 2
    // defining an answer obj for the above  question
    timeSlotAnswerObj = questionNumberObj.Answer(true);
    timeSlotAnswerObj.AnswerCardArray(strikeObj.VERTICAL_ORIENTATION);

    // timeSlotAnswerObj = timeSlotAnswerObj.AnswerCard().
    // SetHeaderToAnswer(10,strikeObj.FULL_WIDTH);
    for(let i=0;i<rideCards.length;i++) {

        timeSlotAnswerObj = timeSlotAnswerObj.AnswerCard().
            SetHeaderToAnswer(1,strikeObj.HALF_WIDTH).
            // AddGraphicRowToAnswer(strikeObj.PICTURE_ROW,[rideCards[i].imgLink], ['']).
            AddTextRowToAnswer(strikeObj.H3, rideCards[i].rideName,"#1746A2",true).
            AddTextRowToAnswer(strikeObj.H4,rideCards[i].desc,"#FF731D",false).
            AddTextRowToAnswer(strikeObj.H4, 'Starts: '+rideCards[i].estimatedAmount,"#1746A2",true).
            AddTextRowToAnswer(strikeObj.H4, "Timing: " + rideCards[i].rideTime, '#FF731D' , true).
            AddTextRowToAnswer(strikeObj.H5 ,"Route: " + rideCards[i].route,"#1746A2", true).
            AddTextRowToAnswer(strikeObj.H5, "Pick-up Station: " + rideCards[i].pickupGhat,"#1746A2",false);
	}
    return strikeObj
}
module.exports = dateCardMethod