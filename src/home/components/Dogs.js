import React, { Component } from "react";
import { getDogsInformation } from "../selectors/DogsSelectors";
import propTypes from "prop-types";
import { connect } from "react-redux";

export class Dogs extends Component {
    
        render() {
            
            let dogsArrayLength;
            if(this.props.dogsInfo !== undefined)
                dogsArrayLength = this.props.dogsInfo.length;

            var primaryDisplayVar = [];
            
            for(var i = 0; i < dogsArrayLength; i++) {
                primaryDisplayVar.push(<div>
                                            {i === 0 ? <div><h1>My Dogs:</h1></div> : ""}
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>{this.props.dogsInfo !== undefined ? "Name:" : ""}</td>
                                                        <td>{this.props.dogsInfo !== undefined ? this.props.dogsInfo[i].name : ""}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{this.props.dogsInfo !== undefined ? "Age:" : ""}</td>
                                                        <td>{this.props.dogsInfo !== undefined ? this.props.dogsInfo[i].age : ""}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{this.props.dogsInfo !== undefined ? "Color:" : ""}</td>
                                                        <td>{this.props.dogsInfo !== undefined ? this.props.dogsInfo[i].color : ""}</td>
                                                    </tr>
                                                </tbody>
                                            </table><br></br>
                                        </div>)
        }
        return <div>{primaryDisplayVar}</div>;

    }
}

const mapStateToProps = (state) => ({
    dogsInfo: getDogsInformation(state),
});

Dogs.propTypes = {
    dogsInfo: propTypes.array,
}

export default connect(mapStateToProps)(Dogs);