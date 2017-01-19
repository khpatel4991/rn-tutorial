import { combineReducers } from 'redux';
import libraries from './libraries';
import selection from './selection';
//import libraries from './libraries';

export default combineReducers({
    libraries,
    selectedLibraryId: selection,
});
