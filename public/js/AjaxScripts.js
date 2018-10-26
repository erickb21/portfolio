
var ajaxrequest = new XMLHttpRequest();
var data;
var nbPageShow = 0;
//window.onresize = alert(window.innerWidth);

window.addEventListener('resize', function (e) {
    initProjects();
});

var zonePagination = document.getElementById("pagination");

function resizePagination(wWidth) {
    zonePagination.innerHTML = "";
    pointSuiteNext = false;
    pointSuitePrec = false;
    if (wWidth <= 1600 && wWidth > 1100 ) {
        nbPageShow = 10;
        //alert(wWidth);
    }

    else if (wWidth <= 1100 && wWidth > 800 ) {
        nbPageShow = 5;
        //alert(wWidth);
    }

    else if (wWidth <= 800 && wWidth > 600 ) {
        nbPageShow = 3;
        //alert(wWidth);
    }
    else if (wWidth <= 600 ) {
        nbPageShow = 1;
        //alert(wWidth);
    }
    else {
        nbPageShow = 15;
        //alert(wWidth);
    }
}

function addProject() {
    // alert("ok");
    var titreProj = document.getElementById("titreProj").value;
    var descriptionProj = document.getElementById("descriptionProj").value;
    var dureproj = document.getElementById("dureproj").value;
    var urlindexproj = document.getElementById("urlindexproj").value;
    var urlimageProj = document.getElementById("urlimageProj").value;
    var data = "userRequest=addProject&titreProj=" + titreProj + "&descriptionProj=" + descriptionProj + "&dureproj=" + dureproj + "&urlindexproj=" + urlindexproj + "&urlimageProj=" + urlimageProj ;
    //alert(data);
    sendAjax(data, "scriptsphp/add.php", "addProject");
}

function initProjects() {
    var data = "userRequest=initProjects";
    resizePagination(window.innerWidth);
// affecte l'événement clic à chaque face du cube et masque l'image
    //imgside = document.querySelectorAll(".img_side");
    //for (i = 0; i < imgside.length; i++) {
    //    imgside[i].addEventListener('click', function (e) {
    //        //alert(imgside[0]);
    //        //console.log(imgside[i]);
    //        imgside[i].style.visibility = "hidden";
    //    });
    //}
    sendAjax(data, "scriptsphp/load.php", "initProjects"); // appelle la finction ajax qui va lire les projets

}


// dataToSend = données à envoyer au serveur 
// pageUrl = Page serveur à appeller ou url pour routage MVC
// userRequest = identificateur de la fonction appelante qui permettra de rediriger vers la fonction de traitement de la réponse
function sendAjax(dataToSend, pageUrl, userRequest) {
     submitMethod = "POST";
    //submitMethod = "GET"
    //var pageUrl = "./pages/explorer.php";
    syncMethod = true; // Méthode asynchrone
    //syncMethod = false; // Méthode Syncrone
    //user = "" //nom d'utilisateur as string si "pageUrl" est sécurisée
    //password = "" // mot de passe as string si "pageUrl" est sécurisée

    ajaxrequest.open(submitMethod, pageUrl, true);
    if (submitMethod === "POST") {
        ajaxrequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    //var mavar = "toto";
    //var mavar = [];
    //mavar[0] = 1;
    //mavar[1] = 3;
    //mavar[3] = "ceci est un texte de réponse";
    //mavar[4] = selectionliste();
    //escape(l1.options[index].value)
    ajaxrequest.send(dataToSend);
    //alert("ok" + mavar);
}

//******************

ajaxrequest.onreadystatechange = function () {
    switch (ajaxrequest.readyState) {
        case 0: stateUninitialized(); break; // 0 (uninitialized)	Objet non initialisé
        case 1: stateLoading(); break; // 1 (loading)	Début du transfert des données
        case 2: stateLoaded(); break; // 2 (loaded)	Données transférées
        case 3: stateInteractive(); break; // 3 (interactive)	Données reçues sont accessibles en partie
        case 4: stateComplete(); break; // 4 (complete)	Données sont complètement accessibles
    }
}


function stateComplete() {
    if (ajaxrequest.status === 200 || ajaxrequest.status === 0) {
        var tmp = ajaxrequest.responseText.split("_!!_");
        userRequest = tmp[0];
        userResponse = tmp[1];
        //alert(userRequest);

        switch (userRequest) {
            case "addProject": addSuccesfull(userResponse); break;
            case "initProjects": initSuccesfull(userResponse); break;
           default: alert("la fonction n'existe pas, contacter votre administrateur !");
        }
        //document.getElementById("loader").style.display = "none";
        //document.getElementById('listDirectories').innerHTML = tmp;

    } else { alert("Ajax Error: La connexion avec le serveur est perdue, si le problème persiste veuillez contacter l'administrateur du site");}
}

function addSuccesfull(dataResponse) {
    document.getElementById("zoneAdd").innerHTML = "<p class=''>" + dataResponse + '</p>';
}

function initSuccesfull(userResponse) {
    //alert(userResponse);
    var projects = JSON.parse(userResponse);
    //alert(projetcs.length);
    createPaginationPrec();
    for (i = 0; i < projects.length; i++)
    {
        //alert(i + " " + projetcs[i].id);
        //console.log(i + " " + projetcs[i].id);
        //alert(projetcs.length - 1);
        createProjectsPagination(projects[i].id, projects[i].label_proj, projects[i].description_proj, projects[i].techno_proj, projects[i].location_proj, projects[i].vignette_proj);
        //alert(projetcs[i].id + " / " + projetcs[i].label_proj + " / " + projetcs[i].description_proj + " / " + projetcs[i].location_proj + " / " + projetcs[i].duree_proj + " / " + projetcs[i].vignette_proj );
    }
    createPaginationNext(projects.length);
    //activation de la page 1
    selectPage = document.getElementsByClassName("paginationnumber");
    selectPage[0].classList.add("active");
    selectPage[0].dataset.current = "active";
    activePage = selectPage[0].dataset.number;
    dataProjShow(selectPage[0]);
}



function createPaginationPrec() {

//insertion points de suite
    var pageSuite = document.createElement("LI");
    pageSuite.setAttribute("class", "waves-effect navPagination g_pointer");
    pageSuite.setAttribute("id", "morePrec");
    pageSuite.setAttribute("onclick", "pagePrec();");
    pageSuite.setAttribute("title", "... vers la page 1");
    if (pointSuitePrec === false) {
        zonePagination.appendChild(pageSuite);
        pageSuite.innerHTML = moreHP;
        document.getElementById("morePrec").style.display = "none";
        pointSuitePrec = true;
    }
// création du chevron de navigation précédent
    var pageLi = document.createElement("LI");
    pageLi.setAttribute("class", "disabled waves-effect navPagination");
    pageLi.setAttribute("id", "prec");
    pageLi.setAttribute("onclick", "pagePrec();");
    zonePagination.appendChild(pageLi);
    pageLi.innerHTML = "<a href='#!'>" + chevronPrec + "</a>";
}

function createPaginationNext(nbPages) {
    var pageLi = document.createElement("LI");
    pageLi.setAttribute("class", "waves-effect navPagination");
    pageLi.setAttribute("id", "next");
    pageLi.setAttribute("onclick", "pageNext();");

    //pageLi.setAttribute("onload", "this.innerHtml=chevronNext;");
    var zonePagination = document.getElementById("pagination");
    zonePagination.appendChild(pageLi);
    pageLi.innerHTML = "<a href='#!'>" + chevronNext +"</a>";
    var pageSuite = document.createElement("LI");
    pageSuite.setAttribute("class", "waves-effect navPagination g_pointer");
    pageSuite.setAttribute("id", "moreNext");
    pageSuite.setAttribute("onclick", "pageNext();");
    pageSuite.setAttribute("title", "... vers la page " + nbPages);
    if (pointSuiteNext === false) {
        zonePagination.appendChild(pageSuite);
        pageSuite.innerHTML =  moreHN;
        pointSuiteNext = true;
    }

}

var pointSuiteNext = false;
var pointSuitePrec = false;
function createProjectsPagination(pId, pLabel, pDescription, pTechno, pLocation, pVignette) {
    //alert(pId + " " + pLabel + " " + pLocation + " " + pVignette);

    var pageLi = document.createElement("LI");
    pageLi.setAttribute("id", pId);
    pageLi.setAttribute("class", "waves-effect paginationnumber");
    pageLi.setAttribute("data-current", "");
    pageLi.setAttribute("data-number", pId);
    pageLi.setAttribute("data-label", pLabel);
pageLi.setAttribute("title", pLabel);
    pageLi.setAttribute("data-description", pDescription);
    pageLi.setAttribute("data-techno", pTechno);
    pageLi.setAttribute("data-location", pLocation);
    pageLi.setAttribute("data-vignette", pVignette);
    pageLi.setAttribute("onclick", "activeProjectPage(this);dataProjShow(this);//");
    var zonePagination = document.getElementById("pagination");
    zonePagination.appendChild(pageLi);
    pageLi.innerHTML = "<a href='#!'>" + pId + "</a>";
    if (pId > nbPageShow) {
        pageLi.style.display = "none";
    }
    //alert("ok");
}

function stateInteractive() {

    //document.getElementById("loader").style.display = "block";
    //var tmp = ajaxrequest.responseText;//.split(":");
    ////if (typeof (tmp[1]) != "undefined") {
    ////    f.elements["string1_r"].value = tmp[1];
    ////    f.elements["string2_r"].value = tmp[2];
    ////}
    //for (var i = 0; i < tmp.length; i++) {
    //    //alert("stateInteractive" + tmp[i]);
    //}
}

function stateLoaded() {
    //document.getElementById("loader").style.display = "block";
    //var tmp = ajaxrequest.responseText; //.split(":");
    ////if (typeof (tmp[1]) != "undefined") {
    ////    f.elements["string1_r"].value = tmp[1];
    ////    f.elements["string2_r"].value = tmp[2];
    ////}
    //for (var i = 0; i < tmp.length; i++) {
    //    //alert("stateLoaded" + tmp[i]);
    //}
}

function stateLoading() {
    //document.getElementById('listDirectories').innerHTML = "<div id='loader' class='myloader'></div>"
    //var tmp = ajaxrequest.responseText; //.split(":");
    ////if (typeof (tmp[1]) != "undefined") {
    ////    f.elements["string1_r"].value = tmp[1];
    ////    f.elements["string2_r"].value = tmp[2];
    ////}
    //for (var i = 0; i < tmp.length; i++) {
    //    //alert("stateLoading" + tmp[i]);
    //}
}

function stateUninitialized() {
    //document.getElementById("loader").style.display = "block";
    //var tmp = ajaxrequest.responseText;//.split(":");
    ////if (typeof (tmp[1]) != "undefined") {
    ////    f.elements["string1_r"].value = tmp[1];
    ////    f.elements["string2_r"].value = tmp[2];
    ////}
    //for (var i = 0; i < tmp.length; i++) {
    //    //alert("stateUninitialized" + tmp[i]);
    //}
}


// **************************

//function selectionCase() {
//    var formCases = document.getElementsByName("meschecks[]")
//    var casesChecked = [];
//    var casesNotChecked = [];
//    var j = 0;
//    var k = 0;
//    for (i = 0; i < formCases.length; i++) {
//        if (formCases[i].checked == false) { casesNotChecked[k] = formCases[i].value; k++ } else { casesChecked[j] = formCases[i].value; j++ }
//    }

//    console.log(casesChecked);
//    //selectliste1 = myliste1.selectedIndex;
//    data = "mescases=" + casesChecked;

//    sendAjax(data);
//    return true
//};

//function exploreMyPath(myPath) {
//    data = "maselection=" + "../" + myPath;
//    console.log (myPath);
//    if (myPath == '../../..'){
//        return;
//    }
//    document.getElementById('listDirectories').innerHTML = "<div id='loader' class='myloader'></div>";
//    sendAjax(data);
//    return true;
//};

//function exploreMyFolder(myPath) {

//    data = "maselection=" + myPath;
//    console.log (myPath);
//    if (myPath == '../../..'){
//        return;
//    }
//    document.getElementById('listDirectories').innerHTML = "<div id='loader' class='myloader'></div>"
//    sendAjax(data);
//    return true;
//};

