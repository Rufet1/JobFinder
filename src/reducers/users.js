const initialState = []

const usersReducer = (state=initialState,action) => {
    switch(action.type){
        case 'GET_USERS':
            return [...state, action.user]
        default:
            return state
    }
}

export default usersReducer