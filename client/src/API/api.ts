import axios from "axios";
import { Person } from "../types/Person";

const API_URL = "http://localhost:3000/contacts"; // Endpoint

// Get all Persons
export const fetchPeople = async (): Promise<Person[]> => {
	try {
		const response = await axios.get(API_URL);
		return response.data;
	} catch (error) {
		console.error("Error fetching people", error);
		throw error;
	}
};

// Add Person
export const addPerson = async (person: Person): Promise<Person> => {
	try {
		const response = await axios.post(`${API_URL}/new`, person);
		return response.data;
	} catch (error) {
		console.error("Error adding person", error);
		throw error;
	}
};

// Edit Person
export const editPerson = async (person: Person): Promise<Person> => {
	try {
		const response = await axios.put(
			`${API_URL}/update/${person.id}`,
			person
		);
		return response.data;
	} catch (error) {
		console.error("Error editing person", error);
		throw error;
	}
};

// Delete Person
export const removePerson = async (id: string): Promise<void> => {
	try {
		await axios.delete(`${API_URL}/delete/${id}`);
	} catch (error) {
		console.error("Error deleting person", error);
		throw error;
	}
};
