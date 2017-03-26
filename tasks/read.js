/**
 *
 * @param url 要读取的地址  http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1
 * @param callback 回调函数
 * 读取url的响应体，提取其中的电影列表，并传给callback
 */
let request=require('request');
var iconv=require('iconv-lite');
var cheerio=require('cheerio');
var debug=require('debug');
var logger=debug('crawl:read');
module.exports=function(url,callback){
    request({url,encoding:null},function(err,response,body){
        body=iconv.decode(body,'gbk');
        var movies=[];
        var $=cheerio.load(body);
        $('.keyword .list-title').each(function(){
            var $this=$(this);
            var movie={
                name:$this.text(),
                url:$this.attr('href')
            };
            logger(`read out movie:${movie.name}`);
            movies.push(movie);
        });
        callback(err,movies);
    });
};
/*
var url='http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
module.exports(url,function(err,movies){
    console.log(movies)
});*/
