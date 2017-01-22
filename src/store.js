import { createStore, applyMiddleware } from 'redux';
//import devToolsEnhancer from 'remote-redux-devtools';
import thunk from 'redux-thunk';

import reducers from './reducers';

export default createStore(reducers, applyMiddleware(thunk));
