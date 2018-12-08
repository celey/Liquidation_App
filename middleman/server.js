const app = require('express')();
const request = require('request');


app.get('/', (req, resp) => {
  request('http://api.oasisdex.com/v1/pairs/', (err, res, body) => {
    resp.send(body);
  });
});


app.listen(8080);
