const moment = require("moment/moment");
const baseAPI = require("../config/baseAPI");
const { timeSlots } = require("../config/data");
const Create = require("../interfaces/strike");
const validateTime = require("./validateTime");

async function timeCardMethod(req){
    
    let strikeObj;
    const dbRes = req.body.user_session_variables.rideDetails;
    
    strikeObj = new Create('getting_started',`${baseAPI}discountcard/${req.params.id}`)

    let todayDate = moment().format("DD MMM YYYY"); 
    let newTime=[];
    if(moment(todayDate).isSame(dbRes.rideDate)){
        timeSlots.forEach(time=> {
            validateTime(time)?
            newTime.push(time): null
        })
    } else {
        newTime = timeSlots.slice(0)
    }
    
    // Question interface 5
    questionNumberObj = strikeObj.Question('rideTime');
    questionNumberObj.QuestionText().
        SetTextToQuestion("Please select your preferred ride time. 👇");
    
    // Answer interface 5
    timeSlotAnswerObj = questionNumberObj.Answer(false);
    if(newTime.length>0){
        timeSlotAnswerObj.AnswerCardArray(strikeObj.HORIZONTAL_ORIENTATION);
        for(let i=0;i<newTime.length;i++) {
            // apennding answers for the above answer obj
            timeSlotAnswerObj.AnswerCard().SetHeaderToAnswer(1, strikeObj.WRAP_WIDTH).AddTextRowToAnswer(strikeObj.H4, newTime[i], "#FF731D", true)
        }
    } else{
        timeSlotAnswerObj.AnswerCardArray(strikeObj.VERTICAL_ORIENTATION);
        timeSlotAnswerObj.AnswerCard().SetHeaderToAnswer(1, strikeObj.WRAP_WIDTH).AddTextRowToAnswer(strikeObj.H4, "No slots are available today.\nPlease choose a different date.", "#FF731D", false)
    }
    timeSlotAnswerObj.AnswerCard().SetHeaderToAnswer(1, strikeObj.WRAP_WIDTH).AddTextRowToAnswer(strikeObj.H4, "↩️ Go Back", "#009646", )
    return strikeObj;
}
module.exports = timeCardMethod