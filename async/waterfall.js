let async=require('async');
let fs=require('fs');
async.waterfall([
    function(callback){
        fs.readFile('1.txt','utf8',function(err,data){
            callback(err,data);
        })
    },
    function(data,callback){
        fs.readFile(data,'utf8',function(err,data){
            callback(err,data);
        })
    },
    function(data,callback){
        fs.readFile(data,'utf8',function(err,data){
            callback(err,data);
        })
    }
],function(err,result){
    console.log(result);
});