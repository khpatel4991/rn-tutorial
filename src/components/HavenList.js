import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import _ from 'lodash';

import { fetchHavens } from '../actions';

class HavensList extends Component {

    componentWillMount() {
        this.props.fetchHavens();
        this.createDatasource(this.props);
    }

    componentsWillReceiveProps(nextProps) {
        // this.props will be current-old ones.
        this.createDatasource(nextProps);
    }

    createDatasource({ havens }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(havens);
    }

    render() {
        console.log(this.props);
        return (
            <View>
                <Text>Haven here</Text>
                <Text>Haven here</Text>
                <Text>Haven here</Text>
                <Text>Haven here</Text>
                <Text>Haven here</Text>
                <Text>Haven here</Text>
                <Text>Haven here</Text>
                <Text>Haven here</Text>
                <Text>Haven here</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const havens = _.map(state.havens, (val, uid) => ({ ...val, uid }));
    return { havens };
};

export default connect(mapStateToProps, { fetchHavens })(HavensList);
