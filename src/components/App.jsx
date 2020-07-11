import React from 'react';
import axios from 'axios';
import Menu from "./Menu";
import {Container, Card} from "semantic-ui-react";
import BookCart from "./BookCard";
import '../app.css';
import Filter from "../containers/Filter";

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
                    {!isLoading ? 'Loading...' : books.map((book, index) => <BookCart key={index} {...book} />)}
                </Card.Group>
            </Container>
        );
    }
}

export default App;
