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

const url = 'https://wolnelektury.pl/api/books/';

export const fetchBooks = (phrase: string) => {
    return async (dispatch: Dispatch) => {
        const res = await axios.get<Book[]>(url);
        const found = res.data.filter(book => book.author.match(phrase) || book.title.match(phrase))

        dispatch<FetchBooks> ({
            type: ActionTypes.fetchBooks,
            payload: found
        })
        console.log(found);
        
    }

    
}