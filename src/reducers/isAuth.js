const initialState = 1

const isAuthReducer = (state = initialState, action ) => {
    switch(action.type){
        case 'LOGIN':
            return 0
        case 'LOGOUT':
            return 2
        default :
            return state
    }
}

export default isAuthReducer