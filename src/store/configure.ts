import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from '../modules/reducer';

const configure = () => {
  return createStore(reducer, applyMiddleware(createLogger()));
};

export default configure;
