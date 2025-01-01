import axios from "axios";
import { put, all, call, takeEvery } from "redux-saga/effects";
import * as types from "../home/constants/constants";
import { receivePageData } from "../home/actions/actions";
// import mockData from "./mockData";

function* getPageData(action) {
    // Mock data
    // try {
    // const data = [];
    // data.data = mockData;
    // yield put(receivePageData(data));
    // } catch (e) {
    //     console.log(e);
    // }

    try {
        let url = "http://localhost:8080/";
        const data = yield call(apiCall, url);
        yield put(receivePageData(data));
    } catch (e) {
        console.log(e);
    }
}

export function* requestPageDataSaga() {
    yield takeEvery(types.REQUEST_PAGE_DATA, getPageData);
}

export function* apiCall(url) {
    let requestConfig = {
        method: "GET",
        url: url,
        headers: {
            "Access-Control-Allow-Headers": "Content-Type",
            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
            // "Access-Control-Allow-Methods": "GET",
            // "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        }
    };
    let response;
    try {
        response = yield call(axios, requestConfig);
    } catch (e) {
        console.log(e);
    }
    return response;
}

export default function* rootSaga() {
    yield all([requestPageDataSaga()]);
}