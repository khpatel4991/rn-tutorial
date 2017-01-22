// One file for all pages
import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';

import LoginFormRedux from './components/LoginFormRedux';
import HavenCreate from './components/HavenCreate';
import HavenEdit from './components/HavenEdit';
import HavenList from './components/HavenList';

export default class RouterComponent extends Component {
    render() {
        const paddingTop = Platform.OS === 'android' ? 58 : 65;
        return (
            <Router sceneStyle={{ paddingTop }} >
                <Scene key='auth'>
                    <Scene key='login' component={LoginFormRedux} title='Login' />
                </Scene>
                <Scene key='main' hideBackImage onBack={() => null}>
                    <Scene 
                        key='havenList' 
                        component={HavenList} 
                        title='Nearby Havens'
                        rightTitle='Add'
                        onRight={() => Actions.havenCreate()}
                        initial
                    />
                    <Scene
                        key='havenEdit'
                        component={HavenEdit}
                        title='Edit Haven'
                    />
                    <Scene
                        key='havenCreate'
                        component={HavenCreate}
                        title='Create New Haven'
                    />
                </Scene>
            </Router>
        );
    }
}
