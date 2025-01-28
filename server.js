const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test_db' 
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

// Create employee
app.post('/employee', (req, res) => {
    let emp = req.body;
    let sql = 'INSERT INTO employees SET ?';
    db.query(sql, emp, (err, result) => {
        if (err) throw err;
        res.send('Employee added...');
    });
});


// Get all employees
app.get('/employees', (req, res) => {
    let sql = 'SELECT * FROM employees';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

// Get single employee by ID
app.get('/employee/:id', (req, res) => {
    let sql = `SELECT * FROM employees WHERE eId = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});


app.put('/employee/:id', (req, res) => {
    let newEmpData = req.body;
    let sql = `UPDATE employees SET ? WHERE eId = ${req.params.id}`;
    db.query(sql, newEmpData, (err, result) => {
        if (err) throw err;
        res.send('Employee updated...');
    });
});


app.delete('/employee/:id', (req, res) => {
    let sql = `DELETE FROM employees WHERE eId = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send('Employee deleted...');
    });
});




app.listen(3000, () => {
    console.log('Server started on port 3000');
});
