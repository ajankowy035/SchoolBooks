import axios from 'axios';
import { Dispatch } from 'redux';

import { ActionTypes } from './types';

export interface Book {
    kind: string;
    title: string;
    author: string;
    simple_thumb: string;
    href: string;
}

export interface FetchBooks {
    type: ActionTypes.fetchBooks;
    payload: Book[];
}

const url = 'https://wolnelektury.pl/api';

export const fetchBooks = (phrase: string) => {
    
    return async (dispatch: Dispatch) => {
        const res = await axios.get<Book[]>(`${url}/authors/${phrase}/books`);
        // const found = res.data.filter(book => book.author.match(phrase) || book.title.match(phrase))
        const found = res.data;
        const book = found.map(book=> {
            return {
                kind: book.kind,
                title: book.title,
                author: book.author,
                simple_thumb: book.simple_thumb,
                href: book.href
            }
        });
        const results = [...book]
        // console.log(results);

        dispatch<FetchBooks> ({
            type: ActionTypes.fetchBooks,
            payload: results
        })
        // console.log(found);
        
    }

    
}