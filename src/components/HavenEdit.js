import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';

import { Card, CardItem, Button } from './common';
import HavenForm from './HavenForm';
import { havenEdit, havenFormUpdate } from '../actions';

class HavenEdit extends Component {
    
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

    render() {
        return (
            <Card>
                <HavenForm {...this.props} />
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

export default connect(mapStateToProps, { havenFormUpdate, havenEdit })(HavenEdit);
