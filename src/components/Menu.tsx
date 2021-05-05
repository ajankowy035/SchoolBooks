import React, {useState } from 'react';
import {useDispatch } from "react-redux";

import { Link } from 'react-router-dom';
import { fetchBooks } from '../actions';
import './css/Menu.css';

export const Menu = () => {
    const [search, setSearch] = useState('');

    const dispatch = useDispatch();

    const searchBook = () => {
        const searchArr = search.toLowerCase().split(' ');
        const searchPhrase: string = searchArr.join('-');
        
        dispatch(fetchBooks(searchPhrase))
        
        
    }

    return (
        <nav className='app__nav'>
            <div className='app__nav__item app__nav__item--logo'>
                SchoolBook
            </div>

            <div className='app__nav__item app__nav__item--finder'>
                <input className='app__nav__item--finder__text' type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Author full name' />
                <Link to='/found'><button className='app__nav__item--finder__btn' onClick={searchBook}>Search</button></Link>
            </div>

            <Link className='app__nav__item app__nav__item--about' to='/about'>About</Link>
            <Link className='app__nav__item app__nav__item--epochs' to='/epochs'>Epochs</Link>
            <Link className='app__nav__item app__nav__item--genres' to='/genres'>Genres</Link>

            
        </nav>
    )
}
