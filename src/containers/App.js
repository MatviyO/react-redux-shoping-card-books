import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as booksActions from "../actions/books";
import App from "../components/App";
import orderBy from 'lodash/orderBy'


const sortBy = (books, filterBy, searchQuery) => {

    books = books.filter(
        i =>
            i.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
            i.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
    );
    switch (filterBy) {
        case 'all':
            return books;
        case 'price_hight':
            return orderBy(books, 'price', 'desc')
        case 'price_low':
            return orderBy(books, 'price', 'asc')
        case 'author':
            return orderBy(books, 'author', 'desc')
        case 'rating':
            return orderBy(books, 'rating', 'desc')
        default:
            return books;
    }
}

const mapStateToProps = ({books, filter}) => ({
    books: books.items && sortBy(books.items, filter.filterBy, filter.searchQuery ),
    isLoading: books.isLoading
});
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(booksActions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
