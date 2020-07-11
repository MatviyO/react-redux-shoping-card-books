const initialState = {
    isLoading: false,
    items: null,
    filterBy: 'all'
}
export default (state = initialState, action) => {
 switch (action.type) {
     case 'SET_BOOKS':
         return {
             ...state,
             items: action.payload,
             isLoading: true
         }
     case 'SET_FILTER':
         return {
             ...state,
             filterBy: action.payload
         }
     case 'SET_IS_READY':
         return {
             ...state,
             isLoading: action.payload
         }
         break;
     default:
         return state
 }
}
