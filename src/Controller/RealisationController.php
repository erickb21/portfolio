<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class RealisationController extends Controller
{
    /**
     * @Route("/realisation", name="realisation")
     */
    public function index()
    {
        return $this->render('realisation/index.html.twig', [
            'controller_name' => 'RealisationController',
        ]);
    }
}
