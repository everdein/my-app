import React, { Component } from "react";
import "./styles/dogsCard.css";
import Dogs from "../atomic/Dogs";
import propTypes from "prop-types";

export class Card extends Component {

    render() {
        let dogsArrayLength;
        if(this.props.dogsInfo !== undefined)
            dogsArrayLength = this.props.dogsInfo.length;

        var primaryDisplayVar = [];

        for(var i = 0; i < dogsArrayLength; i++) {
            primaryDisplayVar.push(
            <div className="card-container">
                <header className="card-header">{this.props.dogsInfo !== undefined ? this.props.dogsInfo[i].name : ""}</header>
                <Dogs dog={i}/>
            </div>)
        }
        return <div>{primaryDisplayVar}</div>
    }
}

Card.propTypes = {
    dogsInfo: propTypes.array,
}

export default Card;