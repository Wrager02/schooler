<?php

require 'vendor/autoload.php';
require 'classes/School.php';

use Schooler\Classes\School as School;

$connectionParams = array(
        'dbname' => 'u156147db1',
        'user' => 'u156147db1',
        'password' => '0.uozdvp73i',
        'host' => 'e98629-mysql.services.easyname.eu',
        'driver' => 'pdo_mysql'
);

try {
    $conn = \Doctrine\DBAL\DriverManager::getConnection($connectionParams);

    $result = $queryBuilder = $conn->createQueryBuilder();

    $result = $queryBuilder
        ->select('*')
        ->from('schule')
        ->execute()
        ->fetchAll()
    ;

    foreach ($result as $school) {
        $zip = $queryBuilder
            ->select('Ort')
            ->from('plz')
            ->where('PK_PLZ = ?')
            ->setParameter(0, $school['FK_PLZ'])
            ->execute()
            ->fetch()
        ;

        $specialization = $queryBuilder
            ->select('fachrichtung.PK_Name', 'fachrichtung.Beschreibung', 'fachrichtung.FK_Bild_ID')
            ->from('schule_fachrichtung', 'sf')
            ->where('FK_Schul_ID = ?')
            ->setParameter(0, $school['PK_Schul_ID'])
            ->innerJoin('sf', 'fachrichtung'  , 'f' , 'sf.FK_Name = f.PK_Name')
            ->execute()
            ->fetch()
         ;

        echo $specialization;
//        echo new School($school['Name'], $school['FK_PLZ'], $zip['Ort'], $school['Strasse'], $school['Hausnummer'],
//            $school['Adresszusatz'], $school['Privat'], $specialization['PK_Name'], $specialization['fachrichtung.Beschreibung'],
//            $specialization['fachrichtung.FK_Bild_ID']) . "\n";
    }

    $conn->close();

} catch (\Doctrine\DBAL\DBALException $e) {
    echo $e;
}

function replaceIfEmpty($s) {
    return $s == "" ? '%' : $s;
}
