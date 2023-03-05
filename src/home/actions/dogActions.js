import * as actionTypes from '../constants/actionType';

export const createDog = (dog) => {
    return {
      type: actionTypes.CREATE_DOG,
      dog: dog,
    }
  };

export const removeDog = (id) => {
    return {
        type: actionTypes.REMOVE_DOG,
        id: id,
    }
};