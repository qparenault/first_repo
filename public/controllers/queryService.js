// <reference path="controller.js"/>

var express = require ('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');  // Bodyparser is used to parse the body of a response
var db = mongojs("dicomIndex", ["series"]);  // ("DATABASE",["COLLECTION"])

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.factory("searchService", function(){
    return {
        queryDB: function(input){
            

        }
    };
});





