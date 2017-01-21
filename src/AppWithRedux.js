import React, { Component } from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import store from './store';
import firebaseConfig from './firebaseConfig';

//import LoginFormRedux from './components/LoginFormRedux';
//import { Header, Card } from './components/common';
import RouterComponent from './RouterComponent';


class AppWithRedux extends Component {

    componentWillMount() {
        firebase.initializeApp(firebaseConfig);
    }

    render() {
        return (
            <Provider store={store}>
                <RouterComponent />
            </Provider>
        );
    }
}

export default AppWithRedux;
