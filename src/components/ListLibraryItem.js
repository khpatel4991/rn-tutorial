import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { CardItem } from './common';

import * as actions from '../actions';

class ListLibraryItem extends Component {

    renderDescription() {
        const { library, selectedLibraryId } = this.props;
        const { id, description } = library;
        if (id === selectedLibraryId) {
            return (
                <Text>{description}</Text>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { library, selectLibrary } = this.props;
        const { id, title } = library;
        return (
            <TouchableWithoutFeedback
                onPress={() => selectLibrary(id)}
            >
                <View>
                    <CardItem>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardItem>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

const mapStateToProps = (state) => ({
    selectedLibraryId: state.selectedLibraryId
});

export default connect(mapStateToProps, actions)(ListLibraryItem);
