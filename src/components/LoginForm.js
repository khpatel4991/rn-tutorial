import React, { Component } from 'react';

import { Card, CardItem, Button, Input } from './common';

class LoginForm extends Component {

    state = {
        email: '',
        password: ''
    };

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

                <CardItem>
                    <Button>
                        Login/Signup
                    </Button>
                </CardItem>
            </Card>
        );
    }
}

export default LoginForm;
