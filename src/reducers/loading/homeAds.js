const initialState = true

const homeAdsReducer = (state = initialState,action) => {
    switch(action.type){
        case 'SET_HOME_ADD_LOADING':
            return !state
        default:
            return state
    }
}

export default homeAdsReducer