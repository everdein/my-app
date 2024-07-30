import * as types from "../constants/constants";

export const initialState = {
	dogs: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.RECEIVE_PAGE_DATA:
			var newState = { ...state };
			newState.dogs = action.payload.data.dogs;
			return newState;

		case types.CREATE_DOG:
			var createDogNewState = { ...state };
			createDogNewState.dogs = createDogNewState.dogs.concat(action.dog);
			return createDogNewState;


		case types.REMOVE_DOG:
			var removeDogNewState = { ...state };
			if (removeDogNewState.dogs !== null)
				removeDogNewState.dogs = removeDogNewState.dogs.filter(dog => dog.id !== action.id)

			return removeDogNewState;

		default:
			return state;
	}
};