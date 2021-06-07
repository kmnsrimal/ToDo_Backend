// // SQL Generator
// function SqlGenerator() { }

// // --------------------------- ToDo Table --------------------------------

// // Get ToDo by NIC query
// SqlGenerator.prototype.getToDoByNIC = function(nic) {
//   var query = "SELECT * FROM user"; 
//   return query;

// }


// SqlGenerator.prototype.insertToDo = function(ToDo) {
//   var query = "INSERT INTO user (id, title, description,duedate,status,category,functions) VALUES (" + 
//   "'" + ToDo.id + "', " +
//   "'" + ToDo.title + "', " +
//   "'" + ToDo.description + "', " +
//   "'" + ToDo.duedate + "', " +
//   "'" + ToDo.status + "', " +
//   "'" + ToDo.category + "', " +
//   "'" + ToDo.functions + "')";

//     // *** use a console.log to view query before do other things.
//     // console.log(query);
//   return query;
// }

// SqlGenerator.prototype.deleteToDo = function(deleteToDo) {
//   var query = "delete from user where id ='" + deleteToDo.id + "'" 
  
//     console.log(query);
//   return query;
// }

// SqlGenerator.prototype.executeSql = function (connection, query, callback) {
//   connection.query(query, function (err, result) {
//     if (err) {
//       callback(null, err);
//     } else {
//       callback(result)
//     }
//   });
// }

// SqlGenerator.prototype.getAllToDo = function(nic) {
//   var query = "SELECT * FROM user"; 
//   return query;

// }

// SqlGenerator.prototype.insertToDo = function(ToDo) {
//   var query = "INSERT INTO user (id, title, description,duedate,status,category,functions) VALUES (" + 
//   "'" + ToDo.id + "', " +
//   "'" + ToDo.title + "', " +
//   "'" + ToDo.description + "', " +
//   "'" + ToDo.duedate + "', " +
//   "'" + ToDo.status + "', " +
//   "'" + ToDo.category + "', " +
//   "'" + ToDo.functions + "')";

//     // *** use a console.log to view query before do other things.
//     // console.log(query);
//   return query;
// }

// SqlGenerator.prototype.deleteToDo = function(deleteToDo) {
//   var query = "delete from user where id ='" + deleteToDo.id + "'" 
  
//     console.log(query);
//   return query;
// }


// SqlGenerator.prototype.categoryToDo = function(nic) {
//   var query = "SELECT * FROM category"; 
//   return query;

// }

// module.exports = SqlGenerator;