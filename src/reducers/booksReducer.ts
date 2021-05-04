import { Book, Action, ActionTypes } from '../actions';

export const booksReducer = (
    state: Book[]=[], 
    action: Action
) => {
    switch(action.type){
        case ActionTypes.fetchBooks:
            return action.payload;
        default:
            return state;
    }
}