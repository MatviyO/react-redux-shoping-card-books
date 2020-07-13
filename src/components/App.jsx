import React from 'react';
import axios from 'axios';
import {Container, Card} from "semantic-ui-react";

import '../app.css';
import Filter from "../containers/Filter";
import Menu from "../containers/Menu";
import BookCard from "../containers/BookCard";


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
                <Filter  />
                <Card.Group itemsPerRow={4}>
                    {!isLoading ? 'Loading...' : books.map((book, index) => <BookCard key={index} {...book} />)}
                </Card.Group>
            </Container>
        );
    }
}

export default App;
