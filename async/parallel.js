let async=require('async');
let fs=require('fs');
let ejs=require('ejs');
async.parallel([
    function(callback){
        fs.readFile('./tmpl.html','utf8',function(err,data){
            callback(err,data);
        });
    },
    function(callback){
        fs.readFile('./user.json','utf8',function(err,data){
            callback(err,{users:JSON.parse(data)});
        });
    }
],function(err,result){
    //console.log(err);
    //console.log(result);
    var tmpl=result[0];
    var data=result[1];
    var template=ejs.compile(tmpl);
    var html=template(data);
    console.log(html);
});

