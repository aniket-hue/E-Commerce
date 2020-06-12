import { createStore } from 'redux';
// import logger from 'redux-logger';
import rootReducer from '../rootReducer';

// const middleawares = [logger];

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;