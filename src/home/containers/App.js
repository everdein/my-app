import React, { Component } from "react";
import { requestPageData } from "../actions/apiActions";
import { getDogsInformation } from "../selectors/DogsSelectors";
import { bindActionCreators } from "redux";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { extractPayloadFromURL } from "../helpers/helpers";
import Dogs from "../components/Dogs";
import "./styles/App.css";

export class App extends Component {

  componentDidMount() {
    this.props.requestPageData(extractPayloadFromURL());
  }

  render() {

    let dogsInfo = <Dogs/>

    return(
      <div className="centered">
        {dogsInfo}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  dogsInfo: getDogsInformation(state),
});

const mapDispatchToProps = (dispatch) => 
  bindActionCreators({ 
    requestPageData, 
  }, dispatch);

App.propTypes = {
  requestPageData: propTypes.func.isRequired,
  dogsInfo: propTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);