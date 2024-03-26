var teacup1 = 0
var teapot1 = 0
var lumiere1 = 0
var teacup2 = 0
var teapot2 = 0
var lumiere2 = 0
var finished1 = false
var finished2 = false
var finished3 = false


function checkteacup(id){
    if (id=="chip1"){
        teacup1 = 1
        document.getElementById("chip1").onclick=""
    }
    if (id=="chip2"){
        teacup2 = 1
        document.getElementById("chip2").onclick=""
    }
    if (teacup1 == 1 && teacup2 == 1){
        while (true){
            var answer1 = prompt("Who is the only princess that is based on a real life person?")
            if (answer1 === "Pocahontas"){
                console.log("goodjob")
                document.getElementById("chip1").style.display="none"
                document.getElementById("chip2").style.display="none"
                finished1 = true
                finished_questions()
                break
            }
            else{
                console.log("try again")
            }
        }
        //  Pocahontas
    }
    // console.log(id)
}

function checklumiere(id){
    if (id=="lumiere1"){
        lumiere1 = 1
        document.getElementById("lumiere1").onclick=""
    }
    if (id=="lumiere2"){
        lumiere2 = 1
        document.getElementById("lumiere2").onclick=""
    }
    if (lumiere1 == 1 && lumiere2 == 1){
        while (true){
            var answer2= prompt("What was the first animated full-length film?")
            if (answer2 === "Snow White and the Seven Dwarfs"){
                console.log("goodjob")
                document.getElementById("lumiere1").style.display="none"
                document.getElementById("lumiere2").style.display="none"
                finished2 = true
                finished_questions()
                break
            }
            else{
                console.log("try again")
            }
            //  Snow White and the Seven Dwarfs
        }
    }
    console.log(id)
}

function checkteapot(id){
    if (id=="teapot1"){
        teapot1 = 1
        document.getElementById("teapot1").onclick=""
    }
    if (id=="teapot2"){
        teapot2 = 1
        document.getElementById("teapot2").onclick=""
    }
    if (teapot1 == 1 && teapot2 == 1){
        while (true){
            var answer3= prompt("When is Walt Disney's birth date? (like: April 13 2009)")
            if (answer3 === "December 5 1901"){
                console.log("goodjob")
                document.getElementById("teapot1").style.display="none"
                document.getElementById("teapot2").style.display="none"
                finished3 = true
                finished_questions()
                break
            }
            else{
                console.log("try again")
            }
            //  December 5 1901
        }
    }
    console.log(id)
}
function finished_questions(){
    if (finished1 == true && finished2 == true && finished3 == true){
        window.location.href="../room2/batb3.html";
        console.log("hdhdhh")
    }
}