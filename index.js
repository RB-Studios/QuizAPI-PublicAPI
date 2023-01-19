// --------------------- API ---------------------
// Configurations and settings
// --------------------- API ---------------------

require('dotenv').config()
var express = require('express');
var app = express();
var router = express.Router()

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});
connection.connect();

// --------------------- API ---------------------
// Start of API
// --------------------- API ---------------------

app.use(function (req, res, next) {
    // write to api-log.txt file
    var fs = require('fs');
    var log = fs.createWriteStream('api-log.txt', { flags: 'a' });
    log.write('---------------------\r')
    const d = new Date();
    const t = d.toLocaleString('nl-NL', { timeZone: 'Europe/Amsterdam' })
    log.write('Time: ' + t + '\r')
    log.write('IP: ' + req.ip + '\r')
    log.write('Host: ' + req.headers.host + '\r')
    log.write('Method: ' + req.method + '\r')
    log.write('Request: ' + req.originalUrl + '\r')
    log.write('Path: ' + req.path + '\r')
    log.write('Query: ' + JSON.stringify(req.query) + '\r')
    log.write('---------------------\r')
    next()
})

app.get('/', (req, res) => {
    // if request asks for json, return json
    if (req.query.json != null) {
        res.json([{
            "error": "false",
            "message": "Welcome to the API of the quiz app."
        }]);
    } else {
        // redirect to the website
        res.redirect('https://quizapi.net');
    }
});

// --------------------- API ---------------------
// Questions
// --------------------- API ---------------------

app.get('/q/abcd/', (req, res) => {
    if (req.query.id != null) {
        // Get a record from abcd table from database and return it
        sql = "SELECT * FROM q_abcd WHERE id = " + req.query.id;
        connection.query(sql, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
    } else {
        // Get a random record from abcd table from database and return it
        sql = "SELECT * FROM q_abcd ORDER BY RAND() LIMIT 1";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
    }
});

app.get('/q/truefalse/', (req, res) => {
    if (req.query.id != null) {
        // Get a record from truefalse table from database and return it
        sql = "SELECT * FROM q_truefalse WHERE id = " + req.query.id;
        connection.query(sql, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
    } else {
        // Get a random record from truefalse table from database and return it
        sql = "SELECT * FROM q_truefalse ORDER BY RAND() LIMIT 1";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
    }
});

app.get('/q/math/', (req, res) => {
    if (req.query.id != null) {
        // Get a record from math table from database and return it
        sql = "SELECT * FROM math WHERE id = " + req.query.id;
        connection.query(sql, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
    } else {
        // Get a random record from math table from database and return it
        sql = "SELECT * FROM q_math ORDER BY RAND() LIMIT 1";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
    }
});

// --------------------- API ---------------------
// Answers
// --------------------- API ---------------------

app.get('/a/abcd/', (req, res) => {
    if (req.query.id != null) {
        // Get the answer record from abcd table from database and return it
        sql = "SELECT * FROM a_abcd WHERE question_id = " + req.query.id;
        connection.query(sql, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
    } else {
        // send error and eroor message
        res.send([{
            "error": "true",
            "message": "No question id provided."
        }]);
    }
});

app.get('/a/truefalse/', (req, res) => {
    if (req.query.id != null) {
        // Get the answer record from truefalse table from database and return it
        sql = "SELECT * FROM a_truefalse WHERE question_id = " + req.query.id;
        connection.query(sql, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
    } else {
        // send error and eroor message
        res.send([{
            "error": "true",
            "message": "No question id provided."
        }]);
    }
});

app.get('/a/math/', (req, res) => {
    if (req.query.id != null) {
        // Get the answer record from math table from database and return it
        sql = "SELECT * FROM a_math WHERE question_id = " + req.query.id;
        connection.query(sql, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
    } else {
        // send error and eroor message
        res.send([{
            "error": "true",
            "message": "No question id provided."
        }]);
    }
});

// --------------------- API ---------------------
// Error handling
// --------------------- API ---------------------

app.get('*', (req, res) => {
    res.send([{
        "error": "true",
        "message": "Invalid request."
    }]);
});

// --------------------- API ---------------------
// Server Configuration
// --------------------- API ---------------------

app.listen(8080, () => {
    console.log('API listening on port 8080! The API is running at http://localhost:8080/');
    console.log('Press CTRL + C to stop the API.');
    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
    });
});