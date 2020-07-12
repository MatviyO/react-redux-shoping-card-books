import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as booksActions from "../actions/books";
import App from "../components/App";
import orderBy from 'lodash/orderBy'


const sortBy = (books, filterBy) => {
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

const mapStateToProps = ({books}) => ({
    books: sortBy(books.items,books.filterBy ),
    isLoading: books.isLoading
});
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(booksActions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
