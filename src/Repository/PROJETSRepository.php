<?php

namespace App\Repository;

use App\Entity\PROJETS;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method PROJETS|null find($id, $lockMode = null, $lockVersion = null)
 * @method PROJETS|null findOneBy(array $criteria, array $orderBy = null)
 * @method PROJETS[]    findAll()
 * @method PROJETS[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PROJETSRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, PROJETS::class);
    }


//    /**
//     * @return PROJETS[] Returns an array of PROJETS objects
//     */
    
    //public function getProject() : array
    //{
    //    $qb = $this->createQueryBuilder('p')
    //        //->andWhere('p.price > :price')
    //        //->setParameter('price', $price)
    //        ->orderBy('p.id', 'ASC')
    //        ->getQuery();

    //    return $qb->execute();
    //}


/*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?PROJETS
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
