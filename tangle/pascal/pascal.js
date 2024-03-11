var colors=["green.png","pink.jpg","green.png","blue.jpg","pink.jpg", "red.jpg", "blue.jpg"];
let counter = 0;
function greenClick(){
        var change=document.getElementById("change")
        change.src=colors[counter];
        counter++;
        if(counter == 7){
            clearInterval(greenClick);
        }
    }
setInterval(greenClick, 1000);