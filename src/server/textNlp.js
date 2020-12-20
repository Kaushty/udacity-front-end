function acquireData(req, res){

    const AYLIENTextAPI = require('aylien_textapi');

    const textapi = new AYLIENTextAPI({
        application_id: "YOUR_APP_ID",
        application_key: "YOUR_APP_KEY"
    });

    textapi.sentiment({
        'url': req.body.text
    }), function(error, response){
        res.send(response)
    }
}