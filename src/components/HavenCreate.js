import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardItem, Button } from './common';
import HavenForm from './HavenForm';
import { havenCreate } from '../actions';

class HavenCreate extends Component {
    
    onButtonPress() {
        const { 
            streetAddress,
            streetAddress2,
            city,
            zip,
            state,
            name
        } = this.props;
        this.props.havenCreate({
            streetAddress,
            streetAddress2,
            zip,
            city,
            state: state || 'ny',
            name
        });
    }

    render() {
        return (
            <Card>
                <HavenForm {...this.props} />
                <CardItem>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create Haven
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

export default connect(mapStateToProps, { havenCreate })(HavenCreate);
