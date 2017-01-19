import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { CardItem } from './common';

import * as actions from '../actions';

class ListLibraryItem extends Component {

    renderDescription() {
        const { library, expanded } = this.props;
        if (expanded) {
            return (
                <Text>{library.description}</Text>
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

const mapStateToProps = (state, ownProps) => ({
    expanded: ownProps.library.id === state.selectedLibraryId
});

export default connect(mapStateToProps, actions)(ListLibraryItem);
