const path = require('path');

const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
let favicon = require('serve-favicon');

app.use(express.static(__dirname + '/public'))

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})