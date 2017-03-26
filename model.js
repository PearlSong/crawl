let mongoose = require('mongoose');
mongoose.Promise = Promise;
//连接数据库
mongoose.connect('mongodb://127.0.0.1/crawl');
//定义模型骨架
let MovieSchema = new mongoose.Schema({
    name:String,
    url:String
});
//定义并导出模型
//exports.Movie = mongoose.model('Movie',MovieSchema);
module.exports=mongoose.model('Movie',MovieSchema);