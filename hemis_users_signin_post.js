//building post request
var request = require('request');

var myJSONObject = {"email": "mbutton@informedactions.com", "password":"1200974140"};
request({
    url: "http://vertuozapps.cloudapp.net:8080/hemisphere/users/signin",
    method: "POST",
    json: true,   // <--Very important!!!
    body: myJSONObject
}, function (error, response, body){
    console.log(response);
});
