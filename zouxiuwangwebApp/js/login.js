$(document).ready(function(){
    $(".btn2").click(function(){
        window.location.href="register.html";
    });
    $(".btn1").click(function(){
        $.ajax({
            url:"http://datainfo.duapp.com/shopdata/userinfo.php",
            type:"post",
            data:'status=login&userID=' + $(".input1").val() + '&password=' + $(".input2").val(),
            success:function(data){
                console.log(data);
                if(data==0){
                    console.log(23);
                     $(".result").html("*用户名不存在!");
                }else if(data ==2){
                    $(".result").html("*用户名密码不符合!");
                }else{
                    var newData = JSON.parse(data);
                    console.log(newData.code,newData.userID);
                    console.log(newData);
                    var objData = {"code":newData.code,"userID":newData.userID,"password":newData.password,"userimg_url":newData.userimg_url,"sex":newData.sex};
                    var objStr = JSON.stringify(objData);
                     localStorage.setItem("denglvinfo",objStr);
                     window.location.href="index.html";
                }
            }
        });
    });
    console.log($(".show").prop("checked"));
    $(".show").change(function(){
        if($(".show").prop("checked")){
            console.log(23);
            $(".input2").attr("type","text");
         }else {
            $(".input2").attr("type","password");
         }
    }); 
    $(".remember").change(function(){
        if($(".remember").prop("checked")){
           $(".input1").attr("value",JSON.parse(localStorage.getItem("denglvinfo")).userID);
           $(".input2").attr("value",JSON.parse(localStorage.getItem("denglvinfo")).password);
           $(".remember").prop("checked",true);
         }else{
            $(".input1").attr("value","");
            $(".input2").attr("value","");
         }
    }); 
});