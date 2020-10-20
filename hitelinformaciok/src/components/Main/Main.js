import React from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import avatarOne from '../../images/avatars/avatar_1.jpg';
import avatarTwo from '../../images/avatars/avatar_2.jpg';
import avatarThree from '../../images/avatars/avatar_3.jpg';

const Main = (props) => (
  <Aux>
    <section id="process">
      <div className="row section-intro">
        <div className="col-twelve with-bottom-line">
          <h5>Lépések</h5>
          <h1>Hogyan működik?</h1>
          <p className="lead">
            A piacvezető pénintézetek ajánlatait egy helyen megtalálhatja. Az online hitelkalkulátorunk igénybevételével időt, pénzt és
            fáradtságot takaríthat meg magának.
          </p>
        </div>
      </div>
      <div className="row process-content">
        <div className="left-side">
          <div className="item" data-item="1">
            <h5>IGÉNYFELMÉRÉS</h5>
            <p>A hitelkalkulátoraink segítségével válassza ki az Önnek legmegfelelőbb bankot és ajánlatot.</p>
          </div>
          <div className="item" data-item="2">
            <h5>AJÁNLATKÉRÉS</h5>
            <p>Ajánlatkéréshez adja meg a szükséges adatokat és információkat, melyek után 12 órán belül felkeressük.</p>
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
            <p>Segítség és támogatás a Folyósítási feltételek teljesítésében, illetve rendszeres konzultációk.</p>
          </div>
        </div>
        <div className="image-part"></div>
      </div>
    </section>
    <section id="features">
      <div className="row section-intro">
        <div className="col-twelve with-bottom-line">
          <h5>Ajánlataink</h5>
          <h1>Megoldást kínálunk terveihez.</h1>
          <p className="lead">
            Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem
            ipsum Consectetur ut in in eu do.
          </p>
        </div>
      </div>
      <div className="row features-content">
        <div className="features-list block-1-3 block-s-1-2 block-tab-full group">
          <div className="bgrid feature">
            <span className="icon">
              <i className="icon-home"></i>
            </span>
            <div className="service-content">
              <h3 className="h05">Használt ingatlan vásárlása</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
          </div>
          <div className="bgrid feature">
            <span className="icon">
              <i className="icon-dollar"></i>
            </span>
            <div className="service-content">
              <h3 className="h05">Új ingatlan vásárlása</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
          </div>
          <div className="bgrid feature">
            <span className="icon">
              <i className="icon-building"></i>
            </span>
            <div className="service-content">
              <h3 className="h05">Ingatlan építése</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
          </div>
          <div className="bgrid feature">
            <span className="icon">
              <i className="icon-paint-brush"></i>
            </span>
            <div className="service-content">
              <h3 className="h05">Ingatlan felújítása</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
          </div>
          <div className="bgrid feature">
            <span className="icon">
              <i className="icon-user-add"></i>
            </span>
            <div className="service-content">
              <h3 className="h05">Ingatlan bővítése</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
          </div>
          <div className="bgrid feature">
            <span className="icon">
              <i className="icon-refresh"></i>
            </span>
            <div className="service-content">
              <h3 className="h05">Ingatlan korszerűsítése</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
          </div>
          <div className="bgrid feature">
            <span className="icon">
              <i className="icon-wallet"></i>
            </span>
            <div className="service-content">
              <h3 className="h05">Szabad felhasználás</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
          </div>
          <div className="bgrid feature">
            <span className="icon">
              <i className="icon-battery-low"></i>
            </span>
            <div className="service-content">
              <h3 className="h05">Hitelkiváltás</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
          </div>
          <div className="bgrid feature">
            <span className="icon">
              <i className="icon-fast-forward"></i>
            </span>
            <div className="service-content">
              <h3 className="h05">Egyéb célokra</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="pricing">
      <div className="row section-intro">
        <div className="col-twelve with-bottom-line">
          <h5>Our Pricing</h5>
          <h1>Pick the best plan for you.</h1>
          <p className="lead">
            Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem
            ipsum Consectetur ut in in eu do.
          </p>
        </div>
      </div>
      <div className="row pricing-content">
        <div className="pricing-tables block-1-4 group">
          <div className="bgrid">
            <div className="price-block">
              <div className="top-part" data-info="Magánszemélyeknek">
                <h3 className="plan-title">Lakossági (személyi célú) hitelek</h3>
                <p className="plan-price">
                  <sup>HUF</sup>4.99
                </p>
                <p className="price-month">Havonta</p>
                <p className="price-meta">Billed Annually.</p>
              </div>
              <div className="bottom-part">
                <ul className="features">
                  <li>
                    <strong>3GB</strong> Storage
                  </li>
                  <li>
                    <strong>10GB</strong> Bandwidth
                  </li>
                  <li>
                    <strong>5</strong> Databases
                  </li>
                  <li>
                    <strong>30</strong> Email Accounts
                  </li>
                </ul>
                <a className="button large" href="http://hitelinformaciok.hu/">
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <div className="bgrid">
            <div className="price-block primary">
              <div className="top-part" data-info="Vállatoknak">
                <h3 className="plan-title">Vállalati (céges) hitelek</h3>
                <p className="plan-price">
                  <sup>HUF</sup>9.99
                </p>
                <p className="price-month">Havonta</p>
                <p className="price-meta">Billed Annually.</p>
              </div>
              <div className="bottom-part">
                <ul className="features">
                  <li>
                    <strong>5GB</strong> Storage
                  </li>
                  <li>
                    <strong>15GB</strong> Bandwidth
                  </li>
                  <li>
                    <strong>7</strong> Databases
                  </li>
                  <li>
                    <strong>40</strong> Email Accounts
                  </li>
                </ul>
                <a className="button large" href="http://hitelinformaciok.hu/">
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <div className="bgrid">
            <div className="price-block">
              <div className="top-part" data-info="Mindenkinek">
                <h3 className="plan-title">Pályázatírás és tanácsadás</h3>
                <p className="plan-price">
                  <sup>HUF</sup>19.99
                </p>
                <p className="price-month">Havonta</p>
                <p className="price-meta">Billed Annually.</p>
              </div>
              <div className="bottom-part">
                <ul className="features">
                  <li>
                    <strong>10GB</strong> Storage
                  </li>
                  <li>
                    <strong>30GB</strong> Bandwidth
                  </li>
                  <li>
                    <strong>15</strong> Databases
                  </li>
                  <li>
                    <strong>60</strong> Email Accounts
                  </li>
                </ul>
                <a className="button large" href="http://hitelinformaciok.hu/">
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <div className="bgrid">
            <div className="price-block primary">
              <div className="top-part" data-info="Mindenkinek">
                <h3 className="plan-title">Biztosítási tanácsadás</h3>
                <p className="plan-price">
                  <sup>HUF</sup>29.99
                </p>
                <p className="price-month">Per month</p>
                <p className="price-meta">Billed Annually.</p>
              </div>
              <div className="bottom-part">
                <ul className="features">
                  <li>
                    <strong>20GB</strong> Storage
                  </li>
                  <li>
                    <strong>40GB</strong> Bandwidth
                  </li>
                  <li>
                    <strong>25</strong> Databases
                  </li>
                  <li>
                    <strong>100</strong> Email Accounts
                  </li>
                </ul>
                <a className="button large" href="http://hitelinformaciok.hu/">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
                <img src={avatarOne} alt="Author" />
                <div className="author-info">
                  Dorong Dénes
                  <span className="position">magánvállalkozó</span>
                </div>
              </div>
              <p>
                Segítettek eligazodni az információk sokaságában, elmondták az előnyöket és a hátrányokat is. A korábbi tapasztalataik
                alapján akár egyedi feltételeket, megoldásokat is tudtak kínálni. És bármilyen kérdé felmerült, teljeskörű és objektív
                választ kaptam.
              </p>
            </li>
            <li>
              <div className="testimonial-author">
                <img src={avatarTwo} alt="Author" />
                <div className="author-info">
                  Teszt Tamás
                  <span>üzletvezető</span>
                </div>
              </div>
              <p>
                Mert fontos nekem a minőség és a profizmus. A kollégáik elérhetőek voltak, és a teljes hitelpiaci palettáról választtuk ki a
                legmegfelelőbb terméket. Itt nem csak magánszemélyként, hanem cégként is megtalálhatod a legjobb finanszírozási
                megoldásokat.
              </p>
            </li>
            <li>
              <div className="testimonial-author">
                <img src={avatarThree} alt="Author" />
                <div className="author-info">
                  Avatár Aranka
                  <span>kétgyermekes családanya</span>
                </div>
              </div>
              <p>
                Aminek külön örültem, hogy nem kellett bajlódnom a nyomtatványok kitöltésével, a banki kapcsolattartással, a
                kölcsönszerződés értelmezésével vagy a folyósítási feltételekkel. Így az ügyintézés folyamatában még jól is tudtam magadat
                érezni.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section id="cta">
      <div className="row cta-content">
        <div className="col-twelve">
          <h1 className="h01">Ne csak tervezze, valósítsa is meg. </h1>
          <p className="lead">Segítünk benne. Miként érdeklődik:</p>
          <ul className="clients">
            <li className="play-store">
              <a href="http://hitelinformaciok.hu/" className="button round large" title="Lakossági ügyfél">
                <i className="icon ion-home"></i>Lakossági ügyfél
              </a>
            </li>
            <li className="windows-store">
              <a href="http://hitelinformaciok.hu/" className="button round large" title="Vállalati ügyfél">
                <i className="icon ion-calculator"></i>Vállalati ügyfél
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section id="styles">
      <div className="row" style={{ marginTop: '3rem' }}>
        <div className="col-six tab-full">
          <h3>Pénz szerepe</h3>
          <aside className="pull-quote">
            <blockquote>
              <p>
                A pénz biztonságot, és választást ad. Másféleképpen tudsz döntést hozni, ha sok pénzed van. De, ha nincs semmid, megvan az
                az előnyöd, a félelem nélküli hozzáállásod, hogy nem veszthetsz semmit.
              </p>
              <cite>
                <a href="http://hitelinformaciok.hu/">Simon Cowell</a>
              </cite>
            </blockquote>
          </aside>
        </div>
        <div className="col-six tab-full">
          <h3>Vállalkozószellem</h3>
          <blockquote>
            <p>Hány milliomost ismersz, akik egy takarékbetét-számlába való befektetésnek köszönhetően gazdagodtak meg? Zárom beszédem.</p>
            <cite>
              <a href="http://hitelinformaciok.hu/">Robert G. Allen</a>
            </cite>
          </blockquote>
        </div>
      </div>
      <div className="row half-bottom">
        <div className="col-six tab-full">
          <h3>Tájékozódjon a befektetési lehetőségeiről</h3>
          <div className="fluid-video-wrapper">
            <iframe
              title="loanVideo"
              width="500"
              height="280"
              src="https://www.youtube.com/embed/HaZF_dO7MZU"
              frameBorder={0}
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </Aux>
);

export default Main;
