//function abc(){
//var dt=Date();
//    document.writeln("Today is " + dt)
//}
//abc();
//var str="hello";
//alert("Hello\"Ting\"");
//document.writeln(typeof(str));
//console.log("error");

function test(){
    if (username==''){
        return "請填寫姓名";
//        break;
    }
    else if (email=''){
        return "請填寫信箱";
    }
    else if (phone=''){
        return "請填寫電話";
    }
    else if (password=''){
        return "請填寫密碼";
    }
    else if (confirmpassword=''){
        return "請填寫確認密碼";
    }
     else{
        return "請確認是否都必填";
    }
}
function validateForm(){
    var username=document.getElementById("username").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    var password=document.getElementById("password").value;
    var confirmpassword=document.getElementById("confirmpassword").value;
     if(username && email && phone && password && confirmpassword){
        document.writeln("姓名:"+username+"<br>"+"信箱:"+email+"<br>"+"電話:"+phone+"<br>"+"密碼:"+password+"<br>"+"確認密碼:"+confirmpassword);
    }else{
        alert(test());
    } 
//    alert(test());
//    document.writeln("姓名:"+username+"<br>"+"信箱:"+email+"<br>"+"電話:"+phone+"<br>"+"密碼:"+password+"<br>"+"確認密碼:"+confirmpassword);
}

