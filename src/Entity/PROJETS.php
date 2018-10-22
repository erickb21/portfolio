<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PROJETSRepository")
 */
class PROJETS
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
    private $LABEL_PROJ;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $DESCRIPTION_PROJ;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $LOCATION_PROJ;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $DUREE_PROJ;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $VIGNETTE_PROJ;

    public function getId()
    {
        return $this->id;
    }

    public function getLABELPROJ(): ?string
    {
        return $this->LABEL_PROJ;
    }

    public function setLABELPROJ(string $LABEL_PROJ): self
    {
        $this->LABEL_PROJ = $LABEL_PROJ;

        return $this;
    }

    public function getDESCRIPTIONPROJ(): ?string
    {
        return $this->DESCRIPTION_PROJ;
    }

    public function setDESCRIPTIONPROJ(?string $DESCRIPTION_PROJ): self
    {
        $this->DESCRIPTION_PROJ = $DESCRIPTION_PROJ;

        return $this;
    }

    public function getLOCATIONPROJ(): ?string
    {
        return $this->LOCATION_PROJ;
    }

    public function setLOCATIONPROJ(?string $LOCATION_PROJ): self
    {
        $this->LOCATION_PROJ = $LOCATION_PROJ;

        return $this;
    }

    public function getDUREEPROJ(): ?string
    {
        return $this->DUREE_PROJ;
    }

    public function setDUREEPROJ(?string $DUREE_PROJ): self
    {
        $this->DUREE_PROJ = $DUREE_PROJ;

        return $this;
    }

    public function getVIGNETTEPROJ(): ?string
    {
        return $this->VIGNETTE_PROJ;
    }

    public function setVIGNETTEPROJ(string $VIGNETTE_PROJ): self
    {
        $this->VIGNETTE_PROJ = $VIGNETTE_PROJ;

        return $this;
    }
}
