const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
require('dotenv').config();

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log("We were connectiong to MongoDB"))
.catch((err) => console.log(err))

const PORT = 8000 || process.env.port

app.listen(PORT, () => {
    console.log(`I'm listenning on port ${PORT}`)
})