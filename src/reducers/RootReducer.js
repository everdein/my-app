import { combineReducers } from "redux";
import AnimalsInformation from "../home/reducers/APIReducer";
import contacts from "../home/reducers/ContactReducer";

export default combineReducers({
    AnimalsInformation, 
    contacts: contacts,
});