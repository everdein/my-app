import { connect } from "react-redux";
import Samson from "../../images/samson.jpg"
import Bukowski from "../../images/bukowski.jpg"
import propTypes from "prop-types";
import { removeDog } from "../actions/actions";
import * as types from "../constants/constants";
import "./styles/dogs.css";

function Dog(props) {

    function switchDog(dog) {
        switch (dog) {
            case "Samson":
                return Samson;
            case "Bukowski":
                return Bukowski;
            default:
                return "";
        }
    }

    const deleteContact = () => {
        props.removeDog(props.dogInfo.id);
    }

    return (
        <div className="dog-card-container">
            {props.dogInfo.name && <header className="dog-card-header">{props.dogInfo.name}</header>}
            {switchDog(props.dogInfo.name) !== "" && <img src={switchDog(props.dogInfo.name)} alt="" width="150" height="150" className="dog-image" />}
            {props.dogInfo.image && <img src={props.dogInfo.image} alt="" width="150" height="150" className="dog-image" />}
            <table className="dog-table">
                <tbody>
                    <tr>
                        <td>{props.dogInfo.age && types.AGE}</td>
                        <td>{props.dogInfo.age && props.dogInfo.age}</td>
                    </tr>
                    <tr>
                        <td>{props.dogInfo.coat && types.COAT}</td>
                        <td>{props.dogInfo.coat && props.dogInfo.coat}</td>
                    </tr>
                    <tr>
                        <td>{props.dogInfo.breed && types.BREED}</td>
                        <td>{props.dogInfo.breed && props.dogInfo.breed}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={(e) => deleteContact(e, props.index)}>Remove</button>
        </div>
    );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
    return {
        removeDog: (index) => dispatch(removeDog(index)),
    };
};

Dog.propTypes = {
    removeDog: propTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(Dog);