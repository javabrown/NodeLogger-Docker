'use strict';
const express = require('express');
const auth = require('basic-auth');
const bodyParser = require('body-parser');

const PORT = 7080;
const HOST = '0.0.0.0';
const NO_CONTENT_HTTP_204 = 204;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
   res.send(Date.now() + ' : hello :) from system monitor\n');
});

/**
 * Returns HTTP 204 and print request on console.
 */
app.post('/monitor', (request, response) => {
   response.status(NO_CONTENT_HTTP_204).send();
   const credentials = auth(request);
   
   if (credentials && credentials.name) {
	  request.body.user = credentials.name;   
   }
    
    console.log(JSON.stringify(request.body));
});

app.get('/monitor', (request, response) => {
	response.send();
});

app.listen(PORT, function(){
  console.log(`Running monitor on on http://${HOST}:${PORT}`);	
});