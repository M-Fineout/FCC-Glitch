// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

app.use(function (req, res, next) {
  
  //get ip-address
  var ipSplit = req.headers["x-forwarded-for"].split(",");
  var ip = ipSplit[1].split(":");
  
  res.json({
    //what: ip[3], 
    ipaddress: ip[3],
    language: req.headers["accept-language"],
    software: req.headers["user-agent"]
  });
  next();
});

/*
app.get("api/whoami", function(req, res) {
  //var ip = req.ip.toString();
  console.log(req.ip.toString());
  res.json({
    ipaddress: res.ip
  });
});
*/

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
