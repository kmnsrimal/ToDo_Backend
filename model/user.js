var User = function(id, title,description,duedate,status,category,functions) {

    console.log("model insert");
    this.id = id;
    this.title = title;
    this.description =description;
    this.duedate =duedate;
    this.status =status;
    this.category =category;
    this.functions =functions;
  } 
  console.log(User);
  // Export laborer model
  module.exports = User;