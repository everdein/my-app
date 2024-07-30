import * as types from "../constants/constants";

export const requestPageData = (payload) => ({
    type: types.REQUEST_PAGE_DATA,
    payload,
});

export const receivePageData = (payload) => ({
    type: types.RECEIVE_PAGE_DATA,
    payload,
});

export const createDog = (dog) => {
    return {
        type: types.CREATE_DOG,
        dog: dog,
    }
};

export const removeDog = (id) => {
    return {
        type: types.REMOVE_DOG,
        id: id,
    }
};