import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardItem, Input, Button, Spinner } from './common';

class LoginFormRedux extends Component {

    onEmailChanged(email) {
        this.props.emailChanged(email);
    }

    onPasswordChanged(password) {
        this.props.passwordChanged(password);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

	renderButton() {
		const { loading } = this.props;
		if (loading) {
            return <Spinner />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login/Signup
            </Button>
        );
	}

    render() {
        console.log(this.props);
        const { email, password, error } = this.props;
        return (
            <View>
                <Card>
                    <CardItem>
                        <Input
                            label='Email'
                            placeholder='email@example.com'
                            value={email}
                            onChangeText={this.onEmailChanged.bind(this)}
                        />
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Input
                            secureTextEntry
                            label='Password'
                            placeholder='password'
                            value={password}
                            onChangeText={this.onPasswordChanged.bind(this)}
                        />
                    </CardItem>
                </Card>

                <Text style={styles.errorTextStyles}>
                    {error}
                </Text>

                <Card>
                    <CardItem>
						{this.renderButton()}
                    </CardItem>
                </Card>
            </View>
        );
    }
}

const styles = {
    errorTextStyles: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    }
};

const mapStateToProps = ({ auth }) => ({
    email: auth.email,
    password: auth.password,
    error: auth.error,
	loading: auth.loading
});

const mapDispachToProps = { emailChanged, passwordChanged, loginUser };

export default connect(mapStateToProps, mapDispachToProps)(LoginFormRedux);
