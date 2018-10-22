<?php
require "database.php";

$bdd = database::getInstance();



//$bdd = new PDO('mysql:host=localhost;dbname=mydb;charset=utf8', 'root', '');

//	id	label_proj	description_proj	location_proj	duree_proj	vignette_proj

// "titreProj=" + titreProj + "&descriptionProj=" + descriptionProj + "&urlindex_proj=" + urlindex_proj + "&urlimageProj=" + urlimageProj ;
$userRequest=strip_tags($_POST['userRequest']);

$titreProj = strip_tags($_POST['titreProj']);
$descriptionProj=strip_tags($_POST['descriptionProj']);
$urlindexproj= strip_tags($_POST['urlindexproj']);
$dureproj=strip_tags($_POST['dureproj']);
$urlimageProj = strip_tags($_POST['urlimageProj']);

//echo $titreProj . " & " .$descriptionProj . " & " . $urlindexproj . " & " . $dureproj . " & " .$urlimageProj; 

$res = $bdd->prepare(
"insert into projets(
label_proj,
description_proj,
location_proj,
duree_proj,
vignette_proj) 

VALUES ( :titreProj , :descriptionProj , :urlindexproj ,  :dureproj , :urlimageProj)");
      

$res->bindValue( ':titreProj', $titreProj, PDO::PARAM_STR); 
$res->bindValue( ':descriptionProj', $descriptionProj, PDO::PARAM_STR);
$res->bindValue( ':urlindexproj', $urlindexproj, PDO::PARAM_STR);
$res->bindValue( ':dureproj', $dureproj, PDO::PARAM_STR);
$res->bindValue( ':urlimageProj', $urlimageProj,PDO::PARAM_STR);



      if($res->execute()){
         $formValid = true; // Pour afficher le message de réussite si tout est bon
         echo $userRequest .'_;_'.'Les données sont bien enregistrées';
      }
      else {
         // Permettra d'afficher les erreurs éventuelles
         die(print_r($res->errorInfo()));
      }

?>