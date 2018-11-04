'use strict';
const express = require('express');

// Constant
const PORT = 7080;
const HOST = '0.0.0.0';

//App
const app = express();

app.get('/', (req, res) => {
   res.send('hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
