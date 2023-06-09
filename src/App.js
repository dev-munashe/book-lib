import './App.css';
import { useState, useEffect } from 'react'
import SignUpLogin from './components/SignUp'
import {Route, Routes} from  'react-router-dom';
import Home from './Routes/Home'
import Navigation from './Routes/Navigation';
import Footer from './Routes/footer/Footer'
import Comedy from './Routes/Comedy'
import Action from './Routes/Action'
import FairyTales from './Routes/FairyTales'
import SignIn from './components/SignIn';

function App() {

  return (
    <div >
      <Navigation />
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/comedy' element={<Comedy />} />
        <Route path='/fairy-tales' element={<FairyTales />} />
        <Route path='/Action' element={<Action />} />
        <Route path='/SignIn' element={<SignIn />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
