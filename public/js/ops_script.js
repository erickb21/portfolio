var x;
var y;
var startX;
var startY;

document.addEventListener("mousemove", function (e) {
    x = e.clientX;
    y = e.clientY;
    var posX = document.getElementById("mouseX");
    var posY = document.getElementById("mouseY");
    posX.textContent = x;
    posY.textContent = y;
});

var stopMove = false;



function allowDrop(ev) {
    ev.preventDefault();
}

function dragImg(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}


function drag(ev) {
    //ev.dataTransfer.setData("text", ev.target.id);
    startX = event.clientX;
    startY = event.clientY;

    //alert(startX + " , " + startY);
}

function dragEnd(event) {

    var movex =event.clientX - startX;
    var movey = event.clientY - startY;
    event.target.style.left = (event.target.offsetLeft + movex)  +"px";
  event.target.style.top = (event.target.offsetTop + movey) +"px";

    //alert(event.target.id + " " + event.target.offsetLeft + " " + event.target.offsetTop);

    //alert(event.clientX + " , " + event.clientY);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}





//function moveMe(elem) {
//    //alert(elem.id);
//    console.log("stopmove = " + stopMove);
//    var clickX = mx;
//    var clickY = my;
//    var newPosX;
//    var newPosY;
//    var elemNewX;
//    var elemNewY;
//    var i=0
//    for (i = 0; (newPosX < 300) || (i<500); i++) {
//        newPosX = mx - clickX;
//        newPosY = my - clickY;
        
//        elemNewX = elem.offsetTop + newPosX;
//        elemNewY = elem.offsetLeft + newPosY;
//        elem.style.top = elemNewY + "px";
//        elem.style.left = elemNewX + "px";
        
        
//        console.log("elemNewY : " + elemNewY + " elemNewX : " + elemNewX);
//        //console.log("y : " + my + " x : " + mx);
//        console.log(stopMove);
//        if (stopMove) {alert(mx + ","+ my);
//            alert("stop");
//            break;
//        }

//    } //while (stopMove == false);

//    stopMove=false
//};

function stopM(e) { stopMove = true; alert(e.clientX);}




////document.addEventListener("click", function () {
////    alert(this.id);
////});



//function myMousePosition(e) {

//    var x = e.clientX;
//    var y = e.clientY;
//    var posX = document.getElementById("mouseX");
//    var posY = document.getElementById("mouseY");
//    posX.textContent = x;
//    posX.textContent = x;

//    //var coor = "Coordinates: (" + x + "," + y + ")";
//    //document.getElementById("demo").innerHTML = coor;

//}


