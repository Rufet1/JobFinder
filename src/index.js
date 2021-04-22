import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {firebase,fireStoreDB} from './firebase/firebaseConfig'
import {getUserInfo, removeUserInfo, login, logout} from './actions/auth'
import {getAds} from './actions/ad'
import {getUser} from './actions/users'

const store = configureStore()

firebase.auth().onAuthStateChanged((user) => {
  if(user){
    console.log(user)
    store.dispatch(getUserInfo(user.uid))
    store.dispatch(login())
  }else {
    store.dispatch(removeUserInfo())
    store.dispatch(logout())
    console.log('logout')
  }
})

fireStoreDB.collection('adsCollection').get()
.then(ads => ads.forEach(doc => {store.dispatch(getAds(doc.data()))})).catch(e => console.log(e)).finally(() => store.dispatch({type : 'SET_HOME_ADD_LOADING'}))

fireStoreDB.collection('usersCollection').get()
.then(users => users.forEach(user => store.dispatch(getUser(user.data())))).catch(e => console.log(e)).finally(() => store.dispatch({type : 'SET_USERS_HOME'}))

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

