import { useState } from "react";
import { Telephone } from "./Telephone.component";
import { Form } from "./FromComponent";
import { Person } from "../types/Person";
import { IdType } from "../types/types";
export const PersonInfo = ({
	person,
	onRemovePerson,
	onEditPerson,
}: {
	person: Person;
	onRemovePerson: (id: IdType) => void;
	onEditPerson: (data: Person) => void;
}) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [isFormShown, setIsFormShown] = useState(false);
	const handleShowFromClick = () => setIsFormShown(!isFormShown);

	const handleRemovePerson = () => {
		onRemovePerson(person.id);
	};

	const handleEditPerson = (updatedData: Person) => {
		onEditPerson(updatedData);
		setIsFormShown(false);
	};

	return (
		<>
			<h2>{person.name}</h2>
			<button onClick={() => setIsExpanded(!isExpanded)}>
				{isExpanded ? "Close" : "Show"}
			</button>
			{isExpanded && (
				<>
					<h3>
						Tel: <Telephone tel={person.tel}></Telephone>
					</h3>
					{person.city && <h3>City: {person.city}</h3>}
				</>
			)}
			{isExpanded && <button onClick={handleRemovePerson}>Remove</button>}
			{isExpanded && <button onClick={handleShowFromClick}>Edit</button>}
			{isFormShown && (
				<Form
					mode="edit"
					initialData={person}
					onSubmit={handleEditPerson}
				/>
			)}

			<hr />
		</>
	);
};
