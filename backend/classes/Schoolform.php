<?php


namespace Schooler\Classes;


class Schoolform implements \JsonSerializable
{
    /**
     * @var string
     * Schulform (z.B. HTL, Gymnasium)
     */
    private $schoolform;

    /**
     * @var string
     * Zusätzliche Information zur Schulform
     */
    private $description;

    /**
     * @var string
     * Abschluss
     */
    private $graduation;

    /**
     * Schoolform constructor.
     * @param string $schoolform
     * @param string $description
     * @param string $graduation
     */
    public function __construct(string $schoolform, $description, string $graduation)
    {
        $this->schoolform = $schoolform;
        $this->description = $description;
        $this->graduation = $graduation;
    }

    public function __toString()
    {
        return $this->schoolform;
    }

    public function jsonSerialize()
    {
        echo "Schoolform";
        $array["schoolform"] = $this->schoolform;
        $array["description"] = $this->description;
        $array["graduation"] = $this->graduation;
        return $array;
    }


}
