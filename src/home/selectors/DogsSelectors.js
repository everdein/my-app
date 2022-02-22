export const getDogsInformation = (state) => {
    try {
        return state.AnimalsInformation.animals.dogs;
    } catch (e) {
        return null;
    }
};