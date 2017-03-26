/*
*
* */
let cheerio=require('cheerio');
var html=`
    <table>
        <tr><td>名称</td></tr>
        <tr>
            <td class="keyword">
                <a href="#" class="list-title">apple</a>
            </td>
        </tr>
        <tr>
            <td class="keyword">
                <a href="#" class="list-title">孙悟空</a>
            </td>
        </tr>
        <tr>
            <td class="keyword">
                <a href="#" class="list-title">朗读者</a>
            </td>
        </tr>
    </table>
`;
let $=cheerio.load(html);
let movies=[];
$('.keyword .list-title').each(function(index,item){
    console.log($(item).text());
    var $this=$(item);
    var movie={
        name:$this.text(),
        url:$this.attr('href')
    };
    movies.push(movie);
});
console.log(movies);