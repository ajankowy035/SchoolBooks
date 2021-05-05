import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import { Book, fetchBooks } from '../actions';
import { StoreState } from '../reducers';

//components
import { Main } from './Main';
import { Menu } from './Menu';
import Found from './Found';

interface AppProps {
    books: Book[];
    fetchBooks: Function;
}

class _App extends React.Component <AppProps> {
    // componentDidMount(){
    //     this.props.fetchBooks()
    // }
    
    render(){
        return (
            <BrowserRouter>
                <Route path='/' component={Menu} />
                <Route path='/' exact component={Main}/>
                <Route path='/found' exact component={Found} />
            </BrowserRouter>
        )
    }
    
}

const mapStateToProps = ({books}: StoreState): {books: Book[]} => {
    return { books: books };
}

export const App = connect(
    mapStateToProps, 
    { fetchBooks }
)(_App);