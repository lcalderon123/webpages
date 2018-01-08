
var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "",
  database: "webpages"
})

function start(){

connection.query('SELECT * FROM Designs', function(err, res){
  if(err) throw err;

  console.log('_.~"~._.~"~._.~Welcome to Lea Designs ~._.~"~._.~"~._')
  console.log('----------------------------------------------------------------------------------------------------')

  for(var i = 0; i<res.length;i++){
    console.log("ID: " + res[i].ItemID + " | " + "Designs: " + res[i].DesignName + " | " + "Department: " + res[i].CategoryName + " | " + "Price: " + res[i].Price + " | " + "Time: " + res[i].TimeToCreate);
    console.log('--------------------------------------------------------------------------------------------------')
  }

  console.log(' ');
  inquirer.prompt([
    {
      type: "input",
      name: "id",
      message: "What is the ID of the product you would like to purchase?",
      validate: function(value){
        if(isNaN(value) == false && parseInt(value) <= res.length && parseInt(value) > 0){
          return true;
        } else{
          return false;
        }
      }
    },
    ]).

    then(function(ans){
      var whatToBuy = (ans.id)-1;
      var grandTotal = parseFloat(((res[whatToBuy].Price).toFixed(2));


        connection.query("SELECT * FROM Categories", function(err, deptRes){
          if(err) throw err;
          var index;
          for(var i = 0; i < deptRes.length; i++){
            if(deptRes[i].CategoryName === res[whatToBuy].CategoryName){
              index = i;
            }
          };


          connection.query("UPDATE Category SET ? WHERE ?", [
          {TotalSales: deptRes[index].TotalSales + grandTotal},
          {DepartmentName: res[whatToBuy].CategoryName}
          ], function(err, deptRes){
              if(err) throw err;

          });


function reprompt(){
  inquirer.prompt([{
    type: "confirm",
    name: "reply",
    message: "Would you like to purchase another design?"
  }]).then(function(ans){
    if(ans.reply){
      start();
    } else{
      console.log("Thank you");
    }
  });
}

start();
