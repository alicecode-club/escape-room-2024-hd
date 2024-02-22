function showMessage(){
    document.getElementById("lamp").setAttribute("onclick", null)
    document.getElementById("lamp").style.cursor="auto";
    window.alert("You will be asked two questions, every time you'll answer a question currectly you would get closer to saving Aladdin from Jafar.")
    let correct = false;
    let correct2 = false;
    var genie = document.getElementById("genie");



    while (correct==false){
        let firstQuest = prompt("When Aladdin promises to free him, which Disney character does Genie turn into?");
        if (firstQuest === "Pinocchio") {
            genie.style.display = "block";
            window.alert("Well Done!")
            correct = true;
            while (correct2==false){
                let secondQuest = prompt("How many golden camels does prince Ali have?");
                if (secondQuest === "75") {
                    window.alert("You solved the first riddle! Click on the genie for the next one!")
                    correct2 = true;
                }      
            }
          }


}
}


