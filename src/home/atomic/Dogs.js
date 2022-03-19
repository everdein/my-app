import React, { Component } from "react";
import { getDogsInformation } from "../selectors/DogsSelectors";
import propTypes from "prop-types";
import { connect } from "react-redux";
import "./styles/dogs.css";
import * as types from "../constants/constants";

export class Dogs extends Component {
        render() {
        let dog =   <div>
                        {this.props !== undefined ? 
                            <div>
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
                        : ""}
                    </div>
        return <div>{dog}</div>;
    }
}

const mapStateToProps = (state) => ({
    dogsInfo: getDogsInformation(state),
});

Dogs.propTypes = {
    dogsInfo: propTypes.array,
}

export default connect(mapStateToProps)(Dogs);