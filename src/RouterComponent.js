// One file for all pages
import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';

import LoginFormRedux from './components/LoginFormRedux';

export default class RouterComponent extends Component {
    render() {
        return (
            <Router sceneStyle={{ paddingTop: 65 }} >
                <Scene key='login' component={LoginFormRedux} title='Login' initial />
            </Router>
        );
    }
}
