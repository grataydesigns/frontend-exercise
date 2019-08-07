import React from 'react';
import LanguageSelector from './LanguageSelector';

import './Footer.css';

const Footer = (props) => (
  <footer className="site-footer">
    <div className="container grid-container">
      <div className="grid-col--9">
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
      <div className="grid-col--3">
        <LanguageSelector value={props.value} setLanguage={props.setLanguage} />
      </div>
    </div>
  </footer>
);

export default Footer;
