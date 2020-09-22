var session = require('express-session');
var mysql = require('mysql')
let fs = require('fs');
const path = require('path') 
express=require("express");
var app=require("express")(); 
var url = require('url');
ejs = require('ejs');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get("/", function(req,res){
res.render('test')

})
app.get("/listall",function(r,res){
fs.readFile('file.json', 'utf-8', function(err, data) {


const emp=JSON.parse(data)


res.render('test', { e:emp})


})


})
app.get("/del/:id",function(req,res){
	fs.readFile('file.json', 'utf-8', function(err, data) {
	if (err) throw err




var a=JSON.parse(data)
console.log(a)
var name="employee"

for (var i=0;i<a.length;i++){
if(a[i].id==req.params.id){
	a.splice(i,1)
	break

}

}

	
	console.log("its ockay till here")

	fs.writeFile("file.json", JSON.stringify(a), err => { 
     
    // Checking for errors 
    if (err) throw err;  


    res.send("Success")
   
    console.log("Done writing"); // Success 
});

	
})
})
app.post("/changevalue",function(req,res){

	fs.readFile('file.json', 'utf-8', function(err, data) {
	if (err) throw err




var a=JSON.parse(data)
console.log(a)
var name="employee"
	
for (var i=0;i<a.length;i++){
if(a[i].id==req.query.id){
	
	a[i].name=req.body.name
	a[i].department=req.body.department
	break

}

}

	
	console.log(req.body.department)

	fs.writeFile("file.json", JSON.stringify(a), err => { 
     
    // Checking for errors 
    if (err) throw err;  


    res.send("Success")
   
    console.log("Done writing"); // Success 
});

	
})


})
app.get("/a",function(req,res){
	fs.readFile('file.json', 'utf-8', function(err, data) {


const emp=JSON.parse(data)
console.log(emp.length)
const id=req.query.id

for (var i=0;i<emp.length;i++){
	console.log(emp[i].name)
if(emp[i].id==id){
console.log(emp[i])
res.send(emp[i])

break;

}

}




})


	})
app.get("/ajax",function(req,res){
fs.readFile('file.json', 'utf-8', function(err, data) {


const emp=JSON.parse(data)
console.log(emp.length)

res.send(emp)


})

})


app.post("/1234addEmployee",function(req, res){
	console.log("okl");

	var obj = {name:req.body.name,department:req.body.department,id:req.body.id}
	console.log("id"+req.param.id)
     

      var json = JSON.stringify(obj);
      
console.log(json)
	
fs.readFile('file.json', 'utf-8', function(err, data) {
	if (err) throw err




var a=JSON.parse(data)
console.log(a)
var name="employee"

	a.push(obj)
	console.log("its ockay till here")

	fs.writeFile("file.json", JSON.stringify(a), err => { 
     
    // Checking for errors 
    if (err) throw err;  


    res.send("Success")
   
    console.log("Done writing"); // Success 
});

	
})



})


 app.listen(3004, function() {
   console.log('listening on *:3000');
});



