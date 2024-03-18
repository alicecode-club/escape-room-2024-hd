let header = document.getElementById("header-comp");
header.innerHTML =
`<div id="topbaner">
<a href="batb1/html" id="webname">The beauty and the beast</a>
<div align="center" id="buttonsclick">
    <lable>Screen One</lable>
    <img src="rose_hint.png" id="clue1" onclick="clue1()"/>
    <lable>Screen Two</lable>
    <img src="rose_hint.png" id="clue2" onclick="clue2()"/>
    <lable>Screen Three</lable>
    <img src="rose_hint.png" id="clue3" onclick="clue3()"/>
</div>
<style>
    #webname {
        font-size: 25px;
    }

    #topbaner {
        background-color: #F8F9C2;
        flex-direction: row;
        height: 60px;
        margin: 10px;
    }

    #clue1 {
    width: 7%;
    right: 5%;
    position: absolute;
    }

    #clue2 {
        width: 7%;
        right: 7%;
        position: absolute;
    }

    #clue3 {
        width: 7%;
        right: 9%;
        position: absolute;
    }

    // .webuttons:hover, #webname:hover {
    //     background-color: rgb(90, 90, 212);
    // }
</style>`
