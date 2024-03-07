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
        alert("teacup")
    }
    console.log(id)
}

function checklumiere(id){
    console.log(id)
}

function checkteapot(id){
    console.log(id)
}