let request=require('request');
let iconv=require('iconv-lite');
let cheerio=require('cheerio');
request({uri:'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1',encoding:null},function(err,response,body){
    /**
     * err对象
     * response 响应对象
     */
    body=iconv.decode(body,'gbk');
    //console.log(body);
    let $=cheerio.load(body);
    let movies=[];
    $('.keyword .list-title').each(function(index,item){
        //console.log($(item).text());
        var $this=$(item);
        var movie={
            name:$this.text(),
            url:$this.attr('href')
        };
        movies.push(movie);
    });
    console.log(movies);
});
