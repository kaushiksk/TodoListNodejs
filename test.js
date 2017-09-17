var mongoose = require('mongoose');
var mongodb = require('mongodb');

//mongoose.connect('mongodb://localhost:27017/product_database')
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://user:user@ds139288.mlab.com:39288/product_database", function(err, db1){

  MongoClient.connect("mongodb://localhost:27017/product_database", function(err, database) {
    if(err) throw err;
    db = database;
    db.collection("Products").find({}, function(err, docs) {
        docs.each(function(err, doc) {
          if(doc) {
            db1.collection("Products").insertOne(doc, function(err,res1){
              if(err) throw err;
              console.log("Inserted a document into the restaurants collection.");

            });
          }
        });
      });

  });

});
