var express = require('express');
var router = express.Router();
const auth=require('./jwt');
const connection=require('./db');
router.get('/credit',function(req, res){
    console.log("Inside Employee")
    var sql=`SELECT SUM(Credit) as Credit FROM usercredit WHERE UserId=${req.query.userId} `
 
        connection.query(sql, function (err, result) {
          if (err) throw err;
          
          res.send({"Status":"Success","Data":result[0]})
        });


});

router.post('/credit',function(req, res){
    console.log(req.body);
    var userId=1;
    var sql=`INSERT INTO  usercredit(Credit,UserId,UpdatedBy) VALUES(${req.body.credit},${userId},${userId})`
 
        connection.query(sql, function (err, result) {
          if (err) throw err;
          
          res.send({"Status":"Success","Message":"User Created Successfuly"})
        });
     
     
     
});

module.exports=router;