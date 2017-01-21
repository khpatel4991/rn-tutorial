import { HAVEN_FORM_UPDATE } from './types';

export const havenFormUpdate = ({ prop, value }) => {
    return {
        type: HAVEN_FORM_UPDATE,
        payload: { prop, value }
    };
};

export const havenCreate = ({ streetName, streetName2, city, zip, state, name }) => {
    console.log(state);
};
