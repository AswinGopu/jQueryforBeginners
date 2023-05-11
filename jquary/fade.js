$(document).ready(function(){
    $("#btn").click(()=>{
        $("#aa").fadeOut();
        $("#ab").fadeOut("slow");
        $("#ac").fadeOut(5000);
    })
    $("#btn").dblclick(()=>{
        $("#aa").fadeIn();
        $("#ab").fadeIn("slow");
        $("#ac").fadeIn(5000);
    })
})

