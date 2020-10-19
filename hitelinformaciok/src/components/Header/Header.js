import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Menu from '../Menu/Menu';

const Header = (props) => (
  <Aux>
    <header>
      <div className="row">
        <div className="logo">
          <a href="http://hitelinformaciok.hu/">Hitelinformaciok.hu</a>
        </div>
        <div className={classes.Dropdown}>
          <span className={classes.Offers}>Ajánlataink</span>
          <span className="icon">
            <i className="icon-download"></i>
          </span>
          <div className={classes.DropdownContent}>
            <Menu />
          </div>
        </div>
        <nav id="main-nav-wrap">
          <ul id="main-navigation" className="main-navigation">
            <li>
              <NavLink to="/" title="Rólunk" exact>
                Rólunk
              </NavLink>
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
              <NavLink to="/impressum" title="Impresszum">
                Impresszum
              </NavLink>
            </li>
            <li>
              <a href="http://hitelinformaciok.hu/" title="Kapcsolat">
                Kapcsolat
              </a>
            </li>
            <li className="highlight with-sep">
              <NavLink to="/calculator" title="Hitelkalkulációk">
                Hitelkalkulációk
              </NavLink>
            </li>
          </ul>
        </nav>
        <a id="menu-toggle" className="menu-toggle" href="http://hitelinformaciok.hu/" title="Menü megnyitása">
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
            <NavLink className="button stroke" to="/calculator" title="Hitelkalkulátor">
              Számoljon beruházásához
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  </Aux>
);

export default Header;
