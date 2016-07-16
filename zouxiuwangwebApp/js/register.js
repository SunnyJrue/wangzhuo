$(document).ready(function(){
    $("#sure").click(function(){
        if($("#mima").val() != $("#confirm").val()){
            $("<p>密码不符合</p>").insertAfter($(".tianjia"));
            return
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