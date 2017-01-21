import { combineReducers } from 'redux';
import libraries from './libraries';
import selection from './selection';
import AuthReducer from './AuthReducer';

export default combineReducers({
    libraries,
    selectedLibraryId: selection,
    auth: AuthReducer,
});
