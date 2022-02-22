import { call, put, all, takeEvery } from "redux-saga/effects";
import * as types from "../constants/constants";
import { receivePageData } from "../actions/apiActions";
import mockData from "./mockData";

function* getPageData(action) {
    try {
        const data = [];
        data.data = mockData;
        // console.log(data.data);
        yield put(receivePageData(data));
    } catch (e) {
        console.log(e);
    }
}

export function* requestPageDataSaga() {
    yield takeEvery(types.REQUEST_PAGE_DATA, getPageData);
}


export default function* rootSaga() {
    yield all([requestPageDataSaga()]);
}