import {createStore,compose,applyMiddleware} from 'redux';
import reducer from "./reducer";
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store=createStore(reducer,composeEnhancers(
    applyMiddleware(thunk)
));
export default store;
