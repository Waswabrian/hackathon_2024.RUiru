import React from 'react';
// import 'react-refresh-runtime.js';

import { render } from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import ItemList from './components/ItemList';

// Init store
// const store = configureStore();

// Provider to use redux store in app
// render(
//     <Provider store={store}>
//         <ItemList />
//     </Provider>,
//     document.getElementById('app')
// )