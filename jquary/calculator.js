$(document).ready(function () {
    $(".txt").click(function () {
        let num = $(this).text();
        $(".res").text($(".res").text() + num);
        $(".ab").click(function () {
            let v = $(this).text();
            let x = [];
            switch (v) {
                case "=":
                    res = eval($(".res").text());
                    $(".res").text("");
                    $(".res").text(res);
                    break;
                case "c":
                    $(".res").text("");
                    break;
                case "del":
                    $(".res").text("")
                    break;
            }

        });
    });
});