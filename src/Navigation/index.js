import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './navigation';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../Redux/Redux-Saga/rootSagas';
import reducer from '../Redux/Recuders/index';
import {applyMiddleware, createStore} from 'redux';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

function App() {
    return (
        <NavigationContainer>
        <Provider store={store}>
                <StatusBar backgroundColor={"#00000000"} barStyle="dark-content"/>
                <MainNavigation/>
        </Provider>
        </NavigationContainer>
    );
}

sagaMiddleware.run(rootSaga);
export default App;
