// var express = require('express');
const axios = require('axios');
const moment = require('moment/moment');
const dotenv = require('dotenv')
dotenv.config();

async function pushNotification(data){

    function subtractHours(numOfHours, date = new Date()) {
        date.setHours(date.getHours() - numOfHours);
      
        return date;
    }

    var dt = moment(data.rideDetails.rideTime, ["h:mm A"]).format("HH:mm");

    const rideTime = new Date(`${data.rideDetails.rideDate.replace(/['"]+/g, '')} ${dt} GMT+0530`);

    let subtractedRideTime = subtractHours(1, rideTime)
    var convertedRideTime = moment(subtractedRideTime, ["h:mm A"]).utc().format("HH:mm");

    let convertedDate = moment(data.rideDetails.rideDate).format("YYYY-MM-DD");

    axios.post(`https://${process.env.LONDON_CONFIG}@london.bybrisk.com/notification/send/push`,{
        user_id: data.userId,
        app_id: data.businessId,
        push_notification:{
            "story": `Reminder: ${data.username}, your boat-ride is at ${data.rideDetails.rideTime}.\n The boatman will be waiting for you at ${data.rideDetails.pickupGhat}`,
            // "story": `Hi ${data.username},claim your free benefits with boatrr. by visit www.boatrr.in`,
            "pic_url":"https://raw.githubusercontent.com/phaniankur/boatrr.images/main/emailbanner1.png"
        },
        target_time:`${convertedRideTime}:00`,
        target_date: convertedDate
        ,
        // headers: { 'Content-Type': 'application/json' }
    }).then(res=> console.log('push scheduled',res.data))
    .catch(err=> console.log(err))
}
module.exports = pushNotification