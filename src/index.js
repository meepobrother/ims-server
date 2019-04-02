const express = require('express')
const app = express();

app.listen('/', (req, res, next) => {
    res.end(`hello world`)
})

app.listen(3131)