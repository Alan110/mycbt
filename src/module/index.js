/**
 *
 * Created by Administrator on 2015/7/17 0017.
 */

var fs = require("fs");
var test = require("assert");
var ejs = require("ejs");

exports.index = function(request,response){
    response.writeHead(200, {'Content-Type': 'text/html'});

    fs.readFile("webroot/index.ejs","utf8",function(err,data){
        test.equal(null,err);
        var ret = ejs.render(data,{
            "name":"alan",
            "age":12
        });
       response.end(ret);
    });
}

exports.img3d = function(request,response){
    response.writeHead(200, {'Content-Type': 'text/html'});

    fs.readFile("webroot/index.html","utf8",function(err,data){
        test.equal(null,err);
        var ret = ejs.render(data,{
            "name":"alan",
            "age":12
        });
        response.end(ret);
    });
}

