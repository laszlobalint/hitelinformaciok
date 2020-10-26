import React from 'react';

import avatarOne from '../../assets/images/avatars/avatar_1.jpg';
import avatarTwo from '../../assets/images/avatars/avatar_2.jpg';
import avatarThree from '../../assets/images/avatars/avatar_3.jpg';

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
            <div className="testimonial-author">
              <img src={avatarOne} alt="Ügyfél" />
              <div className="author-info">
                Dorong Dénes
                <span className="position">magánvállalkozó</span>
              </div>
            </div>
            <p>
              Segítettek eligazodni az információk sokaságában, elmondták az előnyöket és a hátrányokat is. A korábbi tapasztalataik alapján
              akár egyedi feltételeket, megoldásokat is tudtak kínálni. És bármilyen kérdés felmerült, teljeskörű és objektív választ
              kaptam.
            </p>
          </li>
          <li>
            <div className="testimonial-author">
              <img src={avatarTwo} alt="Ügyfél" />
              <div className="author-info">
                Teszt Tamás
                <span>üzletvezető</span>
              </div>
            </div>
            <p>
              Mert fontos nekem a minőség és a profizmus. A kollégáik elérhetőek voltak, és a teljes hitelpiaci palettáról választtuk ki a
              legmegfelelőbb terméket. Itt nem csak magánszemélyként, hanem cégként is megtalálhatod a legjobb finanszírozási megoldásokat.
            </p>
          </li>
          <li>
            <div className="testimonial-author">
              <img src={avatarThree} alt="Ügyfél" />
              <div className="author-info">
                Avatár Aranka
                <span>kétgyermekes családanya</span>
              </div>
            </div>
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
