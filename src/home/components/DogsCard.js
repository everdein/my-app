import React, { Component } from "react";
import "./styles/dogsCard.css";
import Dogs from "../atomic/Dogs";
import propTypes from "prop-types";
import samson from "../components/images/samson.jpg";
import bukowski from "../components/images/bukowski.jpg"

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
                {this.props.dogsInfo[i].name === "Samson" ? <img src={samson} alt="" width="150" height="150" className="dog-image"/>
                    : <img src={bukowski} alt="" width="150" height="150" className="dog-image"/>}
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