import React, {useState } from 'react';
import {useDispatch, useSelector} from "react-redux";

import { Link } from 'react-router-dom';
import { fetchBooks } from '../actions';
import './css/Menu.css';

export const Menu = () => {
    const [search, setSearch] = useState('');

    const state = useSelector(state => state)
    const dispatch = useDispatch();

    const searchBook = () => {
        dispatch(fetchBooks(search))
        console.log(state);
        
        
    }

    return (
        <nav className='app__nav'>
            <div className='app__nav__item app__nav__item--logo'>
                SchoolBook
            </div>

            <div className='app__nav__item app__nav__item--finder'>
                <input className='app__nav__item--finder__text' type='text' value={search} onChange={(e) => setSearch(e.target.value)} />
                <button className='app__nav__item--finder__btn' onClick={searchBook}>Search</button>
            </div>

            <Link className='app__nav__item app__nav__item--about' to='/about'>About</Link>
            <Link className='app__nav__item app__nav__item--epochs' to='/epochs'>Epochs</Link>
            <Link className='app__nav__item app__nav__item--genres' to='/genres'>Genres</Link>

            
        </nav>
    )
}
