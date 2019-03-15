const express = require('express');
const request = require('request');

const app = express();
const port = 3000;
const upstreamService = (process.env.UPSTREAM_SERVICE || 'http://localhost:8000');

app.get('/ping', (req, res) => {

  console.log('Contacting the user service');
  request(`${upstreamService}/user/1`, (err) => {
    if (err){
        res.status(502);
        return;
    }
    // we actually don't do anything with the response!
    res.send('Pong');
  });

})

app.listen(port, (err) => {
  if (err) {
    return console.log('An error has occurred', err);
  }

  console.log(`server is listening on ${port}. I will contact ${upstreamService}`);
})