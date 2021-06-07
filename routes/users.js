var express = require('express');
var router = express.Router();

var TodoController = require("../controller/todo");

var todoController = new TodoController();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;
