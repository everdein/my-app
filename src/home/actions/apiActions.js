import * as types from "../constants/constants";

export const requestPageData = (payload) => ({
    type: types.REQUEST_PAGE_DATA,
    payload,
});

export const receivePageData = (payload) => ({
    type: types.RECEIVE_PAGE_DATA,
    payload,
});