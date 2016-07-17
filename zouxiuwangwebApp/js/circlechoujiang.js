$(document).ready(function(){
    //抽奖
    $('.choujiang').click(function(){
        if($('.denglv').html() != '退出登录'){
            $(".result").css('display','block').html("账号未登录");
             setTimeout(function(){
                        $(".result").css('display','none');
            },2000);
            return
        }else{
                console.log(JSON.parse(localStorage.getItem("denglvinfo")).userID);
                $.ajax({
                    url:"http://datainfo.duapp.com/lottery/fruitsubmit.php",
                    type:"post",
                    data:"userID=" + JSON.parse(localStorage.getItem("denglvinfo")).userID,
                    success:function(data){
                        console.log(data);
                        if(data == 2){
                             $(".result").css('display','block').html("正在抽奖");
                             setTimeout(function(){
                                $(".result").css('display','none');
                            },2000);
                             choujiangjieguo();
                        }else if(data == 0){
                            $(".result").css('display','block').html("用户已经抽过奖");
                            setTimeout(function(){
                                $(".result").css('display','none');
                            },2000);
                        }
                    }
                });
                // if($('.result').html() != '正在抽奖'){
                //     choujiangjieguo();
                // }
            }
    });
     //登录界面显示和消失
    $('.denglv').click(function(){
         if($('.denglv').html() == '退出登录'){
            $('.denglv').html('登录');
             $('.denglvjiemian').css('display','none');
        }else{
            $('.denglvjiemian').css('display','block');
            $('.btn1').click(function(){
                $('.denglvjiemian').css('display','none');
                $.ajax({
                    url:"http://datainfo.duapp.com/shopdata/userinfo.php",
                    type:"post",
                    data:'status=login&userID=' + $(".input1").val() + '&password=' + $(".input2").val(),
                    success:function(data){
                        console.log(data);
                        if(data==0){
                            console.log(23);
                             $(".result").css('display','block').html("*用户名不存在!");
                              setTimeout(function(){
                                $(".result").css('display','none');
                            },1400);
                        }else if(data ==2){
                            $(".result").css('display','block').html("*用户名密码不符合!");
                             setTimeout(function(){
                                $(".result").css('display','none');
                            },1400);
                        }else{
                            $(".result").css('display','block').html("*登录成功!");
                            $('.denglv').html('退出登录');
                            setTimeout(function(){
                                $(".result").css('display','none');
                            },1400);
                        }
                    }
                });
            });
         }
    });
    //抽奖结果
    // $('.hed').click(function(){
    //     choujiangjieguo();
    // });
    function choujiangjieguo(){
            $.ajax({
                        url:"http://datainfo.duapp.com/lottery/getsuerfr.php",
                        type:"GET",
                        data:"",
                        dataType:"jsonp",
                        success:function(data){
                            console.log(data);
                        }
            });
    }
})