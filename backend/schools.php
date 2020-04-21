<?php

require_once 'vendor/autoload.php';

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
        echo new School($school['Name'], );
    }

    $conn->close();

} catch (\Doctrine\DBAL\DBALException $e) {
    echo "Connection failed";
}

