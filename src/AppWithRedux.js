import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import store from './store';
import firebaseConfig from './firebaseConfig';

import LoginFormRedux from './components/LoginFormRedux';
import { Header, Card } from './components/common';


class AppWithRedux extends Component {

    componentWillMount() {
        firebase.initializeApp(firebaseConfig);
    }

    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <Header headerText='Redux' />
                    <Card>
                        <LoginFormRedux />
                    </Card>
                </View>
            </Provider>
        );
    }
}

export default AppWithRedux;
