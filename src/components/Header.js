import React from 'react';
import './Header.css';

const Header = (props) => {
  return(
    <header className="site-header">
      <div className="container">
        {/* TODO: Consider creating a nav component or passing in data to create the nav links */}
        <nav className="site-nav">
          <ul className="site-nav__list">
            <li className="site-nav__list-item">
              <a href="#stranger-locations" className="site-nav__link">Stranger Locations</a>
            </li>
            <li className="site-nav__list-item">
              <a href="#story" className="site-nav__link">The Story</a>
            </li>
            <li className="site-nav__list-item">
              <a href="#episodes" className="site-nav__link">Episodes</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
