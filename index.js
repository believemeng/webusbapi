var express = require('express');
var serveStatic = require('serve-static');
var PORT = process.env.PORT || 5000;

var app = express();

console.log(`running on: ${PORT}`);

function setAllowWebUSBPolicy(res, path) {
  res.setHeaders('Feature-Policy', 'usb "*";');
}

app.use(express.static('public', { setHeaders: setAllowWebUSBPolicy }));

app.listen(PORT);
