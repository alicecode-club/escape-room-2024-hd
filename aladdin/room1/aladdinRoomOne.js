function showMessage(){
    document.getElementById("lamp").setAttribute("onclick", null);
    document.getElementById("lamp").style.cursor="auto";
    window.alert("You will be asked two questions, every time you'll answer a question currectly you would get closer to saving Aladdin from Jafar.")
    let correct = false;
    let correct2 = false;
    var genie = document.getElementById("genie");



    while (correct==false){
        let firstQuest = prompt("What animal does Jasmine have?");
        if (firstQuest === "Tiger") {
            genie.style.display = "block";
            window.alert("Well Done!")
            correct = true;
            while (correct2==false){
                let secondQuest = prompt("What is his name??");
                if (secondQuest === "Raga") {
                    window.alert("You solved the first riddle! Click on the genie for the next one!")
                    correct2 = true;
                }      
            }
          }


}
}


function nextRoom(){
    document.getElementById("genie").setAttribute("onclick", null);
    document.getElementById("genie").style.cursor="auto";

    alert("Hi! It's the Genie! Thank you for helping me on this mission, you solved the first riddle, but the journey is not over yet! Hope you are ready for the next riddle!");
    window.location.href = "../room2/aladdinRoomTwo.html"
}