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
          <NavLink to="/" title="Főoldal" exact>
            Főoldal
          </NavLink>
        </div>
        <div className={classes.Dropdown}>
          <span className={classes.Offers}>Lakossági hitelek</span>
          <div className={classes.DropdownContent}>
            <Menu />
          </div>
        </div>
        <div className={classes.Dropdown}>
          <span className={classes.Offers}>Vállalati hitelek</span>
          <div className={classes.DropdownContent}>
            <Menu />
          </div>
        </div>
        <nav id="main-nav-wrap">
          <ul id="main-navigation" className="main-navigation">
            <li>
              <a href="http://hitelinformaciok.hu/" title="Ajánlatkérés">
                Ajánlatkérés
              </a>
            </li>
            <li>
              <NavLink to="/faq" title="Gyakran ismételt kérdések">
                GY.I.K.
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" title="Kapcsolat">
                Kapcsolat
              </NavLink>
            </li>
            <li className="highlight with-sep">
              <NavLink to="/calculator" title="Hitelkalkulátor">
                Hitelkalkulátor
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
            <h5>Üdvözöl a Hitelinformációk.hu.</h5>
            <h1>Időt és pénzt spórolhatsz meg hitelkalkulátorunkkal.</h1>
            <NavLink className="button stroke" to="/calculator" title="Hitelkalkulátor">
              Számolj beruházásodhoz
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  </Aux>
);

export default Header;
