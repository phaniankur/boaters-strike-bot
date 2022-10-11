const baseAPI = require("../config/baseAPI");
const { validDiscounts, priceCard } = require("../config/data");

function validateDiscount(req,res,next) {

    const userResp = req.body.user_session_variables;
    userResp.basePrice[0] = userResp.basePrice[0].replace('₹', '')
    // console.log('userResp',userResp)
    if(userResp.discount){
        const discountValid = validDiscounts.find(item=> item.code === userResp.discount.toLowerCase())
        if(discountValid){
            userResp.basePrice[0] = userResp.basePrice[0] - discountValid.discountPrice
            next();
        } else{
            console.log('invalid code')
        // res.redirect(`../pricecard/${req.params.id}`);
        }
    } else{
        next();
    }
}
module.exports = validateDiscount;