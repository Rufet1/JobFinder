import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import authReducer from '../reducers/auth'
import isAuthReducer from '../reducers/isAuth'
import adsReducer from '../reducers/ad'
import usersReducer from '../reducers/users'
import pageReducer from '../reducers/page'
import categoryReducer from '../reducers/category'
import homeAdsReducer from '../reducers/loading/homeAds'
import homeUsersReducer from '../reducers/loading/homeUsers'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () => {
    const store = createStore(
        combineReducers({
            authReducer,
            isAuthReducer,
            adsReducer,
            pageReducer,
            categoryReducer,
            usersReducer,
            homeAdsReducer,
            homeUsersReducer
        }),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        composeEnhancers(applyMiddleware(thunk))
    )
    return store
}

export default configureStore