let express = require('express'),
    app = express();

app.listen(3001, function () {
  console.log('REST FRONTENDSERVER listening on port 3001!');
});

app.get('/', function (req, res) {
  let filepath = `${__dirname}/public_html/index.html`;
  res.sendFile(filepath);
});

app.get('/:name', function (req, res) {
  let filepath = `${__dirname}/public_html/${req.params.name}`;
  res.sendFile(filepath);
});
