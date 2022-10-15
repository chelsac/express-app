const express = require('express')
const app =new express();
const PORT=3000;
const data=require('./data/data.json');

app.use(express.static('public'));

app.use("/images",express.static('images'));

// for fake data https://www.mockaroo.com/

app.get('/user/:id',function(req,res,next){
console.log(req.params.id);
var user=Number(req.params.id);
console.log(data[user]);
res.send(data[user-1]);

next();
},
function(req,res){
console.log("Its here");

}
);

app.get('/',function(req,res){
    //res.send("get req from port "+PORT);
   
    res.json(data);

    // res.end();
});

app.get('/new',function(req,res){
    
    res.redirect("https://stackoverflow.com/");
});

app.get('/download',function(req,res){
    
    res.download("images/tent.jpg");
});



app.post('/post',function(req,res){
    res.send("post req from port "+PORT);
});

app.put('/put',function(req,res){
    res.send("put req from port "+PORT);
});

app.delete('/put',function(req,res){
    res.send("delete req from port "+PORT);
});


app.listen(PORT,function(){
    console.log("your server is running in "+PORT);
    console.log(data);
});

app.route('/route')
    .get(function(req,res){
        res.send("get req from port "+PORT);
    })
    .post(function(req,res){
        res.send("post req from port "+PORT);
    })
    .put(function(req,res){
        res.send("put req from port "+PORT);
    })
    .delete(function(req,res){
        res.send("delete req from port "+PORT);
    })