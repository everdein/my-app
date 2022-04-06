import { combineReducers } from "redux";
import AnimalsInformation from "./APIReducer";
import contacts from "./ContactReducer";

export default combineReducers({
    AnimalsInformation, 
    contacts: contacts,
});