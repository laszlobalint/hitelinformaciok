<?php

error_reporting(E_ALL);
require_once('class.Hitel.php');

/**
 * Publikus kulcs a Hitel.hu adatbázisából.
 *
 * @var string
 */
Hitel::$apiKey = 'FDI6KhA0D2YnrMhoDzAcTrUyd3ELKBhM';

/**
 * API titkos kulcs a Hitel.hu adatbázisából.
 *
 * @var string
 */
Hitel::$apiSecret = 'isJk3PHdafDM7VUvoKS_6bneOD3V1Wa0';

$demoUserData = Hitel::getEncryptedUserData(
    'John Doe',
    'john.doe@mailinator.com',
    '1241234535',
    '6723',
    'anytime'
);
