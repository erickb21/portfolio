// #region Mouseposition

var x;
var y;

document.addEventListener("mousemove", function(e) {
    x = e.clientX;
    y = e.clientY;
    var posX = document.getElementById("mouseX") ;
    var posY = document.getElementById("mouseY") ;
    posX.textContent = x + " px";
    posY.textContent = y + " px";
});

// #endregion Mouseposition

//*********************

// #region Emoticon


document.addEventListener("ondragover", function (e) {
    e.preventDefault();
});


function dragImg(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function dragImg2(ev) {
    ev.target.src = "images/bravo_105.gif";
        ev.target.style.width = "auto";
    ev.target.style.height = "auto";
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function allowDrop(ev) {
    ev.preventDefault();
}


// #endregionEmoticon

//********************
// #region Calculette

var startX
var startY

//document.getElementById("calc").click();

function drag(ev) {
    startX = event.clientX;
    startY = event.clientY;
}

function dragEnd(event) {
    var movex = event.clientX - startX;
    var movey = event.clientY - startY;
    event.target.style.left = (event.target.offsetLeft + movex) + "px";
    event.target.style.top = (event.target.offsetTop + movey) + "px";
}

function afficheCalculette() {
    var myCal = document.getElementById("myelem");
    myCal.classList.toggle("calcvisibility");
}

// #endregion Calculette