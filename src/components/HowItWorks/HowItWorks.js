import React from 'react';

const HowItWorks = (props) => (
  <section id="process">
    <div className="row section-intro">
      <div className="col-twelve with-bottom-line">
        <h5>Lépések</h5>
        <h1>Hogyan működik?</h1>
        <p className="lead">
          A piacvezető pénintézetek ajánlatait egy helyen megtalálod. Az online hitelkalkulátorunk igénybevételével időt, pénzt és
          fáradtságot takaríthatsz meg magadnak.
        </p>
      </div>
    </div>
    <div className="row process-content">
      <div className="left-side">
        <div className="item" data-item="1">
          <h5>IGÉNYFELMÉRÉS</h5>
          <p>A hitelkalkulátoraink segítségével válaszd ki a neked legmegfelelőbb bankot és ajánlatot.</p>
        </div>
        <div className="item" data-item="2">
          <h5>AJÁNLATKÉRÉS</h5>
          <p>Ajánlatkéréshez add meg a szükséges adatokat és információkat, melyek után 12 órán belül felkeresünk.</p>
        </div>
        <div className="item" data-item="3">
          <h5>TÁJÉKOZTATÁS</h5>
          <p>Igény szerint, személyesen adunk tájékoztatást a folyamatról, feltételekről, előnyökről, esetleges hátrányokról.</p>
        </div>
      </div>
      <div className="right-side">
        <div className="item" data-item="4">
          <h5>HITEIGÉNYLÉS</h5>
          <p>Hiteligénylés folyamatának elindítása, dokumentumok összeállítás és folyamatos visszaigazolás a folyamatról.</p>
        </div>
        <div className="item" data-item="5">
          <h5>SZERZŐDÉS</h5>
          <p>Felkészítés a banki szerződéskötésre, a szerződés kiküldése, valamint igény szerinti átbeszélése.</p>
        </div>
        <div className="item" data-item="6">
          <h5>FOLYÓSÍTÁS</h5>
          <p>Segítség és támogatás a folyósítási feltételek teljesítésében, illetve rendszeres konzultációk.</p>
        </div>
      </div>
      <div className="image-part"></div>
    </div>
  </section>
);

export default HowItWorks;
