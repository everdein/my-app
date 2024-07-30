import React, { Component } from "react";
import { requestPageData } from "../actions/apiActions";
import { getDogsInformation } from "../selectors/DogsSelectors";
import { connect } from "react-redux";
import { extractPayloadFromURL } from "../../helpers/helpers";
import Header from "../../components/Header";
import ListDogs from "../components/dogs/ListDogs";
import Footer from "../../components/Footer";
import propTypes from "prop-types";
import "./styles/App.css";

export class App extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.requestPageData(extractPayloadFromURL());
	}

	render() {
		return (
			<div>
				<Header />
				<ListDogs />
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	dogsInfo: getDogsInformation(state),
});

const mapDispatchToProps = (dispatch) => {
	return {
		requestPageData: (payload) => dispatch(requestPageData(payload)),
	}
};

App.propTypes = {
	requestPageData: propTypes.func.isRequired,
	dogsInfo: propTypes.array,
	dogsCardInfo: propTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
