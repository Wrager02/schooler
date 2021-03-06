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
     * @var string
     */
    private $hsl;

    /**
     * Specialisation constructor.
     * @param string $specialisation
     * @param string $description
     * @param string $graphic
     * @param string $hsl
     */
    public function __construct(string $specialisation, $description, $graphic, $hsl)
    {
        $this->specialisation = utf8_encode($specialisation);
        $this->description = utf8_encode($description);
        $this->graphic = utf8_encode($graphic);
        $this->hsl = utf8_encode($hsl);
    }

    public function __toString()
    {
        return $this->specialisation;
    }

    public function jsonSerialize()
    {
        $array["specialisation"] = $this->specialisation;
        $array["description"] = $this->description;
        $array["graphic"] = $this->graphic;
        $array["hsl"] = $this->hsl;
        return $array;
    }


}
