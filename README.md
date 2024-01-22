# Tabapay Assignment

This project consists of a front-end React application (`dynamic-tree-menu`) and a back-end Node.js/Express application (`dynamic-tree-menu-be`). 

## Front-End (dynamic-tree-menu)

The front-end application is built with React and uses Material-UI for components like cards and modals. Axios is used for API calls to interact with the back-end.

### Running the Front-End

To run the front-end application, navigate to the `dynamic-tree-menu` directory and run the following command:

```bash
npm start
```

This will start the React development server, typically on [http://localhost:3000](http://localhost:3000).

## Back-End (dynamic-tree-menu-be)

The back-end application is a Node.js server built with Express. It serves the API endpoints consumed by the front-end.

### Running the Back-End

To run the back-end application, navigate to the `dynamic-tree-menu-be` directory and run the following command:

```bash
node server.js
```

Ensure any required environment variables and configurations are set before starting the server.

## Installation

Before running the applications, you need to install their dependencies. Navigate to each directory (`dynamic-tree-menu` and `dynamic-tree-menu-be`) in your terminal and run:

```bash
npm install
```

This will install all the necessary dependencies as defined in the `package.json` files.

## Technologies Used

- **Front-End:** React, Material-UI, Axios
- **Back-End:** Node.js, Express