var colors=["green.png","pink.jpg","green.png","blue.jpg","pink.jpg", "red.jpg", "blue.jpg"];
let counter = 0;
let intervalId;
function greenClick(){
        var change=document.getElementById("change")
        change.src=colors[counter];
        counter++;
        if(counter == 7){
            clearInterval(intervalId);
            change.removeEventListener('click', greenClick);
        }
    }
    intervalId=setInterval(greenClick, 1000);
