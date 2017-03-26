var files=[
    {filename:'a.txt',content:'1'},
    {filename:'b.txt',content:'2'},
    {filename:'c.txt',content:'3'}
];
let async=require('async');
let fs=require('fs');
async.forEach(files,function(item,callback){
    fs.writeFile(item.filename,item.content,callback)
},function(){
    console.log('end');
});