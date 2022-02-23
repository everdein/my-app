import * as types from "../constants/constants";

export const initialState = {
    animals: [
        {
            dogs: [],
        },
    ],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.RECEIVE_PAGE_DATA:
            // console.log(action.payload.data);
            var newState = { ...state };
            newState.animals.dogs = action.payload.data.animals.dogs;
            
            return newState;
        default:
            return state;
    }
};