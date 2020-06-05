<?php

namespace Schooler\Classes;

class School implements \JsonSerializable
{
    /**
     * @var int
     */
    private $id;

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
     * @var string
     */
    private $website;

    /**
     * @var string
     */
    private $email;

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
     * @var bool
     */
    private $favorite;

    /**
     * School constructor.
     * @param int $id
     * @param string $name
     * @param string $zip
     * @param string $city
     * @param string $street
     * @param string $housenumber
     * @param string $addressaddition
     * @param string $website
     * @param string $email
     * @param bool $privat
     * @param string $schoolform
     * @param string $schoolformDescription
     * @param string $graduation
     * @param array $specialisations
     * @param bool $favorite
     */
    public function __construct(
        int $id, string $name, string $zip, string $city, string $street, string $housenumber, string $addressaddition,
        string $website, string $email, bool $privat, string $schoolform, string $schoolformDescription,
        string $graduation, array $specialisations, $favorite)

    {
        $this->id = $id;
        $this->name = utf8_encode($name);
        $this->zip = $zip;
        $this->city = utf8_encode($city);
        $this->street = utf8_encode($street);
        $this->housenumber = utf8_encode($housenumber);
        $this->addressextra = utf8_encode($addressaddition);
        $this->website = utf8_encode($website);
        $this->email = utf8_encode($email);
        $this->private = $privat;
        $this->schoolform = utf8_encode($schoolform);
        $this->schoolformDescription = $schoolformDescription;
        $this->graduation = utf8_encode($graduation);
        $this->specialisations = $specialisations;
        $this->favorite = $favorite;
    }


    public function __toString()
    {
        return $this->name . ": " . $this->zip . " " . $this->city . " " . $this->street . " " . $this->housenumber .
            ", Schultyp: " . $this->schoolform . ", Spezialisierung: " .
            implode(", ", $this->specialisations) . "<br>";
    }

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
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

    /**
     * @return string
     */
    public function getWebsite(): string
    {
        return $this->website;
    }
    /**
     * @return bool
     */
    public function isFavorite()
    {
        return $this->favorite;
    }



    /**
     * @return string
     */
    public function getEmail(): string
    {
        return $this->email;
    }



    public function jsonSerialize()
    {
        return array(
            'id' => $this->getId(),
            'name' => $this->getName(),
            'zip' => $this->getZip(),
            'city' => $this->getCity(),
            'street' => $this->getStreet(),
            'housenumber' => $this->getHousenumber(),
            'addressextra' => $this->getAddressextra(),
            'website' => $this->getWebsite(),
            'email' => $this->getEmail(),
            'private' => $this->isPrivate(),
            'schoolform' => $this->getSchoolform(),
            'schoolformDescription' => $this->getSchoolformDescription(),
            'graduation' => $this->getGraduation(),
            'specialisations' => $this->getSpecialisations(),
            'favorite' => $this->isFavorite()
        );
    }
}
