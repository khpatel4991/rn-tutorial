import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import _ from 'lodash';

import Haven from './Haven';
import { fetchHavens } from '../actions';

class HavensList extends Component {

    componentWillMount() {
        this.props.fetchHavens();
        this.createDatasource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // this.props will be current-old ones.
        this.createDatasource(nextProps);
    }

    createDatasource({ havens }) {
        console.log('creatingDataSource')
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(havens);
    }

    renderRow(haven) {
        return <Haven haven={haven} />;
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow} 
            />
        );
    }
}

const mapStateToProps = (state) => {
    const havens = _.map(state.havens, (val, uid) => ({ ...val, uid }));
    return { havens };
};

export default connect(mapStateToProps, { fetchHavens })(HavensList);
