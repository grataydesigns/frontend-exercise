import React from 'react';
import './LanguageSelector.css'

// TODO: To help with reuse the language values can also become props
const LanguageSelector = (props) => (
  <React.Fragment>
    <label className="form__label" htmlFor="select">Select a language</label>
    <select className="form__select" value={props.value} onChange={props.setLanguage} id="select">
      <option value="en_US">English</option>
      <option value="la_PG">Pig Latin</option>
    </select>
  </React.Fragment>
);

export default LanguageSelector;
