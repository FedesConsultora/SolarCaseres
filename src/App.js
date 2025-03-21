// App.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      { location.pathname !== '/thank-you' && <Main /> }

      <Footer />
    </div>
  );
}

export default App;
