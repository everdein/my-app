export const dogsSelector = (state) => {
    try {
        return state.DogsSlice.dogs;
    } catch (e) {
        return null;
    }
};