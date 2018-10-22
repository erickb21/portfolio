(function ($) {
    //$(function () {
    //    $('.sidenav').sidenav();
    //}); // end of document ready
})(jQuery); // end of jQuery name space

initProjects();
// #region Variables img SVG

var chevronNext = '<svg class="g_svgIconWhite" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 10 30"><path d = "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /><path d="M0 0h24v24H0z" fill="none" /></svg >';
var chevronPrec = '<svg class="g_svgIconWhite" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>';
var moreHN = '<svg class="g_svgIconWhite" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>';
var moreHP = '<svg class="g_svgIconWhite" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 10 30"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>';
var person = '<svg class="g_svgIconWhite" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -4 24 24"><path d = "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /><path d="M0 0h24v24H0z" fill="none" /></svg >';
var papillon = '<svg style="fill-rule:evenodd;text-rendering:geometricPrecision;image-rendering:optimizeQuality;clip-rule:evenodd;shape-rendering:geometricPrecision" xml: space="preserve" width="50" height="50" viewBox="0 0 210 297" ><defs><style type="text/css" > .fil0 {fill: #291C6F;} </style ></defs><g id="pap" ><path class="fil0" d="m44.96 54.655c8.7537 35.781 39.788 60.272 47.298 83.477 8.8332 23.865 4.1095 37.202 0.7815 55.245 0.9408-0.8812 8.6269-14.185 27.181-23.233 24.805-13.179 56.338-8.0721 76.938-25.291-2.4803 2.9978-19.161 40.496-27.635 42.119 0.3269 7.8521-5.0763 9.071-8.0394 9.8529 0.1363 7.4448-5.592 8.4905-8.817 8.2796 0.1772 2.3164-0.5622 8.6413-8.268 8.2086-1.7195 4.0001-5.2958 5.3312-7.6944 5.9483-8.3997 2.1609-25.554-6.5714-32.91-11.498 4.2187 2.9732 12.672 9.5447 15.308 18.184 1.1443 3.7507 2.7209 14.554-1.6268 15.485-2.0679 1.2794-6.9766 1.4472-9.51-1.0231-4.3876 2.266-7.5207 0.3421-10.606-1.7702-2.2741 0.1694-4.4768 0.1439-6.1935-1.6119-5.1689-5.2867-4.4799-20.543-2.1608-33.797-16.877 11.983-39.176 22.692-59.904 19.586-5.227-0.9864-6.9722-3.1784-6.013-9.5414-4.6005-2.7016-6.1909-7.9855-3.3153-11.831-2.6961-1.3146-8.9765-8.2892-6.279-13.717 0.6252-1.2579 2.0313-3.3432 5.8623-4.1175 16.079-5.757 39.037 4.9682 47.184 7.4429 0 0-10.512-4.3461-24.783-12.777-8.4942-5.0179-23.655-16.216-20.628-29.119-2.2163-2.6404-5.1482-11.626 0.5359-16.503-0.8404-1.4786-4.8532-10.066 2.3144-15.508-2.6767-8.2782 1.3855-12.504 3.6313-13.713-1.4704-14.257 16.097-33.263 17.348-48.777zm55.168 149.2c5.6937 2.5963 9.1698 3.4139 13.757 4.0198 1.3274 0.1753 5.0473 0.3235 7.0794-0.2397 2.0809-0.9756 1.3973-1.8381 0.1652-3.1759 2.6635 1.1033 9.7874-0.7887 6.3115-4.2914 2.3868 0.886 4.9147 0.7734 4.0844 3.3369-1.5486 2.2107-4.2679 2.4675-6.669 1.752 1.569 1.5952 0.8497 2.6888-0.1678 3.2785-3.1554 1.6823-7.7831 1.349-10.152 0.7646-5.1387-1.3415-9.3015-2.3171-14.409-5.4448zm-23.122-10.645c-6.5671-3.737-13.309-7.6514-17.704-11.415-3.1883-2.7302-5.1818-5.2958-4.7879-8.0703 0.2503-1.5219 2.1194-1.6938 4.3001-1.4338-1.4027-0.8263-4.2032-4.2083-3.436-6.999 0.7345-1.8684 1.5177-2.4027 4.1874-2.2425-2.5549-1.7096-5.343-3.3347-7.265-0.7095-1.1953 2.5809 0.2851 5.1363 2.7286 6.9731-2.3943-0.4832-4.2124 0.3147-4.524 2.0603-0.7341 3.9486 2.4265 7.8543 7.8031 11.518 5.1405 3.7752 12.025 7.5313 18.698 10.318zm31.51 21.478c1.9602 3.7374 4.7043 6.8791 5.5157 12.228 0.2459 1.6206 0.5062 4.5732-0.8897 6.7837-2.0728 2.0542-4.0654 1.0736-5.9723 0.0481-1.1244 2.2291-5.2062 2.0801-6.4008 0.4092 1.1307 2.4907 2.5455 3.4533 5.241 3.4345 1.2267-0.1877 2.6465-1.3438 2.6312-2.1829 1.7385 2.3562 3.797 2.7956 5.7307 1.4297 2.5493-2.7846 1.5588-7.2165 1.2407-8.8431-2.0713-7.0847-3.7112-8.9138-7.0965-13.307zm-54.728-25.365c-5.0221-1.6383-15.18-2.1114-21.699-0.8238-1.9403 0.3832-7.2544 2.6224-7.9628 5.563-0.7082 2.9405 1.778 4.8101 3.5483 5.8133-3.4258 3.2693-1.4902 9.0811 1.283 9.5241-6.5144-0.9951-6.5268-4.4462-6.5982-6.2347s1.2366-4.264 2.2131-4.542c-3.3816-1.3594-6.4257-4.2194-4.5127-7.7132 1.412-2.7423 5.6634-3.6592 8.0162-4.2043s16.185-1.7157 25.712 2.6176z"/></g></svg >';
var playNext = '<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" version="1.1"><defs><path d="M0 0h24v24H0V0z"/></defs><clipPath><use overflow="visible"/></clipPath><path clip-path="url(#b)" d="M21 3H3C1.9 3 1 3.9 1 5v12c0 1.1 0.9 2 2 2h5v2h8v-2h2V17H3V5h18v8h2V5C23 3.9 22.1 3 21 3Zm3 15-4.5 4.5-1.5-1.5 3-3-3-3 1.5-1.5z"/></svg>';
var playBefore = '<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" version="1.1"><defs><path d="M0 0h24v24H0V0z"/></defs><clipPath><use overflow="visible"/></clipPath><path clip-path="url(#b)" d="M21 3H3C1.9 3 1 3.9 1 5v12c0 1.1 0.9 2 2 2h5v2h8v-2h2V17H3V5h18v8h2V5C23 3.9 22.1 3 21 3Zm3 15-4.5 4.5-1.5-1.5 3-3-3-3 1.5-1.5z" transform="matrix(-1,0,0,1,23.983051,0)"/></svg>';
var playFlip = '<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" version="1.1"><defs><path d="M0 0h24v24H0V0z"/></defs><clipPath><use overflow="visible"/></clipPath><path clip-path="url(#b)" d="M21 3H3C1.9 3 1 3.9 1 5v12c0 1.1 0.9 2 2 2h5v2h8v-2h5c1.1 0 2-0.9 2-2L23 5C23 3.9 22.1 3 21 3Zm0 14H3V5h18z"/><path d="M13.6 13.5V10.2h-1v3.4h-1.4l1.9 1.9 1.9-1.9zM10.3 6.8 8.3 8.7H9.8V12.1H10.7V8.7h1.4z" stroke-width="0.5"/></svg>';
var launch = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>';
var email = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -4 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>';
var phone = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -2 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>';
var burger = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>';

document.getElementById("burger").innerHTML = burger;
document.getElementById("email").innerHTML = email;
document.getElementById("phone").innerHTML = phone;
document.getElementById("person").innerHTML = person + "Whois Erick BEAUGENDRE";
document.getElementById("personSideNav").innerHTML = person;
document.getElementById("logo").innerHTML = "L'effet Erick" + papillon;
document.getElementById("playBefore").innerHTML = playBefore;
document.getElementById("playNext").innerHTML = playNext;
//document.getElementById("playFlip").innerHTML = playFlip;
document.getElementById("launch").innerHTML = launch;
// #endregion

// #region Cube
var cubex = 0,    // -22 initial rotation
    cubey = 0, //-38
    cubez = 0; //0
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
    rotate("cubez", -90);
}
// #endregion

// #region Affichage Tools Bar


// #region Unfold

var toolFixed = false;
var unfold = document.getElementById("unfold");
var tools = document.getElementById("maNav");
var addProject= document.getElementById("add_project");
var removeProject= document.getElementById("remove_project");
var connexion = document.getElementById("connexion");
var admin = document.getElementById("admin");
var deconnexion = document.getElementById("deconnexion");

deconnexion.addEventListener('click', function (e) {

    addProject.style.opacity = "0";
    addProject.style.display = "none";
    removeProject.style.opacity = "0";
     removeProject.style.display = "none";
   admin.style.display = "inline-block";
    connexion.style.display = "inline-block";
    deconnexion.style.display = "none";
});

unfold.addEventListener('click', function (e) {
    ancreTollsBar();
});

function findAdminPWD() {
    var inputPWD = document.getElementById("adminPWD");

    if (inputPWD.value === "kcire") {
        addProject.style.display = "inline-block";
        addProject.style.opacity = "100";
        removeProject.style.display = "inline-block";
        removeProject.style.opacity = "100";
        admin.style.display = "none";
        connexion.style.display = "none";
        deconnexion.style.display = "inline-block";
        inputPWD.value = "";
        


    }


}

unfold.addEventListener('mouseover', function (e) {
    
});

unfold.addEventListener('mouseout', function (e) {
   
});

function ancreTollsBar() {

    //var head = document.getElementById("index-banner");
    //punaise.classList.toggle("spec_punaise_ancre");
    if (toolFixed === true) {
        unfold.classList.remove("s_navrotate");
        unfold.title = "cliquez pour verrouiller le panneau";
        toolFixed = false;
    } else {
        tools.classList.add("s_navover");
        unfold.classList.add("s_navrotate");
        unfold.title = "cliquez pour d\u00e9verrouiller le panneau";
        toolFixed = true;
    }

    //toolFixed = true;
    //tools.classList.toggle("s_navover");
    //head.classList.toggle("spec_header_ancre");

}

var element = document.getElementsByClassName("s_unfold");

function unfoldLess(element) {

    if (toolFixed === false) {
        tools.classList.toggle("s_navover");
        connexion.classList.toggle("s_enterover");
        admin.classList.toggle("s_adminover");

    }
}

function unfoldMore(element) {

    if (toolFixed === false) {
        tools.classList.toggle("s_navover");
        connexion.classList.toggle("s_enterover");
        admin.classList.toggle("s_adminover");

    }
}

element[0].addEventListener('mouseover', function (e) {
unfoldMore(element[0]);
});

element[0].addEventListener('mouseout', function (e) {
        unfoldLess(element[0]);
});

// #endregion

// #endregion


// #region   Pagination

var selectPage = "";
var activePage = "";


function pagePrec() {
    //alert(activePage);
    if (activePage - 1 <= 0) { return; }
    else {
        activePage--;
        activeProjectPage(selectPage[activePage - 1]);
        dataProjShow(selectPage[activePage - 1]);
    }
}

function pageNext() {
    //alert(activePage);
    if (activePage >= selectPage.length) { return; }
    else {
        activePage++;
        activeProjectPage(selectPage[activePage - 1]);//activation de la page
        dataProjShow(selectPage[activePage - 1]);// affichage des données
    }
}

//activation des pages de la pagination
function activeProjectPage(element) {
    //alert(element.dataset.number);
     for (i = 0; i < selectPage.length; i++) {
        if (selectPage[i].dataset.current === "active") {
            selectPage[i].classList.remove("active");
            selectPage[i].dataset.current = "";
            element.classList.add("active");
            element.dataset.current = "active";
            activePage = element.dataset.number;
            if ((parseInt(activePage, 10) > nbPageShow)) {
                element.style.display = "inline-block";
                document.getElementById((parseInt(element.dataset.number, 10) - nbPageShow)).style.display = "none";
                document.getElementById("morePrec").style.display = "inline-block";
            }
            if ((parseInt(activePage, 10) < (selectPage.length + 1) - nbPageShow)) {
                element.style.display = "inline-block";
                document.getElementById((parseInt(element.dataset.number, 10) + nbPageShow)).style.display = "none";
                document.getElementById("moreNext").style.display = "inline-block";
            }
         }
         if (element.dataset.number == 1) {
             document.getElementById("prec").classList.add("disabled");
             document.getElementById("morePrec").style.display="none";

         } else { document.getElementById("prec").classList.remove("disabled"); }

         if (element.dataset.number == selectPage.length) {
             document.getElementById("next").classList.add("disabled");
             document.getElementById("moreNext").style.display = "none";
         } else { document.getElementById("next").classList.remove("disabled"); }
    }
}

//affichage des données
function dataProjShow(element) {

    var projLabel = element.dataset.label;
    var titreProjet = document.getElementsByClassName("titreProjet");

    //ecriture du nom du projet dans les cadres de présentation
    for (i = 0; i < titreProjet.length; i++) {
        titreProjet[i].innerHTML = projLabel;
    }
    //ecriture de la description du projet
    document.getElementById("description").innerHTML = element.dataset.description;
    //ecriture des technos
    document.getElementById("techno").innerHTML = element.dataset.techno;
    document.getElementById("launch").href = element.dataset.location;

}



// #endregion




function MyScroll(position) {
    window.scrollTo(0, position - 50);
}

// #region Modal

    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("add_project");

        // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
        btn.onclick = function () {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
span.onclick = function ()
            {
                modal.style.display = "none";
            }
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

// #endregion modal

// #region Mobile nav

var mobileNav = document.getElementById("nav-mobile");
var menuBurger = document.getElementById("burger");
var mobileWhois = document.getElementById("mobilePerson");


menuBurger.addEventListener('click', function (e) {
    //mobileNav.style.width = "70vw";
    //mobileWhois.style.opacity = "1";
    //mobileWhois.style.visibility = "visible";
    mobileNav.classList.toggle("expandMobileNav");
    mobileWhois.classList.toggle("visibilityWhoisNav");
});


mobileWhois.addEventListener('click', function (e) {

    MyScroll(document.getElementById('MonParcours').offsetTop - 30);
    mobileNav.classList.toggle("expandMobileNav");
    mobileWhois.classList.toggle("visibilityWhoisNav");
    // body
});


// #endregion