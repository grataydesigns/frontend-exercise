import React, { Component } from 'react';
import './App.css';
import content from './data/en_US.json';

import EpisodeList from './components/EpisodeList';
import Footer from './components/Footer';
import GalleryImage from './components/GalleryImage';
import Header from './components/Header';
import Hero from './components/Hero';
// import IconStar from './icons/IconStar';
import Modal from './components/Modal';
import Slider from './components/Slider';

class App extends Component {
  state = {
    value: 'en_US',
    content: content,
    episodes: content['episode-list'],
    show: false
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  setLanguage = (event) => {
    const lang = event.target.value;
    this.setState(
      { 
        value: event.target.value
      }
    );
    fetch(`/data/${lang}.json`)
      .then(res => res.json())
      .then(content => {
        this.setState({
          content: content
        });
      })
  };

  selectSeason = (event) => {
    const seasonId = event.target.textContent;
    let seasonList = this.state.content["episode-list "];
    seasonList = this.state.content["episode-list"]
      .filter(episode =>  episode.season === parseInt(seasonId) );
    console.log(seasonList);
    this.setState({
      episodes: seasonList
    });
  };

  componentDidMount() {
    this.setState({
      value: this.state.value,
      content: this.state.content
    });
  }

  render () {
    const [snippet1, snippet2, snippet3] = this.state.content.snippets;
    const locations = this.state.content.locations;
    // const episodes = this.state.content["episode-list"];

    return (
      <div className="App">
        <Header />
        <main>
          <Hero>
            <img src="/images/stranger-things-logo.png" alt="Stranger Things logo" />
            <button onClick={this.showModal} className="button">Preview Set Locations</button>
          </Hero>
          <section className="band">
            <div className="container grid-container">
              <article className="grid-col--9">
                <h1 className="level-1-heading" id="stranger-locations">Stranger Locations</h1>
                <Slider images={this.state.content.gallery} />
                <h2 className="level-1-heading" id="story">The Story</h2>
                <p>{snippet2}</p>
                <blockquote>
                  <p>{snippet1}</p>
                </blockquote>
                <h2 className="level-2-heading">{this.state.content.heading}</h2>
                <p>{this.state.content.description}</p>
                <p>{snippet3}</p>
                <ul className="gallery-grid">
                  {locations.map((location, i) =>
                    <li className="gallery-grid__item" key={i}>
                      <GalleryImage imageSrc={`/images/${location.toLowerCase().replace(/[, ]+/g, "-").trim()}.jpg`} text={location} />
                    </li>
                  )}
                </ul>
              </article>
              <aside className="grid-col--3">
                <h3 className="level-3-heading" id="episodes">Highest Rated Episodes</h3>
                <p>Filter by Seasons:</p>
                <button onClick={this.selectSeason}>1</button>
                <button onClick={this.selectSeason}>2</button>
                <button onClick={() => this.setState({episodes: content['episode-list']})}>Reset</button>
                <EpisodeList items={this.state.episodes} />
                {/* <ul className="list-group">
                  {episodes.map((episode, i) =>
                    <li key={i} className="list-group__item">
                      <p>{episode.name}</p>
                      <span>Season: {episode.season}</span><span>{<IconStar starfill="#FF3D00" iconclass="icon--size-xs" />}Rating: {episode.rating}</span>
                    </li>
                  )}
                </ul> */}
              </aside>
            </div>
          </section>
          <section className="band band--gradient-background">
            <div className="container">
              <blockquote className="author author--on-dark">
                <img src="/images/matt-duffer.jpg" alt={this.state.content.quote.author} className="author-image" />
                <div className="author-quote">
                  <p className="paragraph-lead">{this.state.content.quote.text}</p>
                  <cite>{this.state.content.quote.author}</cite>
                </div>
              </blockquote>
            </div>
          </section>
        </main>
        <Footer value={this.state.value} setLanguage={this.setLanguage}></Footer>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          {this.state.show && 
            <div className="iframe-container">
              <iframe src={this.state.content["video-embed"]} title={this.state.content.heading}></iframe>
            </div>
          }
        </Modal>
      </div>
    );
  }
}

export default App;
