import { combineReducers } from 'redux';
import { booksReducer } from './booksReducer';
import { Book } from '../actions';

export interface StoreState {
    books: Book[];
}

export const reducers = combineReducers<StoreState>({
    books: booksReducer
})