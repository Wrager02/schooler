<?php

namespace Schooler\Classes;

class School implements \JsonSerializable
{
    /**
     * @var string
     * Name der Schule
     */
    private $name;

    /**
     * @var string
     * PLZ
     */
    private $zip;

    /**
     * @var string
     * Stadt
     */
    private $city;

    /**
     * @var string
     * Straße
     */
    private $street;

    /**
     * @var string
     * Hausnummer
     */
    private $housenumber;

    /**
     * @var string
     * Adresszusatz (z.B. Türnummer oder Stiege)
     */
    private $addressextra;

    /**
     * @var boolean
     * Handelt es sich um eine private oder öffentliche Schule?
     * true wenn privat, false wenn nicht
     */
    private $private;

    /**
     * @var array
     */
    private $specialisations;

    /**
     * @var array
     */
    private $schoolforms;

    /**
     * School constructor.
     * @param string $name
     * @param string $zip
     * @param string $city
     * @param string $street
     * @param string $housenumber
     * @param string $addressaddition
     * @param bool $privat
     * @param array $specialisations
     * @param array $schoolforms
     */
    public function __construct(
        string $name, string $zip, string $city, string $street, string $housenumber, $addressaddition,
        bool $privat, array $schoolforms, array $specialisations)
    {
        $this->name = $name;
        $this->zip = $zip;
        $this->city = $city;
        $this->street = $street;
        $this->housenumber = $housenumber;
        $this->addressextra = $addressaddition;
        $this->private = $privat;
        $this->schoolforms = $schoolforms;
        $this->specialisations = $specialisations;
    }

    public function __toString()
    {
        return $this->name . ": " . $this->zip . " " . $this->city . ", " . $this->street . " " . $this->housenumber .
            ", Schultyp: " . implode(", ", $this->schoolforms) . ", Spezialisierung: " .
            implode(", ", $this->specialisations) . "\n";
    }

    public function jsonSerialize()
    {
        echo "School";
        $array['name'] = $this->name;
        $array['zip'] = $this->zip;
        $array['city'] = $this->city;
        $array['street'] = $this->street;
        $array['housenumber'] = $this->housenumber;
        $array['addressextra'] = $this->addressextra;
        $array['private'] = $this->private;
        $array["schoolforms"] = $this->schoolforms;
        $array["specialisations"] = $this->specialisations;
        return $array;
    }
}
