import React, { Component } from 'react';
import './Hero.css';

// TODO: To help with reuse of this component consider using props for the hero background image
const background = '/images/stranger-things-3-1.jpg';

const heroStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover'
};


class Hero extends Component {
  render() {
    return (
      <section className="hero" style={heroStyle}>
        <div className="hero__container container">
          {this.props.children}
        </div>
      </section>
    )
  }
}

export default Hero;
