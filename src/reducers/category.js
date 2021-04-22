const initialState = {}

const categoryReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_CATEGORY':
            return action.categories
        case 'RESET_CATEGORY':
            return {}
        default:
            return state
    }
}

export default categoryReducer