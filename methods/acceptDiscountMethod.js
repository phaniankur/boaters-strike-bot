const baseAPI = require("../config/baseAPI");
const Create = require("../interfaces/strike");

async function acceptDiscountMethod(req){

    const strikeObj = new Create('getting_started', `${baseAPI}havediscount/${req.params.id}`);

    haveDiscObj = strikeObj.Question('haveDisc');
    haveDiscObj.QuestionText().
        SetTextToQuestion("Do you have a Discount Code?");

    getDiscAns = haveDiscObj.Answer(true);
    getDiscAns.AnswerCardArray(strikeObj.VERTICAL_ORIENTATION);

    getDiscAns = getDiscAns.AnswerCard().
        SetHeaderToAnswer(1, strikeObj.HALF_WIDTH).
        AddTextRowToAnswer(strikeObj.H5, 'YES', "#009646", true);

    getDiscAns = getDiscAns.AnswerCard().
        SetHeaderToAnswer(1, strikeObj.HALF_WIDTH).
        AddTextRowToAnswer(strikeObj.H5, 'NO', "#009646", true);
    return strikeObj;
}
module.exports = acceptDiscountMethod