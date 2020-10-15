<?php

/**
 * A lehetséges hitelcélok halmaza.
 */
class Purpose
{
	const HASZNALT_VASARLAS   = 1; // Használt lakás/ház vásárlása
	const UJ_VASARLAS         = 2; // Új lakás/ház várlása
	const EPITES              = 3; // Lakás/ház építése
	const FELUJITAS           = 4; // Lakás/ház felújítása
	const BOVITES             = 5; // Lakás/ház bővítése
	const KORESZERUSITES      = 6; // Lakás/ház korszerűsítése
	const SZABAD_FELHASZNALAS = 7; // Szabad felhasználásra
	const HITELKIVALTAS       = 8; // Hitelkiváltás
	const LAKÁSTAKARÉK        = 9; // Lakástakarék
}

class PersonalLoanPurpose
{
	const SZABAD_FELHASZNALAS   = 9; // Szabad felhasználásra
	const KISOSSZEGU_KOLCSON    = 10; // Kis összegű kölcsön
	const HITELKIVALTAS         = 11; // Hitelkiváltás
}

class WidgetPlace
{
	const FOOLDAL         = 'Főoldal';        // Főoldal
	const TALALATI_LISTA  = 'Találati lista'; // Találati lista
	const ADATLAP         = 'Adatlap';        // Adatlap
	const ISMERETLEN      = 'Ismeretlen';     // Ismeretlen
}

/**
 * Segédosztály beágyazó link generálásához.
 */
class Hitel
{

	/**
	 * Publikus API kulcs.
	 *
	 * @var string
	 */
	public static $apiKey;

	/**
	 * Titkos kulcs.
	 *
	 * @var string
	 */
	public static $apiSecret;

	/**
	 * Fejlesztői környezet állítása.
	 */
	public static $mode = 'dev';

	/**
	 * Az ajánlatok különböző bankoktól legyenek.
	 * @var bool
	 */
	public static $unique = true;

	/**
	 * getLoanAmount függvény által használt adható hitel összeg
	 * maximuma.
	 * @var int
	 */
	public static $maxLoanAmount = 10000000;

	/**
	 * @param        $limit             Megjelenített találatok száma (1-3).
	 * @param        $loan_amount       Hitelösszeg.
	 * @param        $duration          Futamidő hónapokban megadva.
	 * @param        $credit_purpose    Hitel típus.
	 * @param        $calculator_url    Link a beágyazott kalkulátor oldalra.
	 * @param int    $widget_mode       1: alap | 2: logo nélkül | 3: logo és név nélkül | 4: hitel.hu logo és
	 * @param array  $banks             Bankok azonosítójának tömbje.
	 *                                  ajánlatok.
	 * @param string $cssFile           A beágyazáshoz opcionálisan használt egyéni stíluslap.
	 * @param array  $css               háttér és gomb formázási adatok.
	 *
	 * @return string
	 */
	public static function getMinimalOffersURL(
		$limit,
		$loan_amount,
		$duration,
		$credit_purpose,
		$calculator_url,
		$widget_mode = 1,
		$banks = [],
		$cssFile = 'app',
		$css = [],
		$productType = null
	) {
		$params           = compact(
			'limit',
			'loan_amount',
			'duration',
			'credit_purpose',
			'calculator_url',
			'widget_mode',
			'banks',
			'cssFile',
			'css',
			'productType'
		);
		$params['method'] = 'minimalOffers';
		return static::getURL($params);
	}

	/**
	 * URL generátor ajánlat beágyazásához.
	 *
	 * @param  int    $limit          Megjelenített találatok száma (1-3).
	 * @param  int    $price          Ingatlan vételár.
	 * @param  int    $loan_amount    Hitelösszeg.
	 * @param  int    $duration       Futamidő hónapokban megadva.
	 * @param  int    $credit_purpose Hitel típus.
	 * @param  string $calculator_url Link a beágyazott kalkulátor oldalra.
	 * @param  int    $widget_mode    1: alap | 2: logo nélkül | 3: logo és név nélkül | 4: hitel.hu logo és ajánlatok | 5: Albérlet helyett saját lakás? 
	 * @param  array  $banks          Bankok azonosítójának tömbje.
	 * @param  mixed  $cssFile        A beágyazáshoz opcionálisan használt egyéni stíluslap.
	 * @param  mixed  $css            háttér és gomb formázási adatok.
	 *
	 * @return string                 A kigenerált URL.
	 */
	public static function getOffersURL(
		$limit,
		$price,
		$loan_amount,
		$duration,
		$credit_purpose,
		$calculator_url,
		$widget_mode = 1,
		$widget_place = WidgetPlace::ISMERETLEN,
		$banks = [],
		$cssFile = 'app',
		$css = []
	) {
		$params           = compact(
			'limit',
			'price',
			'loan_amount',
			'duration',
			'credit_purpose',
			'calculator_url',
			'widget_mode',
			'widget_place',
			'banks',
			'cssFile',
			'css'
		);
		$params['method'] = 'offers';
		return static::getURL($params);
	}

	/**
	 * URL generátor a kalkulátor beágyazásához.
	 *
	 * @param  int    $uid            Kliens user azonosítója.
	 * @param  int    $price          Ingatlan vételár.
	 * @param  int    $duration       Futamidő.
	 * @param  string $credit_purpose Hitel típus.
	 * @param  bool   $new_tab        Új tab-os kalkulátorról beszélünk?.
	 * @param  string $cssFile        A beágyazáshoz opcionálisan használt egyéni stíluslap.
	 * @param  mixed  $css            Háttér és gomb formázási adatok.
	 * @param  bool   $supported      Csak támogatott hitelek checkbox bekapcsolva
	 *
	 * @return string                 A kigenerált URL.
	 */
	public static function getCalculatorURL(
		$uid,
		$price,
		$duration,
		$credit_purpose,
		$new_tab = false,
		$cssFile = null,
		$css = [],
		$supported = false,
		$calculatorType = 0,
		$email = null,
		$productType = null
	) {
		$params           = compact(
			'uid',
			'price',
			'duration',
			'credit_purpose',
			'new_tab',
			'cssFile',
			'css',
			'supported',
			'email',
			'productType'
		);
		$params['method'] = 'calculator';

		if ($calculatorType == 0) {
			$params['calculatorType'] = 'calculator';
		} else if ($calculatorType == 1) {
			$params['calculatorType'] = 'ltp';
		} else if ($calculatorType == 2) {
			$params['calculatorType'] = 'nok';
		}

		return static::getURL($params);
	}

	public static function getMiniCalculatorURL($price, $calculator_url, $cssFile, $css)
	{
		$params = compact(
			'price',
			'calculator_url',
			'cssFile',
			'css'
		);
		$params['method'] = 'minicalculator';

		return static::getURL($params);
	}

	/**
	 * Paraméterezett titkosított URL generátor.
	 *
	 * @param  array $params Paraméterek tömbje.
	 *
	 * @return string        URL paraméterek string-je.
	 */
	protected static function getURL($params)
	{
		switch (static::$mode) {
			case 'local':
				$API_Endpoint = 'http://www.hitel.hu';
				break;
			case 'dev':
				$API_Endpoint = 'http://www.hitel.hu';
				break;
			case 'production_https':
				$API_Endpoint = 'http://www.hitel.hu';
				break;
			case 'dev_analytics':
				$API_Endpoint = 'http://www.hitel.hu';
				break;
			case 'production':
			default:
				$API_Endpoint = 'https://www.hitel.hu';
				break;
		}

		$params['unique'] = static::$unique;

		if (empty($params['banks'])) {
			unset($params['banks']);
		}

		$url           = $API_Endpoint . '/api/embed/';
		$urlParams     = json_encode($params);
		$encryptedData = static::encrypt($urlParams);
		$url .= '?token=' . static::$apiKey . '&data=' . urlencode($encryptedData);

		return $url;
	}

	/**
	 * Titkosító metódus.
	 *
	 * @param  string $string Titkosítandó szöveg.
	 *
	 * @return string         Titkosított szöveg.
	 */
	protected static function encrypt($string)
	{
		$output         = false;
		$encrypt_method = 'AES-256-CBC';
		$iv             = substr(hash('sha256', 'a'), 0, 16);
		$output         = openssl_encrypt($string, $encrypt_method, static::$apiSecret, 0, $iv);
		echo $string;
		return $output;
	}

	/**
	 * Felhasználói adatok titkosítása.
	 *
	 * @param string $name         Felhasználónév.
	 * @param string $email        Email cím.
	 * @param string $phone        Telefonszám.
	 * @param string $zip_code     Irányítószám.
	 * @param string $availability Elérhetőség.
	 *
	 * @return string               Titkosítot string.
	 */
	public static function getEncryptedUserData(
		$name,
		$email,
		$phone = '',
		$zip_code = '',
		$availability = ''
	) {
		$data          = compact('name', 'email', 'phone', 'zip_code', 'availability');
		$jsonData      = json_encode($data);
		$encryptedData = static::encrypt($jsonData);

		return $encryptedData;
	}

	/**
	 * Lehetséges hitelösszeg lekérdezése.
	 *
	 * @param $price
	 *
	 * @return int
	 */
	public static function getLoanAmount($price)
	{
		$loanAmount = $price * 0.8;

		if ($loanAmount > static::$maxLoanAmount) {
			$loanAmount = static::$maxLoanAmount;
		}

		return $loanAmount;
	}
}
