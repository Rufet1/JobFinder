const initialState = {}

const authReducer = (state = initialState,action) => {
    switch (action.type){
        case 'GET_USER_INFO':
            if(action.data){
                return action.data
            }
        case 'REMOVE_USER_INFO':
            return {}
        case 'UPDATE_USER':
            console.log(action.updates)
            return {...state,...action.updates}
        default:
            return state
    }
}

export default authReducer