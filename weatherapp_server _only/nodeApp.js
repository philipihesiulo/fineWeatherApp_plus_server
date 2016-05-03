//var query = require("querystring");
var weather = require("./server").weather;
var express = require("express");
var app = express()

app.use(express.static(__dirname+"/public"))

app.set("views", __dirname+"/views");
app.set("view engine", "jade");

app.get("*", function(req, res){
  if (req.url === "/" ){
    res.status(200); 
    res.render("index");
  }else{
    
    var location = req.query.location;
    weather(location, function(data){
      
      if(data.error){
        console.log(data.error.message);
        res.status(200); 
        res.render("error", {data: data});
      }else if (data.message){
        console.log(data.message);
        res.status(200); 
        res.render("error", {data: data});
      }else{
        console.log(data);
        res.status(200); 
        res.render("page", {data: data});
      }
      
      
    })
  }
  
  
})


app.listen(3000, function(){
  console.log("Server Running on port %d", 3000)
});