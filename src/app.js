const express = require('express');
const server = express();
const port = process.env.PORT || 8081;

const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV||'development']);

server.use(express.json());

server.get('/movies', (req, res) => {
  knex
    .select('*')
    .from('movies')
    .then(data => res.status(200).json(data))
    .catch(err => res.status(404).json({message: 'The data you are looking for could not be found. Please try again later.'}));
});

server.listen(port, () => {
  console.log(`Express server running on ${port}`);
})