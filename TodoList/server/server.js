/**
 * Created by Qjiang on 3/24/2016.
 */
var mongoose = require("mongoose");
var express = require("express");
var app = express();
var cors=require('cors');
var parsers = require('body-parser');

app.use(cors());
app.use(parsers());


mongoose.connect("mongodb://localhost/todoList");
var prio=["High","Regular","Low"];

var List = mongoose.model('Instance', {name:String, priority:String, time:Date});
/*var instance= new List({name:"Start",priority:prio[2],time:Date.now()});

instance.save(function (err) {
    if(err){
        console.log("Failed.");
    }
    else{
        console.log("Saved.");
    }
});*/

app.get("/",function(req,res){
    List.find(function(err,items){
        res.send(items);
    });
});

app.post("/add",function(req,res){
    var name=req.body.name;
    var priority=req.body.priority;
    var time=req.body.time;
    var item=new List({name:name,priority:prio[priority],time:time});
    item.save(function (err) {
        if(err){
            console.log(err.message);
        }
        else {
            res.send();
        }
    });
});

app.listen(3000);
