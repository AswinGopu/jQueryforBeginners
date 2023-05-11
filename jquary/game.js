
var score = 0
const clk = (a, b) => {
    if (b == 0) {
        score = 0
        a.style.backgroundColor += "red"
    }
    else {
        score += b
        a.style.backgroundColor += "green"
    }
    document.getElementById("score").innerHTML = "score :" + score
}

const game = () => {
    var r = 6, c = 6
    var s = ""
    var lf = 0, tp = 0
    for (i = 1; i <= r; i++) {
        lf = 0
        for (j = 1; j <= c; j++) {
            var st = Math.ceil(Math.random() * 100)
            if (st < 25) st = 0
            var ab = "left:" + lf + "px;top:" + tp + "px;"
            s += "<div style='" + ab + "' onclick='clk(this," + st + ")'> </div>"
            lf += 115;
        }
        tp += 115;
    }
    document.getElementById("game").innerHTML += s
}