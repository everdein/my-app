import React, { Component } from "react";
import { connect } from "react-redux";
import Samson from "../../../images/samson.jpg";
import Bukowski from "../../../images/bukowski.jpg"
import propTypes from "prop-types";
import { removeDog } from "../../actions/dogActions";
import * as types from "../../constants/constants";
import "./styles/dogs.css";

export class Dog extends Component {
    constructor(props) {
        super(props);
    }

    switchDog(dog) {
        switch (dog) {
            case "Samson":
                return Samson;
            case "Bukowski":
                return Bukowski;
            default:
                return "";
        }
    }

    deleteContact(e, index) {
        e.preventDefault();
        this.props.removeDog(this.props.dogInfo.id);
    }

    render() {
        return (
            <div className="dog-card-container">
                {this.props.dogInfo.name && <header className="dog-card-header">{this.props.dogInfo.name}</header>}
                {this.switchDog(this.props.dogInfo.name) !== "" && <img src={this.switchDog(this.props.dogInfo.name)} alt="" width="150" height="150" className="dog-image" />}

                {this.props.dogInfo.image && <img src={this.props.dogInfo.image} alt="" width="150" height="150" className="dog-image" />}

                <table className="dog-table">
                    <tbody>
                        <tr>
                            <td>{this.props.dogInfo.age && types.AGE}</td>
                            <td>{this.props.dogInfo.age && this.props.dogInfo.age}</td>
                        </tr>
                        <tr>
                            <td>{this.props.dogInfo.coat && types.COAT}</td>
                            <td>{this.props.dogInfo.coat && this.props.dogInfo.coat}</td>
                        </tr>
                        <tr>
                            <td>{this.props.dogInfo.breed && types.BREED}</td>
                            <td>{this.props.dogInfo.breed && this.props.dogInfo.breed}</td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={(e) => this.deleteContact(e, this.props.index)}>Remove</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => {
    return {
        removeDog: (index) => dispatch(removeDog(index)),
    };
};

Dog.propTypes = {
    removeDog: propTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(Dog);