import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SearchResult from '../search/SearchResult'

const Popular = () => {

  const [popularBooks, setPopularBooks] = useState([]);
  const apiKey = 'AIzaSyDSVIO8ay-79Ig1omh_d1Ec_KY4KYjYwWU';
  const [error, setError] = useState('');
  useEffect(() => {
    fetchPopularBooks();
  }, []);

  const fetchPopularBooks = async () => {
    try {
      const response = await axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=flower+harry+potter+philosophy&filter=free-ebooks&key=${apiKey}&maxResults=40`);
      console.log(response);
      setPopularBooks(response.data.items);
    }
    catch (error) {
      setError(`${error}`);
    }
  };

  return (
    <div>
        <h1 style={{fontWeight: '500'}} className='App mt-3 mb-3'>Popular books</h1>
        {
          error ? (
            <p className='text-center' style={{color: 'red'}}>Apologies you have reached the maximum amount of requests, please come back later.<br/> {error}</p>
          ) :
          popularBooks.map((book, index) => (
            <a target='_blank' href={book.volumeInfo.previewLink} >
               {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ?
            <SearchResult alt={book.title} key={index} src={book.volumeInfo.imageLinks.thumbnail} /> 
            : <SearchResult alt={book.title} key={index} src='' />}
            </a>
          ))
        }
    </div>
  )
}

export default Popular