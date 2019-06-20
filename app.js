/* eslint-disable no-undef */
const express = require('express');
const app = express();
const router = require('./router.js');
const cors = require('cors');
// const bodyParser = require('body-parser')

app.use(cors());
app.use(express.json());
app.use(router);
// app.use(bodyParser())

module.exports = app