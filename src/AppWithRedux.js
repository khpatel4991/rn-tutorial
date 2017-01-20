import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import LibraryList from './components/LibraryList';
import { Header, Card } from './components/common';


const AppWithRedux = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View style={{ flex: 1 }}>
                <Header headerText='Redux' />
                <Card>
                    <LibraryList />
                </Card>
            </View>
        </Provider>
    );
};

export default AppWithRedux;
