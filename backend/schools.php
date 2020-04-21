<?php

require_once 'vendor/autoload.php';

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

    foreach ($result as $schule) {
        echo $schule['Name'];
    }

    $conn->close();

} catch (\Doctrine\DBAL\DBALException $e) {
    echo "Connection failed";
}

