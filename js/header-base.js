$("input").focus(function(){
    $(".nav-input").css("border","1px solid #fa7d3c")
    $("#search").show();
})
$("input").blur(function(){
    $(".nav-input").css("border","1px solid #ccc")
    $("#search").hide();
})

$("#zhuti").mouseover(function(){
    $("#topic").show();
})
$("#zhuti").mouseout(function(){
    $("#topic").hide();
})

$("#zhou").click(function(){
    $("body").css({"background":"#c6ffdd","background":" -webkit-linear-gradient(to right, rgb(198, 255, 221), rgb(251, 215, 134), rgb(247, 121, 125))","background":"linear-gradient(to right, rgb(198, 255, 221), rgb(251, 215, 134), rgb(247, 121, 125))"})
})
$("#ye").click(function(){
    $("body").css({"background":"#114357","background": "-webkit-linear-gradient(to right, rgb(17, 67, 87), rgb(242, 148, 146))", "background": "linear-gradient(to right, rgb(17, 67, 87), rgb(242, 148, 146))"})
})

$(function(){
    $("input").click(function(){
        $.ajax({
            url:"search.php",
            type:"get",
            dataTyoe:"json",
            success:function(data){
                $("#hot1").html(data.span1);
                $("#hot2").html(data.span2);
                $("#hot3").html(data.span3);
            }
        })
    })
})