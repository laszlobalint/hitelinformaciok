import React from 'react';

const Opinions = (props) => (
  <section id="testimonials">
    <div className="row">
      <div className="col-twelve">
        <h2 className="h01">Ahogyan ügyfeleink látják.</h2>
      </div>
    </div>
    <div className="row flex-container">
      <div id="testimonial-slider" className="flexslider">
        <ul className="slides">
          <li>
            <p>
              Segítettek eligazodni az információk sokaságában, elmondták az előnyöket és a hátrányokat is. A korábbi tapasztalataik alapján
              akár egyedi feltételeket, megoldásokat is tudtak kínálni. És bármilyen kérdés felmerült, teljeskörű és objektív választ
              kaptam.
            </p>
          </li>
          <li>
            <p>
              Mert fontos nekem a minőség és a profizmus. A kollégáik elérhetőek voltak, és a teljes hitelpiaci palettáról választtuk ki a
              legmegfelelőbb terméket. Itt nem csak magánszemélyként, hanem cégként is megtalálhatod a legjobb finanszírozási megoldásokat.
            </p>
          </li>
          <li>
            <p>
              Aminek külön örültem, hogy nem kellett bajlódnom a nyomtatványok kitöltésével, a banki kapcsolattartással, a kölcsönszerződés
              értelmezésével vagy a folyósítási feltételekkel. Így az ügyintézés folyamatában még jól is tudtam magadat érezni.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Opinions;
