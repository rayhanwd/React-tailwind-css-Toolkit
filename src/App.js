import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Services from './Services';
import Header from './Header';
import PriceSection from './PriceSection';
import Footer from './Footer';
import NewsLetter from './NewsLetter';
const App = () => {
  return (
    <Router>
      <Header />
      <Services />
      <PriceSection />
      <NewsLetter/>
      <Footer/>
    </Router>
  )
}
export default App;
