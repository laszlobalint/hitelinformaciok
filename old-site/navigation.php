<nav class="light-blue lighten-1" role="navigation">
    <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">Hitelembed</a>
        <?php
            function activeState($str) {
                if ($_SERVER['REQUEST_URI']) {
                    if (strpos($_SERVER['REQUEST_URI'], $str) !== false || ($_SERVER['REQUEST_URI'] == '/' && strpos($str, 'index.php') !== false)) {
                        echo 'active';
                    }
                }
            }
        ?>
        <ul class="right hide-on-med-and-down">
            <li class="<?php activeState('index.php') ?>"><a href="/index.php">OC</a></li>
            <li class="<?php activeState('otthonterkep.php') ?>"><a href="/otthonterkep.php">OT</a></li>
            <li class="<?php activeState('ingatlanbazar.php') ?>"><a href="/ingatlanbazar.php">IB</a></li>
            <li class="<?php activeState('tf.php') ?>"><a href="/tf.php">TF</a></li>
            <li class="<?php activeState('bgp.php') ?>"><a href="/bgp.php">BGP</a></li>
            <li class="<?php activeState('benks.php') ?>"><a href="/benks.php">B</a></li>
            <li class="<?php activeState('ltp.php') ?>"><a href="/ltp.php">LTP</a></li>
			<li class="<?php activeState('ingatlantajolo.php') ?>"><a href="/ingatlantajolo.php">IT</a></li>
			<li class="<?php activeState('ligapenzugyiportal.php') ?>"><a href="/ligapenzugyiportal.php">Liga</a></li>
			<li class="<?php activeState('ufs.php') ?>"><a href="/ufs.php">UFS</a></li>
            <li class="<?php activeState('koltozzbe.php') ?>"><a href="/koltozzbe.php">Költözz</a></li>
            <li class="<?php activeState('netrisk.php') ?>"><a href="/netrisk.php">Netrisk</a></li>
            <li class="<?php activeState('hitelmicrosites.php') ?>"><a href="/hitelmicrosites.php">Micro</a></li>
			<li class="<?php activeState('analytics.php') ?>"><a href="/analytics.php">Analytics</a></li>
            <li class="<?php activeState('hitelinformaciok.php') ?>"><a href="/hitelinformaciok.php">Hitelinfo</a></li>
        </ul>

        <ul id="nav-mobile" class="side-nav">
            <li class="<?php activeState('index.php') ?>"><a href="/index.php">OC</a></li>
            <li class="<?php activeState('otthonterkep.php') ?>"><a href="/otthonterkep.php">OT</a></li>
            <li class="<?php activeState('ingatlanbazar.php') ?>"><a href="/ingatlanbazar.php">IB</a></li>
            <li class="<?php activeState('tf.php') ?>"><a href="/tf.php">TF</a></li>
            <li class="<?php activeState('bgp.php') ?>"><a href="/bgp.php">BGP</a></li>
			<li class="<?php activeState('benks.php') ?>"><a href="/benks.php">B</a></li>
            <li class="<?php activeState('ltp.php') ?>"><a href="/ltp.php">LTP</a></li>
            <li class="<?php activeState('ingatlantajolo.php') ?>"><a href="/ingatlantajolo.php">IT</a></li>
			<li class="<?php activeState('ligapenzugyiportal.php') ?>"><a href="/ligapenzugyiportal.php">Liga</a></li>
			<li class="<?php activeState('ufs.php') ?>"><a href="/ufs.php">UFS</a></li>
            <li class="<?php activeState('koltozzbe.php') ?>"><a href="/koltozzbe.php">Költözz</a></li>
            <li class="<?php activeState('netrisk.php') ?>"><a href="/netrisk.php">Netrisk</a></li>
            <li class="<?php activeState('hitelmicrosites.php') ?>"><a href="/hitelmicrosites.php">Micro</a></li>
            <li class="<?php activeState('analytics.php') ?>"><a href="/analytics.php">Analytics</a></li>
            <li class="<?php activeState('hitelinformaciok.php') ?>"><a href="/hitelinformaciok.php">Hitelinfo</a></li>
        </ul>
        <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
    </div>
</nav>
