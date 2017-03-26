//让异步按顺序执行
let async=require('async');
async.series([//series 让里面的方法顺序执行
    function(callback){
        setTimeout(function(){
            callback(null,'1');
        },1000)
    },
    function(callback){
        setTimeout(function(){
            callback(null,'2');
        },3000)
    },
    function(callback){
        setTimeout(function(){
            callback(null,'3');
        },2000)
    }
],function(err,result){
    console.log(err);
    console.log(result);
});
