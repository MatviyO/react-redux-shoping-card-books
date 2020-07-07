const initialState = {
    books: []
}
export default (state, action) => {
 switch (action.type) {
     case 'ADD_BOOK':
        return {
            books: [...state.books, action.payload]
        }
     default:
         return
 }
}
