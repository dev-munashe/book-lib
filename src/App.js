import './App.css';
import {Route, Routes} from  'react-router-dom';
import Home from './Routes/Home'
import Navigation from './Routes/Navigation';
import Footer from './Routes/footer/Footer'
import Comedy from './Routes/Comedy'
import Action from './Routes/Action'
import FairyTales from './Routes/FairyTales'
import Login from './components/Login';
import SignUp from './components/SignUp'

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
        <Route path='/Login' element={<Login />} />
        <Route path='/SignUp' element={<SignUp />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
