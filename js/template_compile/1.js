// 贪婪匹配
var regex = /\d{2,5}/g;
var string = "123 1234 12345 123456";
console.log(string.match(regex));
// => ["123", "1234", "12345", "12345"]




//惰性匹配
//其中/\d{2,5}?/表示，虽然2到5次都行，当2个就够的时候，就不在往下尝试了。
var regex = /\d{2,5}?/g;
var string = "123 1234 12345 123456";
console.log(string.match(regex));
// => ["12", "12", "34", "12", "34", "12", "34", "56"]



var regex = /good|goodbye/g;
var string = "goodbye";
console.log(string.match(regex));
// => ["good"]

var regex = /goodbye|good/g;
var string = "goodbye";
console.log(string.match(regex));
// => ["goodbye"]
// 也就是说，分支结构也是惰性的，即当前面的匹配上了，后面的就不再尝试了。


// 匹配16进制颜色值
const reg = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g
var string = "#ffbbad #Fc01DF #FFF #ffE";
console.log(string.match(reg));

//匹配时间
const reg1 = /([10][0-9]|[2][0-3]):[0-5][0-9]/g
var string = "10:10 00:00 24:00 23:59 1:23";
console.log(string.match(reg1));

//如果也要求匹配7:9，也就是说时分前面的0可以省略。
const reg2 = /(0?[0-9]|[1][0-9]|[2][0-3]):(0?[0-9]|[1,5][0,9])/g
var string = "10:10 00:00 24:00 23:59 1:23 7:9";
console.log(string.match(reg2));

//匹配日期
const reg3 = /[0-9]{4}-([0][1-9]|[1][0-2])-(0[1-9]|[12][0-9]|3[01])/g
var string = "2019-01-01 2019-02-29 2019-02-30 2019-02-31 2019-03-01";
console.log(string.match(reg3));

// 匹配id
var reg4 = /id=".*?"/
var string = '<div id="container" class="main"></div>';
console.log(string.match(reg4));
// => id="container"
