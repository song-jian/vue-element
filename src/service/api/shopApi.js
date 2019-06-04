var models = require('../db/db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../db/sqlMap');
var conn = mysql.createConnection(models.mysql);
conn.connect();
var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.send('err');
    } else {
        res.send(ret);
    }
}
var dateStr = function(str) {
    return new Date(str.slice(0,7));
}
//获取所有用户列表
router.post('/shopList', (req, res) => {
    var sql_name = $sql.shoplist.select_name;
    conn.query(sql_name, function(err, result) {
        if (err) {
            // console.log(err);
        }
        if (result[0] === undefined) {
            res.send('-1')   //查询不出username，data 返回-1
        } else {
            jsonWrite(res, result);
        }
    })
});


module.exports = router;
