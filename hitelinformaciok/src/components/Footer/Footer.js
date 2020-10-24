import React from 'react';
import { NavLink } from 'react-router-dom';

import office from '../../assets/images/office_building.jpg';

const Footer = (props) => (
  <footer>
    <div className="footer-main">
      <div className="row">
        <div className="col-four tab-full mob-full footer-info">
          <div className="footer-logo"></div>
          <NavLink to="/calculator" title="Hitelkalkulációk" style={{ fontWeight: 'bold' }}>
            Hitelkalkuláció
          </NavLink>
          <p>
            1035 Budapest
            <br />
            Vihar utca 18.
            <br />
            info@hitelinformaciok.hu
            <br />
            +36 (1) 887 4846
          </p>
        </div>
        <div className="col-two tab-1-3 mob-1-2 site-links">
          <h4>Linkek</h4>
          <ul>
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
              <NavLink to="/faq" title="Gyakran ismételt kérdések">
                GY.I.K.
              </NavLink>
            </li>
            <li>
              <NavLink to="/data-privacy" title="Adatvédelem és adatkezelési tájékoztató">
                Adatvédelem
              </NavLink>
            </li>
            <li>
              <NavLink to="/impressum" title="Impresszum">
                Impresszum
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" title="Kapcsolat">
                Kapcsolat
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-two tab-1-3 mob-1-2 social-links">
          <h4>Közösségek</h4>
          <ul>
            <li>
              <a href="https://www.facebook.com/hitelinformaciok" target="_blank" rel="noopener noreferrer" title="Facebook">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" title="Twitter">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" title="Instagram">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.skype.com/" target="_blank" rel="noopener noreferrer" title="Skype">
                Skype
              </a>
            </li>
            <li>
              <a href="https://hitelinformaciok.hu/" target="_blank" rel="noopener noreferrer" title="Weboldal">
                Weboldal
              </a>
            </li>
            <li>
              {props.isAuthenticated ? (
                <NavLink to="/logout" title="Kijelentkezés">
                  Kijelentkezés
                </NavLink>
              ) : (
                <NavLink to="/auth" title="Bejelentkezés">
                  Admin
                </NavLink>
              )}
            </li>
          </ul>
        </div>
        <div className="col-four tab-1-3 mob-full footer-subscribe">
          <h4>Irodaházunk</h4>
          <p>Keressél fel minket akár személyesen is.</p>
          <div className="col-six tab-full">
            <p>
              <img
                src={office}
                alt="Irodaházunk"
                style={{
                  maxWidth: '500px',
                  width: '200px',
                  borderRadius: '2rem',
                  boxShadow: '0px 8px 16px 0px rgba(0, 0, 0, 0.2)',
                  margin: '0',
                  padding: '0',
                }}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="row">
        <div className="col-twelve">
          <div className="copyright">
            <span>Hitel Expert Kft. tulajdona © Minden jog fenntartva - {new Date().getFullYear()}.</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
