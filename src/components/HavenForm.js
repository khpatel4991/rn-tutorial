import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { CardItem, Input } from './common';
import { havenFormUpdate } from '../actions';

class HavenForm extends Component {

    render() {
        const { streetAddress, streetAddress2, city, zip, state, name } = this.props;
        return (
            <View>
                <CardItem>
                    <Input
                        value={streetAddress}
                        label='Street Address'
                        placeholder='105 Grove St.'
                        onChangeText={(value) => this.props.havenFormUpdate({ 
                            prop: 'streetAddress',
                            value
                        })}
                    />
                </CardItem>
                <CardItem>
                    <Input
                        value={streetAddress2}
                        label='Street Address (Optional)'
                        placeholder='Apt 301'
                        onChangeText={(value) => this.props.havenFormUpdate({ 
                            prop: 'streetAddress2', 
                            value 
                        })}
                    />
                </CardItem>
                <CardItem>
                    <Input
                        value={city}
                        label='City'
                        placeholder='New York'
                        onChangeText={(value) => this.props.havenFormUpdate({ 
                            prop: 'city', 
                            value 
                        })}
                    />
                </CardItem>

                <CardItem>
                    <Input
                        value={zip}
                        label='Zip Code'
                        placeholder='12345'
                        onChangeText={(value) => this.props.havenFormUpdate({
                            prop: 'zip',
                            value
                        })} 
                    />
                </CardItem>

                <CardItem>
                    <Text style={styles.pickerLabelStyle}>State</Text>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={state}
                        onValueChange={(value) => this.props.havenFormUpdate({
                            prop: 'state',
                            value
                        })}
                    >
                        <Picker.Item label="New York" value="ny" />
                        <Picker.Item label="Maryland" value="md" />
                        <Picker.Item label="New Jersey" value="nj" />
                        <Picker.Item label="Virginia" value="va" />
                    </Picker>
                </CardItem>

                <CardItem>
                    <Input
                        value={name}
                        label='Haven Name'
                        placeholder='My Home'
                        onChangeText={(value) => this.props.havenFormUpdate({ 
                            prop: 'name', 
                            value
                        })} 
                    />
                </CardItem>

            </View>
        );
    }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = ({ havenForm }) => ({
    streetAddress: havenForm.streetAddress,
    streetAddress2: havenForm.streetAddress2,
    city: havenForm.city,
    zip: havenForm.zip,
    state: havenForm.state,
    name: havenForm.name
});

export default connect(mapStateToProps, { 
    havenFormUpdate 
})(HavenForm);
