window.onload = function() {
    document.getElementById('send').onclick = function() {
        var element = document.getElementById("slc");
        var a = element.value ;
        if (a == "type1") {
            var num = document.getElementById("num").value;
            post(num, 0);
        } else if (a == "type2") {
            var num = document.getElementById("num").value;
            post(num, 1);
        }
    };

    function post(v, t) {
        console.log(v);
        console.log(t);
        if (t == 0) {
            console.log("Type1");
            var n = parseInt(v, 10).toString(2);
            document.getElementById("result").innerHTML = n;
        } else if (t == 1) {
            console.log("Type2");
            var n = parseInt(v, 2);
            document.getElementById("result").innerHTML = n;
        }
    }

    document.getElementById("slc").onchange = function () {
        var element = document.getElementById("slc") ;
        var a = element.value ;
        if (a == "type1") {
            document.getElementById('send').onclick = function() {
                var num = document.getElementById("num").value;
                post(num, 0);
            };
        } else if (a == "type2") {
            document.getElementById('send').onclick = function() {
                var num = document.getElementById("num").value;
                post(num, 1);
            };
        }
    }
}