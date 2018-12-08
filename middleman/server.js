const app = require('express')();
const request = require('request');
const { request: gqlrequest } = require('graphql-request')

app.get('/prices', (req, resp) => {
  request('http://api.oasisdex.com/v1/prices/eth/dai', (err, res, body) => {
    resp.send(body);
  });
});

app.get('/cups/:id', async (req, resp) => {
  const query = `{getCup(id: ${req.params.id}) {ratio}}`

  gqlrequest('https://sai-mainnet.makerfoundation.com/v1', query)
    .then(data => resp.send(data))
});

app.listen(9001);
