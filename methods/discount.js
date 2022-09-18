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

    rideDiscountObj = strikeObj.Question('discount');
    rideDiscountObj.QuestionText().
        SetTextToQuestion("Do you have any discount code?");

        rideDiscountObj.TextInput();
    return strikeObj;
}
module.exports = discount;