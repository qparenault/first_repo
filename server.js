var express = require ('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');  // Bodyparser is used to parse the body of a response
var db = mongojs("dicomIndex", ["series"]);  // ("DATABASE",["COLLECTION"])

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.use(express.static(__dirname + "/public"));         // Links the JS file with a static HTML file in the folder "/public"

/*
app.get("/contactlist", function (req,res){
        // db.series.find({"Modality": "CT"},function(err, docs){
       //   res.json(docs.slice(0,10));
    });
    */


app.post('/PatientList', function(req,res){
    var query = req.body;
    db.series.find(query, {_id:0 , _path:1, Modality: 1, PatientSex : 1},
        function(err, docs){
            if (docs.length == 0){
                res.json("err");
                console.log("NO FILES WERE FOUND FOR THESE DICOM TAGS");
            }
            else{
                res.json({
                    result: docs.slice(0,50), 
                    YesNo: docs.length
                })};
        });
});

app.listen(3000);
console.log("Server running on port 3000...");


