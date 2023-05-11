$(document).ready(function(){
    $("#btn").click(()=>{
        $("#aa").fadeTo("slow",0.10);
        $("#ab").fadeTo("slow",0.7);
        $("#ac").fadeTo("slow",0.5);

    })
    $("#btn").dblclick(()=>{
        $("#aa").fadeTo("slow",1);
        $("#ab").fadeTo("slow",1);
        $("#ac").fadeTo("slow",1);

    })
})