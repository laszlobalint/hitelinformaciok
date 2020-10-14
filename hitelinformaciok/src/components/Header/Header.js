import React from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';

const Header = (props) => (
  <Aux>
    <header>
      <div className="row">
        <div className="logo">
          <a href="index.html">Hitelinformaciok.hu</a>
        </div>
        <nav id="main-nav-wrap">
          <ul className="main-navigation">
            <li>
              <a href="http://hitelinformaciok.hu/" title="Rólunk">
                Rólunk
              </a>
            </li>
            <li>
              <a href="http://hitelinformaciok.hu/" title="Ajánlataink">
                Ajánlataink
              </a>
            </li>
            <li>
              <a href="http://hitelinformaciok.hu/" title="Ajánlatkérés">
                Ajánlatkérés
              </a>
            </li>
            <li>
              <a href="http://hitelinformaciok.hu/" title="Gyakran ismételt kérdések">
                GYIK
              </a>
            </li>
            <li>
              <a href="http://hitelinformaciok.hu/" title="Kapcsolat">
                Kapcsolat
              </a>
            </li>
            <li className="highlight with-sep">
              <a href="http://hitelinformaciok.hu/" title="Hitelkalkulációk">
                Hitelkalkulációk
              </a>
            </li>
          </ul>
        </nav>
        <a className="menu-toggle" href="http://hitelinformaciok.hu/" title="Menü">
          <span>Menü</span>
        </a>
      </div>
    </header>
    <section id="intro">
      <div className="shadow-overlay"></div>
      <div className="intro-content">
        <div className="row">
          <div className="col-twelve">
            <h5>Üdvözli a Hitelinformációk.hu.</h5>
            <h1>Időt és pénzt spórolhat meg hitelkalkulátorunkkal.</h1>
            <a className="button stroke smoothscroll" href="http://hitelinformaciok.hu/" title="calculators">
              Számoljon beruházásához
            </a>
          </div>
        </div>
      </div>
    </section>
  </Aux>
);

export default Header;
