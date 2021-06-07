var User = require("../model/user");
var Category = require("../model/category");
var connection = require("../config/config");
var SqlGenerator = require("../util/sqlGenerator");
  
var sqlGenerator = new SqlGenerator();

function TodoController() {}
 
TodoController.prototype.getAllToDos = function(callback) {
    var sqlQuery = sqlGenerator.getAllToDo();
   console.log(sqlQuery);
    connection.query('SELECT * from user', function(err, resultToDos) {
        console.log(resultToDos);
      if (err || resultToDos.length == 0) {
        callback(null, err);
        console.log('if');
        console.log(err);  
      } else {
          console.log('else');
        var i = 0;
        var resToDos = [];
  
        while (resultToDos[i]) {
          var ToDo = new User(
            resultToDos[i].id,
            resultToDos[i].title,
            resultToDos[i].description,
            resultToDos[i].duedate,
            resultToDos[i].status,
            resultToDos[i].category,
            resultToDos[i].functions
          );
          resToDos.push(ToDo);
          console.log(ToDo);
          i++;
        }
        callback(resToDos);
      }
    });
  };

  TodoController.prototype.insertToDo = function(reqBody, callback) {
    console.log("controlller insert");
    connection.beginTransaction(function(err) {
      if (err) {
        callback(null, err);
      }
  console.log(reqBody);
      // *** request should contain below keys exactly as it is.
      var ToDo = new User(
        reqBody.id,
        reqBody.title,
        reqBody.description,
        reqBody.duedate,
        reqBody.status='Pending',
        reqBody.category,
        reqBody.functions
      );
  
         console.log(ToDo);      
      var sqlQuery = sqlGenerator.insertToDo(ToDo);
  console.log(sqlQuery);
      sqlGenerator.executeSql(connection,sqlQuery, function(result, err) {
        if (err) {
          connection.rollback();
          callback(null, err);
        } else {
          connection.commit(function(err) {
            if (err) {
              connection.rollback();
              callback(null, err);
            }
            console.log("Transaction Complete.");
            callback("ToDo successfully inserted into the system!");
          });
        }
      });
    });
  };

  // Update laborer in DB
  TodoController.prototype.UpdateToDo = function(id,reqBody, callback) {
    console.log("controlller insert");
  connection.beginTransaction(function(err) {
    if (err) {
      callback(null, err);
    }
    console.log(reqBody);
    // *** request should contain below keys exactly as it is.
    var a = new User(
      id,
      reqBody.title,
      reqBody.description,
      reqBody.duedate,
      reqBody.status='Completed',
      reqBody.category,
      reqBody.functions
    );
      console.log(a)
    var sqlQuery = sqlGenerator.updateToDo(a);

    sqlGenerator.executeSql(connection, sqlQuery, function(result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else if (result.affectedRows == 0) {
        connection.rollback();
        callback("Laborer doesn't exist for the given NIC.");
      } else {
        connection.commit(function(err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log("Transaction Complete.");
          callback("ToDo successfully updated in the system!");
        });
      }
    });
  });
};

  // Update laborer in DB
  TodoController.prototype.UpdateDate = function(id,duedate,reqBody, callback) {
    console.log("controlller insert");
    console.log(duedate);
  connection.beginTransaction(function(err) {
    if (err) {
      callback(null, err);
    }
    console.log(reqBody);
    // *** request should contain below keys exactly as it is.
    var a = new User(
      id,    
      reqBody.title,
      reqBody.description,
      duedate,
      reqBody.status,
      reqBody.category,
      reqBody.functions
    );
      console.log(a)
    var sqlQuery = sqlGenerator.UpdateDate(a);

    sqlGenerator.executeSql(connection, sqlQuery, function(result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else if (result.affectedRows == 0) {
        connection.rollback();
        callback("Laborer doesn't exist for the given NIC.");
      } else {
        connection.commit(function(err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log("Transaction Complete.");
          callback("ToDo successfully updated in the system!");
        });
      }
    });
  });
};

  TodoController.prototype.deleteToDo = function(reqBody, callback) {
    console.log("controlller delete");
    connection.beginTransaction(function(err) {
      if (err) {
        callback(null, err);
      }
  console.log(reqBody);
      // *** request should contain below keys exactly as it is.
      var deleteToDo = new User( 
        id=reqBody ,
        // reqBody.amount,
        // reqBody.number
      );
   
         console.log(deleteToDo);      
      var sqlQuery = sqlGenerator.deleteToDo(deleteToDo);
  console.log(sqlQuery);
      sqlGenerator.executeSql(connection,sqlQuery, function(result, err) {
        if (err) {
          connection.rollback();
          callback(null, err);
        } else {
          connection.commit(function(err) {
            if (err) {
              connection.rollback();
              callback(null, err);
            }
            console.log("Transaction Complete.");
            callback("ToDo successfully deleted from the system!");
          });
        }
      });
    });
  };

  TodoController.prototype.categoryToDo = function(callback) {
    var sqlQuery = sqlGenerator.categoryToDo();
   console.log(sqlQuery);
    connection.query(sqlQuery, function(err, resultToDos) {
        console.log(resultToDos);
      if (err || resultToDos.length == 0) {
        callback(null, err);
        console.log('if');
        console.log(err);  
      } else {
          console.log('else');
        var i = 0;
        var resToDos = [];
  
        while (resultToDos[i]) {
          var ToDo = new Category(
            resultToDos[i].category_id,
            resultToDos[i].category,

          );
          resToDos.push(ToDo);
          console.log(ToDo);  
          i++;  
        }
        callback(resToDos);
      }
    });
  };

  module.exports = TodoController;   