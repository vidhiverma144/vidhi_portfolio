import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedWork from './components/FeaturedWork';
import ContentShowcase from './components/ContentShowcase';
import Connect from './components/Connect';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <FeaturedWork />
        <ContentShowcase />
        <Connect />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
