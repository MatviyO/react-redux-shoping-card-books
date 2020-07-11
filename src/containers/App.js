import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as booksActions from "../actions/books";
import App from "../components/App";

const mapStateToProps = ({books}) => ({
    books: books.items,
    isLoading: books.isLoading
});
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(booksActions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
