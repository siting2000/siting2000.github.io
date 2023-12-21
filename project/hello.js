//alert("Hi 我是黃思婷");
console.log("我是這樣希望的");
var thiscount1="2.5"*"2.0";
var thiscount2="2.5"+"2.0";
var thiscount3=parseFloat(thiscount1)+2.0;
document.writeln("javascript是我最愛的語言XD<br>");
document.writeln(thiscount1+"<br>"+thiscount2+"<br>"+thiscount3+"<br>");
//document.writeln(thiscount2);
//document.writeln(thiscount3);
var x=y=1;
i=x++;
j=++y;
document.writeln(i+","+j+"<br>");
//function returned(x){
//    if (x=1) return "hello我收到這字串";
//}
//var msg=returned(1);
//console.log(msg);
//function returned1(x){
//    return msg=x+"我收到這字串";
//}
//var msg1=returned1("hello");
//document.writeln(msg1);

//function returned2(str){
//    msg=str+"我收到這字串";
//    return msg;
//}
//var msg=returned2("hello");
//document.writeln(str);
//function returned2(str){
//    msg=str+"我收到這字串";
//    return msg;
//}
//document.writeln(returned2("hello"));
function marry(x){
    if(x>1000000){
        return "我嫁給你";
    }
    else if (x>5000000){
        return "妳嫁給我";
    }
    else{
        return "存夠錢再來";
    }
}
document.writeln(marry(1500000));