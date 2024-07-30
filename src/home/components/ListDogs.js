import { connect } from "react-redux";
import { dogsSelector } from "../selectors/DogsSelectors";
import { createDog } from "../actions/actions";
import propTypes from "prop-types";
import Dog from "./Dog";
import "./styles/dogs.css";
import { useState, useEffect } from "react";

function ListDogs(props) {

	const [name, setName] = useState();
	const [age, setAge] = useState();
	const [coat, setCoat] = useState();
	const [breed, setBreed] = useState();
	const [image, setImage] = useState();
	const [id, setId] = useState(0);

	const [nameValidation, setNameValidation] = useState(false);
	const [ageValidation, setAgeValidation] = useState(false);
	const [coatValidation, setCoatValidation] = useState(false);
	const [breedValidation, setBreedValidation] = useState(false);
	const [imageValidation, setImageValidation] = useState(false);

	const [disabled, setDisabled] = useState(true);

	const handleName = e => {
		if (e.target.value !== null) {
			setName(e.target.value);
			setNameValidation(true);
		} else {
			setName(null);
			setNameValidation(false);
		}
	}

	const handleAge = e => {
		if (e.target.value !== null) {
			setAge(e.target.value);
			setAgeValidation(true);
		} else {
			setAge(null);
			setAgeValidation(false);
		}
	}

	const handleCoat = e => {
		if (e.target.value !== null) {
			setCoat(e.target.value);
			setCoatValidation(true);
		} else {
			setCoat(null);
			setCoatValidation(false);
		}
	}

	const handleBreed = e => {
		if (e.target.value !== null) {
			setBreed(e.target.value);
			setBreedValidation(true);
		} else {
			setBreed(null);
			setBreedValidation(false);
		}
	}

	const handleImage = e => {
		if (e.target.files && e.target.files[0]) {
			let img = e.target.files[0];
			setImage(URL.createObjectURL(img));
		}
		setImageValidation(true);
	};

	useEffect(() => {
		if (nameValidation === true && ageValidation === true && coatValidation === true && breedValidation === true && imageValidation === true)
			setDisabled(false);
	}, [name, age, coat, breed, image]);

	function listView(props, index) {
		return (<div className="body wrap" key={index}><Dog dogInfo={props} index={index} /></div>);
	}

	function addDog() {
		let dog = {
			name: name,
			age: age,
			coat: coat,
			breed: breed,
			id: id,
			image: image,
		};
		props.createDog(dog);
		setId(id + 1);
	}

	return (
		<div>
			<br></br>
			<div className="body">
				<table className="table-center">
					<tbody>
						<tr>
							<td><label>Name:</label></td>
							<td><input type="text" onChange={handleName} className="form-control" defaultValue={name} /></td>
						</tr>
						<tr>
							<td><label>Age:</label></td>
							<td><input type="text" onChange={handleAge} className="form-control" defaultValue={age} /></td>
						</tr>
						<tr>
							<td><label>Coat:</label></td>
							<td><input type="text" onChange={handleCoat} className="form-control" defaultValue={coat} /></td>
						</tr>
						<tr>
							<td><label>Breed:</label></td>
							<td><input type="text" onChange={handleBreed} className="form-control" defaultValue={breed} /></td>
						</tr>
					</tbody>
				</table>
			</div>
			{image && <img src={image} alt="" width="150" height="150" className="dog-image" />}
			<br />
			<input type="file" name="myImage" className="file-container" onChange={handleImage} />
			<br />
			<br />
			<button type="button" className="add-button button1" disabled={disabled} onClick={addDog}>Add</button >
			<div>{props.dogs.map((dog, i) => listView(dog, i))}</div>
		</div >
	);
}

const mapStateToProps = (state) => {
	return {
		dogs: dogsSelector(state),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		createDog: (dog) => dispatch(createDog(dog)),
	};
};

ListDogs.propTypes = {
	createDog: propTypes.func,
	dogs: propTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListDogs);
