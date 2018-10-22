<?php

require "database.php";


$userRequest=strip_tags($_POST['userRequest']);
$bdd = database::getInstance();

$res = $bdd->prepare("SELECT * FROM projets") ;
$res->setFetchMode(PDO::FETCH_ASSOC);
$res->execute();
$result=$res->fetchAll();
$dataProj= json_encode($result);
//foreach( $result as $ligne){ 
         //$dataProj.= json_encode($ligne);
         
         //}
      //if(){
      //   $formValid = true; // Pour afficher le message de réussite si tout est bon
         
       echo $userRequest .'_!!_'.$dataProj;
      //}
      //else {
      //   // Permettra d'afficher les erreurs éventuelles
      //   die(print_r($res->errorInfo()));
      //}


?>