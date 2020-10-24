import React from 'react';

import ownerShip from '../../assets/images/ownership.png';

const Impressum = (props) => (
  <section id="styles" style={{ margin: '3rem 0 3rem 0' }}>
    <div className="row">
      <div className="col-twelve tab-full">
        <h1>Impresszum és jogok</h1>
        <p className="lead">
          A Hitel Expert Kft. tájékoztatj Téged, hogy weboldalának böngészése egyúttal az alábbi feltételek elfogadását is jelenti. Kérjük,
          az alábbiakat figyelmesen olvasd el.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-six tab-full">
        <p>
          <a href="http://hitelinformaciok.hu/">
            <img
              style={{ width: '130px', height: '130px', borderRadius: '999px' }}
              className="pull-left"
              src={ownerShip}
              alt="Impresszum és jogok"
            />
          </a>
          A hitelinformaciok.hu weboldal teljes tartalma vagy bármely részlete szerzői jogvédelem alá esik. Az ehhez fűződő jogok
          gyakorlására kizárólag a hitelinformaciok.hu tulajdonosa jogosult.
        </p>
        <p>
          A hitelinformaciok.hu honlap tulajdonosának előzetes írásbeli engedélye nélkül tilos a weboldal tartalmának egészét vagy részeit
          bármilyen egyéb módon felhasználni, reprodukálni, átruházni, terjeszteni, átdolgozni, vagy számítástechnikai adatrendszerben
          tárolni.
        </p>
      </div>
      <div className="col-six tab-full">
        <p>
          A művek bármilyen jogosulatlan felhasználása szerzői jogsértést valósít meg, amely a Btk. 329/A § alapján akár öt (5) évig terjedő
          szabadságvesztéssel is büntethető.
        </p>
        <p>
          A Btk. 329/A. § törvényi tényállása szerint, aki másnak a szerzői jogról szóló törvény alapján fennálló szerzői vagy ahhoz
          kapcsolódó jogát haszonszerzés céljából, vagy vagyoni hátrányt okozva megsérti, vétséget követ el.
        </p>
        <p>
          <i>
            <strong>Hitel Expert Kft.</strong>
          </i>
        </p>
        <p>
          <i>1035 Budapest, Vihar utca 18.</i>
        </p>
      </div>
    </div>
  </section>
);

export default Impressum;
