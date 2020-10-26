import React from 'react';

import bankLogos from '../../assets/images/partner_banks.jpg';

export const Partners = (props) => (
  <section id="styles">
    <div className="row" style={{ marginTop: '3rem' }}>
      <div className="col-six tab-full">
        <h3>Pénz szerepe</h3>
        <aside className="pull-quote">
          <blockquote>
            <p>
              A pénz biztonságot, és választást ad. Másféleképpen tudsz döntést hozni, ha sok pénzed van. De, ha nincs semmid, megvan az az
              előnyöd, a félelem nélküli hozzáállásod, hogy nem veszthetsz semmit.
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
        <h3>Partner bankintézeteink</h3>
        <div className="fluid-video-wrapper">
          <img src={bankLogos} alt="Bankpartnereink" />
        </div>
      </div>
    </div>
  </section>
);

export default Partners;
