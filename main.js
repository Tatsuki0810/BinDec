window.onload = function() {
    document.getElementById('send').onclick = function() {
        post();
    };

    function post() {
        var t1 = document.forms.mainform.type1;
        var t2 = document.forms.mainform.type2;
        var num = document.getElementById("num");
        if (t1 == true) {
            console.log("Type1");
            var n = num.toString(2);
            document.getElementById("result").innerHTML = n;
        } else {
            console.log("Type2");
            var n = parseInt(num, 2);
            document.getElementById("result").innerHTML = n;
        }
    }
}