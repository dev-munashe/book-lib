import React, { useEffect, useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import SearchResult from './search/SearchResult';
import axios from 'axios';

const FairyTales = () => {

    const [fairyBooks, setFairyBooks] = useState([]);
    const apiKey = 'AIzaSyDSVIO8ay-79Ig1omh_d1Ec_KY4KYjYwWU';

    useEffect(() => {
        fetchBooks();
    })

    const fetchBooks = async() => {
        try{
            const response = await axios.
            get(`https://www.googleapis.com/books/v1/volumes?q=fairy+tales&printType=magazines&key=${apiKey}&maxResults=40`);
            setFairyBooks(response.data.items);
            console.log(response.data.items)
        }
        catch (error) {
            console.log(`The error says : ${error}`);
        }
    };

  return (
    <div>
        <h1 style={{fontWeight:'700'}} className='text-center mt-3 mb-3'>Fai<span style={{color:'red'}}>ry Tales Bo</span>oks</h1>
        <p style={{fontWeight:'700'}} className='mb-3 mt-3'>A fairytale is a Genre of magical story, usually 
        originating in folklore. Typically in European fairy tales, a poor, brave, and resourceful hero or 
        heroine goes through testing adventures to eventual good fortune. (fairy tale).</p>
        <Row>
        {fairyBooks.map((book, index) => (
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
    </Row>
    </div>
  )
}

export default FairyTales