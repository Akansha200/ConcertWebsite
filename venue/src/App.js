import React ,{Component} from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured/index';
import VenueInfo from './components/venueInfo';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Location from './components/location';
import Footer from './components/header_footer/footer';
import {Element} from 'react-scroll';

class App extends Component{
  render() {
    return(
      <div className="App" style={{height: "1500px", background:'blue'}}>
        <Header />
        <Element name="featured">
        <Featured />
        </Element>
        <Element name="venueInfo">
        <VenueInfo />
        </Element>
        <Element name="highlights">
        <Highlights  />
        </Element>
        <Element name="pricing">
        <Pricing />
        </Element>
        <Element name="location">
        <Location />
        </Element>
        <Footer />

      </div>
    );
  }
}

export default App;
