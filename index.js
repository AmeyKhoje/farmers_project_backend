const express = require('express');
const body_parser = require('body-parser');
const mysql = require('mysql');
const userRoutes = require('./routes/user-routes');

const app = express();

app.use(body_parser.json())

app.use('/api/user', userRoutes)

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'farmer_users'
});

conn.connect(function (err) {
    if(err) throw err;
    console.log("Connected to database");
})