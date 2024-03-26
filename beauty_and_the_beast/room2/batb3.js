const myTimeout = setTimeout(hidetext,12000);

function hidetext(){
    console.log("bschbdjhbd");
    var x = document.getElementsByClassName("writing");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }

}