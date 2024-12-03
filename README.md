# Phonebook Application

A modern phonebook application built with **React**, **TypeScript**, and **Vite** on the client-side and **Node.js** with **Express** on the server-side. This application allows users to manage a list of contacts with CRUD operations (Create, Read, Update, Delete).

---

## Table of Contents

- [Phonebook Application](#phonebook-application)
	- [Table of Contents](#table-of-contents)
	- [Features](#features)
	- [Technologies](#technologies)
		- [Client](#client)
		- [Server](#server)
	- [Setup Instructions](#setup-instructions)
		- [Prerequisites](#prerequisites)
		- [Clone the Repository](#clone-the-repository)
		- [Client](#client-1)
		- [Server](#server-1)
	- [Project Structure](#project-structure)
	- [API Endpoints](#api-endpoints)
		- [Base URL](#base-url)
		- [Endpoints](#endpoints)
			- [Fetch All Contacts](#fetch-all-contacts)
			- [Add a Contact](#add-a-contact)
			- [Edit a Contact](#edit-a-contact)
			- [Delete a Contact](#delete-a-contact)
	- [License](#license)

---

## Features

- Add new contacts
- Edit existing contacts
- Remove contacts
- Fetch contacts from the server
- Persistent data storage

---

## Technologies

### Client

- **React 18+**
- **TypeScript**
- **Vite** for fast bundling and development
- **Axios** for HTTP requests
- **CSS** for styling

### Server

- **Node.js**
- **Express.js**
- **fs-extra** for file handling
- **CORS** for handling cross-origin requests
- **TypeScript** for type safety

---

## Setup Instructions

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Git**

### Clone the Repository

```bash
git clone https://github.com/your-username/phonebook-app.git
cd phonebook-app
```

### Client

1. Navigate to the client directory:

   ```bash
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the application in your browser at `http://localhost:5173`.

### Server

1. Navigate to the server directory:

   ```bash
   cd server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

4. The server will run at `http://localhost:3000`.

---

## Project Structure

```plaintext
phonebook-app/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── types/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── ...
│   ├── package.json
│   ├── tsconfig.json
│   └── ...
├── server/
│   ├── data/
│   │   └── persons.json
│   ├── src/
│   │   ├── index.ts
│   │   └── ...
│   ├── package.json
│   ├── tsconfig.json
│   └── ...
└── README.md
```

---

## API Endpoints

### Base URL

`http://localhost:3000`

### Endpoints

#### Fetch All Contacts

**GET** `/contacts`

- **Response**: Array of contacts.

#### Add a Contact

**POST** `contacts/new`

- **Request Body**: `{ name: string, tel: number, city: string, id: string }`
- **Response**: The added contact.

#### Edit a Contact

**PUT** `contacts/update/:id`

- **Request Body**: `{ name: string, tel: number, city: string,  id: string  }`
- **Response**: The updated contact.

#### Delete a Contact

**DELETE** `contacts/delete/:id`

- **Response**: Status message.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.


