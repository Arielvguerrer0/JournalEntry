import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';


import { authReducer } from '../reducers/authReducer'
import { uiReducer } from '../reducers/uiReducer';
import { notesReducer } from '../reducers/notesReducer';



const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;



// creamos el reducers el cual permitira combinar nuestros reducer, poder crear nuevas funcionalidades y no refactorizar
const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes: notesReducer
});

// creamos el store el cual contiene nuestros reducers
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);
