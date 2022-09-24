async function pushNotification(req){

    const strikeBody = req.body.bybrisk_session_variables;
    const userResp = req.body.user_session_variables;
    const dbRes = req.body.user_session_variables.rideDetails;

    fetch('https://shashank:prakash@london.bybrisk.com/notification/send/push',{
        method: 'POST',
        body: {
            "user_id":strikeBody.userId,
            "app_id":strikeBody.userId,
            "push_notification":{
                "story": `Hi ${strikeBody.username} your ride is scheduled at ${dbRes.rideTime}`,
                "pic_url":"https://www.cbc.ca/kids/images/weird_wonderful_bunnies_header_update_1140.jpg"
            },
            "target_time":"20:34:00",
            "target_date":"2022-09-23"
        },
        // headers: { 'Content-Type': 'application/json' }
    }).then(res=> console.log(res.data))
    .catch(err=> console.log(err))
}
module.exports = pushNotification