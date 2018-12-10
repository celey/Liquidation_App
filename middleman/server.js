const app = require('express')();
const request = require('request');
const { request: gqlrequest } = require('graphql-request')
const cors = require('cors');

app.use(cors());

app.get('/api/prices', (req, resp) => {
  request('http://api.oasisdex.com/v1/prices/eth/dai', (err, res, body) => {
    resp.send(body);
  });
});

app.get('/api/cups/:id', async (req, resp) => {
  const query = `{getCup(id: ${req.params.id}) {ratio pip art ink}}`

  gqlrequest('https://sai-mainnet.makerfoundation.com/v1', query)
    .then(data => resp.send(data))
});

app.listen(9001);
