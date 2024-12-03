import express, { Request, Response } from "express";
import cors from "cors";
import fs from "fs-extra";
import path from "path";
import { Person } from "./types/Person";

const app = express();
const port = 3000;

// Enable cors, and json
app.use(cors());
app.use(express.json());

const filePath = path.resolve(__dirname, "../data/persons.json");

// Load data from JSON (get all people)
app.get("/contacts", (req: Request, res: Response) => {
	fs.readFile(filePath, "utf-8", (err, data) => {
		if (err) {
			return res.status(500).send("Failed to load data");
		}
		res.json(JSON.parse(data));
	});
});

// Add a new person (append to the list)
app.post("/contacts/new", (req: Request, res: Response) => {
	const newPerson = req.body;

	fs.readFile(filePath, "utf-8", (err, data) => {
		if (err) {
			return res.status(500).send("Failed to load data");
		}

		let people = JSON.parse(data);

		people.push(newPerson);

		fs.writeFile(filePath, JSON.stringify(people, null, 2), (err) => {
			if (err) {
				return res.status(500).send("Failed to save data");
			}
			res.send(newPerson);
		});
	});
});

// Edit a person (put)
app.put("/contacts/update/:id", (req: Request, res: Response) => {
	const id = req.params.id;
	const updatedPerson = req.body;

	fs.readFile(filePath, "utf-8", (err, data) => {
		if (err) {
			return res.status(500).send("Failed to load data");
		}

		let people = JSON.parse(data);
		const personIndex = people.findIndex(
			(person: Person) => person.id === id
		);

		if (personIndex === -1) {
			return res.status(404).send("Person not found");
		}

		people[personIndex] = updatedPerson;

		fs.writeFile(filePath, JSON.stringify(people, null, 2), (err) => {
			if (err) {
				return res.status(500).send("Failed to save data");
			}
			res.json(updatedPerson);
		});
	});
});

// Delete a person (delete)
app.delete("/contacts/delete/:id", (req: Request, res: Response) => {
	const { id } = req.params;

	fs.readFile(filePath, "utf-8", (err, data) => {
		if (err) {
			return res.status(500).send("Failed to load data");
		}

		let people = JSON.parse(data);
		people = people.filter((person: { id: string }) => person.id !== id);

		fs.writeFile(filePath, JSON.stringify(people, null, 2), (err) => {
			if (err) {
				return res.status(500).send("Failed to save data");
			}
			res.send("Person deleted successfully");
		});
	});
});

// Run server
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
