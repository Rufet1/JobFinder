import { fireStoreDB } from "../firebase/firebaseConfig"

export const setUserInfo = (uid) => ({
    type : 'LOGIN',
    uid
})
export const getUser = (data) => ({
    type : 'GET_USER_INFO',
    data
})
export const removeUserInfo = () => ({
    type : 'REMOVE_USER_INFO'
})
export const login = () => ({
    type : 'LOGIN'
})
export const logout = () => ({
    type : 'LOGOUT'
})
export const getUserInfo = (uid) =>{
    return (dispatch) => {
        return fireStoreDB.collection('usersCollection').doc(uid).get()
        .then((doc) => dispatch(getUser(doc.data())))
    }
}