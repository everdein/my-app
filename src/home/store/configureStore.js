import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers/RootReducer";
import rootSaga from "../sagas/sagas";

function configureStore(state) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware];
    const middlewareEnhancer = applyMiddleware(...middleware);
    const enhancers = [middlewareEnhancer];
    const composedEnhancers = composeEnhancers(...enhancers);
    const store = createStore(rootReducer, state, composedEnhancers);
    sagaMiddleware.run(rootSaga);
    return store;
}

export default configureStore;