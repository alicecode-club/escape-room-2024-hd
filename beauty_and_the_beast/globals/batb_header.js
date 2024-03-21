let header = document.getElementById("header-comp");
header.innerHTML =
`<div id="topbaner">
<a href="../opening_scene/batb1.html" id="webname">The beauty and the beast</a>
<div align="center" id="buttonsclick">
    <img src="../rose_hint.png" id="clue1" onclick="clue1()"/>
    <h4 id="clueI">dhhfiue<h4/>
    <img src="../rose_hint.png" id="clue2" onclick="clue2()"/>
    <img src="../rose_hint.png" id="clue3" onclick="clue3()"/>
</div>
<style>
    #webname {
        font-size: 35px;
    }

    #topbaner {
        background-color: #F8F9C2;
        flex-direction: row;
        height: 60px;
        margin: 10px;
    }

    #clue1 {
    width: 4%;
    right: 1%;
    top: 0.5%;
    position: absolute;
    }


    #clue2 {
        width: 4%;
        right: 4%;
        top: 0.5%;
        position: absolute;
    }

    #clue3 {
        width: 4%;
        right: 7%;
        top: 0.5%;
        position: absolute;
    }

    // .webuttons:hover, #webname:hover {
    //     background-color: rgb(90, 90, 212);
    // }
</style>`

function clue1(){
    document.getElementById("clueI");
    checklumiere.style
}