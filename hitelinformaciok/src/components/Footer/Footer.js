import React from 'react';

const Footer = (props) => (
  <footer>
    <div className="footer-main">
      <div className="row">
        <div className="col-four tab-full mob-full footer-info">
          <div className="footer-logo"></div>
          <a className="highlight with-sep" href="http://hitelinformaciok.hu/" title="Hitelkalkulációk">
            Hitelkalkulációk
          </a>
          <p>
            1035 Budapest
            <br />
            Vihar utca 18.
            <br />
            info@hitelinformaciok.hu &nbsp; +36 (1) 887 4846
          </p>
        </div>
        <div className="col-two tab-1-3 mob-1-2 site-links">
          <h4>Linkek</h4>
          <ul>
            <li>
              <a href="http://hitelinformaciok.hu/">Rólunk</a>
            </li>
            <li>
              <a href="http://hitelinformaciok.hu/">Ajánlataink</a>
            </li>
            <li>
              <a href="http://hitelinformaciok.hu/">Ajánlatkérés</a>
            </li>
            <li>
              <a href="http://hitelinformaciok.hu/">GYIK</a>
            </li>
            <li>
              <a href="http://hitelinformaciok.hu/">Kapcsolat</a>
            </li>
          </ul>
        </div>
        <div className="col-two tab-1-3 mob-1-2 social-links">
          <h4>Közösségek</h4>
          <ul>
            <li>
              <a href="https://www.facebook.com/">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com/">Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com/">Instagram</a>
            </li>
            <li>
              <a href="https://www.skype.com/">Skype</a>
            </li>
            <li>
              <a href="https://www.skype.com/">Weboldal</a>
            </li>
          </ul>
        </div>
        <div className="col-four tab-1-3 mob-full footer-subscribe">
          <h4>Feliratkozás</h4>
          <p>Értesüljön a legújabb ajánlatainkról.</p>
          <div className="subscribe-form">
            <form id="mc-form" className="group" noValidate>
              <input
                type="email"
                value=""
                name="email"
                className="email"
                id="mc-email"
                placeholder="Írja be az e-mail címét..."
                onChange={() => {}}
                required
              />
              <input type="submit" name="subscribe" />
              <label htmlFor="mc-email" className="subscribe-message"></label>
            </form>
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
