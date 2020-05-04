<?php


namespace Schooler\Classes;


class Specialisation implements \JsonSerializable
{
    /**
     * @var string
     * Fachrichtung (z.B. IT, Chemie)
     */
    private $specialisation;

    /**
     * @var string
     * Zusätzliche Information zur Fachrichtung
     */
    private $description;

    /**
     * @var string
     * URL zu einem Beispielbild
     */
    private $graphic;

    /**
     * Specialisation constructor.
     * @param string $specialisation
     * @param string $description
     * @param string $graphic
     */
    public function __construct(string $specialisation, $description, $graphic)
    {
        $this->specialisation = $specialisation;
        $this->description = $description;
        $this->graphic = $graphic;
    }

    public function __toString()
    {
        return $this->specialisation;
    }

    public function jsonSerialize()
    {
        echo "Specialisation";
        $array["specialisation"] = $this->specialisation;
        $array["description"] = $this->description;
        $array["graphic"] = $this->graphic;
        return $array;
    }


}
