var express = require('express');
var router = express.Router();
var konek = require(__dirname + '/../bin/db.js');


router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});



/* GET users listing. */
router.get('/', function (req, res, next) {
  konek.query('SELECT * from users ', function (err, rows, fields) {
    if (!err)
      res.json({
        status: 'success',
        data: rows
      })
    else
      res.json([{
        status: 'failed',
        errMsg: 'Error while performing query.'
      }])
  });

});

/* GET users by id. */
router.get('/id/:id', function (req, res, next) {
  konek.query('SELECT * from users where id_p = ? ', req.params.id, function (err, rows, fields) {
    if (!err)
      res.status(200).json({
        status: 'success',
        data: rows[0]
      })
    else
      res.status(502).json([{
        status: 'failed',
        errMsg: 'Error while performing query.'
      }])
  });

});

router.post('/add', (req, res) => {
  data = req.body
  konek.query("INSERT INTO users set ? ", data, function (err, rows) {
    if (!err) 
      res.status(200).json([{
        status: 'success',
        insertID: rows.insertId
      }])   
    else
      res.status(502).json([{
        status: 'failed',
        errMsg: 'Error while inserting data.'
      }])
  })
})

router.put('/edit', (req, res) => {
  data = req.body
  id_user = data.id_user

  delete data.id
  // console.log(id)
  // res.sendStatus(200)
  konek.query("UPDATE users set ? where id_p = ? ", [data,id_user], function (err, rows) {
    if (!err)
      res.status(200).json([{
        status: 'success',
      }])
    else
      res.status(502).json([{
        status: 'failed',
        errMsg: 'Error while updating data.'
      }])
  })
})

router.delete('/delete', (req, res) => {
  // console.log(id)
  // res.sendStatus(200)
  konek.query("DELETE FROM users where id_p = ? ", req.body.id, function (err, rows) {
    if (!err)
      res.status(200).json([{
        status: 'success',
      }])
    else
      res.status(502).json([{
        status: 'failed',
        errMsg: 'Error while deleting data.'
      }])
  })
})


router.post('/login', (req, res) => {  
  data = req.body
  email = data.email
  password = data.password
  console.log(email);
  console.log(password);
  konek.query("SELECT * from users where email = ? AND password = ? ", [email,password], function (err, rows) {
    if (!err)
      res.status(200).json([{
        status: 'success',
        data:rows
      }])
    else
      res.status(502).json([{
        status: 'failed',
        errMsg: 'Error while deleting data.'
      }])
  })
})
module.exports = router;
