import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { StoreState } from '../reducers';
import { Book } from '../actions';
import './css/Found.css';

interface AppProps {
    books: Book[];
}

const Found = (props: AppProps) => {
    const results = props.books.map(book=>{
        return(
            <div key={book.title} className='app__found__results__book'>
                <img className='app__found__results__book__img' src={book.simple_thumb} alt='book cover' />

                <div className='app__found__results__book__details' >
                    <h3 className='app_found__results__book__details__item--title'>{book.title}</h3>
                    <h4 className='app_found__results__book__details__item--author'>{book.author}</h4>
                    <p className='app_found__results__book__details__item--kind'>{book.kind}</p>
                    <Link className='app_found__results__book__details__item--btn' to='/book'><button>check book</button></Link>
                    <button className='app_found__results__book__details__item--add'>Add</button>
                </div>
                
            </div>
        )
    })

    return (
        <div className='app__found'>
            Results
            <div className='app__found__results'>
                {results}
            </div>
        </div>
    )
}

const mapStateToProps = ({books}: StoreState): { books: Book[] } => {
    return { books: books}
}

export default connect(mapStateToProps)(Found);