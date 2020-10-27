import React from 'react';

import classes from './Partner.module.css';
import { BANK_LOGOS } from './Partner.banks';

export const Partners = (props) => (
  <section id="styles" className={classes.Partners}>
    <div className="row">
      <div className="col-six tab-full">
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
        <blockquote>
          <p>Hány milliomost ismersz, akik egy takarékbetét-számlába való befektetésnek köszönhetően gazdagodtak meg? Zárom beszédem.</p>
          <cite>
            <a href="http://hitelinformaciok.hu/">Robert G. Allen</a>
          </cite>
        </blockquote>
      </div>
    </div>
    <div className="row tab-full">
      <div>
        <h2 className={classes.Title}>Partner bankintézeteink</h2>
        <div className={classes.Logos}>
          {BANK_LOGOS.map((logo) => (
            <img src={logo} alt="Bankpartnereink" key={Math.random() * 10} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Partners;
