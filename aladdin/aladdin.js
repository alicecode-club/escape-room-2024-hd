function showMessage(){
    window.alert("You will be asked two questions, every time you'll answer a question currectly you would get closer to saving Aladdin from Jafar.")
    // window.prompt("When Aladdin promises to free him, which Disney character does Genie turn into?");
    let answer1;
    let firstQuest = prompt("When Aladdin promises to free him, which Disney character does Genie turn into?");
    let correct = false;

    while (!correct){
        if (firstQuest === "Pinocchio") {
            answer1 = "Answer correct!";
            correct = true;
            // window.alert(answer1)
          }

        else {
            answer1 = "Incorrect, please try again!"; 
    }
    // else {
    //     answer1 = "Incorrect, please try again!";
    //      window.alert(answer1);
    // }
    document.getElementById("one").innerHTML = answer1;
}
