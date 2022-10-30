const moment = require("moment/moment");

const validateTime = (time) => {
    var curentTimeHour = moment().hours();
    var selectedTimeHour = moment(time,'HH:mm').hour();

    let sub =  selectedTimeHour - curentTimeHour;
    let result = Math.sign(sub)
    if(result === 1){
        //time is not yet passed
        return true
    } else{
        //time passed
        return false
    }
  };

module.exports = validateTime