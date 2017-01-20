import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import firebaseConfig from './firebaseConfig';

class App extends Component {

    state = {
        loggedIn: null
    };

    componentWillMount() {
        firebase.initializeApp(firebaseConfig);
        firebase.auth().onAuthStateChanged((user) => {
            //If signed out, user === null
            //If signed in, user is user obj
            console.log(user);
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()} >
                        Log Out
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                //DontKnow if logged in
                return <Spinner />;
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
