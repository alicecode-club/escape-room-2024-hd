var arrow = document.getElementById("arrow")

function ArrowClick(){
    let firstQ = prompt("What is Flynn Rider real name?");
    if (firstQ == "Eugene Fitzherbert") {
        var arrow2 = document.getElementById("arrow2");
        arrow2.style.visibility="visible";
    } 
    else {
        alert("Try again");
    }
}


function ArrowClick2(){
    let secondQ = prompt("Who kidnapped Rapunzel when she was little?");
    if (secondQ == "Mother Gothel") {
        var arrow3 = document.getElementById("arrow3");
        arrow3.style.visibility="visible";
    } 
    else {
        alert("Try again");
    }
}

function ArrowClick3(){
    let secondQ = prompt("What prized treasure Flynn Rider and the Stabbington brothers were trying to steal?");
    if (secondQ == "Crown") {
        var arrow4 = document.getElementById("arrow4");
        arrow4.style.visibility="visible";
    } 
    else {
        alert("Try again");
    }
}

function ArrowClick4(){
    let secondQ = prompt("Pascal, Rapunzel's pet, stays with her at all times. What kind of animal is Pascal?");
    if (secondQ == "Chameleon") {
        var arrow5 = document.getElementById("arrow5");
        arrow5.style.visibility="visible";
    } 
    else {
        alert("Try again");
    }
}

function ArrowClick5(){
    let secondQ = prompt("Flynn Rider makes many complaints about his Wanted posters. He complains about one key feature. What is it?");
    if (secondQ == "His nose") {
        var arrow6 = document.getElementById("arrow6");
        arrow6.style.visibility="visible";
    } 
    else {
        alert("Try again");
    }
}
function ArrowClick6(){
    let secondQ = prompt("What is the name of the tavern that Flynn and Rapunzel visit?");
    if (secondQ == "The snuggly duckling") {
        alert("GOOD JOB! You've helped Flynn Rider climb the high tower!");
        window.location.href="../hemsheh/hemsheh.html";
    } 
    else {
        alert("Try again");
    }
}
