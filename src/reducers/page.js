const initialState = 1

const pageReducer = (state = initialState,action) => {
    switch (action.type){
        case 'CHANGE_PAGE':
            return action.number
        default:
            return state
    }
}

export default pageReducer