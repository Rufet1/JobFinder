const { default: homeAdsReducer } = require("./homeAds")

const initialState = true

const homeUsersReducer = (state=initialState,action) => {
    switch(action.type){
        case 'SET_USERS_HOME':
            return !state
        default:
            return state
    }
}

export default homeUsersReducer