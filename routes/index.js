var express = require('express');
var parser = require('ua-parser-js');
const requestIp = require('request-ip');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var software = parser(req.headers['user-agent'])['os'].name + "; " + parser(req.headers['user-agent'])['os'].version;
  var language = req.headers['accept-language'].split(",")[0];
  const clientIp = requestIp.getClientIp(req); 
  object = {
    "ipaddress": clientIp,
    "language": language,
    "software": software
    }
  res.send(object);
});

module.exports = router;
