/**
 *
 * Created by Administrator on 2015/7/18 0018.
 */


var MongoClient = require('mongodb').MongoClient;
var config = require("../config.js");
var url = require('url');
var test = require('assert');

function login(request,response){
    MongoClient.connect(config.url,function(err,db){
        var info =  url.parse(request.url,true);
        info["query"]["email"]  = "306880673@qq.com";
        var cursor = db.collection("user").find({"email":info["query"]["email"]})
        cursor.forEach(function(doc){
            test.notEqual(null,doc);
            console.dir(doc);
        },function(err){
            console.log("not fond");
        })
    })

}


exports.login = login;