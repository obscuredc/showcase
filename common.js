const opener = {
    open: function(w) {
        if(w == "github") {
            window.open("https://github.com/obscuredc");
        } else if (w=="docs") {
            window.open("https://www.w3schools.com/csS/css3_transitions.asp");
        } else if (w=="bad") {
            window.open("https://obscuredc.github.io/science2021/");
        }
    }
}
function m(s) {
    var t = [];
    for(i = 0; i < s.length; i++) {
        var r="";
        for(i2 = 0; i2 < i; i2++) {
            r+=s[i2];
        }
        t.push(r);
        r="";
    }
    t.push(s);
    return t;
}
var anim = m("well, goodbye!");
var nts = document.getElementsByClassName("neon-text");
var ticker = 0;
var x = setInterval(function() {
for(i = 0; i < nts.length; i++) {
    nts[i].innerHTML=anim[ticker];
}
ticker++;
ticker = ticker % anim.length;
}, 500);
