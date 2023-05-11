$(document).ready(function () {
    $(".btn").click(() => {
        $("h1").animate({
            left: '500px'
        }, 5000,
            function () {
                $("h1").animate({
                    left: '0'
                }, 5000)
            })
    })
})