import React, { Component } from "react";
import { connect } from "react-redux";
import { getDogsInformation } from "../selectors/DogsSelectors";
import Dog from "./Dog";
import propTypes from "prop-types";
import "./styles/dogsCard.css";

export class Dogs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var dogsList = [];
        for(var i = 0; i < this.props.dogsInfo.length; i++)
            dogsList.push(<div className="dog-card-container" key={i}><Dog dog={i}/></div>)
        return <div>{dogsList}</div>
    }
}

const mapStateToProps = (state) => ({
    dogsInfo: getDogsInformation(state),
});

Dogs.propTypes = {
    dogsInfo: propTypes.array,
}

export default connect(mapStateToProps)(Dogs);