const myTimeout = setTimeout(showWitch,60000);
window.alert("Quick! iv'e got one minute!");

function hint_room3(){
    window.alert("I have to find something that can help me out! click on the objects");
}
function oldBook(){
    window.alert("just an old book. lets keep looking");
}
function books(){
    window.alert("Those are my old books! I loved them but now they are usless, if I take them tell slow me down.)");
}
function poision(){
   window.alert("Wait, this poision must have ben spilld from somewhere. Oh there is a leather bag! lets check it out");
   document.getElementById("leatherBag").style.display="block";
}
s
function showWitch(){
    document.getElementById("witch").style.display = "block";
    document.getElementById("tryAgain").style.display = "block";
    document.getElementById("note").style.display = "none";
    document.getElementById("nextRoom4").style.display = "none";
    document.getElementById("noteP1").style.display = "none";
    
}
function leather(){
    window.alert("There it is, lets have a look");
    document.getElementById("note").style.display = "block";
    document.getElementById("nextRoom4").style.display = "block";
    document.getElementById("noteP1").style.display = "block";
}

function showNextRoomButton(){
    document.getElementById("nextRoom4").style.display = "block";

}
function decrees(){
    document.getElementById("note").style.display = "none";
    document.getElementById("nextRoom4").style.display = "none";
    document.getElementById("noteP1").style.display = "none";
    document.getElementById("tryAgain").style.display = "none";
    document.getElementById("witch").style.display = "none";
    ocument.getElementById("leatherBag").style.display = "none";
    myTimeout = setTimeout(showWitch,60000);
}
function crown(){
    window.alert("hmm, looks like I'm not the only royalty that has been kidnapped by maleficnt, poor prince/ss.")
}
