<?php

require_once('config.php');

if (isset($_GET['action']) && $_GET['action'] == 'get_user_data') {
    // Get user data by $user_id
    $user_id      = $_GET['user_id'];
    $name         = 'John Doe';
    $email        = 'john.doe@mailinator.com';
    $phone        = '0633332222';
    $zip_code     = '6723';
    $availability = 'anytime';

    // generate encrypted result
    $encryptedUserData = Hitel::getEncryptedUserData(
        $name,
        $email,
        $phone,
        $zip_code,
        $availability
    );

    // return a valid json response
    header('Content-type: application/json; charset=utf8');
    echo json_encode([
        'success' => true,
        'data'    => $encryptedUserData,
    ]);
    exit;
}

?>

<!DOCTYPE html>
<html lang="hu">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="">
		<script type="text/javascript">
			//MDN PolyFil for IE8 (This is not needed if you use the jQuery version)
			if (!Array.prototype.forEach){
				Array.prototype.forEach = function(fun /*, thisArg */){
				"use strict";
				if (this === void 0 || this === null || typeof fun !== "function") throw new TypeError();
				
				var
				t = Object(this),
				len = t.length >>> 0,
				thisArg = arguments.length >= 2 ? arguments[1] : void 0;

				for (var i = 0; i < len; i++)
				if (i in t)
					fun.call(thisArg, t[i], i, t);
				};
			}
		</script>  
  <link rel="icon" type="image/png" sizes="16x16" href="images/favicon.png">
  <title>Hitelinformációk</title>
  <link href="css/bootstrap.css" rel="stylesheet">
  <link href="css/owl.theme.green.css" rel="stylesheet">
  <link href="css/lightgallery.css" rel="stylesheet">
  <link href="css/bootstrap-touch-slider.css" rel="stylesheet">
  <link href="css/style.css" rel="stylesheet">
  <link rel="stylesheet" href="css/novi.css">
  <!--[if lt IE 9]>      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>      <![endif]-->
  <script src="js/core.min.js"></script>

</head>

<body>

  <div class="preloader">
    <div class="loader">
      <div class="loader__figure"></div>
      <p class="loader__label">Hitelinformációk</p>
    </div>
  </div>

  <?php
            // Hitelinformaciok
            Hitel::$mode = '';
            Hitel::$apiKey = 'FDI6KhA0D2YnrMhoDzAcTrUyd3ELKBhM';
            Hitel::$apiSecret = 'isJk3PHdafDM7VUvoKS_6bneOD3V1Wa0';

            $clurl = Hitel::getCalculatorURL(
                19,             // felhasználó azonosító
                10000000,       // ingatlan vétel ár
                240,            // futamidő
                5,              // hitelcél
                false,
                'kalkulatorok',           // 'bgColor: #eccd8f', 'bntColor: #deac3f', 'modalBg: #deac3f'
                [],
                false,
                0,              // hitel kalkulátor
                'test@test.hu' , // regisztráció átirányítása
                'home_loan'              //home_loan kalkulátor az 1-es típusú
            );

        ?>

<div id="main-wrapper">
    <div class="topbar">
      <div class="header header4 po-relative">
        <div class="h4-topbar">
          <div class="container">
            <nav class="navbar navbar-expand-lg h4-nav">
              <a class="hidden-lg-up">Menüpontok</a>
              <button class="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#header4" aria-expanded="false" aria-label="Toggle navigation">
                <span class="ti-menu"></span>
              </button>
              <div class="collapse navbar-collapse" id="header4">
                <div class="hover-dropdown">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link" href="index.html#">Kezdőlap</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="index.html#kalkulatorok">Kalkulátorok</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="index.html#miert">Miért válassz bennünket?</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="index.html#elerhetosegeink">Elérhetőségeink</a>
                    </li>
                  </ul>
                </div>
                <!-- ul class="navbar-nav ml-auto">
                  <li class="nav-item search dropdown">
                    <a class="nav-link dropdown-toggle" href="javascript:void(0)" id="h4-sdropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="fa fa-search"></i>
                    </a>
                    <div class="dropdown-menu b-none dropdown-menu-right animated fadeInDown" aria-labelledby="h4-sdropdown">
                      <input class="form-control" type="text" placeholder="Írja ide amit keres..."> </div>
                  </li>
                </ul -->
              </div>
            </nav>
          </div>
        </div>
        <div class="h4-navbar">
          <div class="container">
            <nav class="navbar navbar-expand-lg h4-nav-bar">
              <a class="navbar-brand" href="index.html">
                <img src="images/logo/szlogen.png" alt="Hitel Expert Kft."> </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#h4-info" aria-controls="h4-info" aria-expanded="false" aria-label="Toggle navigation">
                <span class="sl-icon-options-vertical"></span>
              </button>
              <div class="collapse navbar-collapse" id="h4-info">
                <ul class="navbar-nav ml-auto text-uppercase">
                  <li class="nav-item">
                    <a class="nav-link">
                      <div class="display-6 m-r-10">
                        <i class="icon-Mail"></i>
                      </div>
                      <div>
                        <small>E-mail címünk</small>
                        <h6 class="font-bold">info@hitelinformaciok.hu</h6>
                      </div>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link">
                      <div class="display-6 m-r-10">
                        <i class="icon-Phone-2"></i>
                      </div>
                      <div>
                        <small>Telefonszámunk</small>
                        <h6 class="font-bold">+36 (1) 803 8416</h6>
                      </div>
                    </a>
                  </li>
                  <li class="nav-item donate-btn">
                    <a href="index.html#elerhetosegeink" class="btn btn-danger-gradiant btn-arrow">Ajánlatkérés</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <section class="mini-spacer feature24">

      <div class="row justify-content-center">
        <div class="col-md-7 text-center">
          <!-- span class="label label-success label-rounded">Számoljunk!</span -->
          <h2 class="title">Bővítés</h2>
          <h6 class="subtitle">Lakóingatlan függőleges, vagy vízszintes irányú bővítéséhez!</h6>
        </div>
      </div>     

      <!-- KALKULÁTOR -->      
      <div class="container">
          <iframe src="<?php echo $clurl;?>" width="100%" class="iframe-to-resize" frameborder="0"></iframe>
      </div> 
      <!-- KALKULÁTOR VÉGE -->  

</section>

<section class="mini-spacer c2a5" style="background-image:url(images/cta/cta.jpg)">
      <div class="container">
        <div class="d-flex">
          <div class="display-7 align-self-center">
            <h3 class="text-white">Egyedi elképzelésed van vagy kérdéseid lennének? Beszéljünk róla!</h3>
          </div>
          <div class="ml-auto m-t-10 m-b-10">
            <button class="btn btn-danger-gradiant btn-arrow"  onclick="window.location.href='index.html#elerhetosegeink'">Ajánlatkérés</button>
          </div>
        </div>
      </div>
    </section>

<section class="footer footer1 font-14 text-left">
<div class="f1-middle">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <a href="index.html#">
                <img src="images/logo/hitelexpert.png" alt="Hitel Expert Kft.">
              </a>
              <p class="m-t-20">A Hitel Expert Kft. egy újonnan alakult Társaság ugyan, de kollégáink sokéves, évtizedes gyakorlata, szaktudása révén a lehető legjobb kezekben vagy!</p>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="d-flex no-block m-b-10 m-t-20">
                <div class="display-7 m-r-20 align-self-top">
                  <i class="icon-Location-2"></i>
                </div>
                <div class="info">
                  <span class="font-medium text-dark db m-t-5">Irodánk</span>
                  <br>
                  <p>1035 Budapest
                    <br> Vihar utca 18.</p>
                </div>
              </div>
              <div class="d-flex no-block m-b-10">
                <div class="display-7 m-r-20 align-self-top">
                  <i class="icon-Phone-2"></i>
                </div>
                <div class="info">
                  <span class="font-medium text-dark db  m-t-5">+36 (1) 803 8416</span>
                </div>
              </div>
              <div class="d-flex no-block m-b-30">
                <div class="display-7 m-r-20 align-self-top">
                  <i class="icon-Mail"></i>
                </div>
                <div class="info">
                  <a href="index.html#" class="font-medium text-dark db  m-t-5">info@hitelinformaciok.hu</a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 m-t-5">
              <h6 class="font-medium m-t-20">Szolgáltatásaink</h6>
              <ul class="general-listing two-part with-arrow m-t-10">
                <li>
                  <a href="index.html#">
                    <i class="fa fa-angle-right"></i> Lakossági hitelek</a>
                </li>
                <li>
                  <a href="index.html#">
                    <i class="fa fa-angle-right"></i> Céges hitelek</a>
                </li>  
                <li>
                  <a href="index.html#">
                    <i class="fa fa-angle-right"></i> Pályázati tanácsadás, pályázatírás</a>
                </li>                              
                <li>
                  <a href="index.html#">
                    <i class="fa fa-angle-right"></i> Biztosítási tanácsadás</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  <div class="f1-bottom-bar">
    <div class="container">
      <div class="d-flex">
        <div class="m-t-10 m-b-10">© 2019. Hitelinformációk.hu - Minden jog fenntartva! <a href="impresszum.html">Impresszum</a> <a href="adatkezeles.html">Adatkezelés</a></div>
        <div class="links ml-auto m-t-10 m-b-10">
          <a href="index.html#" class="link p-10">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="index.html#" class="link p-10">
            <i class="fa fa-instagram"></i>
          </a>
          <!-- a href="index.html#" class="link p-10">
            <i class="fa fa-youtube"></i>
          </a -->
        </div>
      </div>
    </div>
  </div>
</section>
</div>

<script type="text/javascript" src="js/iframeResizer.min.js"></script> 
<script type="text/javascript">

  iFrameResize({
    log                     : true,                  // Enable console logging
    enablePublicMethods     : true,                  // Enable methods within iframe hosted page
    resizedCallback         : function(messageData){ // Callback fn when resize is received
      $('p#callback').html(
        '<b>Frame ID:</b> '    + messageData.iframe.id +
        ' <b>Height:</b> '     + messageData.height +
        ' <b>Width:</b> '      + messageData.width + 
        ' <b>Event type:</b> ' + messageData.type
      );
    },
    messageCallback         : function(messageData){ // Callback fn when message is received
      $('p#callback').html(
        '<b>Frame ID:</b> '    + messageData.iframe.id +
        ' <b>Message:</b> '    + messageData.message
      );
      alert(messageData.message);
    },
    closedCallback         : function(id){ // Callback fn when iFrame is closed
      $('p#callback').html(
        '<b>IFrame (</b>'    + id +
        '<b>) removed from page.</b>'
      );
    }
  });

</script>    
<script src="js/script.js"></script>

</body>

</html>