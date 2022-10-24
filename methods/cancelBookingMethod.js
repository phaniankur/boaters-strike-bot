const Create = require("../interfaces/strike");

async function confirmBookingMethod(req){
    
    const strikeBody = req.body.bybrisk_session_variables;
    
    const strikeObj = new Create('cancel_booking', '');
    
    quesObj = strikeObj.Question('val1');
    quesObj.
        QuestionText().
            SetTextToQuestion(`Hi ${strikeBody.username}, Your booking is cancelled. You may now close this conversation.`)

    return strikeObj
}
module.exports = confirmBookingMethod