var teacup1 = 0
var teapot1 = 0
var lumiere1 = 0
var teacup2 = 0
var teapot2 = 0
var lumiere2 = 0

function checkteacup(id){
    if (id=="chip1"){
        teacup1 = 1
    }
    if (id=="chip2"){
        teacup2 = 1
    }
    if (teacup1 == 1 && teacup2 == 1){
        prompt("Who is the only princess that is based on a real life person?")
        //  Pocahontas
    }
    console.log(id)
}

function checklumiere(id){
    if (id=="lumiere1"){
        lumiere1 = 1
    }
    if (id=="lumiere2"){
        lumiere2 = 1
    }
    if (lumiere1 == 1 && lumiere2 == 1){
        alert("What was the first animated full-length film?")
        //  Snow White and the Seven Dwarfs
    }
    console.log(id)
}

function checkteapot(id){
    if (id=="teapot1"){
        teapot1 = 1
    }
    if (id=="teapot2"){
        teapot2 = 1
    }
    if (teapot1 == 1 && teapot2 == 1){
        alert("When is Walt Disney's birth date?")
        //  December 5 1901
    }
    console.log(id)
}