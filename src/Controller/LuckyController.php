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
class LuckyController
{
    public function number()
    {
        $number = mt_rand(0, 100);

        return new Response(
            '<html><body>Lucky number: '.$number.'</body></html>'
        );
    }
}



