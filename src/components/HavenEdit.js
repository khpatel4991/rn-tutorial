import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';

import { Card, CardItem, Button, Confirm } from './common';
import HavenForm from './HavenForm';
import { havenEdit, havenFormUpdate, havenDelete } from '../actions';

class HavenEdit extends Component {

    state = {
        showModal: false
    }
    
    componentWillMount() {
        _.forEach(this.props.haven, (value, prop) => {
            this.props.havenFormUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { 
            streetAddress,
            streetAddress2,
            city,
            zip,
            state,
            name
        } = this.props;
        const { uid } = this.props.haven;
        console.log(streetAddress);
        this.props.havenEdit({
            streetAddress,
            streetAddress2,
            zip,
            city,
            state,
            name,
            uid
        });
    }

    onTextPress() {
        //Ideally get number from haven props
        Communications.text('3092695414', `Text from RN with haven selected ${this.props.haven.name}`);
    }

    onDeletePress() {
        this.setState({ 
            showModal: !this.state.showModal 
        });
    }

    onAccept() {
        const { uid } = this.props.haven;
        this.setState({ 
            showModal: !this.state.showModal 
        });
        this.props.havenDelete({ uid });
    }

    onDecline() {
        this.setState({
            showModal: false
        });
    }

    render() {
        return (
            <Card>
                <HavenForm />
                <CardItem>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Me
                    </Button>
                </CardItem>
                <CardItem>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Edit Haven
                    </Button>
                </CardItem>

                <CardItem>
                    <Button onPress={this.onDeletePress.bind(this)}>
                        Delete Haven
                    </Button>
                </CardItem>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this haven?
                </Confirm>

            </Card>
        );
    }
}

const mapStateToProps = ({ havenForm }) => ({
    streetAddress: havenForm.streetAddress,
    streetAddress2: havenForm.streetAddress2,
    city: havenForm.city,
    zip: havenForm.zip,
    state: havenForm.state,
    name: havenForm.name
});

export default connect(mapStateToProps, { 
    havenFormUpdate, 
    havenEdit,
    havenDelete
})(HavenEdit);
