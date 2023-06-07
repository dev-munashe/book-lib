import './App.css';
import { useState, useEffect } from 'react'
import SignUpLogin from './components/SignUp'
import {Route, Routes} from  'react-router-dom';
import Home from './Routes/Home'
import Navigation from './Routes/Navigation';
import Footer from './Routes/footer/Footer'

function App() {

  const [books, setBooks] = useState('');
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('https://localhost:7225/api/BooksLibraries/1');
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error(error);
      console.log(`Failed because of error: ${error}`);
    }
  };

  return (
    <div className="container">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
