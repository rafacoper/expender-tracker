require('dotenv').config();
const express = require('express')
const { Client } = require('pg');
const { development } = require('./database/config/config.js');

const client = new Client(development)

client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL');
  })
  .catch((err) => {
    console.error('Error connecting to PostgreSQL:', err);
  });

const app = express()

app.get('/', (_req, res) => {
  res.json({ message: "Connected!" })
})

const PORT = 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`))