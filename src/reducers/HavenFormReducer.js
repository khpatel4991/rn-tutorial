import { 
    HAVEN_FORM_UPDATE, 
    HAVEN_CREATE_SUCCESS,
    HAVEN_EDIT_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    streetAddress: '1010 Dartmouth Glen Way',
    streetAddress2: '',
    city: 'Baltimore',
    zip: '21212',
    state: 'md',
    name: 'My Casa',
};

//Key Interpolation: 
//Action will be === { prop: 'field_name', value: 'new_field_value' } 

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HAVEN_FORM_UPDATE: 
            return { ...state, [action.payload.prop]: action.payload.value };
        case HAVEN_CREATE_SUCCESS:
        case HAVEN_EDIT_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};
