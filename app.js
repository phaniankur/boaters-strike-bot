const express = require('express'), bodyParser = require('body-parser');
const app = express();

const dateCard = require('./routes/booking/dateCard');
const timeCard = require('./routes/booking/timeCard');
const priceCard = require('./routes/booking/priceCard');
const haveDiscount = require('./routes/booking/haveDiscount');
const discountCard = require('./routes/booking/discountCard');
const invalidDiscountCard = require('./routes/booking/invalidDiscountCard');
const finalPriceCard = require('./routes/booking/finalPriceCard');
const emailCard = require('./routes/booking/emailCard');
const payment = require('./routes/booking/payment');
const confirmBooking = require('./routes/booking/confirmBooking');
const previousOrders = require('./routes/previousOrders');
const paymentCallBack = require('./routes/paymentCallback');
const about = require('./routes/aboutUs');

const getAllBookingStatus = require('./routes/webAPIs/getAllBookingStatus');
const addDiscount = require('./routes/webAPIs/addDiscount');

app.use(bodyParser.json());

app.use('/boatrr', getAllBookingStatus, previousOrders, paymentCallBack, about, addDiscount);
app.use('/boatrr/datecard',dateCard);
app.use('/boatrr/timecard',timeCard);
app.use('/boatrr/pricecard',priceCard);
app.use('/boatrr/havediscount',haveDiscount);
app.use('/boatrr/discountcard', discountCard);
app.use('/boatrr/invaliddiscountcard',invalidDiscountCard);
app.use('/boatrr/finalprice',finalPriceCard);
app.use('/boatrr/emailcard', emailCard);
app.use('/boatrr/payment', payment);
app.use('/boatrr/confirmBooking', confirmBooking);

module.exports = app;