import { combineReducers } from 'redux';
import libraries from './libraries';
import selection from './selection';
import AuthReducer from './AuthReducer';
import HavenFormReducer from './HavenFormReducer';

export default combineReducers({
    libraries,
    selectedLibraryId: selection,
    auth: AuthReducer,
    havenForm: HavenFormReducer
});
