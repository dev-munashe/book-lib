import './App.css';
import { useState, useEffect } from 'react'
import SignUpLogin from './components/SignUp'

function App() {

  const [books, setBooks] = useState('');
  const [IsSignedUp, setIsSignedUp] = useState(false);


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
    <div className="App">
      <SignUpLogin IsSignedUp={IsSignedUp} />
      <pre>{books.book}</pre>
    </div>
  );
}

export default App;
