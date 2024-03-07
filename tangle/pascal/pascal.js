var pascaly = document.getElementById("green")


function greenClick(){
    const myTimeout = setTimeout(greenClick, 5000);
    var pink = document.getElementById("pink");
    pink.style.visibility="visible";

    var green = document.getElementById("green");
    green.style.visibility="hidden";
    var blue = document.getElementById("blue");
    blue.style.visibility="visible";
    var pink = document.getElementById("pink");
    pink.style.visibility="hidden";
    var red = document.getElementById("red");
    red.style.visibility="visible";
    var blue = document.getElementById("blue");
    blue.style.visibility="hidden";
}

