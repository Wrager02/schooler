<?php

require './vendor/autoload.php';
require 'classes/School.php';
require 'classes/Specialisation.php';

use Schooler\Classes\School as School;
use Schooler\Classes\Specialisation as Specialisation;

//$connectionParams = array(
//    'dbname' => 'u156147db1',
//    'user' => 'u156147db1',
//    'password' => '0n7b5egfgx7g',
//    'host' => 'e98629-mysql.services.easyname.eu',
//    'driver' => 'pdo_mysql'
//);

$connectionParams = array(
    'dbname' => 'schooler',
    'user' => 'root',
    'password' => '',
    'host' => 'localhost',
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
        $schooltypes = $conn->createQueryBuilder()
            ->select('sf.pk_schoolform', 'sf.description', 'sf.graduation')
            ->from('school_schoolform', 'ss')
            ->innerJoin('ss', 'schoolform', 'sf', 'ss.fk_schoolform = sf.pk_schoolform')
            ->where('ss.fk_school_id = ?')
            ->setParameter(0, $school['pk_school_id'])
            ->execute()
            ->fetchAll();

        $specialisations = $conn->createQueryBuilder()
            ->select('s.pk_name', 's.description', 's.fk_graphic_id')
            ->from('school_spezialisation', 'ss')
            ->innerJoin('ss', 'spezialisation', 's', 'ss.fk_name = s.pk_name')
            ->where('ss.fk_school_id = ?')
            ->setParameter(0, $school['pk_school_id'])
            ->execute()
            ->fetchAll();

        $specialisationsFinal = [];

        foreach ($specialisations as $specialisation) {
            $graphic = $conn->createQueryBuilder()
                ->select('url', 'hsl')
                ->from('graphic')
                ->where('graphic.pk_graphic_id = ?')
                ->setParameter(0, $specialisation['fk_graphic_id'])
                ->execute()
                ->fetch();

            $specialisationsFinal[] = new Specialisation(
                $specialisation['pk_name'],
                $specialisation['description'],
                $graphic['url'],
                $graphic['hsl']
            );
        }

        foreach ($schooltypes as $schooltype) {
            $return[] = new School(
                $school['pk_school_id'],
                $school['name'],
                $school['fk_zip'],
                $school['city'],
                $school['street'],
                $school['housenumber'],
                $school['adressextra'],
                $school['url'],
                $school['email'],
                $school['private'],
                $schooltype['pk_schoolform'],
                $schooltype['description'],
                $schooltype['graduation'],
                $specialisationsFinal,
                false
            );
        }
    }

    file_put_contents('backend/schools.json', json_encode($return, JSON_UNESCAPED_UNICODE));


} catch (\Doctrine\DBAL\DBALException $e) {
    echo $e;
}
