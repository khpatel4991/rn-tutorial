import firebase from 'firebase';

import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED
} from './types';

export const selectLibrary = (libraryId) => ({
    type: 'select_library',
    payload: libraryId
});

export const emailChanged = (email) => ({
    type: EMAIL_CHANGED,
    payload: email
});

export const passwordChanged = (password) => ({
    type: PASSWORD_CHANGED,
    payload: password
});

//Async Actions

//Are Funtions
//Returns Functions which is inected with dipatch argument

const loginUserSuccess = (dispatch, user) => dispatch({ 
    type: LOGIN_USER_SUCCESS, 
    payload: user 
});

const loginUserFailed = (dispatch, error) => dispatch({ 
    type: LOGIN_USER_FAILED, 
    payload: error.message 
});

export const loginUser = ({ email, password }) => {
    return dispatch => {
        dispatch({ type: LOGIN_USER_START });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => loginUserSuccess(dispatch, user))
            .catch((_err) => {
                console.log(_err);
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((user) => loginUserSuccess(dispatch, user))
                    .catch((error) => loginUserFailed(dispatch, error));
            });
    };
};
