const dotenv = require('dotenv')
dotenv.config();

const baseAPI = process.env.BASE_URL
module.exports = baseAPI;