function bossLevel(){
    document.getElementById("anj").setAttribute("onclick", null);
    document.getElementById("anj").style.cursor="auto";
    alert("This is your final questions! You will have only three tries and if you fail, aladdin will remain mine!")

    let bossQuest = prompt("How many camels does Prince Ali, or should I say Aladdin, have?");
    if (bossQuest === "75"){
        alert("You made it! Aladdin is free!")
    }

    else {
        let bossQuest = prompt("How many camels does Prince Ali, or should I say Aladdin, have?");

    }
}