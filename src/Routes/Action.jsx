import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SearchResult from './search/SearchResult';
import { Card, Row, Col } from 'react-bootstrap';


const Action = () => {

    const [actionBooks, setActionBooks] = useState([]);
    const [error, setError] = useState('');
    const apiKey = 'AIzaSyDSVIO8ay-79Ig1omh_d1Ec_KY4KYjYwWU';

    useEffect(() => {
        fetchBooks();
    }, [])

    const fetchBooks = async() => {
        try{
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=action&printType=magazines&key=${apiKey}&maxResults=40`);
            setActionBooks(response.data.items);
            console.log(response.data.items)
        }
        catch (error) {
            setError(`${error}`);
        }
    };

  return (
    <div>
        <h1 style={{fontWeight:'700'}} className='text-center mt-3 mb-3'>Acti<span style={{color:'red'}}>on Bo</span>oks</h1>
        <p style={{fontWeight:'700'}} className='mb-3 mt-3'>Action fiction is a form of genre fiction whose subject matter is characterized by 
            emphasis on exciting action sequences.This does not always mean they exclude character 
            development or story-telling.</p>
        { error ? (
              <p className='text-center' style={{color: 'red'}}>Apologies you have reached the maximum amount of requests, please come back later.<br/> {error}</p>
            ) : 
        <Row>
        {actionBooks.map((book, index) => (
            <Col key={index} lg={3} md={6} sm={12}>
                <Card>
                <a href={book.volumeInfo.previewLink} target='_blank'>
                {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ?
                <SearchResult alt={book.title} key={index} src={book.volumeInfo.imageLinks.thumbnail}  /> : 
                <SearchResult src='' alt={book.title} key={index} />    
            }
            </a>
            <Card.Body className='mt-3'>
            <Card.Title>{book.volumeInfo.title}</Card.Title>
            <Card.Text>{book.volumeInfo.author}</Card.Text>
            </Card.Body>
                </Card>
            </Col>
        ))}
    </Row>}
    </div>
  )
}

export default Action