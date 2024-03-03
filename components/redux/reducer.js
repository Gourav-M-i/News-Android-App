const initialState = 'en';
const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'change':
            return state = action.data
        default:
            return state
    }
}
export default reducer