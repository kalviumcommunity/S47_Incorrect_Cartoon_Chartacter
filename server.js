var express = require('express')
var app = express()
app.get('/ping', (req, res) =>{
    res.send('Hello World')
})

app.listen(3000);