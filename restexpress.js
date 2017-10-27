let express = require('express'),
    mysql = require('mysql'),
    util = require('util'),
    querystring = require('querystring'),
    cors = require('cors'),
    app = express();

app.use(cors())


function dbConnect(params) {
  let client = mysql.createConnection({
    host: params.host,
    user: params.user,
    password: params.password
  });

  return( client );
}


app.listen(8000, function () {
  console.log('REST EXPRESS listening on port 8000!');
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/birdies/:offset/:len', function (req, res) {
  //Database connection:
  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'zM0dem'
  });
  connection.query('USE birdbase;');
  connection.query("SELECT `id`, `name`, `desc` FROM birdies", function (err, result, fields) {
    if (err) throw err;
    let offset = req.params.offset || 0,
        len = req.params.len || 2,
        list = result.slice(offset, parseInt(offset, 10) + parseInt(len, 10));
    let ret = {
      list,
      offset,
      len,
      pageSize: result.length
    }
    res.statusCode = 200;
    //simulating low response with timeout:
    setTimeout(() => {
      res.send(JSON.stringify( ret ));
    }, 2000);
  });
  connection.end();
});
