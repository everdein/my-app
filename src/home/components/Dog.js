import React, { Component } from "react";
import { getDogsInformation } from "../selectors/DogsSelectors";
import { connect } from "react-redux";
import Samson from "../../images/samson.jpg";
import Bukowski from "../../images/bukowski.jpg"
import propTypes from "prop-types";
import * as types from "../constants/constants";
import "./styles/dogs.css";

export class Dog extends Component {
    constructor(props) {
        super(props);
    }

    switchDog(dog) {
        switch(dog) {
            case "Samson":
                return Samson;
            case "Bukowski":
                return Bukowski;
            default:
                return;
        }
    }

    render() {
        return(
            <div>
                <header className="card-header">{this.props.dogsInfo !== null ? this.props.dogsInfo[this.props.dog].name : ""}</header>
                <img src={this.switchDog(this.props.dogsInfo[this.props.dog].name)} alt="" width="150" height="150" className="dog-image"/>
                <table className="dogs-table">
                    <tbody>
                        <tr>
                            <td>{this.props.dogsInfo[this.props.dog].age && types.AGE}</td>
                            <td>{this.props.dogsInfo[this.props.dog].age && this.props.dogsInfo[this.props.dog].age}</td>
                        </tr>
                        <tr>
                            <td>{this.props.dogsInfo[this.props.dog].color && types.COAT}</td>
                            <td>{this.props.dogsInfo[this.props.dog].color && this.props.dogsInfo[this.props.dog].color}</td>
                        </tr>
                        <tr>
                            <td>{this.props.dogsInfo[this.props.dog].breed && types.BREED}</td>
                            <td>{this.props.dogsInfo[this.props.dog].breed && this.props.dogsInfo[this.props.dog].breed}</td>
                        </tr>
                    </tbody>
                </table>
            </div> 
        );
    }
}

const mapStateToProps = (state) => ({
    dogsInfo: getDogsInformation(state),
});

Dog.propTypes = {
    dogsInfo: propTypes.array,
}

export default connect(mapStateToProps)(Dog);