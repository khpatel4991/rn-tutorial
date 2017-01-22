import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { CardItem } from './common';

class Haven extends Component {

    onRowPress() {
        console.log({ haven: this.props.haven });
        Actions.havenEdit({ haven: this.props.haven });
    }

    render() {
        const { name } = this.props.haven;
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardItem>
                        <Text style={styles.titleSize}>
                            {name}
                        </Text>
                    </CardItem>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleSize: {
        fontSize: 18,
        paddingLeft: 15   
    }
};

export default Haven;
