let header = document.getElementById("");
header.innerHTML =
`<div id="topbaner">
<a href="batb1/html" id="webname">The beauty and yhe beast</a>
<div align="center" id="buttonsclick">
    // <button onclick="no()" id="clue1" class="clues">clue1</button>
    <button onclick="no()" id="clue2" class="clues">clue2</button>
    <button onclick="no()" id="clue3" class="clues">clue3</button>
    <button onclick="no()" id="clue4" class="clues">clue4</button>
    <button onclick="no()" id="clue5" class="clues">clue5</button>
</div>
<style>
    #webname {
        font-size: 25px;
    }

    #topbaner {
        background-color: rgb(74, 190, 151);
        flex-direction: row;
        height: 60px;
        margin: 10px;
    }


    .webuttons {
        margin: auto;
        color: white;
        background-color: rgb(104, 236, 192);
        border-color:  rgb(98, 220, 179);
    }

    .webuttons:hover, #webname:hover {
        background-color: rgb(90, 90, 212);
    }
    
    #hamb {
        display: none;
    }

    @media screen and (max-width:800px){
        #hamb {
            display: block;
            position: absolute;
            right: 20px;
        }
        .webuttons {
            display: block;
        }
        #buttonsclick.responsive {
            display: block;
        }
        #buttonsclick {
            display: none;
            position: absolute;
            width: 50%;
            height: 100%;
            top: 10%;
            background-color: rgb(74, 190, 151); 
            flex-direction: column;
            flex-wrap: wrap;
            right: 0;
            border-radius: 5px;
        }
        .webuttons {
            width: 100%;
            padding: 10px;
        }
    }
</style>`
function logoutfun() {
    window.location.href="logout.html";
}

function aboutmefun() {
    window.location.href="aboutme.html";
}

function homepagefun() {
    window.location.href="homepage.html";
}

function contantfun() {
    window.location.href=".html";
}

function logfun() {
    window.location.href="../index.html";
}

function showMenu() {
    let header = document.getElementById("buttonsclick")
    header.classList.toggle("responsive")
}

