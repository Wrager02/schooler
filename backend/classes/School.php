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
     * @var string
     * Schulform (z.B. HTL, Gymnasium)
     */
    private $schoolform;

    /**
     * @var string
     * Zusätzliche Information zur Schulform
     */
    private $schoolformDescription;

    /**
     * @var string
     * Abschluss
     */
    private $graduation;

    /**
     * @var array
     */
    private $specialisations;

    /**
     * School constructor.
     * @param string $name
     * @param string $zip
     * @param string $city
     * @param string $street
     * @param string $housenumber
     * @param string $addressaddition
     * @param bool $privat
     * @param string $schoolform
     * @param string $schoolformDescription
     * @param string $graduation
     * @param array $specialisations
     */
    public function __construct(
        string $name, string $zip, string $city, string $street, string $housenumber, string $addressaddition,
        bool $privat, string $schoolform, string $schoolformDescription, string $graduation, array $specialisations)
    {
        $this->name = utf8_encode($name);
        $this->zip = $zip;
        $this->city = utf8_encode($city);
        $this->street = utf8_encode($street);
        $this->housenumber = $housenumber;
        $this->addressextra = $addressaddition;
        $this->private = $privat;
        $this->schoolform = $schoolform;
        $this->schoolformDescription = $schoolformDescription;
        $this->graduation = $graduation;
        $this->specialisations = $specialisations;
    }


    public function __toString()
    {
        return $this->name . ": " . $this->zip . " " . $this->city . " " . $this->street . " " . $this->housenumber .
            ", Schultyp: " . $this->schoolform . ", Spezialisierung: " .
            implode(", ", $this->specialisations) . "<br>";
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @return string
     */
    public function getZip(): string
    {
        return $this->zip;
    }

    /**
     * @return string
     */
    public function getCity(): string
    {
        return $this->city;
    }

    /**
     * @return string
     */
    public function getStreet(): string
    {
        return $this->street;
    }

    /**
     * @return string
     */
    public function getHousenumber(): string
    {
        return $this->housenumber;
    }

    /**
     * @return string
     */
    public function getAddressextra(): string
    {
        return $this->addressextra;
    }

    /**
     * @return bool
     */
    public function isPrivate(): bool
    {
        return $this->private;
    }

    /**
     * @return array
     */
    public function getSpecialisations(): array
    {
        return $this->specialisations;
    }

    /**
     * @return string
     */
    public function getSchoolform(): string
    {
        return $this->schoolform;
    }

    /**
     * @return string
     */
    public function getSchoolformDescription(): string
    {
        return $this->schoolformDescription;
    }

    /**
     * @return string
     */
    public function getGraduation(): string
    {
        return $this->graduation;
    }





    public function jsonSerialize()
    {
        return array(
            'name' => $this->getName(),
            'zip' => $this->getZip(),
            'city' => $this->getCity(),
            'street' => $this->getStreet(),
            'housenumber' => $this->getHousenumber(),
            'addressextra' => $this->getAddressextra(),
            'private' => $this->isPrivate(),
            'schoolform' => $this->getSchoolform(),
            'schoolformDescription' => $this->getSchoolformDescription(),
            'graduation' => $this->getGraduation(),
            'specialisations' => $this->getSpecialisations()
        );
    }
}
