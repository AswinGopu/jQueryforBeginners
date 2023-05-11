$(document).ready(function () {
    $(".btn").click(() => {
        $(".div1").animate({
            left: '500px',
            top: '500px',
            opacity: '0',
            width: '50px',
            height: '50px',
        }, 5000, function () {
            $(".div1").animate({
                left: '0px',
                top: '0px',
                opacity: '1',
                width: '150px',
                height: '150px',
            }, 5000)
        })
    })
})

