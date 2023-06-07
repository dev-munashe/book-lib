import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Popular = () => {

  const [popularBooks, setPopularBooks] = useState([]);
  const apiKey = 'AIzaSyDSVIO8ay-79Ig1omh_d1Ec_KY4KYjYwWU';
  
  useEffect(() => {
    fetchPopularBooks();
  }, []);

  const fetchPopularBooks = async () => {
    try {
      const response = await axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=philosophy&filter=free-ebooks&key=${apiKey}&maxResults=40`);
      console.log(response);
      setPopularBooks(response.data.items);
      console.log(response.data.items);
    }
    catch (error) {
      console.log(`Error fetching popular books: ${error}`);
    }
  };

  return (
    <div>
        <h1 className='App mt-3 mb-3'>Popular books</h1>
        
        <button className='btn btn-outline-info'><Link to='/' >Go to Home</Link></button>
    </div>
  )
}

export default Popular