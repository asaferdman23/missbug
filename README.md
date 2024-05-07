# Project Title: Bug Tracker

This project is a simple bug-tracking application built with **Node.js**, **Express.js**, and **React.js**. It allows users to add, view, and delete bugs.

## Technologies Used

- **Node.js**: This is the runtime environment for executing JavaScript code server-side.
- **Express.js**: This is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **React.js**: This is a JavaScript library for building user interfaces.

## Project Structure

The project is divided into two main parts: the server-side code and the client-side code.

### Server-side

The server-side code is located in the `server.js` file. It uses Express.js to set up a simple API with two endpoints:

- **GET /api/bug/save**: This endpoint is used to save a new bug or update an existing one. The bug data is passed as query parameters.
- **GET /api/bug/:bugId**: This endpoint is used to retrieve a specific bug by its ID.

### Client-side

The client-side code is located in the `src` directory and is built with React.js. It consists of several components and services:

- **Components**: These are located in the `src/cmps` and `src/pages` directories. They include `BugList`, `BugPreview`, `UserMsg`, `BugIndex`, `BugDetails`, `Home`, `AboutUs`, etc.
- **Services**: These are located in the `src/services` directory. They include `bug.service.js`, `event-bus.service.js`, `storage.service.js`, `util.service.js`, etc.

The `BugIndex` component is the main component of the application. It uses the `bugService` to interact with the server-side API and manage the application state. It provides functions to add a new bug (`onAddBug`), remove an existing bug (`onRemoveBug`), and load all bugs (`loadBugs`).

## Deployment

This application is deployed on Render. You can access the live demo here: [Live Demo](https://missbug-nec4.onrender.com)
## Getting Started

To get started with this project, clone the repository and install the dependencies with `npm install`. Then, start the server with `node server.js` and the client with `npm start`.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.


