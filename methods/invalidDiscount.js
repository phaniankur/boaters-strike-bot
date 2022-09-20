const baseAPI = require("../config/baseAPI");
const { priceCard } = require("../config/data");
const Create = require("../interfaces/strike");

function invalidDiscount(req){

    const strikeObj = new Create('getting_started', `${baseAPI}invaliddiscountcard/${req.params.id}`);

    // console.log('invalid' ,req.body)

    //question
    invalidDisc = strikeObj.Question('invalidDiscount');
    invalidDisc.QuestionText().
        SetTextToQuestion("Invalid Code! 🤷‍♂️");
    
    //answer
    discAnswer = invalidDisc.Answer(false);
    discAnswer.AnswerCardArray(strikeObj.VERTICAL_ORIENTATION);

        discAnswer = discAnswer.AnswerCard().
            SetHeaderToAnswer(1, strikeObj.HALF_WIDTH).
            AddTextRowToAnswer(strikeObj.H5, 'Try Again', "#009646", true);

        discAnswer = discAnswer.AnswerCard().
            SetHeaderToAnswer(1, strikeObj.HALF_WIDTH).
            AddTextRowToAnswer(strikeObj.H5, 'Skip', "#009646", true);

    return strikeObj;
}
module.exports = invalidDiscount;