import * as actionTypes from "../constants/actionType";
import * as types from "../constants/apiConstants";

export const initialState = {
	animals: {
		dogs: [],
	},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.RECEIVE_PAGE_DATA:
			var newState = { ...state };
			newState.animals.dogs = action.payload.data.animals.dogs;
			return newState;

		case actionTypes.CREATE_DOG:
			var createDogNewState = { ...state };
			createDogNewState.animals.dogs = createDogNewState.animals.dogs.concat(action.dog);
			return createDogNewState;


		case actionTypes.REMOVE_DOG:
			var removeDogNewState = { ...state };
			if(removeDogNewState.animals.dogs !== null)
				removeDogNewState.animals.dogs = removeDogNewState.animals.dogs.filter(dog => dog.id !== action.id)

			return removeDogNewState;

		default:
			return state;
	}
};