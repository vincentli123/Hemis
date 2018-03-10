
//const https = require('https');
var request = require('request');

var headers = {
  'Authorization':'Bearer 39f64f83-8de4-41b6-9493-6f00771de108'
}

//request.get('http://vertuozapps.cloudapp.net:8080/hemisphere/buildings/mine/infos/').auth(null, null, true, 'fdf968aa-5b8f-4552-8cab-2fe3f9fd6141');

// Configure the request
var options = {
    url: 'http://vertuozapps.cloudapp.net:8080/hemisphere/buildings/mine/infos/',
    method: 'GET',
    headers: headers,
    qs: {'key1': 'xxx', 'key2': 'yyy'}
}

// Start the request
request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        // Print out the response body
        console.log(body)
    }
})
