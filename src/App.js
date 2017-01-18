import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAsfmEcfz8DA8lQis9K4BlcqPzhazs0lqE',
            authDomain: 'haven-auth-fc4b3.firebaseapp.com',
            databaseURL: 'https://haven-auth-fc4b3.firebaseio.com',
            storageBucket: 'haven-auth-fc4b3.appspot.com',
            messagingSenderId: '1081453127449'
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
