import React from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import ownerShip from '../../images/ownership.png';
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
          <h5>Features</h5>
          <h1>Great features you'll love.</h1>
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
              <i className="icon-window"></i>
            </span>
            <div className="service-content">
              <h3 className="h05">Fully Resposive</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
          </div>
          <div className="bgrid feature">
            <span className="icon">
              <i className="icon-eye"></i>
            </span>
            <div className="service-content">
              <h3 className="h05">Retina Ready</h3>
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
              <h3 className="h05">Stylish Design</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
          </div>
          <div className="bgrid feature">
            <span className="icon">
              <i className="icon-file"></i>
            </span>
            <div className="service-content">
              <h3 className="h05">Clean Code</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
          </div>
          <div className="bgrid feature">
            <span className="icon">
              <i className="icon-layers"></i>
            </span>
            <div className="service-content">
              <h3 className="h05">Easy To Customize</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
          </div>
          <div className="bgrid feature">
            <span className="icon">
              <i className="icon-gift"></i>
            </span>
            <div className="service-content">
              <h3 className="h05">Free of Charge</h3>
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
    ;
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
              <div className="top-part">
                <h3 className="plan-title">Starter</h3>
                <p className="plan-price">
                  <sup>$</sup>4.99
                </p>
                <p className="price-month">Per month</p>
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
              <div className="top-part" data-info="recommended">
                <h3 className="plan-title">Standard</h3>
                <p className="plan-price">
                  <sup>$</sup>9.99
                </p>
                <p className="price-month">Per month</p>
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
              <div className="top-part">
                <h3 className="plan-title">Premium</h3>
                <p className="plan-price">
                  <sup>$</sup>19.99
                </p>
                <p className="price-month">Per month</p>
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
            <div className="price-block">
              <div className="top-part">
                <h3 className="plan-title">Ultimate</h3>
                <p className="plan-price">
                  <sup>$</sup>29.99
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
    ;
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
    ;
    <section id="faq">
      <div className="row section-intro">
        <div className="col-twelve with-bottom-line">
          <h5>Faq</h5>
          <h1>Questions and Answers.</h1>

          <p className="lead">
            Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem
            ipsum Consectetur ut in in eu do.
          </p>
        </div>
      </div>
      <div className="row faq-content">
        <div className="q-and-a block-1-2 block-tab-full group">
          <div className="bgrid">
            <h3>What are the security features?</h3>
            <p>
              Lorem ipsum Id in magna ad culpa dolor eu aute non amet aute ea in consectetur in quis nostrud anim proident dolore in sed et
              mollit voluptate culpa irure consequat laborum ea sint in mollit adipisicing cupidatat.
            </p>
          </div>
          <div className="bgrid">
            <h3>How can I update my user profile?</h3>
            <p>
              Lorem ipsum Id in magna ad culpa dolor eu aute non amet aute ea in consectetur in quis nostrud anim proident dolore in sed et
              mollit voluptate culpa irure consequat laborum ea sint in mollit adipisicing cupidatat.
            </p>
          </div>
          <div className="bgrid">
            <h3>What features are not included in the free version?</h3>
            <p>
              Lorem ipsum Id in magna ad culpa dolor eu aute non amet aute ea in consectetur in quis nostrud anim proident dolore in sed et
              mollit voluptate culpa irure consequat laborum ea sint in mollit adipisicing cupidatat.
            </p>
          </div>
          <div className="bgrid">
            <h3>Can I upgrade my account from Starter to Premium?</h3>
            <p>
              Lorem ipsum Id in magna ad culpa dolor eu aute non amet aute ea in consectetur in quis nostrud anim proident dolore in sed et
              mollit voluptate culpa irure consequat laborum ea sint in mollit adipisicing cupidatat.
            </p>
          </div>
          <div className="bgrid">
            <h3>Where can I found all my uploads?</h3>
            <p>
              Lorem ipsum Id in magna ad culpa dolor eu aute non amet aute ea in consectetur in quis nostrud anim proident dolore in sed et
              mollit voluptate culpa irure consequat laborum ea sint in mollit adipisicing cupidatat.
            </p>
          </div>
          <div className="bgrid">
            <h3>How long can I use the free trial version?</h3>
            <p>
              Lorem ipsum Id in magna ad culpa dolor eu aute non amet aute ea in consectetur in quis nostrud anim proident dolore in sed et
              mollit voluptate culpa irure consequat laborum ea sint in mollit adipisicing cupidatat.
            </p>
          </div>
        </div>
      </div>
      <div className="row section-ads">
        <div className="col-twelve">
          <div className="ad-content">
            <h2 className="h01">
              <a href="http://www.dreamhost.com/r.cgi?287326|STYLESHOUT">Styleshout Recommends Dreamhost.</a>
            </h2>
            <p className="lead">
              Looking for an awesome and reliable webhosting? Try
              <a href="http://www.dreamhost.com/r.cgi?287326|STYLESHOUT">
                <span>DreamHost</span>
              </a>
              . Get <span>$50 off</span> when you sign up with the promocode <span>styleshout</span>.
            </p>
            <div className="action">
              <a className="button large round" href="http://www.dreamhost.com/r.cgi?287326|STYLESHOUT">
                Sign Up Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    ;
    <section id="cta">
      <div className="row cta-content">
        <div className="col-twelve">
          <h1 className="h01">Get started now. Try Lhander free for 30 days.</h1>
          <p className="lead">Download the app now. Available on the:</p>
          <ul className="stores">
            <li className="app-store">
              <a href="http://hitelinformaciok.hu/" className="button round large" title="">
                <i className="icon ion-social-apple"></i>App Store
              </a>
            </li>
            <li className="play-store">
              <a href="http://hitelinformaciok.hu/" className="button round large" title="">
                <i className="icon ion-social-android"></i>Play Store
              </a>
            </li>
            <li className="windows-store">
              <a href="http://hitelinformaciok.hu/" className="button round large" title="">
                <i className="icon ion-social-windows"></i>Win Store
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    ;
    <section id="styles">
      <div className="row">
        <div className="col-twelve tab-full">
          <h1>Impresszum és jogok</h1>
          <p className="lead">
            A Hitel Expert Kft. tájékoztatja Önt, hogy weboldalának böngészése egyúttal az alábbi feltételek elfogadását is jelenti. Kérjük,
            az alábbiakat figyelmesen olvassa el.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-six tab-full">
          <p>
            <a href="http://hitelinformaciok.hu/">
              <img width="130" height="130" className="pull-left" src={ownerShip} alt="Impresszum és jogok" />
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
            A művek bármilyen jogosulatlan felhasználása szerzői jogsértést valósít meg, amely a Btk. 329/A § alapján akár öt (5) évig
            terjedő szabadságvesztéssel is büntethető.
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
      <div className="row">
        <div className="col-six tab-full">
          <h3>Pull Quotes</h3>
          <aside className="pull-quote">
            <blockquote>
              <p>
                It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has
                no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name
                of Lorem Ipsum decided to leave for the far World of Grammar.
              </p>
            </blockquote>
          </aside>
        </div>
        <div className="col-six tab-full">
          <h3>Block Quotes</h3>
          <blockquote cite="http://where-i-got-my-info-from.com">
            <p>
              Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is
              great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.
              As with all matters of the heart, you'll know when you find it.
            </p>
            <cite>
              <a href="http://hitelinformaciok.hu/">Steve Jobs</a>
            </cite>
          </blockquote>
          <blockquote>
            <p>Good design is as little design as possible.</p>
            <cite>Dieter Rams</cite>
          </blockquote>
        </div>
      </div>
      <div className="row half-bottom">
        <div className="col-nine tab-full">
          <h3>Example Lists</h3>
          <ol>
            <li>Here is an example</li>
            <li>of an ordered list.</li>
            <li>
              A parent list item.
              <ul>
                <li>one</li>
                <li>two</li>
                <li>three</li>
              </ul>
            </li>
            <li>A list item.</li>
          </ol>
          <ul className="disc">
            <li>Here is an example</li>
            <li>of an unordered list.</li>
          </ul>
          <h3>Definition Lists</h3>
          <h5>a) Multi-line Definitions (default)</h5>
          <dl>
            <dt>
              <strong>This is a term</strong>
            </dt>
            <dd>
              this is the definition of that term, which both live in a <code>dl</code>.
            </dd>
            <dt>
              <strong>Another Term</strong>
            </dt>
            <dd>And it gets a definition too, which is this line</dd>
            <dd>
              This is a 2<sup>nd</sup> definition for a single term. A <code>dt</code> may be followed by multiple <code>dd</code>s.
            </dd>
          </dl>
        </div>
        <div className="col-three tab-full">
          <h3>Headers</h3>
          <h1>H1 Heading</h1>
          <h2>H2 Heading</h2>
          <h3>H3 Heading</h3>
          <h4>H4 Heading</h4>
          <h5>H5 Heading</h5>
          <h6>H6 Heading</h6>
          <h3>Buttons</h3>
          <p>
            <a className="button button-primary full-width" href="http://hitelinformaciok.hu/">
              Primary Button
            </a>
            <a className="button full-width" href="http://hitelinformaciok.hu/">
              Default Button
            </a>
          </p>
        </div>
      </div>
      <div className="row half-bottom">
        <div className="col-six tab-full">
          <h3>Responsive video</h3>
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
      <div className="row">
        <div className="col-twelve">
          <h3>Tables</h3>
          <p>
            Be sure to use properly formed table markup with <code>&lt;thead&gt;</code> and <code>&lt;tbody&gt;</code> when building a
            <code>table</code>.
          </p>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Sex</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Naruto Uzumaki</td>
                  <td>16</td>
                  <td>Male</td>
                  <td>Konoha</td>
                </tr>
                <tr>
                  <td>Sakura Haruno</td>
                  <td>16</td>
                  <td>Female</td>
                  <td>Konoha</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </Aux>
);

export default Main;
