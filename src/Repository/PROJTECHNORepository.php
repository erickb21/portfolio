<?php

namespace App\Repository;

use App\Entity\PROJTECHNO;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method PROJTECHNO|null find($id, $lockMode = null, $lockVersion = null)
 * @method PROJTECHNO|null findOneBy(array $criteria, array $orderBy = null)
 * @method PROJTECHNO[]    findAll()
 * @method PROJTECHNO[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PROJTECHNORepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, PROJTECHNO::class);
    }

//    /**
//     * @return PROJTECHNO[] Returns an array of PROJTECHNO objects
//     */
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
    public function findOneBySomeField($value): ?PROJTECHNO
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
