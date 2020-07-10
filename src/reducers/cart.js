const initialState = {
    items: [],
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            }
        case 'REMOVE_BOOK':
            return {
                ...state,
                isLoading: action.payload
            }
            break;
        default:
            return state
    }
}
