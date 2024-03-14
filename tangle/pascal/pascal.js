var colors=["green.png","pink.jpg","green.png","blue.jpg","pink.jpg", "red.jpg", "blue.jpg"];
let counter = 0;
let intervalId;

function greenClick(){
    var change=document.getElementById("change");
    change.src=colors[counter];
    console.log("Changing image to:", colors[counter]);
    counter++;
    if(counter >= colors.length){
        clearInterval(intervalId);
    }
}

function change(){
    console.log("Starting interval");
    intervalId=setInterval(greenClick, 1000);
    counter=0;
}