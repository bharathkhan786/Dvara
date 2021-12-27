const express = require('express')
const mysql = require('mysql');
const app = express()

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'C@l3ido@123',
  database: 'demo'
});

connection.connect(function (err) {
  (err) ? console.log(err) : console.log(connection);
});
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('Welcome Bharath Khan');
});

app.post('/api/user', (req, res) => {
  console.log('reqreqreq', req);

  let dataObj = req.body.data
  console.log('dataObj', dataObj.phoneNumber);
  var sql = `SELECT * FROM user where phone_number='${dataObj.phoneNumber}'`;
  connection.query(sql, function (err, results) {
    console.log(results);
    if (err) throw err;
    res.json({ user: results });
  });
});
app.post('/api/tasks/create', (req, res) => {
  let dataObj = req.body.data
  console.log('dataObj', dataObj);
  let sql = `INSERT INTO user (user_name, phone_number, image) VALUES 
  ('${dataObj.userName}' ,${dataObj.phoneNumber}, '${dataObj.fileName}')`;
  connection.query(sql,
    function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      res.send('1 record inserted');
    });
});
app.listen(5000, () => {
  console.log('App listening on port 5000')
})