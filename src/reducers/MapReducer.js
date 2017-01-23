import { MAP_REGION_CHANGED } from '../actions/types';

const INITIAL_STATE = {
	region: {
		latitude: 34.5233,
		longitude: -127.4324,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	}
};

export default (state = INITIAL_STATE, action) => {
	console.log(state);
    switch (action.type) {
		case MAP_REGION_CHANGED:
			return { ...state, region: action.payload };
        default: 
			return state;
    }
};
