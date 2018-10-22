<?php

namespace App\Repository;

use App\Entity\TECHNOS;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method TECHNOS|null find($id, $lockMode = null, $lockVersion = null)
 * @method TECHNOS|null findOneBy(array $criteria, array $orderBy = null)
 * @method TECHNOS[]    findAll()
 * @method TECHNOS[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TECHNOSRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, TECHNOS::class);
    }

//    /**
//     * @return TECHNOS[] Returns an array of TECHNOS objects
//     */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?TECHNOS
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
