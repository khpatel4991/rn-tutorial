import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardItem, Button, Input, Spinner } from './common';

class LoginForm extends Component {

    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ 
            error: '',
            loading: true
        });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginFail() {
        this.setState({ 
            error: 'Auth Failed',
            loading: false
        });
    }

    onLoginSuccess() {
        //CLear fields, remove loader
        this.state({
            email: '',
            password: '',
            loading: false,
            error: '' 
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login/Signup
            </Button>
        )
        
    }

    render() {
        console.log(this.state);
        return (
            <Card>
                <CardItem>
                    <Input
                        label='Email'
                        placeholder='user@email.com'
                        value={this.state.email}
                        keyboardType='email-address'
                        returnKeyType='next'
                        secureTextEntry={false}
                        autoCorrect={false}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardItem>

                <CardItem>
                    <Input
                        label='Password'
                        placeholder='password'
                        value={this.state.password}
                        keyboardType='default'
                        returnKeyType='go'
                        secureTextEntry
                        autoCorrect={false}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardItem>

                <Text style={styles.errorTextStyles}>
                    {this.state.error}
                </Text>

                <CardItem>
                    {this.renderButton()}
                </CardItem>
            </Card>
        );
    }
}

const styles = {
    errorTextStyles: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    }
}

export default LoginForm;
