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