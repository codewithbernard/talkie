import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "reducers";
import saga from "sagas";

const sagaMiddleware = createSagaMiddleware();
let store;
if (process.env.NODE_ENV === "production") {
  store = createStore(reducer, applyMiddleware(sagaMiddleware));
} else {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
}

sagaMiddleware.run(saga);

export default store;
