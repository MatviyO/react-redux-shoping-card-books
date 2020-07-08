import React from 'react';
import {connect} from 'react-redux';
import {setBooks} from "./actions/books";

class App extends React.Component {
  render() {
      const {books} = this.props.books;
      const {setBooks} = this.props;
      const newBooks = [{
          id: 0,
          title: 'fell book'
      }];

      return (
          <div className="container">
              <h2>{books[0].title}</h2>
              <button onClick={setBooks.bind(this, newBooks)}>click</button>
          </div>
      );
  }
}
const mapStateToProps = state => ({
    ...state
});
const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
