import React from 'react';

import './App.css';
import sampleImage from './images/sample-image.jpg';
import postThumb from './images/sample-image.jpg';

const App = (props) => {
  return (
    <div>
      {/* HEADER */}
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
                <a href="http://hitelinformaciok.hu/" title="Érveink">
                  Érveink
                </a>
              </li>
              <li>
                <a href="http://hitelinformaciok.hu/" title="Híreink">
                  Híreink
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

      {/* INTRO SECTION */}
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

        {/* MODAL POPUP */}
        <div id="video-popup" className="popup-modal mfp-hide">
          <div className="fluid-video-wrapper">
            <iframe
              title="modal"
              src={'https://www.youtube.com/embed/HaZF_dO7MZU'}
              width="500"
              height="280"
              frameBorder={0}
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
            ></iframe>
          </div>
          <a className="close-popup" href="http://hitelinformaciok.hu/">
            Close
          </a>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="styles">
        <div className="row">
          <div className="col-twelve tab-full">
            <h1>This is the style page.</h1>
            <p className="lead">
              Lorem ipsum Officia elit ad tempor dolore est ex incididunt incididunt occaecat culpa deserunt sunt labore in cillum ullamco
              magna in Excepteur consequat in reprehenderit proident mollit incididunt officia commodo. Duis ea officia sed dolor pariatur
              enim dolore dolore quis incididunt nulla exercitation commodo veniam et ea incididunt.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-six tab-full">
            <h3>Paragraph and Image</h3>
            <p>
              <a href="http://hitelinformaciok.hu/">
                <img width="120" height="120" className="pull-left" src={sampleImage} alt="" />
              </a>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec libero. Suspendisse bibendum. Cras id urna. Morbi tincidunt,
              orci ac convallis aliquam, lectus turpis varius lorem, eu posuere nunc justo tempus leo. Donec mattis, purus nec placerat
              bibendum, dui pede condimentum odio, ac blandit ante orci ut diam. Cras fringilla magna. Phasellus suscipit, leo a pharetra
              condimentum, lorem tellus eleifend magna, eget fringilla velit magna id neque. posuere nunc justo tempus leo.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec libero. Suspendisse bibendum. Cras id urna. Morbi tincidunt,
              orci ac convallis aliquam, lectus turpis varius lorem, eu posuere nunc justo tempus leo. Donec mattis, purus nec placerat
              bibendum, dui pede condimentum odio, ac blandit ante orci ut diam.
            </p>
            <p>
              A <a href="http://hitelinformaciok.hu/">link</a>, <abbr title="this really isn't a very good description">abbrebation</abbr>,
              <strong>strong text</strong>, <em>em text</em>, <del>deleted text</del>, and
              <mark>this is a mark text.</mark>
              <code>.code</code>
            </p>
          </div>
          <div className="col-six tab-full">
            <h3>Drop Caps</h3>
            <p className="drop-cap">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by
              their place and supplies it with the necessary regelialia. Morbi tincidunt, orci ac convallis aliquam, lectus turpis varius
              lorem, eu posuere nunc justo tempus leo. Donec mattis, purus nec placerat bibendum, dui pede condimentum odio, ac blandit ante
              orci ut diam. Cras fringilla magna. Phasellus suscipit, leo a pharetra condimentum, lorem tellus eleifend magna, eget
              fringilla velit magna id neque.
            </p>
            <h3>Small Print</h3>
            <p>
              Buy one widget, get one free!
              <small>(While supplies last. Offer expires on the vernal equinox. Not valid in Ohio.)</small>
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
                  no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the
                  name of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>
              </blockquote>
            </aside>
          </div>
          <div className="col-six tab-full">
            <h3>Block Quotes</h3>
            <blockquote cite="http://where-i-got-my-info-from.com">
              <p>
                Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is
                great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't
                settle. As with all matters of the heart, you'll know when you find it.
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
            <h3>Responsive Image</h3>
            <p>
              <img src={postThumb} alt="post-thumb" />
            </p>
          </div>
          <div className="col-six tab-full">
            <h3>Responsive video</h3>
            <div className="fluid-video-wrapper">
              <iframe
                title="video"
                src={'https://www.youtube.com/embed/HaZF_dO7MZU'}
                width="500"
                height="280"
                frameBorder={0}
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
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

      {/* FOOTER */}
      <footer>
        <div className="footer-main">
          <div className="row">
            <div className="col-four tab-full mob-full footer-info">
              <div className="footer-logo"></div>
              <p>
                1600 Amphitheatre Parkway
                <br />
                Mountain View, CA 94043 US
                <br />
                info@lhander.com &nbsp; +123-456-789
              </p>
            </div>
            <div className="col-two tab-1-3 mob-1-2 site-links">
              <h4>Linkek</h4>
              <ul>
                <li>
                  <a href="http://hitelinformaciok.hu/">Rólunk</a>
                </li>
                <li>
                  <a href="http://hitelinformaciok.hu/">Blog</a>
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
              <div id="go-top" style={{ display: 'block' }}>
                <a className="smoothscroll" title="Vissza az elejére" href="#top">
                  <i className="icon ion-android-arrow-up"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* PRELOADER */}
      <div id="preloader">
        <div id="loader"></div>
      </div>
    </div>
  );
};

export default App;
