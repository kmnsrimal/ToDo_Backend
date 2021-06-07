// SQL Generator
function SqlGenerator() { }

// --------------------------- user Table --------------------------------

SqlGenerator.prototype.executeSql = function (connection, query, callback) {
  connection.query(query, function (err, result) {
    if (err) {
      callback(null, err);
    } else {
      callback(result)
    }
  });
}

SqlGenerator.prototype.getAllToDo = function(nic) {
  var query = "SELECT * FROM user"; 
  return query;

}

SqlGenerator.prototype.insertToDo = function(user) {
  var query = "INSERT INTO user (id, title, description,duedate,status,category,functions) VALUES (" + 
  "'" + user.id + "', " +
  "'" + user.title + "', " +
  "'" + user.description + "', " +
  "'" + user.duedate + "', " +
  "'" + user.status + "', " +
  "'" + user.category + "', " + 
  "'" + user.functions + "')";

    // *** use a console.log to view query before do other things.
    // console.log(query);
  return query;
}

SqlGenerator.prototype.updateToDo = function(a) {
  // var query = "delete from user where id ='" + laborer.id + "'" 
  var query = "UPDATE user SET id =" + a.id + ",title ='" + a.title + "',description='" + a.description + "',duedate='" + a.duedate + "', status='" + a.status + "',category='" + a.category + "',functions='" + a.functions + "'WHERE id =" + a.id + ""
    console.log(query);
  return query;
}

SqlGenerator.prototype.UpdateDate = function(a) {
  // var query = "delete from user where id ='" + laborer.id + "'" 
  var query = "UPDATE user SET id =" + a.id + ",title ='" + a.title + "',description='" + a.description + "',duedate='" + a.duedate + "', status='" + a.status + "',category='" + a.category + "',functions='" + a.functions + "'WHERE id =" + a.id + ""
    console.log(query);
  return query;
}

SqlGenerator.prototype.categoryToDo = function(deleteuser) {
  var query = "delete from user where id ='" + deleteuser.id + "'" 
  
    console.log(query); 
  return query; 
}

SqlGenerator.prototype.categoryuser = function(nic) {
  var query = "SELECT * FROM category"; 
  return query;
   
}

module.exports = SqlGenerator;   