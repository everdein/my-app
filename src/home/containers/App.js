import { requestPageData } from "../actions/actions";
import { connect } from "react-redux";
import Header from "../../components/Header";
import ListDogs from "../components/ListDogs";
import Footer from "../../components/Footer";
import propTypes from "prop-types";

function App(props) {
	props.requestPageData();
	return (
		<div>
			<Header />
			<ListDogs />
			<Footer />
		</div>
	);
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
	return {
		requestPageData: (payload) => dispatch(requestPageData(payload)),
	}
};

App.propTypes = {
	requestPageData: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
