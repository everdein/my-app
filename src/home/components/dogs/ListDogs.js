import React, { Component } from "react";
import { connect } from "react-redux";
import { getDogsInformation } from "../../selectors/DogsSelectors";
import { createDog, removeDog } from "../../actions/dogActions";
import propTypes from "prop-types";
import Dog from "./Dog";
import "./styles/dogs.css";

class ListDogs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			age: "",
			coat: "",
			breed: "",
			image: null,
			id: 0,
			isAddButtonDisabled: true,
		};
		this.validation = {
			name: false,
			age: false,
			coat: false,
			breed: false,
			image: false,
		}
	}

	handleName = e => {
		this.setState({ name: e.target.value });
		this.validation.name = true;
		this.handleValidation();
	}
	handleAge = e => {
		this.setState({ age: e.target.value });
		this.validation.age = true;
		this.handleValidation();
	}
	handleCoat = e => {
		this.setState({ coat: e.target.value });
		this.validation.coat = true;
		this.handleValidation();
	}
	handleBreed = e => {
		this.setState({ breed: e.target.value });
		this.validation.breed = true;
		this.handleValidation();
	}

	handleImage = e => {
		if (e.target.files && e.target.files[0]) {
			let img = e.target.files[0];
			this.setState({ image: URL.createObjectURL(img) });
		}
		this.validation.image = true;
		this.handleValidation();
	};

	handleValidation() {
		if (this.validation.name === true && this.validation.age === true && this.validation.coat === true && this.validation.breed === true && this.validation.image === true) {
			this.setState({ isAddButtonDisabled: false });
		}
	}

	handleSubmit = e => {
		e.preventDefault();
		let dog = {
			name: this.state.name,
			image: this.state.image,
			age: this.state.age,
			coat: this.state.coat,
			breed: this.state.breed,
			id: this.state.id,
		};
		this.setState({
			name: "",
			image: null,
			age: "",
			coat: "",
			breed: "",
			id: this.state.id + 1,
		});
		this.setState({ isAddButtonDisabled: true });
		this.props.createDog(dog);
	}

	listView(props, index) {
		return (
			<div className="body wrap" key={index}><Dog dogInfo={props} index={index} /></div>
		);
	}

	render() {
		return (
			<div>
				<br></br>
				<form onSubmit={this.handleSubmit}>
					<div className="body">
						<table className="table-center">
							<tbody>
								<tr>
									<td><label>Name:</label></td>
									<td><input type="text" onChange={this.handleName} className="form-control" value={this.state.name} /></td>
								</tr>
								<tr>
									<td><label>Age:</label></td>
									<td><input type="text" onChange={this.handleAge} className="form-control" value={this.state.age} /></td>
								</tr>
								<tr>
									<td><label>Coat:</label></td>
									<td><input type="text" onChange={this.handleCoat} className="form-control" value={this.state.coat} /></td>
								</tr>
								<tr>
									<td><label>Breed:</label></td>
									<td><input type="text" onChange={this.handleBreed} className="form-control" value={this.state.breed} /></td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="body">
						{this.state.image && <img src={this.state.image} alt="" width="150" height="150" className="dog-image" />}
						<br></br>
						<input type="file" name="myImage" className="file-container" onChange={this.handleImage} />
						<br></br><br></br>
						<input type="submit" className="add-button button1" value="Add" disabled={this.state.isAddButtonDisabled} />
					</div>
				</form>
				<div>{this.props.getDogsInfo.map((contact, i) => this.listView(contact, i))}</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		getDogsInfo: getDogsInformation(state),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		createDog: (dog) => dispatch(createDog(dog)),
		removeDog: (index) => dispatch(removeDog(index)),
	};
};

ListDogs.propTypes = {
	createDog: propTypes.func,
	removeDog: propTypes.func,
	getDogsInfo: propTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListDogs);
