const axios = require('axios');

const getBlockchain = function(req, res) {

  axios.get(`https://blockchain.info/rawblock/${ req.params.hash }`)
  .then((response) => {
    res.status(200).send(response.data)
  })
  .catch((error) => console.log(error));
}

const getSingleBlock = function(req, res) {

  axios.get(`https://blockchain.info/rawblock/${ req.body.userBlock }`)
  .then((response) => {
    res.status(200).send(response.data)
  })
  .catch((error) => console.log(error));
}

const getLatestBlock = function(req, res) {

  axios.get('https://blockchain.info/latestblock')
  .then((response) => {
    res.status(200).send(response.data)
  })
  .catch((error) => console.log(error));
}

module.exports = {
  getBlockchain,
  getSingleBlock,
  getLatestBlock
}