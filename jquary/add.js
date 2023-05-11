$(function () {
    $('#btn').click(function () {
        let first = $('#first').val();
        let second = $('#second').val();
        $('h1').text("sum :" + (parseInt(first) + parseInt(second)))
    })
    $("#first").val("");
    $("#second").val("");
})