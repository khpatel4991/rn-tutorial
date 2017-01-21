import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { HAVEN_FORM_UPDATE, HAVEN_FORM_CREATE_SUCCESS } from './types';

export const havenFormUpdate = ({ prop, value }) => ({
    type: HAVEN_FORM_UPDATE,
    payload: { prop, value }
});

const havenCreatedSuccess = (dispatch) => {
    dispatch({
        type: HAVEN_FORM_CREATE_SUCCESS
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
