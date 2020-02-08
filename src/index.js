import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

//combineReducer bierze kilka reducerów i łączy je razem w jeden w celu stworzenia store'a
const rootReducer = combineReducers({
    counter: counterReducer,
    res: resultReducer
});

//middleware (tutaj logger to midleware) to kawałek kodu, funkcja, która wywołuje kolejną funkcję
//bierze akcję i przesyła do reducera
//oprócz tego musimy dodać middleware do store
const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching', action);
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
}

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
