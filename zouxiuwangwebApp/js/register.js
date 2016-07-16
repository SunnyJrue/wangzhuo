$(document).ready(function(){
    $("#sure").click(function(){
        $("p").remove();
        if($("#mima").val() == "" || $("#confirm").val() == ""  || $("#name").val() == ""){
            $("<p>*信息不能为空!</p>").insertAfter($(".tianjia"));
            return
        }else{
            if($("#mima").val().match(/^[a-zA-Z0-9]{6,10}$/ )){
                 if($("#mima").val() != $("#confirm").val()){
                    $("<p>*两次密码不符合!</p>").insertAfter($(".tianjia"));
                    return
                 }
            }else{
                $("<p>*密码必须为6-10位</p>").insertAfter($(".tianjia"));
                return
            }
        } 
        var username = $("#name").val();
        var password = $("#mima").val();
        var time;
        $.ajax({
            url:'http://datainfo.duapp.com/shopdata/userinfo.php',
            type:"post",
            data:'status=register&userID='+username+'&password='+password,
            success:function(data){
                console.log(data);
                if(data==0){ 
                    $("<p>*用户名已注册!</p>").insertAfter($(".tianjia"));
                }else if(data==1){
                    $("<p>*注册成功</p>").insertAfter($(".tianjia"));
                    setTimeout(function(){
                        window.location.href = "login.html";
                    }, 100);
                }else if(data==2){
                    $("<p>网页出现错误</p>").insertAfter($(".tianjia"));
                }
            }
        });
    });
    $(".s2").children().click(function(){
            window.location.href = "login.html";
    });
});