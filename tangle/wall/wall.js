var arrow = document.getElementById("arrow")

function ArrowClick(){
    var arrow2 = document.getElementById("arrow2");
    arrow2.style.visibility="visible";
}

function ArrowClick2(){
    var arrow3 = document.getElementById("arrow3");
    arrow3.style.visibility="visible";
    var arrow = document.getElementById("arrow");
    arrow.style.visibility="hidden";
}

function ArrowClick3(){
    var arrow4 = document.getElementById("arrow4");
    arrow4.style.visibility="visible";
    var arrow2 = document.getElementById("arrow2");
    arrow2.style.visibility="hidden";
}

function ArrowClick4(){
    var arrow5 = document.getElementById("arrow5");
    arrow5.style.visibility="visible";
    var arrow3 = document.getElementById("arrow3");
    arrow3.style.visibility="hidden";
}

function ArrowClick5(){
    var arrow6 = document.getElementById("arrow6");
    arrow6.style.visibility="visible";
    var arrow4 = document.getElementById("arrow4");
    arrow4.style.visibility="hidden";
}
function ArrowClick6(){
    var arrow5 = document.getElementById("arrow5");
    arrow5.style.visibility="hidden";
    var arrow6 = document.getElementById("arrow6");
    arrow6.style.visibility="hidden";
    alert("GOOD JOB! You've helped Flynn Rider climb the high tower!");
    window.location.href="../tower/castle.html";

}