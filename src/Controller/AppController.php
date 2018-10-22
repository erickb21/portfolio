<?php

// src/Controller/AppController.php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use App\Repository\PROJETSRepository;


class AppController extends Controller
{

    public function index()
    {
    //$project = PROJETSRepository::getProject();
        return $this->render('app/index.html.twig', [
            'controller_name' => 'AppController' ,//'AppController'
        ]);
    }


     /**
     *@Route("/add", name="add_addRealisation")
     */
    //public function addRealisation () {

    ////$test = $_POST[""];
    //print_r($_POST);

    //        return $this->render('app/index.html.twig', [
    //        'controller_name' => 'AppController',
    //    ]);
    //}
}
