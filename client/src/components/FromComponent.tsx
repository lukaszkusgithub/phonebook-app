import { useEffect, useState } from "react";
import { Person } from "../types/Person";
import { ModeType } from "../types/types";

export const Form = ({
	mode,
	initialData,
	onSubmit,
}: {
	mode: ModeType;
	initialData?: Person | undefined;
	onSubmit: (data: Person) => void;
}) => {
	const [name, setName] = useState("");
	const [tel, setTel] = useState("");
	const [city, setCity] = useState("");

	useEffect(() => {
		if (initialData) {
			setName(initialData.name);
			setTel(initialData.tel?.toString() || "");
			setCity(initialData.city || "");
		}
	}, [initialData]);

	const submitForm = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		onSubmit({
			name,
			tel: Number(tel),
			city,
			id: initialData?.id || crypto.randomUUID(),
		});
	};

	return (
		<form onSubmit={submitForm}>
			<div>
				<input
					defaultValue={name}
					onChange={(event) => setName(event.target.value)}
					type="text"
					name="name"
					id=""
					placeholder="Name"
				/>
			</div>
			<div>
				<input
					defaultValue={tel}
					onChange={(event) => setTel(event.target.value)}
					type="tel"
					name="tel"
					id=""
					placeholder="Telephone"
				/>
			</div>
			<div>
				<input
					defaultValue={city}
					onChange={(event) => setCity(event.target.value)}
					type="text"
					name="city"
					id=""
					placeholder="City"
				/>
			</div>
			<div>
				<button disabled={name.length === 0 || tel.length === 0}>
					{mode === "add" ? "Add" : "Save"}
				</button>
			</div>
		</form>
	);
};
