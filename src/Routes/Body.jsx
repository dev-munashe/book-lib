import React, { useState } from 'react';
import axios from 'axios';
import SearchResult from './search/SearchResult';

const Body = () => {
  const [searchItem, setSearchItem] = useState('');
  const [bookResult, setBookResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = 'AIzaSyDSVIO8ay-79Ig1omh_d1Ec_KY4KYjYwWU';

  const handleSubmit = (e) => {
    debugger; 
    e.preventDefault();
    setLoading(true);
    setError(null);

    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${searchItem}&key=${apiKey}&maxResults=40`)
      .then((response) => {
        debugger;
        setBookResult(response.data.items);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <div>
    <div className='row mt-5'>
      <div className='col-lg-6 mt-3'>
        <div>
          <h1 style={{ fontWeight: '600' }}>
            Find the book you're <br />
            looking for, easier to read <br />
            right away
          </h1>
        </div>

        <form className='d-flex' style={{ marginTop: '100px' }} role='search' onSubmit={handleSubmit}>
          <input
            className='form-control me-2'
            onChange={(e) => setSearchItem(e.target.value)}
            value={searchItem}
            style={{ borderRadius: '20px', borderColor: '#73BBC9' }}
            type='search'
            placeholder='Search'
            aria-label='Search'
          />
          <button className='btn btn-outline-info' type='submit'>
            Search
          </button>
        </form>
      </div>

      <div className='col-lg-6 parent'>
        <div className='bubble'></div>

        <img alt='home-img' className='home-img img-fluid' src='./images/home.png' />
      </div>
    </div>
    {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {error ? (
             <p className='text-center' style={{color: 'red'}}>Apologies you have reached the maximum amount of requests, please come back later.<br/> {error}</p>
            ) : (
              <>
                {bookResult.length > 0 ? (
                  bookResult.map((book, index) => (
                    <a target='_blank' href={book.volumeInfo.previewLink} >
                    { book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ?
                      <SearchResult className='ms-3 mt-5' key={index} src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} /> :
                      <SearchResult className='ms-3 mt-5' key={index} src='' alt={book.title} />}
                    </a>
                  ))
                ) : null}
              </>
            )}
          </>
        )}
    </div>
  );
};

export default Body;
