//for the second post request
const request = require('request')

const url = "https://sad-poincare-i76vm5gt.vertuozpilot.engie.fr/hemis/rest/WS_UserManagement/login"

const options = {
    url: url,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Cache-Control": "no-cache",
        "Postman-Token": "314a0757-450b-7889-8c2f-9ca33b3c72a5"
    },
    formData: {
        'email': 'mbutton@informedactions.com',
        'password': '4a9f85d4-0acf-4d3b-b282-87b2330925ee'
    },
    agentOptions: {securityOptions: 'SSL_OP_NO_SSLv3'}
};

request.post(options, (err, res, bod) => {
    console.log(JSON.parse(bod))
    console.log(err)
})
