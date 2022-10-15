const express = require('express');
const app =new express();

const PORT=3000;
const data=require('./data/data.json');

app.use(express.static('public'));

app.use(express.json());

app.use("/images",express.static('images'));

app.use(express.urlencoded({extended : true}));



app.post('/middle',function(req,res){
    console.log(req.body);
    res.send(req.body);
})

// for fake data https://www.mockaroo.com/

app.get('/user/:id',function(req,res){
console.log(req.params.id);
var user=Number(req.params.id);
console.log(data[user]);
console.log(req.originalUrl);
console.log(req.method);
// everthing before is middleware
res.send(data[user-1]);
});

app.get('/error',function(req,res){
    throw new Error();
})

app.use(function(err,req,res,next){
    console.error(err.stack);
    res.send("Red alert                      "+err.stack);
});


app.listen(PORT,function(){
    console.log("your server is running in "+PORT);
    console.log(data);
});

