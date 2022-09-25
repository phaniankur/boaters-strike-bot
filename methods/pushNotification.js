// var express = require('express');
const axios = require('axios');
const moment = require('moment/moment');
const mongoose = require('mongoose')
const dotenv = require('dotenv')

async function pushNotification(req){

    const strikeBody = req.body.bybrisk_session_variables;
    const userResp = req.body.user_session_variables;
    const dbRes = req.body.user_session_variables.rideDetails;

    function subtractHours(numOfHours, date = new Date()) {
        date.setHours(date.getHours() - numOfHours);
      
        return date;
    }

    var dt = moment(dbRes.rideTime, ["h:mm A"]).format("HH:mm");

    const rideTime = new Date(`${dbRes.rideDate.replace(/['"]+/g, '')} ${dt} GMT+0530`);

    let subtractedRideTime = subtractHours(1, rideTime)
    var convertedRideTime = moment(subtractedRideTime, ["h:mm A"]).utc().format("HH:mm");

    console.log("converted time:", subtractedRideTime);
    let convertedDate = moment(dbRes.rideDate).format("YYYY-MM-DD");

    console.log("converted Date:", convertedDate);

    axios.post(`https://${process.env.LONDON_CONFIG}@london.bybrisk.com/notification/send/push`,{
        user_id: strikeBody.userId,
        app_id: strikeBody.businessId,
        push_notification:{
            "story": `Hi ${strikeBody.username} your ride is scheduled at ${dbRes.rideTime}`,
            "pic_url":"https://www.cbc.ca/kids/images/weird_wonderful_bunnies_header_update_1140.jpg"
        },
        target_time:`${convertedRideTime}:00`,
        target_date: convertedDate
        ,
        // headers: { 'Content-Type': 'application/json' }
    }).then(res=> console.log(res.data))
    .catch(err=> console.log(err))
}
module.exports = pushNotification