var colors=["green.png","pink.jpg","green.png","blue.jpg","pink.jpg", "red.jpg", "blue.jpg"];
let counter = 0;
let intervalId;
let counter_for_colors=0;
let correct_order_array=[1,2,1,3,2,4,3];
let player_array=[ ];

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
function check_order(){
    if (counter_for_colors==correct_order_array.length){
    for (let i=0;i<counter_for_colors;i++){
        if (correct_order_array[i]!=player_array[i]){
            alert("wrong! try again") 
            counter_for_colors=0
            player_array=[];
            return
        }
    }
    alert("right!you saved Rapunzel!");
    var lock1=document.getElementById("lock")
    var lock2=document.getElementById("lock2")
    lock1.style.visibility="hidden"; 
    lock2.style.visibility="visible"; 

}
}

function blue_color(){
    player_array.push(3);
    console.log(player_array);
    counter_for_colors++
    check_order()
}
function green_color(){
    player_array.push(1);
    console.log(player_array);
    counter_for_colors++
    check_order()
}
function pink_color(){
    player_array.push(2);
    console.log(player_array);
    counter_for_colors++
    check_order()
}
function red_color(){
    player_array.push(4);
    console.log(player_array);
    counter_for_colors++
    check_order()
}
console.log(player_array);
function lock(){
    var div=document.getElementById("popup");
    div.style.visibility="visible"; 
}
function x(){
    var div=document.getElementById("popup");
    div.style.visibility="hidden"; 
}
function lock2(){
    window.location.href="../end/end.html";
}