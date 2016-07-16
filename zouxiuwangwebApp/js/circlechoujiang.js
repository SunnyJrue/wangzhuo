$(document).ready(function(){
    $('.denglv').click(function(){
        $('.center').css({backgroundColor:""});
    });
    $('.choujiang').click(function(){
        console.log(JSON.parse(localStorage.getItem("denglvinfo")).userID);
        $.ajax({
            url:"http://datainfo.duapp.com/lottery/fruitsubmit.php",
            type:"post",
            data:"userID=" + JSON.parse(localStorage.getItem("denglvinfo")).userID,
            success:function(data){
                console.log(data);
                if(data == 2){

                }else if(data == 0){

                }
            }
        });

    });
})