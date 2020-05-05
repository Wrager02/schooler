<?php

require '../vendor/autoload.php';
require 'classes/School.php';
require 'classes/Schoolform.php';
require 'classes/Specialisation.php';

use Schooler\Classes\School as School;
use Schooler\Classes\Schoolform as Schoolform;
use Schooler\Classes\Specialisation as Specialisation;

$connectionParams = array(
    'dbname' => 'u156147db1',
    'user' => 'u156147db1',
    'password' => '0n7b5egfgx7g',
    'host' => 'e98629-mysql.services.easyname.eu',
    'driver' => 'pdo_mysql'
);

$return = [];

$start = microtime(true);

try {
    $conn = \Doctrine\DBAL\DriverManager::getConnection($connectionParams);

    $schools = $conn->createQueryBuilder()
        ->select('*')
        ->from('school', 's')
        ->innerJoin('s', 'zip', 'z', 's.fk_zip = z.pk_zip')
        ->execute()
        ->fetchAll();

    foreach ($schools as $school) {
    /*    $schooltypes = [];
        $schooltypes = $conn->createQueryBuilder()
            ->select('sf.pk_schoolform', 'sf.description', 'sf.graduation')
            ->from('school_schoolform', 'ss')
            ->innerJoin('ss', 'schoolform', 'sf', 'ss.fk_schoolform = sf.pk_schoolform')
            ->where('ss.fk_school_id = ?')
            ->setParameter(0, $school['pk_school_id'])
            ->execute()
            ->fetchAll();


        $specialisations = [];
        $specialisations = $conn->createQueryBuilder()
            ->select('s.pk_name', 's.description', 's.fk_graphic_id')
            ->from('school_spezialisation', 'ss')
            ->innerJoin('ss', 'spezialisation', 's', 'ss.fk_name = s.pk_name')
            ->where('ss.fk_school_id = ?')
            ->setParameter(0, $school['pk_school_id'])
            ->execute()
            ->fetchAll();

        array_push($return, new School($school['name'], $school['fk_zip'], $school['city'], $school['street'], $school['housenumber'],
            $school['adressextra'], $school['private'], array_map('toSchooltype', $schooltypes),
            array_map('toSpecialisation', $specialisations)));
*/

        //$currentSchool = new School($school['name'], $school['fk_zip'], $school['city'], $school['street'], $school['housenumber'],
          //  $school['adressextra'], $school['private'], [], []);


        $currentSchool = new School($school['name'], $school['fk_zip'], $school['city'], $school['street'], $school['housenumber'],
            $school['adressextra'], true, [], []);


        $return[] = $currentSchool->jsonSerialize();

        //array_push($return, $currentSchool->jsonSerialize());



//        echo new School($school['name'], $school['fk_zip'], $school['city'], $school['street'], $school['housenumber'],
//            $school['adressextra'], $school['private'], array_map('toSchooltype', $schooltypes),
//            array_map('toSpecialisation', $specialisations));
    }

    file_put_contents('schools.json', json_encode($return, JSON_UNESCAPED_UNICODE));


} catch (\Doctrine\DBAL\DBALException $e) {
    echo $e;
}

function toSchooltype($array) {
    return new Schoolform($array['pk_schoolform'], $array['description'], $array['graduation']);
}

function toSpecialisation($array) {
    return new Specialisation($array['pk_name'], $array['description'], $array['fk_graphic_id']);
}

