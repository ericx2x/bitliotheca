var express = require('express');
var router = express.Router();
var cors = require('cors');
var app = express();
var mysql = require('mysql');
var sha256 = require('sha256');



var con = mysql.createConnection({
  host: "localhost",
  user: "ericx2x",
  password: "water123",
  database: "bitliotheca"
});

router.use(cors({origin: ["http://bitliotheca.com", "http://www.bitliotheca.com"], credentials: true}));
con.connect(function(err) {
  if (err) throw err;
});


	router.get('/', function(req, res, next) {
		con.query("SELECT name FROM notes", function (err, result, fields) {
			if (err) throw err;
	   		res.json( result );
	    });
	});


module.exports = router;
