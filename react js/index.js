import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import ItemList from './components/ItemList';

// Init store
const store = configureStore();

// provider to use redux store in app
render(
    <Provider store={store}>
        <ItemList />
    </Provider>,
    document.getElementById('app')
); 

// reducer of index js
import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';

// Combine all reducers into root reducer
export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading
});
