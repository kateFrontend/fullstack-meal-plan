const express = require('express');
const app = express();

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`I'm listenning on port ${PORT}`)
})