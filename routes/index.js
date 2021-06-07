var express = require('express');
var router = express.Router();
var cors = require('cors');

var TodoController = require("../controller/todo");

var todoController = new TodoController();

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/admin', function(req, res, next) {
  console.log('admin');
  res.render('index', { title: 'admin' });
});

// GET Route - Get all laborers
// router.get("/get-all", function(req, res, next) {
//   console.log("Routes get-all");
//   laborerController.getAllLaborers(function(result, err) {
//     if (err) {
//       res.status(404);
//       res.send(err);
//     } else {  
//       res.status(200);
//       res.json(result);
//     }
//   });
// });

// router.post("/insert", function(req, res, next) {
//   console.log("Routes insert");
//   laborerController.insertLaborer(req.body, function(result, err) {

//     if (err) {
//       res.status(404);
//       res.send(err);
//     } else {
//       res.status(200);
//       res.json(result);
//     }
//   });
// });

// router.delete("/delete/:id", function(req, res, next) {
//   console.log("route");
//   laborerController.deleteLaborer(req.params.id, function(result, err) {
//     console.log("route");
//     if (err) {
//       res.status(404);
//       res.send(err);
//     } else {
//       res.status(200);  
//       res.json(result);
//     }
//   });
// }); 

// GET Route - Get all ToDos
router.get("/getall",cors(corsOptions), function(req, res, next) {
  console.log("Routes get-all");  
  todoController.getAllToDos(function(result, err) {
    if (err) { 
      res.status(404);
      res.send(err);
    } else {  
      res.status(200);                
      res.json(result);    
    } 
  });
});

router.post("/create", function(req, res, next) {
  console.log("Routes insert");
  todoController.insertToDo(req.body, function(result, err) {

    if (err) {
      res.status(404);
      res.send(err);
    } else {
      res.status(200);
      res.json(result);
    }
  });
});

router.post("/update/:id", function(req, res, next) {
  console.log("Routes insert");
  todoController.UpdateToDo(req.params.id,req.body, function(result, err) {

    if (err) {
      res.status(404);
      res.send(err);
    } else {
      res.status(200);
      res.json(result);
    }
  });
});

router.post("/Dateupdate/:id/:date", function(req, res, next) {
  console.log(req.body);
  console.log("Routes insert");
  todoController.UpdateDate(req.params.id,req.params.date,req.body, function(result, err) {
// console.log(date);
    if (err) { 
      res.status(404);   
      res.send(err);
    } else {
      res.status(200);   
      res.json(result);
    }
  });    
});

router.delete("/delete/:id", function(req, res, next) {
  console.log("route");
  // console.log(req);
  todoController.deleteToDo(req.params.id, function(result, err) {
    console.log("route");
    if (err) {
      res.status(404);
      res.send(err);
    } else { 
      res.status(200);  
      res.json(result);   
    }
  });
});


router.get("/getcategory",cors(corsOptions), function(req, res, next) {
  console.log("Routes get-all");  
  todoController.categoryToDo(function(result, err) {
    console.log(result);
    if (err) {
      res.status(404);
      res.send(err);
    } else {  
      res.status(200);                
      res.json(result);    
    } 
  });
}); 


module.exports = router;
