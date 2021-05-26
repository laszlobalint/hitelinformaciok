import React from 'react';
import { NavLink } from 'react-router-dom';

const Faq = (props) => (
  <section id="faq">
    <div className="row section-intro">
      <div className="col-twelve with-bottom-line">
        <h5>GY.I.K.</h5>
        <h1>Kérdések és válaszok.</h1>
        <p className="lead">
          A Hitel Expertnél naprakész kollégák segítenek, ahogy adósságrendező hitelkalkulátorunk is mindig az aktuális kínálatot tárja
          eléd.
        </p>
      </div>
    </div>
    <div className="row faq-content">
      <div className="q-and-a block-1-2 block-tab-full group">
        <div className="bgrid">
          <h3>Milyen feltételeknek kell megfelelni a hiteligényléskor?</h3>
          <p>
            Lorem ipsum Id in magna ad culpa dolor eu aute non amet aute ea in consectetur in quis nostrud anim proident dolore in sed et
            mollit voluptate culpa irure consequat laborum ea sint in mollit adipisicing cupidatat.
          </p>
        </div>
        <div className="bgrid">
          <h3>Kihez fordulhatok, ha több ajánlat között kell választanom?</h3>
          <p>
            Lorem ipsum Id in magna ad culpa dolor eu aute non amet aute ea in consectetur in quis nostrud anim proident dolore in sed et
            mollit voluptate culpa irure consequat laborum ea sint in mollit adipisicing cupidatat.
          </p>
        </div>
        <div className="bgrid">
          <h3>Melyik hitelkonstrukciók részesülnek állami támogatásban?</h3>
          <p>
            Lorem ipsum Id in magna ad culpa dolor eu aute non amet aute ea in consectetur in quis nostrud anim proident dolore in sed et
            mollit voluptate culpa irure consequat laborum ea sint in mollit adipisicing cupidatat.
          </p>
        </div>
        <div className="bgrid">
          <h3>Hogyan érdemes választani a pénzintézetek ajánlatai között?</h3>
          <p>
            Lorem ipsum Id in magna ad culpa dolor eu aute non amet aute ea in consectetur in quis nostrud anim proident dolore in sed et
            mollit voluptate culpa irure consequat laborum ea sint in mollit adipisicing cupidatat.
          </p>
        </div>
        <div className="bgrid">
          <h3>Mi történik az általam szolgáltatott személyes adatokkal?</h3>
          <p>
            Lorem ipsum Id in magna ad culpa dolor eu aute non amet aute ea in consectetur in quis nostrud anim proident dolore in sed et
            mollit voluptate culpa irure consequat laborum ea sint in mollit adipisicing cupidatat.
          </p>
        </div>
        <div className="bgrid">
          <h3>Mennyibe kerül egy hitelképességi vizsgálat elkészítése?</h3>
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
          <h2 className="h01">Fordulj hozzánk bizalommal.</h2>
          <p className="lead">Kiszámítható és biztonságos befektetésben gondolkodsz? Segítünk a megvalósításban.</p>
          <div className="action">
            <NavLink to="/contact" className="button large round">
              Kapcsolatfelvétel
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Faq;
