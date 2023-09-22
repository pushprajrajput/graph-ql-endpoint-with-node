# GraphQL Express Server

This repository contains a simple GraphQL server built using Express.js and Express-GraphQL. It provides a basic GraphQL schema with a single query to retrieve a "Hello World" message.

## Getting Started

Follow these steps to get started with this project:

1. **Clone the Repository:** Clone this repository to your local machine.

   ```bash
   git clone https://github.com/pushprajrajput/graph-ql-endpoint-with-node
   ```

2. **Navigate to the Project Directory:** Change your current directory to the project folder.

   ```bash
   cd graph-ql-endpoint-with-node
   ```

3. **Install Dependencies:** Install the required Node.js packages.

   ```bash
   npm install
   ```

4. **Start the Server:** Run the Express server.

   ```bash
   npm start
   ```

   The server will now be running at [http://localhost:4000/graphql](http://localhost:4000/graphql). You can access the GraphQL Playground to interact with the API.

## GraphQL Schema

The GraphQL schema defines a single query:

```graphql
type Query {
  message: String
}
```
