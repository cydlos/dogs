import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return <div>
    <BrowserRouter>
      <Header />
      <Footer />
    </BrowserRouter>
    </div>;
}

export default App;
