<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TECHNOSRepository")
 */
class TECHNOS
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $LABEL_TECH;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $DESCRIPTION_TECH;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\PROJTECHNO")
     * @ORM\JoinColumn(nullable=false)
     */
    private $relation;

    public function getId()
    {
        return $this->id;
    }

    public function getLABELTECH(): ?string
    {
        return $this->LABEL_TECH;
    }

    public function setLABELTECH(string $LABEL_TECH): self
    {
        $this->LABEL_TECH = $LABEL_TECH;

        return $this;
    }

    public function getDESCRIPTIONTECH(): ?string
    {
        return $this->DESCRIPTION_TECH;
    }

    public function setDESCRIPTIONTECH(?string $DESCRIPTION_TECH): self
    {
        $this->DESCRIPTION_TECH = $DESCRIPTION_TECH;

        return $this;
    }

    public function getRelation(): ?PROJTECHNO
    {
        return $this->relation;
    }

    public function setRelation(?PROJTECHNO $relation): self
    {
        $this->relation = $relation;

        return $this;
    }
}
