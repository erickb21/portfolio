(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space



var cubex = -22,    // initial rotation
    cubey = -38,
    cubez = 0;
function rotate(variableName, degrees) {
    window[variableName] = window[variableName] + degrees;
    rotCube(cubex, cubey, cubez);
}
function rotCube(degx, degy, degz) {
    segs = "rotateX(" + degx + "deg) rotateY(" + degy + "deg) rotateZ(" + degz + "deg) translateX(0) translateY(0) translateZ(0)";
    $('#D3Cube').css({ "transform": segs });
}
function turnRight() {
    rotate("cubey", 90);
}
function turnLeft() {
    rotate("cubey", -90);
}
function flipCube() {
    rotate("cubez", -180);
}

// #region Unfold


var element = document.getElementsByClassName("unfoldmoreless");

function unfoldmore(element) {
    element.innerText = "unfold_more";
}

function unfoldLess(element) {
    element.innerText = "unfold_less";
    document.getElementById("maNav").classList.toggle("navover");
}
function unfoldMore(element) {
    element.innerText = "unfold_more";
//element.classList.remove("unfoldmore");

    document.getElementById("maNav").classList.toggle("navover");
//    element.classList.remove("unfoldmore");
}


element[0].addEventListener('mouseover', function (e) {
    unfoldLess(element[0]);
});

element[0].addEventListener('mouseout', function (e) {
    unfoldMore(element[0]);
});

// #endregion

// #region   Pagination


// #endregion
function scrollExperiences() {
}


var selectPage = document.getElementsByClassName("paginationnumber")
selectPage[0].classList.toggle("active")
selectPage[0].dataset.number="active"



function activeProjectPage(element) {
    //alert(selectPage.length);

    for (i = 0; i < selectPage.length; i++) {
        if (selectPage[i].dataset.number == "active") { selectPage[i].classList.remove("active");selectPage[i].dataset.number = "";element.classList.add("active"); element.dataset.number = "active"; /* */  }
    };
}





