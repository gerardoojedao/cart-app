import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';
import RootView from './navigation';

const App = () => {
    return (
        <Provider store={store}>
            <StatusBar/>
            <RootView/>
        </Provider>
    )
}

export default App;
