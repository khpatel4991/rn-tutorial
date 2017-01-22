import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { 
    HAVEN_FORM_UPDATE, 
    HAVEN_CREATE_SUCCESS,
    HAVENS_FETCH_SUCCESS,
    HAVEN_EDIT_SUCCESS
} from './types';

export const havenFormUpdate = ({ prop, value }) => ({
    type: HAVEN_FORM_UPDATE,
    payload: { prop, value }
});

const havenCreatedSuccess = (dispatch) => {
    dispatch({
        type: HAVEN_CREATE_SUCCESS
    });
    Actions.havenList({ type: 'reset' });
};

export const havenCreate = (newHavenData) => {
    const { currentUser } = firebase.auth();
    
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/havens`)
            .push(newHavenData)
            .then(() => havenCreatedSuccess(dispatch));
    };
};

export const havenDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();
    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/havens/${uid}`)
            .remove()
            .then(() => {
                Actions.havenList({ reset: true });
            });
    };
};

export const havenEdit = (newHavenData) => {
    const { currentUser } = firebase.auth();
    console.log(newHavenData);
    const {
        streetAddress,
        streetAddress2,
        zip,
        city,
        state,
        name,
        uid
    } = newHavenData;
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/havens/${uid}`)
            .set({
                streetAddress,
                streetAddress2,
                zip,
                city,
                state,
                name
            })
            .then(() => {
                dispatch({ type: HAVEN_EDIT_SUCCESS });
                Actions.havenList({ reset: true });
            });
    };
};

export const fetchHavens = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/havens`)
            .on('value', snapshot => {
                dispatch({
                    type: HAVENS_FETCH_SUCCESS,
                    payload: snapshot.val()
                });
            });
    };
};
