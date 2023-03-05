import * as types from "../constants/apiConstants";

export const requestPageData = (payload) => ({
    type: types.REQUEST_PAGE_DATA,
    payload,
});

export const receivePageData = (payload) => ({
    type: types.RECEIVE_PAGE_DATA,
    payload,
});