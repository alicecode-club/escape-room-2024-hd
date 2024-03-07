var pascaly = document.getElementById("green")

var colors=["pink","green","blue","pink", "red", "blue"];
let counter = 0;
function greenClick(){
    
    //const myTimeout = setTimeout(greenClick, 5000);
    //var pink = document.getElementById("pink");
    //pink.style.visibility="visible";
    if (counter== colors.length){
        var h= document.getElementById(colors[counter-1])
        var v= document.getElementById(colors[counter])
    }
    else{
        var h= document.getElementById(colors[counter])
        var v= document.getElementById(colors[counter+1])
    }
   
    
    h.style.visibility="hidden"
    v.style.visibility="visible";
    counter++;
    //var green = document.getElementById("green");
    //green.style.visibility="hidden";
    //var blue = document.getElementById("blue");
    //blue.style.visibility="visible";
    //var pink = document.getElementById("pink");
    //pink.style.visibility="hidden";
    //var red = document.getElementById("red");
    //red.style.visibility="visible";
    //var blue = document.getElementById("blue");
    //blue.style.visibility="hidden";
}
function change_color(){
    setInterval(greenClick(), 1000);
}