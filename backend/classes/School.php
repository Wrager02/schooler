<?php

namespace Schooler\Classes;

class School
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
    private $houseNumber;

    /**
     * @var string
     * Adresszusatz (z.B. Türnummer oder Stiege)
     */
    private $addressAddition;

    /**
     * @var boolean
     * Handelt es sich um eine private oder öffentliche Schule?
     * true wenn privat, false wenn nicht
     */
    private $privat;

    /**
     * @var string
     * Fachrichtung (z.B. IT, Chemie)
     */
    private $specialization;

    /**
     * @var string
     * Zusätzliche Information zur Fachrichtung
     */
    private $specializationDescription;

    /**
     * @var string
     * URL zu einem Beispielbild
     */
    private $picture;

    /**
     * @var string
     * Schulform (z.B. HTL, Gymnasium)
     */
    private $schooltype;

    /**
     * @var string
     * Zusätzliche Information zur Schulform
     */
    private $schooltypeDescription;

    /**
     * @var string
     * Abschluss
     */
    private $degree;

    /**
     * School constructor.
     * @param string $name
     * @param string $zip
     * @param string $city
     * @param string $street
     * @param string $houseNumber
     * @param string $addressAddition
     * @param bool $privat
     * @param string $specialization
     * @param string $specializationDescription
     * @param string $picture
     * @param string $schooltype
     * @param string $schooltypeDescription
     * @param string $degree
     */
    public function __construct(
        string $name, string $zip, string $city, string $street, string $houseNumber, $addressAddition,
        bool $privat, string $specialization, string $specializationDescription, string $picture)
    {
        $this->name = $name;
        $this->zip = $zip;
        $this->city = $city;
        $this->street = $street;
        $this->houseNumber = $houseNumber;
        $this->addressAddition = $addressAddition;
        $this->privat = $privat;
        $this->specialization = $specialization;
        $this->specializationDescription = $specializationDescription;
        $this->picture = $picture;
//        $this->schooltype = $schooltype;
//        $this->schooltypeDescription = $schooltypeDescription;
//        $this->degree = $degree;
    }

//, string $addressAddition,
//bool $privat, string $specialization, string $specializationDescription, string $picture, string $schooltype,
//string $schooltypeDescription, string $degree

    public function __toString()
    {
        return $this->name . ": " . $this->zip . " " . $this->city . ", " . $this->street . " " . $this->houseNumber . ": " . $this->specialization;
    }


}
