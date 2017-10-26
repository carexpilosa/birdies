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
  client.query('USE ' + params.database);
  return( client );
}


let dbClient = dbConnect({
  host: 'localhost',
  user: 'root',
  database: 'addressbook',
  password: 'zM0dem'
});

app.listen(8000, function () {
  console.log('REST EXPRESS listening on port 3000!');
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/birdies/:offset/:len', function (req, res) {
  let birdies = [
    {
      id: 'turdusMerula',
      name: 'Amsel',
      desc: 'Schwarzes Vögelchen'},
    {
      id: 'turdusPhilomelos',
      name: 'Sing-Drossel',
      desc: 'Gesprenkelte Drossel'
    },
    {
      id: 'fringillaCoelebs',
      name: 'Buch-Fink',
      desc: 'Häufigster Vogel Deutschlands'
    },
    {
      id: 'sturnusVulgaris',
      name: 'Star',
      desc: 'Feind der Winzer und Obstbauern, spektakuläre Flugmanöver von Schwärmen'
    },
    {
      id: 'corvusCorone',
      name: 'Aas-Krähe',
      desc: 'Nebel- und Raben-Krähe sind Unterarten'
    },
    {
      id: 'dendrocoposMajor',
      name: 'Bunt-Specht',
      desc: 'häufigster Specht'
    },
    {
      id: 'melanittaNigra',
      name: 'Trauerente',
      desc: 'Kleinste und leichteste der Melanitt-Arten'
    },
    {
      id: 'falcoPeregrinus',
      name: 'Wanderfalke',
      desc: 'Schnellster Vogel: bis 360 km/h im Sturzflug'
    },
    {
      id: 'falcoSubbuteo',
      name: 'Baumfalke',
      desc: 'Erinnert an riesigen Mauersegler'
    },
    {
      id: 'limosaLimosa',
      name: 'Uferschnepfe',
      desc: 'hochbeinige, langhalsige, elegante Limikole'
    },
    {
      id: 'TringaTotanus',
      name: 'Rotschenkel',
      desc: 'Wasserläufer ohne auffallende Kennzeichen'
    },
    {
      id: 'larusArgentatus',
      name: 'Silbermöwe',
      desc: 'Bekannteste Möwe der Nordseeküste'
    }
  ];
  let offset = req.params.offset,
      len = req.params.len;
  let resultArray = birdies.slice(offset, parseInt(offset, 10) + parseInt(len, 10));
  res.send(JSON.stringify( resultArray ));
});

/*http.createServer( function( httpRequest, httpResponse ) {
  httpResponse.writeHead( 200, { 'Content-Type' : 'text/plain' } );
  httpResponse.write( '=== START httpResponse' + "\n" );

  dbClient.query( 'SELECT * FROM addresses', function (err, dbRes, fields) {
    if (err) {
      throw err;
    }
    console.log(dbRes);
    httpResponse.write( 'Obtained: ' + JSON.stringify( dbRes ) );
    httpResponse.write( '=== Test' + "\n" );
    httpResponse.end();
    dbClient.end();
  } );

} ).listen( 8000, 'localhost' );*/
