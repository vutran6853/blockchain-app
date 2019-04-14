const express = require('express');
const cors = require('cors');
const port = 3012;
const app = express();

const { getBlockchain, getSingleBlock, getLatestBlock } = require('./controllers/blockchainAPI');

app.use(express.json());
app.use(cors());


// Endpoint
app.get('/api/getBlockchain/:hash', getBlockchain)
app.post('/api/getSingleBlock', getSingleBlock)
app.get('/api/getLatestBlock', getLatestBlock)

app.listen(port, function() {
  return console.log('Server is up and listen to port ' + port)
});