const initialState = []

const adReducer = (state=initialState,action) => {
    switch(action.type){
        case 'GET_ADS':
            return [...state , action.ads]
        default :
            return state
    }
}

export default adReducer