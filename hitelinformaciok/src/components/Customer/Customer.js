import React from 'react';

const Customer = (props) => (
  <section id="cta">
    <div className="row cta-content">
      <div className="col-twelve">
        <h1 className="h01">Ne csak tervezd, valósítsd is meg. </h1>
        <p className="lead">Segítünk benne. Miként érdeklődsz:</p>
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
);

export default Customer;
