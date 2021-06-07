// var User = require("./model/user");
// var connection = require("./config");
// var SqlGenerator = require("./sqlGenerator");

// var sqlGenerator = new SqlGenerator();

// function LaborerController() {}

// LaborerController.prototype.getAllLaborers = function(callback) {
//     var sqlQuery = sqlGenerator.getLaborerByNIC();
//    console.log(sqlQuery);
//     connection.query('SELECT * from user', function(err, resultLaborers) {
//         console.log(resultLaborers);
//       if (err || resultLaborers.length == 0) {
//         callback(null, err);
//         console.log('if');
//         console.log(err); 
//       } else {
//           console.log('else');
//         var i = 0;
//         var resLaborers = [];
  
//         while (resultLaborers[i]) {
//           var laborer = new User(
//             resultLaborers[i].id,
//             resultLaborers[i].title,
//             resultLaborers[i].description,
//             resultLaborers[i].duedate,
//             resultLaborers[i].status,
//             resultLaborers[i].category,
//             resultLaborers[i].functions
//           );
//           resLaborers.push(laborer);
//           console.log(laborer);
//           i++;
//         }
//         callback(resLaborers);
//       }
//     });
//   };

//   LaborerController.prototype.insertLaborer = function(reqBody, callback) {
//     console.log("controlller insert");
//     connection.beginTransaction(function(err) {
//       if (err) {
//         callback(null, err);
//       }
//   console.log(reqBody);
//       // *** request should contain below keys exactly as it is.
//       var laborer = new User(
//         reqBody.id,
//         reqBody.title,
//         reqBody.description,
//         reqBody.duedate,
//         reqBody.status,
//         reqBody.category,
//         reqBody.functions
//       );
  
//          console.log(laborer);      
//       var sqlQuery = sqlGenerator.insertLaborer(laborer);
//   console.log(sqlQuery);
//       sqlGenerator.executeSql(connection,sqlQuery, function(result, err) {
//         if (err) {
//           connection.rollback();
//           callback(null, err);
//         } else {
//           connection.commit(function(err) {
//             if (err) {
//               connection.rollback();
//               callback(null, err);
//             }
//             console.log("Transaction Complete.");
//             callback("Laborer successfully inserted into the system!");
//           });
//         }
//       });
//     });
//   };

//   LaborerController.prototype.deleteLaborer = function(reqBody, callback) {
//     console.log("controlller delete");
//     connection.beginTransaction(function(err) {
//       if (err) {
//         callback(null, err);
//       }
//   console.log(reqBody);
//       // *** request should contain below keys exactly as it is.
//       var deletelaborer = new User( 
//         id=reqBody ,
//         // reqBody.amount,
//         // reqBody.number
//       );
   
//          console.log(deletelaborer);      
//       var sqlQuery = sqlGenerator.deleteLaborer(deletelaborer);
//   console.log(sqlQuery);
//       sqlGenerator.executeSql(connection,sqlQuery, function(result, err) {
//         if (err) {
//           connection.rollback();
//           callback(null, err);
//         } else {
//           connection.commit(function(err) {
//             if (err) {
//               connection.rollback();
//               callback(null, err);
//             }
//             console.log("Transaction Complete.");
//             callback("Laborer successfully deleted from the system!");
//           });
//         }
//       });
//     });
//   };

//   module.exports = LaborerController;