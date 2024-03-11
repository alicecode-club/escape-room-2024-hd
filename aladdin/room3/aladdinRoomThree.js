function bossLevel(){
    document.getElementById("anj").setAttribute("onclick", null);
    document.getElementById("anj").style.cursor="auto";
    let time = 0;

    alert("This is your final questions! You will have only three tries and if you fail, aladdin will remain mine!")

    function question(time){
        if (time===2){
            alert("here's a clue: the range is between 65 to 80")
        }
        if (time===3){
            alert("I'm sorry, but you did not manage to free aladdin")
            return -1
        }
    }

    while (true){
        let bossQuest = prompt("How many camels does Prince Ali, or should I say Aladdin, have?");
        if (bossQuest === "75"){
            alert("You made it! Aladdin is free!")
            window.location.href = "../room4final/aladdinRoomFour.html";
            break
        }
    
        else {
            time=time+1;
            console.log(time)
            var a= question(time)
            if (a===-1){
                break
            }
        }
    
    }
    }

