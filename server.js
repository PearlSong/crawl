let express = require('express');
let path = require('path');
let Movie = require('./model');
let app = express();
app.set('view engine','html');
app.set('views',path.resolve('views'));
app.engine('html',require('ejs').__express);
app.get('/', function (req, res) {
    Movie.find({},function(err,movies){
        res.render('index',{movies});
    })
});

app.listen(9000);

//114.215.45.96   name:root password:Zfpx201614