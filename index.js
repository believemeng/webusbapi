var express = require('express')
var serveStatic = require('serve-static')
var PORT = process.env.PORT || 5000

var app = express()

console.log(`running on: ${PORT}`);
 
app.use(express.static('public'))

app.listen(PORT)