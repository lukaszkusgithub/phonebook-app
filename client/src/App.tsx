import { useEffect, useState } from "react";
import "./App.css";
import { PersonInfo } from "./components/PersonInfo.component";
import { Form } from "./components/FromComponent";
import { Person } from "./types/Person";
import { IdType } from "./types/types";
import { fetchPeople, addPerson, editPerson, removePerson } from "./API/api";

function App() {
	const [isFormShown, setIsFormShown] = useState(false);
	const [people, setPeople] = useState<Person[]>([]);

	useEffect(() => {
		const loadPeople = async () => {
			try {
				const data = await fetchPeople();
				setPeople(data);
			} catch (error) {
				console.error("Error loading people:", error);
			}
		};

		loadPeople();
	}, []);

	const handleShowFromClick = () => setIsFormShown(!isFormShown);

	const handleAddPerson = async (data: Person) => {
		try {
			const newPerson = await addPerson(data);
			setPeople((prevPeople) => [...prevPeople, newPerson]);
			setIsFormShown(false);
		} catch (error) {
			console.error("Error adding person:", error);
		}
	};

	const handleRemovePerson = async (id: IdType) => {
		try {
			await removePerson(id);
			setPeople((prevPeople) =>
				prevPeople.filter((person) => person.id !== id)
			);
		} catch (error) {
			console.error("Error removing person:", error);
		}
	};

	const handleEditPerson = async (person: Person) => {
		try {
			const updatedPerson = await editPerson(person);

			setPeople((prevPeople) =>
				prevPeople.map((p) =>
					p.id === updatedPerson.id ? updatedPerson : p
				)
			);
		} catch (error) {
			console.error("Error editing person:", error);
		}
	};

	return (
		<>
			<h1>Contact List</h1>
			{isFormShown && <Form mode="add" onSubmit={handleAddPerson} />}
			<button onClick={handleShowFromClick}>
				{isFormShown ? "Close" : "Show form"}
			</button>
			{people.map((person) => (
				<PersonInfo
					key={person.id}
					person={person}
					onRemovePerson={handleRemovePerson}
					onEditPerson={handleEditPerson}
				/>
			))}
		</>
	);
}

export default App;
