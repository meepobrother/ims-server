const express = require('express')
const app = express();

app.get('/', (req, res, next) => {
    res.end(`hello world`)
})

app.listen(3000, () => {
    console.log(`app bootstrap`)
});
