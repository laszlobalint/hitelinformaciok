# Segédosztályok

## Purpose class

Tartalmazza a jelenleg támogatott hitel célokat.

## Hitel class

Ennek az osztálynak segítségével lehet hivatkozásokat generálni a beágyazáshoz.

# Beágyazott találati lista

A beágyazott találati lista megjelenítése egy iframe segítségével történik. Az iframe­hez
szükséges forrás URL generálása a biztosított Hitel class ​_getOffersURL_ statikus
függvényének segítségével történik a következőképpen

```php
$url = Hitel::getOffersURL(
    3,
    7490000,
    6000000,
    240,
    Purpose::HASZNALT_VASARLAS,
    'http://hitel.dev/c?hitelcel=1&futamido=240&ingatlan_vetelar=7490000',
    1,
    'app',
    [
 'bgColor' => '#FAFAFA',
 'btnColor' => '#DA872F'
    ]
);
```

### Ahol a paraméterek sorrendben a következőek

* Limit
    * mennyi találatot szeretnénk megjeleníteni
    * értékhalmaz: 1-3
* Ingatlan vételár
    * mennyibe kerül az adott ingatlan, illetve nagyságrendileg milyen árú
    * ingatlanhoz szeretnénk hiteleket keresni értékhalmaz: pozitív egész számok
* Hitelösszeg
    * mennyi hitelösszegre szeretnénk keresni
    * értékhalmaz: pozitív egész számok
* Futamidő
    * milyen futamidejű hitelek érdekelnek
    * értékhalmaz: pozitív egész számok, a futamidő hónapokban
* Hitelcél​
    * milyen célú hitelek érdekelnek
    * értékhalmaz: pozitív egész számok, a megadott Purpose class konstansai
* Kalkulátor URL
    * a beágyazó oldal által biztosított beágyazott kalkulátor URL­je, amiben tetszőleges paraméter nevekkel ellátva szerepelnek a fentebb megadott alapértékek
    * Lehetőség van a Hitel.hu kalkulátor használatára, ekkor itt a következő linket kell megadni: https://hitel.hu/homeloan?credit_purpose=1&loan_amount=8500000, ahol a credit_purpose értékhalmaza a class.Hitel.php-ban definiált Purpose class konstans értékei lehetnek, a loan_amount
    * értékhalmaz: szöveges, url cím
* Widget mód
    * milyen típusú találatokat szeretnénk megjeleníteni
    * értékhalmaz:
    * 1 bank logóval, bank névvel
    * 2 bank logó nélkül, bank névvel
    * 3 bank logó nélkül, bank név nélkül
* CSS Fájl
    * egy string, ami egy név, mely a Hitel.hu-n található egyedi stíluslap neve
* CSS
    * Oldal háttér és gomb háttér megadása
    * értékhalmaz: szöveges, hexadecimális színkódok
    * bgColor
    * btnColor

A generált ​_$url_​ változót ezután megadjuk az oldalon belül a beágyazó iframe src
paramétereként például:

```html
<iframe src="<?php echo $url; ?>" height=900 style="width: 100%; border: 0px
solid #ccc"></iframe>
```

# Beágyazott kalkulátor

A beágyazott kalkulátor megjelenítése egy iframe segítségével történik. Az iframe­hez
szükséges forrás URL generálása a biztosított Hitel class ​_getCalculatorURL​_ statikus
függvényének segítségével történik a következőképpen:

```php
$hitelcel = isset($_GET['hitelcel']) ? $_GET['hitelcel'] : null;
$futamido = isset($_GET['futamido']) ? $_GET['futamido'] : null;
$ingatlan_vetelar = isset($_GET['ingatlan_vetelar']) ?
$_GET['ingatlan_vetelar'] : null;
$felhasznalo_azo = 15;

$url = Hitel::getCalculatorURL(
    $felhasznalo_azo,
    $ingatlan_vetelar,
    $futamido,
    $hitelcel,
    true
);
```

Ez a példa a dinamikus paraméter beállítást szemlélteti. Az előző példában a beágyazott
találati listánál megadtuk a kalkulátor URL­t felparaméterezve. Itt a kalkulátort beágyazó
oldalon azokkal a GET paraméterekkel hívjuk meg a getCalculatorURL függvényt. Itt
természetesen tetszőleges előredefiniált adatokat is megadhatunk, ahogy azt a beágyazott
találati listánál is tesszük.  

### Ahol a paraméterek sorrendben a következőek

* Felhasználó azonosító
    * A beágyazó rendszerben éppen bejelntkezett felhasználó azonosítója. Ezt
    fogja használni a kalkulátor a lead elküldésekor, a hitel.hu rendszerében
    eltárolt, beágyazó oldalhoz tartozó felhasználó azonosító API­hoz.
    * értékhalmaz: szöveges
* Ingatlan vételár
    * mennyibe kerül az adott ingatlan, illetve nagyságrendileg milyen árú
    ingatlanhoz szeretnénk hiteleket keresni
    * értékhalmaz: pozitív egész számok
* Futamidő
    * milyen futamidejű hitelek érdekelnek
    * értékhalmaz: pozitív egész számok, a futamidő hónapokban
* Hitelcél​
    * milyen célú hitelek érdekelnek
    * értékhalmaz: pozitív egész számok, a megadott Purpose class konstansai
* Új tab
    * ezt igazra állítva a beágyazott kalkulkátor nem fog adott oldalon keresni, hanem új oldalra megnyitja a Hitel.hu-t a beálított keresési paraméterekkel
    * új oldalra nyitás esetén a beágyazó oldal azonosítója 1 napos cookie-ba elmentésre kerül, így tudjuk, hogy melyik beágyazott oldalról jött még akkor is, ha így a Hitel.hu-n kerül is elküldésre a lead
    * értékhalmaz: igaz (true), hamis (false)
* CSS Fájl
    * egy string, ami egy név, mely a Hitel.hu-n található egyedi stíluslap neve
* CSS
    * Oldal háttér és gomb háttér megadása
    * értékhalmaz: szöveges, hexadecimális színkódok
        * bgColor
        * btnColor
        * modalBg
* Támogatott:  
    * true / false bool érték annak megfelelően, hogy be akarjuk-e kapcsolni a a “Csak támogatott hitelek” checkboxot.

A generált ​_$url​_ változót ezután megadjuk az oldalon belül a beágyazó iframe src
paramétereként például:

```html
<iframe src="<?php echo $url; ?>" height=900 style="width: 100%; border: 0px
solid #ccc"></iframe>
```

# iFrame auto resize
A beágyazó oldal iframe magasságának automatikus növelése egy third-party javascript plugin segítségével történik. Ehhez a forrásfájlok között megtalálható kettő javascript fájlt kell behúzni az adott oldal body záró eleme elé:

```html
<script type="text/javascript" src="/bower_components/iframe-resizer/js/iframeResizer.min.js"></script>
<script src="/js/iframe-resize.js"></script>
```

Ez a kis segéd szkript ráül minden ‘.iframe-to-resize’ osztályú iframe-re és amennyiben a tartalmuk változik, hozzáigazítja a magasságukat a szülő oldalon.

Több iframe egy oldalon való beágyazása esetén biztosítani kell, hogy mindegyik elem külön egyedi ID-vel rendelkezzen.

Bővebb információk a plugin hivatalos honlapján találhatóak: https://github.com/davidjbradshaw/iframe-resizer

# Felhasználó azonosító API

A kalkulátor beágyazása során a beágyazó rendszernek biztosítania kell egy felhasználó
azonosítására szolgáló API­t. A lead elküldése a lead küldő felugró ablakon keresztül
történik, ekkor a kalkulátor oldal először megpróbálja azonosítani a külső oldal bejelentkezett
felhasználóját, a beágyazott URL­ben megadott felhasználó azonosító elküldésével a
hitel.hu rendszerében felvett, beágyazó oldalhoz tartozó felhasználó azonosító API­nak.

### Felhasználó azonosító API kérés típusa:  

* GET

### Válasz formátuma

Az kérésre a választ kódolt formátumba várja a beágyazott kalkulátor. Az
adatok elkódolása a biztosított Hitel class ​_getEncryptedUserData​_ statikus
függvényének segítségével történik a következőképpen:

```php
$encryptedUserData = Hitel::getEncryptedUserData(
    $name,
    $email,
    $phone,
    $zip_code,
    $availability
);

return json_encode([
    'success' => true,
    'data'=> $encryptedUserData,
]);
```

### Ahol a paraméterek sorrendben a következőek

* Felhasználó neve
* Felhasználó email címe
* Felhasználó telefonszáma
* Felhasználó irányítószáma
* Elérhetőség: itt egyelőre ‘anytime’ szöveg szerepeljen
