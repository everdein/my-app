import React, { Component } from "react";
import { requestPageData } from "../actions/apiActions";
import { getDogsInformation } from "../selectors/DogsSelectors";
import { bindActionCreators } from "redux";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { extractPayloadFromURL } from "../helpers/helpers";
import "./styles/App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/DogsCard";

export class App extends Component {

  componentDidMount() {
    this.props.requestPageData(extractPayloadFromURL());
  }

  render() {
    let dogsCardInfo = <Card dogsInfo={this.props.dogsInfo}/>
    return (
      <div className="container">
        <div><Header/></div>
        <div>{dogsCardInfo}</div>
        <div><Footer/></div>
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
  dogsCardInfo: propTypes.object,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);