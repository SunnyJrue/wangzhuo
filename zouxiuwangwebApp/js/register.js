$(document).ready(function(){
    $("#sure").click(function(){
        if($("#mima").val() != $("#confirm").val()){
            $("<p>密码不符合</p>").insertAfter($("div.contaier :nth-child(3)"));
            return
            // console.log(2323);
        }
        var info = $("name").value + $("#mima").value;
        $.ajax({
            url:" http://datainfo.duapp.com/shopdata/userinfo.php",
            type:"post",
            data:info,
            dataType:"jsonp",
            success:function(data){

            }
        });
    });
});