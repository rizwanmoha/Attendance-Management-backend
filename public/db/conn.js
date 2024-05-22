require('dotenv').config()
const mongoose = require('mongoose')
const CONNECTION_URL = process.env.CONNECTION_URL

mongoose.connect("mongodb+srv://rehan:3456tyui@ecommerce-web.ljy5jgh.mongodb.net/Attendance", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connection Successful');
}).catch((e) => {
    console.log(e);
})