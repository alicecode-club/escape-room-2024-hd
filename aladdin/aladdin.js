function showMessage(){
    document.getElementById("lamp").setAttribute("onclick", null)
    document.getElementById("lamp").style.cursor="auto";
    window.alert("You will be asked two questions, every time you'll answer a question currectly you would get closer to saving Aladdin from Jafar.")
    // window.prompt("When Aladdin promises to free him, which Disney character does Genie turn into?");
    // let answer1;
    // let firstQuest = prompt("When Aladdin promises to free him, which Disney character does Genie turn into?");
    let correct = false;
    // let answer2;
    let correct2 = false;


    while (correct==false){
        let firstQuest = prompt("When Aladdin promises to free him, which Disney character does Genie turn into?");
        if (firstQuest === "Pinocchio") {
            window.alert("Well Done!")
            correct = true;
            while (correct2==false){
                let secondQuest = prompt("How many golden camels does prince Ali have?");
                if (secondQuest === "75") {
                    window.alert("You solved the riddle!")
                    correct2 = true;
                }      
            }
          }


}
}

