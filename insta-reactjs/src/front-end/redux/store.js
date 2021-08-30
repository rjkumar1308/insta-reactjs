import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [thunkMiddleware];

if (process.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(...middlewares))
export const persistor = persistStore(store)

export default { persistor, store };