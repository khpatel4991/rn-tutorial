import { MAP_REGION_CHANGED } from './types';

export const regionChanged = ({ latitude, longitude, latitudeDelta, longitudeDelta }) => {
    return {
        type: MAP_REGION_CHANGED,
        payload: {
            latitude,
            latitudeDelta,
            longitude,
            longitudeDelta
        }
    };
};
