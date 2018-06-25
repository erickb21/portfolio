<?php
// src/Controller/LuckyController.php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
	/**
	 * Class1 short summary.
	 *
	 * Class1 description.
	 *
	 * @version 1.0
	 * @author Stagiaire
	 */
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class LuckyController extends Controller
{
    /**
     * @Route("/lucky/number")
     */
    public function number()
    {
        $number = random_int(0, 100);

        return $this->render('lucky/number.html.twig', array(
            'number' => $number,
        ));
    }
}



