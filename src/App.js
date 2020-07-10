import React from 'react';
import {connect} from 'react-redux';
import {setBooks} from "./actions/books";
import axios from 'axios';
import Menu from "./components/Menu";
import {Container, Card} from "semantic-ui-react";
import BookCart from "./components/BookCard";
import './app.css';

class App extends React.Component {
    componentWillMount() {
        const {setBooks} = this.props;
        axios.get('/books.json').then(({data}) => {
            setBooks(data);
        })
    }
    render() {
        const {books, isLoading} = this.props;
        return (
            <Container>
                <Menu/>
                <Card.Group itemsPerRow={4}>
                    {!isLoading ? 'Loading...' : books.map((book, index) => <BookCart key={index} {...book} />)}
                </Card.Group>
            </Container>
        );
    }
}

const mapStateToProps = ({books}) => ({
    books: books.items,
    isLoading: books.isLoading
});
const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
