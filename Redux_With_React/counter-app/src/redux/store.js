
import counterReducer from './reducer/counterReducer';
// const {createStore } = require("redux");
import { legacy_createStore as createStore } from 'redux';

const store = createStore (counterReducer);
export default store;