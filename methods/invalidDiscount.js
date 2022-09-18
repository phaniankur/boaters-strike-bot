const baseAPI = require("../config/baseAPI");
const { priceCard } = require("../config/data");
const Create = require("../interfaces/strike");

function discount(req){

    const strikeObj = new Create('getting_started', `${baseAPI}finalprice/${req.params.id}`);

    const strikeBody = req.body.bybrisk_session_variables;
    const userResp = req.body.user_session_variables;
    const dbRes = req.body.user_session_variables.rideDetails;

    if(dbRes.isDiscountValid){
        
    }

    invalidDisc = strikeObj.Question('invalidDiscount');
    invalidDisc.QuestionText().
        SetTextToQuestion("Invalid Discount");

        invalidDisc.TextInput();

        discAnswer = invalidDisc.Answer(true);
    discAnswer.AnswerCardArray(strikeObj.HORIZONTAL_ORIENTATION);
        discAnswer.AnswerCard().SetHeaderToAnswer(1, strikeObj.HALF_WIDTH).AddTextRowToAnswer(strikeObj.H5, 'Try Again', "#009646", true)
        discAnswer.AnswerCard().SetHeaderToAnswer(1, strikeObj.HALF_WIDTH).AddTextRowToAnswer(strikeObj.H5, 'Skip', "#009646", true)

    return strikeObj;
}
module.exports = discount;